import { Mistral } from '@mistralai/mistralai';
import { SYSTEM_PROMPT } from '../../../constants/chatbotKnowledge';

// Initialize the Mistral client securely on the server
const client = new Mistral({ apiKey: process.env.MISTRAL_AI_API_KEY });

// Allow streaming responses up to 30 seconds (Vercel free tier limit)
export const maxDuration = 30;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    // Map the messages array into the exact schema required by Mistral
    // Mistral strictly uses 'system', 'user', and 'assistant' roles
    const mistralMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.map((msg) => ({
        role: msg.role === 'model' || msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.content,
      }))
    ];

    // Start streaming generation via the official client
    const responseStream = await client.chat.stream({
      // model: 'mistral-large-latest',
      model: "codestral-2508",
      messages: mistralMessages,
    });

    // Pipe the async generator into a standard web ReadableStream
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            // Mistral places the chunk text in chunk.data.choices[0].delta.content
            const content = chunk.data?.choices?.[0]?.delta?.content;
            if (content) {
              controller.enqueue(new TextEncoder().encode(content));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache, no-transform',
      },
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(error.message || 'Failed to process chat request.', {
      status: error.status || 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}
