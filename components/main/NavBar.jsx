'use client';
import { Socials } from '@/constants';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownToLine } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about-me' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#articles' },
  { label: 'Contact', href: '#contact-Me' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track window scroll to transition navbar depth
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section using a robust offset-spy (never gets stuck and accounts for rendering sequence)
  useEffect(() => {
    const handleScrollspy = () => {
      const scrollPosition = window.scrollY + 250; // offset triggers slightly before top of screen

      const getAbsoluteTop = (id) => {
        const el = document.getElementById(id);
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY;
      };

      const sections = [
        { id: 'home', offset: 0 },
        { id: 'about-me', offset: getAbsoluteTop('about-me') },
        { id: 'skills', offset: getAbsoluteTop('skills') },
        { id: 'experience', offset: getAbsoluteTop('experience') },
        { id: 'projects', offset: getAbsoluteTop('projects') },
        { id: 'articles', offset: getAbsoluteTop('articles') },
        { id: 'contact-Me', offset: getAbsoluteTop('contact-Me') },
      ];

      let currentSection = 'home';
      for (let i = 0; i < sections.length; i++) {
        if (scrollPosition >= sections[i].offset) {
          currentSection = sections[i].id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScrollspy);
    handleScrollspy(); // Initial trigger on page load
    return () => window.removeEventListener('scroll', handleScrollspy);
  }, []);

  return (
    <div 
      className={`w-full h-[65px] fixed top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0d0a19]/55 backdrop-blur-[20px] border-b border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.25)]' 
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}
    >
      <div className="max-w-[1220px] w-full h-full flex flex-row items-center justify-between mx-auto px-4 md:px-6">
        {/* Logo */}
        <a
          href="#home"
          className="h-auto w-auto flex flex-row items-center group/logo"
        >
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={38}
            height={38}
            className="cursor-pointer hover:animate-slowspin transition-transform duration-500"
          />
          <span className="font-bold ml-4 hidden sm:block text-white tracking-tight text-sm md:text-base font-sans group-hover/logo:text-cyan-400 transition-colors duration-300">
            Surya Abothula
          </span>
        </a>

        {/* Desktop Nav Links (With Framer Motion layoutId slider & premium styling) */}
        <div className="hidden md:flex h-full flex-row items-center justify-center">
          <div className="flex items-center gap-1 border border-white/[0.08] bg-[#030014]/50 backdrop-blur-md px-3 py-1.5 rounded-full">
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative cursor-pointer transition-all duration-300 text-xs md:text-sm font-sans px-3.5 py-1.5 z-10 block transform hover:-translate-y-0.5 ${
                    isActive ? 'text-white font-medium' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBarTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-white/[0.04] border border-purple-500/25 rounded-full shadow-[0_0_12px_rgba(147,51,234,0.12),0_0_20px_rgba(34,211,238,0.06)] -z-10"
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Desktop: Resume CTA (Premium Lift & Shadow Shift) */}
        <div className="hidden md:flex flex-row items-center">
          <a
            href="/Surya_Abothula_AI_Engineer_Resume.pdf"
            download
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs md:text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(147,51,234,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Drawer (Glassmorphic Slide-in) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="md:hidden fixed top-[65px] right-0 w-[280px] h-screen bg-[#06040d]/90 backdrop-blur-xl border-l border-white/[0.08] z-40"
          >
            <div className="flex flex-col p-6 gap-5 mt-4 font-sans">
              {navLinks.map((link) => {
                const linkId = link.href.replace('#', '');
                const isActive = activeSection === linkId;
                
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between text-base font-medium transition-colors duration-200 border-b border-white/5 pb-2 ${
                      isActive ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    )}
                  </a>
                );
              })}

              {/* Resume Button */}
              <a
                href="/Surya_Abothula_AI_Engineer_Resume.pdf"
                download
                className="flex items-center justify-center gap-1.5 mt-2 px-6 py-2.5 text-center text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.15)]"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Social Icons inside Mobile drawer */}
              <div className="flex flex-row gap-5 mt-8 justify-center">
                {Socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={22}
                      height={22}
                      className="cursor-pointer hover:scale-110 transition-transform duration-200 opacity-60 hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
