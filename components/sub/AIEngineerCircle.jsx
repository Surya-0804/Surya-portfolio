'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const icons = [
  { src: '/skills/Python.png', alt: 'Python', x: -120, y: -100, delay: 0 },
  { src: '/skills/PyTorch.png', alt: 'PyTorch', x: 120, y: -100, delay: 0.5 },
  { src: '/skills/docker.webp', alt: 'Docker', x: -150, y: 80, delay: 1 },
  { src: '/skills/Flask.png', alt: 'FastAPI', x: 150, y: 80, delay: 1.5 },
  { src: '/skills/postger.png', alt: 'PostgreSQL', x: 0, y: -160, delay: 2 },
  { src: '/skills/mongodb.png', alt: 'MongoDB', x: 0, y: 160, delay: 2.5 },
  { src: '/skills/git.png', alt: 'Git', x: -220, y: -20, delay: 3 },
  { src: '/skills/github.png', alt: 'GitHub', x: 220, y: -20, delay: 3.5 },
];

const AIEngineerCircle = () => {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Outer concentric rings */}
      <div className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/10 animate-[spin_120s_linear_infinite]" />
      <div className="absolute w-[280px] h-[280px] rounded-full border border-cyan-500/10 animate-[spin_80s_linear_infinite_reverse]" />
      <div className="absolute w-[160px] h-[160px] rounded-full border border-purple-500/20 animate-[spin_40s_linear_infinite]" />

      {/* Central Glowing AI Node */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 20px rgba(168, 85, 247, 0.4)',
            '0 0 40px rgba(6, 182, 212, 0.6)',
            '0 0 20px rgba(168, 85, 247, 0.4)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center z-10 cursor-pointer"
      >
        <span className="text-4xl">🤖</span>
      </motion.div>

      {/* Floating Skill Icons */}
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [icon.y, icon.y - 12, icon.y],
            x: [icon.x, icon.x + 8, icon.x],
          }}
          transition={{
            opacity: { duration: 0.8, delay: icon.delay },
            scale: { duration: 0.8, delay: icon.delay },
            y: {
              duration: 4 + (index % 3),
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: {
              duration: 5 + (index % 2),
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="absolute p-3 rounded-2xl border border-[#7042f840] bg-[#030014aa] backdrop-blur-md flex items-center justify-center cursor-pointer hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 group z-20"
        >
          <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          {/* Tooltip */}
          <span className="absolute -top-8 bg-[#0a0a1a] text-cyan-400 text-xs px-2 py-1 rounded border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            {icon.alt}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default AIEngineerCircle;
