'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const TechnologyLogo = ({ src, name, width, height, index, appliedIn }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center justify-center p-2 ${isHovered ? 'z-50' : 'z-10'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={imageVariants}
        transition={{ delay: index * 0.05, duration: 0.3 }}
        className="cursor-pointer transition-transform duration-300 hover:scale-115 flex items-center justify-center"
      >
        <Image
          src={src}
          width={width * 0.65}
          height={height * 0.65}
          alt={name}
          className="object-contain"
        />
      </motion.div>

      {/* Floating interactive tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={tooltipVariants}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-full mb-3 z-50 w-56 p-3 rounded-xl border border-white/10 bg-slate-950/90 backdrop-blur-md shadow-xl text-center pointer-events-none"
            style={{
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(112, 66, 248, 0.15)',
            }}
          >
            <div className="text-[13px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              {name}
            </div>
            {appliedIn && (
              <div className="mt-1 text-[11px] text-gray-300 font-normal leading-relaxed">
                {appliedIn}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechnologyLogo;
