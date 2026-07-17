'use client';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const sendForm = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/api/contactMe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          resolve('Your message has been sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } else {
          reject('Failed to send message. Please try again later.');
        }
      } catch (error) {
        reject('An error occurred. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    });

    toast.promise(sendForm, {
      loading: 'Sending your message...',
      success: (msg) => msg,
      error: (msg) => msg,
    });
  };

  return (
    <div className="w-full rounded-2xl border border-purple-500/20 bg-[#0c0c1e]/40 backdrop-blur-md p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full"
      >
        {/* Title */}
        <div className="flex flex-col gap-1 self-start mb-2">
          <span className="text-[10px] md:text-xs font-semibold font-mono tracking-widest uppercase text-cyan-400">
            SYSTEM::INITIALIZE_CONNECTION
          </span>
          <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight">
            Let&apos;s Build AI Together
          </h2>
        </div>

        {/* Input Name */}
        <div className="flex flex-col w-full gap-2.5">
          <label
            className="text-left text-slate-400 font-semibold text-xs md:text-sm tracking-wide"
            htmlFor="name"
          >
            What should I call you?
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-transparent px-1 py-2.5 outline-none w-full text-white text-sm md:text-base border-b border-white/10 transition-all duration-300 focus:border-cyan-400 placeholder:text-gray-600 font-sans"
            required
          />
        </div>

        {/* Input Email */}
        <div className="flex flex-col w-full gap-2.5">
          <label
            className="text-left text-slate-400 font-semibold text-xs md:text-sm tracking-wide"
            htmlFor="email"
          >
            Where can I reach you?
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-transparent px-1 py-2.5 outline-none w-full text-white text-sm md:text-base border-b border-white/10 transition-all duration-300 focus:border-cyan-400 placeholder:text-gray-600 font-sans"
            required
          />
        </div>

        {/* Input Message */}
        <div className="flex flex-col w-full gap-2.5">
          <label
            className="text-left text-slate-400 font-semibold text-xs md:text-sm tracking-wide"
            htmlFor="message"
          >
            What are we building?
          </label>
          <textarea
            name="message"
            placeholder="Tell me about your LLM, RAG, or backend project..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="bg-transparent px-1 py-2.5 outline-none w-full text-white text-sm md:text-base border-b border-white/10 transition-all duration-300 focus:border-cyan-400 placeholder:text-gray-600 font-sans resize-none"
            rows="3"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading}
          className="group relative flex items-center justify-center gap-2 w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-sm md:text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(147,51,234,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <span>Transmit Message</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
