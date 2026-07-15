'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
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
    </div>
  );
};

export default HeroImage;
