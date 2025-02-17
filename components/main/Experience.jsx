import Image from 'next/image';
import React from 'react';
import { Timeline } from '../ui/timeline';
import { experience } from '@/constants/experience';

const Experience = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="experience"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Experience
      </h1>

      <div className="w-full">
        <Timeline data={experience} />
      </div>
    </div>
  );
};

export default Experience;
