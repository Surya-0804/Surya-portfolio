'use client';
import React from 'react';
import ContactForm from '../sub/ContactForm';
import { toast } from 'sonner';
import { Github, Linkedin, BookOpen, MapPin, Clock, Calendar, Globe, Phone, Mail } from 'lucide-react';

const ContactMe = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('surya.abothula@gmail.com');
    toast.success('Email copied to clipboard!');
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-24 relative w-full animate-fade-in"
      id="contact-Me"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-16 pb-12">
        Contact Me
      </h1>

      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-8 mt-4">
        {/* Left Column: Restructured Conversational Form */}
        <div className="w-full lg:col-span-7 flex justify-center">
          <ContactForm />
        </div>

        {/* Right Column: Refined Contact Details Panel */}
        <div className="w-full lg:col-span-5 rounded-2xl border border-white/10 bg-[#0c0c1e]/40 backdrop-blur-md p-6 md:p-8 hover:border-purple-500/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full min-h-[460px] group">
          
          {/* Decorative Grid Glow behind */}
          <div className="absolute top-[-30%] right-[-10%] w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-purple-500/10 transition-all duration-500" />
          
          <div className="flex flex-col gap-5 w-full">
            {/* Header Status */}
            <div className="flex flex-col gap-1 pb-4 border-b border-white/10">
              <h2 className="text-white text-lg font-bold tracking-tight">Contact Details</h2>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>Available for opportunities</span>
              </div>
            </div>

            {/* Intro sentence */}
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans">
              Building production AI systems and always happy to discuss AI engineering, LLM infrastructure, and backend platforms.
            </p>

            {/* Logistics Grid Stack */}
            <div className="flex flex-col gap-4 py-2 border-t border-b border-white/10">
              {/* Location */}
              <a
                href="https://maps.google.com/?q=Rajahmundry,+Andhra+Pradesh,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group/item cursor-pointer w-fit"
              >
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-purple-400/80 group-hover/item:border-purple-500/30 group-hover/item:text-purple-300 transition-all duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider font-mono">Location</span>
                  <span className="text-xs md:text-sm text-slate-300 group-hover/item:text-white transition-colors border-b border-dotted border-white/20">Rajahmundry, India</span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+917989503377"
                className="flex items-center gap-3.5 group/item cursor-pointer w-fit"
              >
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-purple-400/80 group-hover/item:border-purple-500/30 group-hover/item:text-purple-300 transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider font-mono">Phone</span>
                  <span className="text-xs md:text-sm text-slate-300 group-hover/item:text-white transition-colors">+91 7989503377</span>
                </div>
              </a>

              {/* Work Preferences */}
              <div className="flex items-center gap-3.5">
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-purple-400/80">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider font-mono">Work Modes</span>
                  <span className="text-xs md:text-sm text-slate-300">Remote / Hybrid / WFO Roles</span>
                </div>
              </div>

              {/* Response SLA */}
              <div className="flex items-center gap-3.5">
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-purple-400/80">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider font-mono">Response SLA</span>
                  <span className="text-xs md:text-sm text-slate-300 font-sans">Replies within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Direct Comms CTA */}
            <div className="w-full">
              <button
                onClick={copyEmail}
                type="button"
                className="flex items-center justify-center gap-2.5 w-full py-2.5 rounded-xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.04] hover:border-purple-500/30 text-slate-300 hover:text-white font-semibold text-xs md:text-sm transition-all duration-300 text-center font-sans focus:outline-none"
              >
                <Mail className="w-4 h-4 text-purple-400/80" />
                Copy Email Address
              </button>
            </div>
          </div>

          {/* Links & Secondary CTA */}
          <div className="flex flex-col gap-4 mt-6 w-full">
            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://github.com/Surya-0804"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] text-slate-400 hover:text-white transition-all duration-350 text-[11px] font-semibold"
              >
                <Github className="w-3.5 h-3.5 text-purple-400/80" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/suryaabothula"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] text-slate-400 hover:text-white transition-all duration-355 text-[11px] font-semibold"
              >
                <Linkedin className="w-3.5 h-3.5 text-purple-400/80" />
                LinkedIn
              </a>
              <a
                href="https://medium.com/@surya.abothula"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] text-slate-400 hover:text-white transition-all duration-355 text-[11px] font-semibold"
              >
                <BookOpen className="w-3.5 h-3.5 text-purple-400/80" />
                Medium
              </a>
            </div>

            {/* Quick Discussion Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs text-slate-400 pt-4 border-t border-white/10">
              <span className="font-mono uppercase tracking-wider text-[10px] text-slate-500">Need a quick call?</span>
              <a
                href="https://calendly.com/surya-abothula"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 hover:underline transition-colors duration-300"
              >
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                Book a 15-minute call &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactMe;
