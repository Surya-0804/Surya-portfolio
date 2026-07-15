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
import { TypewriterEffect } from '../ui/typewriter-effect';
import HeroImage from './HeroImage';

const impactMetrics = [
  { value: '30%+', label: 'Fewer Irrelevant Profiles' },
  { value: '10K+', label: 'Daily Queries Migrated' },
  { value: '40%', label: 'Fewer False Positives' },
  { value: '5+', label: 'NLP Repos Shipped' },
];

const typewriterWords = [
  { text: 'LLM' },
  { text: 'Deployment' },
  { text: 'Pipelines', className: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500' },
];

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      // FIX 1: Added `max-w-[1300px]` and `mx-auto` to stop infinite stretching
      // FIX 2: Changed `justify-center` to `justify-between`
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 mt-40 w-full max-w-[1300px] mx-auto z-[20]"
      id="about-me"
    >
      <div className="w-full lg:w-[60%] flex flex-col gap-5 justify-center text-start">
        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[15px]">
            NLP & AI/LLM Engineer
          </h1>
        </motion.div>

        {/* Name */}
        <motion.div
          variants={slideInFromLeft(0.4)}
          className="flex flex-col gap-2 mt-4"
        >
          <span className="text-gray-400 text-lg">Hi, I&apos;m</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Ram Sai Sri Surya Abothula
          </h1>
        </motion.div>

        {/* Typewriter Role */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          className="text-2xl md:text-3xl font-semibold text-white mt-2"
        >
          <span className="text-gray-300">I build </span>
          <TypewriterEffect
            words={typewriterWords}
            className="inline-flex"
            cursorClassName="bg-purple-500"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-3 max-w-[600px] leading-relaxed"
        >
          AI/LLM Engineer with 1+ year of experience building production-grade
          NLP and ML systems. Currently at{' '}
          <span className="text-purple-400 font-semibold">SproutsAI</span>,
          deploying open-source LLMs on NVIDIA DGX, designing RAG pipelines,
          and optimizing semantic search at scale.
        </motion.p>

        {/* Currently Working Badge */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex items-center gap-2 mb-2"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-400 text-sm font-medium">
            Currently: AI/LLM Engineer @ SproutsAI
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4 mt-2"
        >
          <a
            href="/Surya_Abothula_AI_Engineer_Resume.pdf"
            download
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-semibold flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Resume
          </a>
          <a
            href="#contact-Me"
            className="py-3 px-6 text-center text-white cursor-pointer rounded-lg font-semibold border border-[#7042f88b] hover:bg-[#7042f815] transition-all duration-200 flex items-center gap-2"
          >
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>

        {/* Impact Metrics Strip */}
        <motion.div
          variants={slideInFromLeft(1.2)}
          className="flex flex-wrap gap-6 md:gap-10 mt-8 pt-6 border-t border-[#7042f830]"
        >
          {impactMetrics.map((metric, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {metric.value}
              </span>
              <span className="text-gray-500 text-xs md:text-sm mt-1 max-w-[120px]">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Side Photo */}
      {/* FIX 4: Replaced `w-full h-full` with `lg:w-[40%]` and pushed the image slightly to the right */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-[40%] flex justify-center lg:justify-end items-center hidden lg:flex"
      >
        <HeroImage />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
