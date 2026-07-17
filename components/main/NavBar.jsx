'use client';
import { Socials } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about-me' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Writing', href: '#articles' },
  { label: 'Contact', href: '#contact-Me' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 bg-[#030014]/40 backdrop-blur-md z-50 border-b border-white/5 shadow-sm">
      <div className="max-w-[1300px] w-full h-full flex flex-row items-center justify-between mx-auto px-4 md:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={38}
            height={38}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden sm:block text-white tracking-tight text-sm md:text-base">
            Surya Abothula
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex h-full flex-row items-center justify-center">
          <div className="flex items-center gap-6 border border-white/10 bg-[#030014]/60 backdrop-blur-md px-6 py-2.5 rounded-full text-slate-300 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer hover:text-cyan-400 transition-colors duration-200 text-xs md:text-sm font-sans"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop: Resume CTA */}
        <div className="hidden md:flex flex-row items-center">
          <a
            href="/Surya_Abothula_AI_Engineer_Resume.pdf"
            download
            className="px-4 py-1.5 text-xs md:text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.15)] hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
          >
            Resume
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

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-[65px] right-0 w-[280px] h-screen bg-[#030014]/95 backdrop-blur-lg border-l border-white/5 transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-5 mt-4 font-sans">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 text-base font-medium hover:text-cyan-400 transition-colors duration-200 border-b border-white/5 pb-2"
            >
              {link.label}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/Surya_Abothula_AI_Engineer_Resume.pdf"
            download
            className="mt-2 px-6 py-2.5 text-center text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.15)]"
          >
            Download Resume
          </a>

          {/* Social Icons inside Mobile drawer */}
          <div className="flex flex-row gap-5 mt-6 justify-center">
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
                  className="cursor-pointer hover:scale-110 transition-transform duration-200 opacity-70 hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
