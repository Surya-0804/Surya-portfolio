'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const metrics = [
  { target: 30, suffix: '%+', label: 'Fewer Irrelevant Profiles' },
  { target: 10, suffix: 'K+', label: 'Daily Queries Migrated' },
  { target: 40, suffix: '%', label: 'Fewer False Positives' },
  { target: 5, suffix: '+', label: 'NLP Repos Shipped' },
];

const AnimatedCounter = ({ target, suffix, duration = 2000, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const ImpactMetrics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="w-full py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-center text-[32px] md:text-[40px] font-semibold text-gray-200 mb-12">
          Impact{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            by the Numbers
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-[#2A0E61]/50 bg-[#0f0f23]/40 backdrop-blur-sm hover:border-purple-500/30 transition-colors duration-300"
            >
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3">
                <AnimatedCounter
                  target={metric.target}
                  suffix={metric.suffix}
                  inView={inView}
                />
              </span>
              <span className="text-gray-400 text-sm md:text-base">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ImpactMetrics;
