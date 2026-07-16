import Image from 'next/image';
import React from 'react';
import { RxGithubLogo } from 'react-icons/rx';
import { GoProjectSymlink } from 'react-icons/go';

const ProjectCard = ({ src, title, description, github, link, tags, featured }) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] cursor-pointer group transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(112,66,248,0.15)]">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 right-3 z-30 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-[10px] font-bold uppercase tracking-wider">
          Featured
        </div>
      )}

      {/* Background hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      {/* Project Image with overlay */}
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-[290px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />
      </div>

      {/* Project Details */}
      <div className="relative p-5 z-20">
        <h1 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          {title}
        </h1>
        <p className="mt-2 text-gray-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2.5 py-1 rounded-full border border-[#7042f840] bg-[#7042f810] text-purple-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Icons */}
        <div className="flex items-center gap-5 mt-4 pt-3 border-t border-[#2A0E61]/50">
          {github && github !== '#' && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="cursor-pointer text-gray-400 hover:text-white transition-all transform hover:scale-110 flex items-center gap-1.5"
            >
              <RxGithubLogo className="text-lg" />
              <span className="text-xs">Code</span>
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Project"
              className="cursor-pointer text-gray-400 hover:text-white transition-all transform hover:scale-110 flex items-center gap-1.5"
            >
              <GoProjectSymlink className="text-lg" />
              <span className="text-xs">Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
