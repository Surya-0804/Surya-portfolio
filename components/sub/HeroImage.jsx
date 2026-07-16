'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const orbitIcons = [
  { src: '/skills/Python.png', alt: 'Python', style: { top: '8%', left: '8%' }, delay: 0 },
  { src: '/skills/PyTorch.png', alt: 'PyTorch', style: { top: '8%', right: '8%' }, delay: 1.2 },
  { src: '/skills/huggingface.png', alt: 'HuggingFace', style: { top: '45%', right: '-8%' }, delay: 2.4 },
  { src: '/skills/docker.webp', alt: 'Docker', style: { top: '45%', left: '-8%' }, delay: 3.6 },
  { src: '/skills/fastapi.png', alt: 'FastAPI', style: { bottom: '12%', left: '8%' }, delay: 4.8 },
  { src: '/skills/qdrant.png', alt: 'Qdrant', style: { bottom: '12%', right: '8%' }, delay: 6.0 },
];

const HeroImage = () => {
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center select-none">
      {/* Outer pulsing glow ring */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 blur-2xl z-0"
      />

      {/* Outer spinning border ring */}
      <div className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-purple-500/30 animate-[spin_60s_linear_infinite] z-0" />

      {/* Inner glowing circle container */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 30px rgba(168, 85, 247, 0.2)',
            '0 0 60px rgba(6, 182, 212, 0.4)',
            '0 0 30px rgba(168, 85, 247, 0.2)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-purple-500/30 bg-[#0c0c1e]/60 backdrop-blur-md z-10 flex items-end justify-center"
      >
        {/* Background gradient inside the frame */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-[#030014]/40 to-[#030014]/90 z-0" />

        {/* User Photo */}
        <div className="relative w-full h-[95%] z-10 flex items-end justify-center">
          <Image
            src="/my-photo-without-bg.png"
            alt="Ram Sai Sri Surya Abothula"
            width={400}
            height={400}
            className="object-contain max-h-[110%] w-auto transform translate-y-1 scale-110 origin-bottom hover:scale-115 transition-transform duration-300"
            priority
          />
        </div>
      </motion.div>

      {/* Low-opacity Floating Tech Icons orbiting the portrait */}
      {orbitIcons.map((icon, index) => (
        <motion.div
          key={index}
          style={icon.style}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            y: {
              duration: 4 + (index % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: icon.delay,
            },
            x: {
              duration: 5 + (index % 2),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: icon.delay * 0.5,
            }
          }}
          className="absolute w-10 h-10 rounded-xl border border-purple-500/20 bg-[#0c0c1e]/80 backdrop-blur-md flex items-center justify-center z-20 group cursor-pointer hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300"
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={22}
            height={22}
            className="object-contain grayscale brightness-[2] contrast-50 opacity-30 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroImage;
