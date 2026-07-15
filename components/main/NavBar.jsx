'use client';
import { Socials } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react';

const navLinks = [
  { label: 'About me', href: '#about-me' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Articles', href: '#articles' },
  { label: 'Contact', href: '#contact-Me' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-extrabold ml-[10px] hidden md:block text-white">
            Ram Sai Sri Surya Abothula
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex w-[600px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer hover:text-purple-400 transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop: Social Icons + Resume */}
        <div className="hidden md:flex flex-row gap-4 items-center">
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
                width={24}
                height={24}
                className="cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </a>
          ))}
          <a
            href="/Surya_Abothula_AI_Engineer_Resume.pdf"
            download
            className="ml-2 px-4 py-1.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition-opacity duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[65px] right-0 w-[280px] h-screen bg-[#0a0a1a]/95 backdrop-blur-lg border-l border-[#7042f830] transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-6 mt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-200 text-lg font-medium hover:text-purple-400 transition-colors duration-200 border-b border-[#7042f820] pb-3"
            >
              {link.label}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/Surya_Abothula_AI_Engineer_Resume.pdf"
            download
            className="mt-2 px-6 py-3 text-center text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition-opacity duration-200"
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex flex-row gap-5 mt-4 justify-center">
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
                  width={24}
                  height={24}
                  className="cursor-pointer hover:scale-110 transition-transform duration-200"
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
