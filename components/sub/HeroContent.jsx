'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const HeroContent = () => {
  const words = 'Crafting Intelligent  Web & Mobile Apps with AI';
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-ful z-[20]"
      id="about-me"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[15px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px]  w-auto h-auto"
        >
          {/* <TextGenerateEffect words={words} className="text-white text-xl" /> */}
          <span>
            Crafting Intelligent
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {' '}
              Web & Mobile Apps{' '}
            </span>
            with AI
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Developer passionate about Web Apps, Mobile
          Apps, and AI-driven Solutions. From seamless user experiences to
          intelligent and scalable systems, I build impactful digital products.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
