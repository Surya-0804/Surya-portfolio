'use client';
import {
  AI_ML_skills,
  Backend_skill,
  Frontend_skill,
  Tools_skill,
} from '@/constants';
import React from 'react';
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillText from '../sub/SkillText';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

const skillCategories = [
  { title: 'AI / ML & NLP', data: AI_ML_skills },
  { title: 'Backend & Infrastructure', data: Backend_skill },
  { title: 'Frontend (Supporting)', data: Frontend_skill },
  { title: 'Tools & Platforms', data: Tools_skill },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: 'scale(0.9)' }}
    >
      <SkillText />
      {skillCategories.map((category, catIdx) => (
        <div key={catIdx} className="w-full flex flex-col items-center mt-6">
          <motion.h3
            variants={slideInFromLeft(0.3 + catIdx * 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[18px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3 tracking-wide uppercase"
          >
            {category.title}
          </motion.h3>
          <div className="flex flex-row justify-around flex-wrap mt-2 gap-5 items-center">
            {category.data.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                name={image.skill_name}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/videos/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Skills;
