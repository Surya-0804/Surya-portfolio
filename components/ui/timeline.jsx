'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans px-4 md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-5xl mx-auto pb-0">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative pl-10 md:pl-20 pt-2 ${
              index === data.length - 1 ? 'pb-4' : 'pb-16'
            }`}
          >
            {/* Timeline Circle Node */}
            <div className="absolute left-[12px] md:left-[32px] top-6 z-40">
              <div className="h-4 w-4 rounded-full bg-[#030014]/95 flex items-center justify-center border border-purple-500/40 shadow-[0_0_10px_rgba(112,66,248,0.3)]">
                <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
              </div>
            </div>

            <div className="w-full">
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: Math.max(0, height - 150) + 'px',
          }}
          className="absolute md:left-[40px] left-[20px] top-6 overflow-hidden w-[2px] bg-white/5"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-cyan-400 via-purple-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
