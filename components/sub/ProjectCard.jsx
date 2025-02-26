import Image from 'next/image';
import React from 'react';
import { RxGithubLogo } from 'react-icons/rx';
import { GoProjectSymlink } from 'react-icons/go';

const ProjectCard = ({ src, title, description, github, link }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer">
      {/* Background layer to avoid overlays blocking clicks */}
      <div className="absolute inset-0 pointer-events-none"></div>

      {/* Project Image */}
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-[290px] object-cover object-center"
      />

      {/* Project Details */}
      <div className="relative p-4 z-20">
        {' '}
        {/* Ensures it's on top */}
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        {/* Icons */}
        <div className="flex items-center gap-5 mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="cursor-pointer hover:text-gray-400 transition-transform transform hover:scale-110"
            >
              <RxGithubLogo className="text-2xl text-white" />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Project"
              className="cursor-pointer hover:text-gray-400 transition-transform transform hover:scale-110"
            >
              <GoProjectSymlink className="text-2xl text-white" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
