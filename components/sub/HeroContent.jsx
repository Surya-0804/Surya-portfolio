'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import HeroImage from './HeroImage';


const typewriterPhrases = [
  "AI/LLM Engineer",
  "Machine Learning Engineer",
  "AI Systems Architect",
  "NLP Specialist"
];



const HeroContent = () => {
  const [phraseIdx, setPhraseIdx] = React.useState(0);
  const [textVal, setTextVal] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer;
    const phrase = typewriterPhrases[phraseIdx];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && textVal === phrase) {
      timer = setTimeout(() => setIsDeleting(true), 2500); // Wait longer at full phrase
    } else if (isDeleting && textVal === '') {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % typewriterPhrases.length);
    } else {
      timer = setTimeout(() => {
        setTextVal(
          isDeleting
            ? phrase.substring(0, textVal.length - 1)
            : phrase.substring(0, textVal.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [textVal, isDeleting, phraseIdx]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 min-h-screen w-full max-w-[1300px] mx-auto z-[20] pt-28 pb-10"
      id="home"
    >
      <div className="w-full lg:w-[60%] flex flex-col gap-5 justify-center text-start">
        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[15px]">
            Available for opportunities
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
          className="text-2xl md:text-3xl font-semibold mt-2 min-h-[40px] flex items-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold">
            {textVal}
          </span>
          <span className="inline-block w-[3px] h-8 bg-purple-500 ml-1 animate-[pulse_1s_infinite]" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex flex-row gap-4 mt-10"
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
      </div>

      {/* Right Side Photo */}
      {/* FIX 4: Replaced `w-full h-full` with `lg:w-[40%]` and pushed the image slightly to the right */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-[40%] flex justify-center lg:justify-end items-center hidden lg:flex"
      >
        <HeroImage />
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-gray-500 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
