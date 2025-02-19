'use client';
import React from 'react';
import Image from 'next/image';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import { articles } from '@/constants/articles';

const Articles = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[20]"
      id="articles"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Article
      </h1>
      <StickyScroll content={articles} />
    </div>
  );
};

export default Articles;
