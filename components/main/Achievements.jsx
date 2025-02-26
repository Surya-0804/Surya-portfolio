import React from 'react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import achievements from '@/constants/achievements';

const Achievements = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="achievements"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Achievements
      </h1>
      <InfiniteMovingCards
        items={achievements}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards items={achievements} direction="left" speed="slow" />
    </div>
  );
};

export default Achievements;
