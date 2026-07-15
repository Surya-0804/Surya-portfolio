'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import { useInView } from 'react-intersection-observer';

const capabilities = [
  {
    icon: '🧠',
    title: 'LLM Deployment',
    description:
      'Deploy & benchmark open-source LLMs (Phi-4, Qwen2.5-72B, Qwen3.5-35B) on NVIDIA DGX via vLLM + Docker.',
  },
  {
    icon: '🔍',
    title: 'RAG Pipelines',
    description:
      'Design end-to-end retrieval-augmented generation with vector search, embeddings & prompt engineering.',
  },
  {
    icon: '📊',
    title: 'Model Evaluation',
    description:
      'Benchmark LLMs against production use cases — resume parsing, email generation — with quantization (AWQ).',
  },
  {
    icon: '🔗',
    title: 'Semantic Search',
    description:
      'Vector DB migrations (MongoDB → Qdrant), embedding model evaluation & false positive reduction at scale.',
  },
  {
    icon: '🕵️',
    title: 'Agentic Sourcing',
    description:
      'Multi-source web retrieval (Tavily, Exa AI, DuckDuckGo) & GitHub enrichment pipelines for candidate discovery.',
  },
  {
    icon: '🌐',
    title: 'Full Stack Apps',
    description:
      'React, Next.js, FastAPI — building end-to-end web applications with modern frontend & scalable backends.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const WhatIBuild = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-6 md:px-20 relative"
      id="what-i-build"
      ref={ref}
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[40px] font-semibold text-center text-gray-200 mb-4"
      >
        What I{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Build
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-center max-w-[600px] mb-12 text-lg"
      >
        Production-grade AI systems, from LLM infrastructure to intelligent web applications
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {capabilities.map((cap, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="group relative overflow-hidden rounded-xl border border-[#2A0E61] bg-[#0f0f23]/80 backdrop-blur-sm p-6 cursor-pointer transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(112,66,248,0.15)]"
          >
            {/* Gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="text-3xl mb-4">{cap.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                {cap.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cap.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatIBuild;
