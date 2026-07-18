'use client';
import {
  AI_Domains,
  AI_Frameworks,
  Infrastructure_skills,
  Frontend_skill,
  Workflow_skills,
  Models_worked_with,
  Capabilities,
} from '@/constants';
import React from 'react';
import TechnologyLogo from '../sub/TechnologyLogo';
import SkillPill from '../sub/SkillPill';
import CapabilityItem from '../sub/CapabilityItem';
import SkillText from '../sub/SkillText';

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center py-16 px-4 md:px-12 lg:px-20 z-30 w-full overflow-hidden"
    >
      <SkillText />

      {/* Bento Grid Container */}
      <div className="w-full max-w-[1300px] mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-30 items-start">
        
        {/* CARD 1: Core Technologies (Logos) - Spans 1 column on 50/50 desktop layout */}
        <div className="lg:col-span-1 bento-card flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-white mb-6 tracking-wide">
              Core Tech Stack &amp; Tools
            </h2>
            
            {/* AI Frameworks */}
            <div>
              <div className="bento-subheader">AI Frameworks</div>
              <div className="flex flex-row justify-start flex-wrap gap-3 md:gap-4 items-center mb-4">
                {AI_Frameworks.map((image, index) => (
                  <TechnologyLogo
                    key={image.skill_name}
                    src={image.Image}
                    name={image.skill_name}
                    width={image.width}
                    height={image.height}
                    appliedIn={image.appliedIn}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Infrastructure */}
            <div>
              <div className="bento-subheader">Infrastructure &amp; Search</div>
              <div className="flex flex-row justify-start flex-wrap gap-3 md:gap-4 items-center mb-4">
                {Infrastructure_skills.map((image, index) => (
                  <TechnologyLogo
                    key={image.skill_name}
                    src={image.Image}
                    name={image.skill_name}
                    width={image.width}
                    height={image.height}
                    appliedIn={image.appliedIn}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="mb-4">
              <div className="bento-subheader">Frontend Supporting</div>
              <div className="flex flex-row justify-start flex-wrap gap-3 md:gap-4 items-center">
                {Frontend_skill.map((image, index) => (
                  <TechnologyLogo
                    key={image.skill_name}
                    src={image.Image}
                    name={image.skill_name}
                    width={image.width}
                    height={image.height}
                    appliedIn={image.appliedIn}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Workflow & Dev Tools */}
            <div>
              <div className="bento-subheader">Workflow &amp; Dev Tools</div>
              <div className="flex flex-row justify-start flex-wrap gap-3 md:gap-4 items-center">
                {Workflow_skills.map((image, index) => (
                  <TechnologyLogo
                    key={image.skill_name}
                    src={image.Image}
                    name={image.skill_name}
                    width={image.width}
                    height={image.height}
                    appliedIn={image.appliedIn}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-[11px] text-gray-500 italic mt-4 border-t border-white/5 pt-3">
            💡 Hover over any technology to see how it was applied in projects.
          </div>
        </div>

        {/* Column containing Card 2 & Card 3 */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          
          {/* CARD 2: AI Domains */}
          <div className="bento-card">
            <h2 className="text-lg font-bold text-white mb-4 tracking-wide">
              AI &amp; Engineering Domains
            </h2>
            <div className="flex flex-row justify-start flex-wrap gap-2">
              {AI_Domains.map((domain, index) => (
                <SkillPill
                  key={domain}
                  label={domain}
                  index={index}
                  variant="domain"
                />
              ))}
            </div>
          </div>

          {/* CARD 3: Models Worked With */}
          <div className="bento-card">
            <h2 className="text-lg font-bold text-white mb-4 tracking-wide">
              Models Worked With
            </h2>
            <div className="flex flex-row justify-start flex-wrap gap-2">
              {Models_worked_with.map((model, index) => (
                <SkillPill
                  key={model}
                  label={model}
                  index={index}
                  variant="model"
                />
              ))}
            </div>
          </div>
        </div>

        {/* CARD 4: Capabilities - Full width row spanning all columns */}
        <div className="lg:col-span-2 bento-card">
          <h2 className="text-xl font-bold text-white mb-4 tracking-wide text-center lg:text-left">
            Applied Capabilities &amp; Engineering Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {Capabilities.map((cap, index) => (
              <CapabilityItem key={cap} label={cap} index={index} />
            ))}
          </div>
        </div>

      </div>

      {/* Background video overlay */}
      <div className="w-full h-full absolute inset-0 z-[-10] pointer-events-none">
        <div className="w-full h-full opacity-30 flex items-center justify-center bg-cover">
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
