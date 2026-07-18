'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Loader2, Maximize2, Minimize2 } from 'lucide-react';

import ReactMarkdown from 'react-markdown';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [localInput, setLocalInput] = useState('');
  
  // Custom state for raw streaming
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const messagesEndRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!localInput.trim() || isLoading) return;

    const userMessage = { role: 'user', content: localInput, id: Date.now().toString() };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setLocalInput('');
    setIsLoading(true);
    setError(null);

    const assistantId = (Date.now() + 1).toString();
    // Add empty assistant message placeholder
    setMessages((prev) => [...prev, { role: 'assistant', content: '', id: assistantId }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to fetch response from API');
      }
      
      if (!response.body) throw new Error('ReadableStream not supported by the browser.');

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          setMessages((prev) => 
            prev.map((msg) => 
              msg.id === assistantId ? { ...msg, content: msg.content + chunk } : msg
            )
          );
        }
      }
    } catch (err) {
      console.error('Chat stream error:', err);
      setError(err);
      // Remove the empty assistant placeholder if it completely failed
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last && last.id === assistantId && last.content === '') {
          return prev.slice(0, -1);
        }
        return prev;
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`mb-4 flex flex-col rounded-2xl overflow-hidden border border-purple-500/30 bg-[#030014]/80 backdrop-blur-xl shadow-2xl shadow-purple-900/20 ${
              isExpanded 
                ? 'w-[90vw] md:w-[80vw] h-[85vh] max-h-[90vh]'
                : 'w-[350px] sm:w-[400px] h-[500px] max-h-[80vh]'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-purple-500/20 bg-purple-500/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-semibold text-slate-200 text-sm">Surya&apos;s AI Assistant</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                  title={isExpanded ? "Collapse" : "Expand"}
                >
                  {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                  title="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-3">
                  <Bot size={40} className="text-purple-400/50" />
                  <p className="text-sm text-center px-4">
                    Hi! I&apos;m Surya&apos;s AI assistant. Ask me anything about his experience, projects, or how to contact him.
                  </p>
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${m.role === 'user' ? 'bg-purple-600' : 'bg-[#151030] border border-purple-500/30'}`}>
                    {m.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-purple-400" />}
                  </div>
                  <div
                    className={`max-w-[85%] overflow-hidden break-words rounded-2xl px-4 py-2 text-sm ${
                      m.role === 'user'
                        ? 'bg-purple-600 text-white rounded-tr-none'
                        : 'bg-[#151030] border border-purple-500/20 text-slate-200 rounded-tl-none prose prose-invert prose-p:leading-relaxed prose-pre:bg-[#0c0c1e] prose-pre:border prose-pre:border-white/10 prose-a:break-all'
                    }`}
                  >
                    {m.role === 'user' ? (
                      <div className="whitespace-pre-wrap">{m.content}</div>
                    ) : m.content === '' && isLoading ? (
                      <div className="flex items-center gap-2 text-slate-300 py-1">
                        <Loader2 size={14} className="animate-spin text-purple-400" />
                        <span>Thinking...</span>
                      </div>
                    ) : (
                      <ReactMarkdown
                        components={{
                          a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline" />,
                          p: ({node, ...props}) => <p {...props} className="mb-2 last:mb-0" />,
                          ul: ({node, ...props}) => <ul {...props} className="list-disc pl-4 mb-2" />,
                          li: ({node, ...props}) => <li {...props} className="mb-1" />
                        }}
                      >
                        {m.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}

              
              {error && (
                <div className="flex gap-3 flex-row mt-2">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-2xl px-4 py-3 text-red-400 text-sm w-full">
                    <span className="font-semibold block mb-1">Error communicating with AI:</span>
                    {error.message || "Please check if your API key is correctly configured in .env.local"}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleFormSubmit} className="p-3 border-t border-purple-500/20 bg-[#0a0518]">
              <div className="relative flex items-center">
                <input
                  value={localInput}
                  onChange={(e) => setLocalInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-[#151030] border border-purple-500/30 rounded-full py-2.5 pl-4 pr-12 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !localInput.trim()}
                  className="absolute right-1.5 p-1.5 bg-purple-600 rounded-full text-white hover:bg-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-900/50 text-white transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
