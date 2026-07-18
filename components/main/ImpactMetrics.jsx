'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const metrics = [
  {
    target: 30,
    suffix: '%+',
    label: 'Fewer Irrelevant Profiles',
    description: 'Developed candidate parsing logic to screen out unqualified resumes automatically.',
  },
  {
    target: 10,
    suffix: 'K+',
    label: 'Daily Queries Migrated',
    description: 'Architected and migrated search indexing from MongoDB to Qdrant vector database.',
  },
  {
    target: 40,
    suffix: '%',
    label: 'Fewer False Positives',
    description: 'Evaluated embedding models and tuned retrieval thresholds to increase RAG precision.',
  },
  {
    target: 5,
    suffix: '',
    label: 'NLP Repos Migrated',
    description: 'Successfully migrated 5 NLP repositories to Qdrant vector database with zero downtime.',
  },
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
    <div ref={ref} className="w-full py-16 px-4 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1300px] mx-auto"
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
              className="group relative flex flex-col items-center justify-center text-center p-6 h-[200px] rounded-xl border border-white/5 bg-[#0c0c1e]/50 backdrop-blur-md shadow-md hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(112,66,248,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Main Content (Counter & Label) */}
              <div className="flex flex-col items-center justify-center transition-all duration-300 transform group-hover:-translate-y-5">
                <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3">
                  <AnimatedCounter
                    target={metric.target}
                    suffix={metric.suffix}
                    inView={inView}
                  />
                </span>
                <span className="text-slate-400 text-sm md:text-base font-normal transition-all duration-300 group-hover:text-purple-300 px-2">
                  {metric.label}
                </span>
              </div>

              {/* Hover Explanation overlay */}
              <div className="absolute bottom-5 left-4 right-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ImpactMetrics;
