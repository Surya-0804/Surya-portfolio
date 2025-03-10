import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
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
            Surya Abothula
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#experience" className="cursor-pointer">
              Experience
            </a>
            <a href="#articles" className="cursor-pointer">
              Articles
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="hidden flex-row gap-5 md:flex">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link} // Ensure this exists in your Socials array
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
  );
};

export default NavBar;
