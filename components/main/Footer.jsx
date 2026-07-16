import React from 'react';
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from 'react-icons/rx';

const footerData = [
  {
    title: 'Community',
    links: [
      {
        name: 'Github',
        icon: <RxGithubLogo />,
        url: 'https://github.com/Surya-0804',
      },
      {
        name: 'LinkedIn',
        icon: <RxLinkedinLogo />,
        url: 'https://www.linkedin.com/in/suryaabothula',
      },
    ],
  },
  {
    title: 'Social Media',
    links: [
      {
        name: 'Instagram',
        icon: <RxInstagramLogo />,
        url: 'https://www.instagram.com/surya_0804/',
      },
      {
        name: 'Twitter',
        icon: <RxTwitterLogo />,
        url: 'https://x.com/_Surya_21_',
      },
    ],
  },
  {
    title: 'About',
    links: [
      {
        name: 'surya.abothula@gmail.com',
        icon: null,
        url: 'mailto:surya.abothula@gmail.com',
      },
      {
        name: 'Download Resume',
        icon: null,
        url: '/Surya_Abothula_AI_Engineer_Resume.pdf',
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#1A1A2E] text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {footerData.map((section, index) => (
            <div
              key={index}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <div className="font-bold text-[16px] mb-[10px]">
                {section.title}
              </div>
              {section.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className="flex flex-row items-center my-[10px] cursor-pointer hover:text-gray-400 transition-colors duration-200 z-[20]"
                  target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon && (
                    <span className="text-[18px]">{link.icon}</span>
                  )}
                  <span className={`text-[15px] ${link.icon ? 'ml-2' : ''}`}>
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center mt-[20px]">
          &copy; Ram Sai Sri Surya Abothula 2025–2026. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
