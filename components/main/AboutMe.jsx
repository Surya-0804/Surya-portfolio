'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const techPills = [
  { label: 'Hugging Face', src: '/skills/huggingface.png' },
  { label: 'Qdrant', src: '/skills/qdrant.png' },
  { label: 'FastAPI', src: '/skills/fastapi.png' },
  { label: 'PyTorch', src: '/skills/PyTorch.png' },
  { label: 'LangChain', src: '/skills/langchain.png' },
  { label: 'Docker', src: '/skills/docker.webp' },
  { label: 'Neo4j', src: '/skills/neo4j.png' },
  { label: 'vLLM', src: '/skills/vllm.png' },
];

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      className="relative flex flex-col items-center justify-center py-20 px-6 md:px-20"
      id="about-me"
      ref={ref}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-[40px] font-semibold text-center text-gray-200 mb-4"
      >
        About{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Me
        </span>
      </motion.h2>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl w-full mt-8"
      >
        {/* Bio Paragraph */}
        <p className="text-base md:text-lg text-gray-400 leading-relaxed text-center">
          Building and deploying{' '}
          <span className="text-white font-semibold">
            production-ready AI systems
          </span>{' '}
          across LLMs, retrieval-augmented generation, and{' '}
          <span className="text-purple-400 font-semibold">
            agentic workflows
          </span>
          . Specializing in scalable{' '}
          <span className="text-cyan-400 font-semibold">
            inference infrastructure
          </span>
          , semantic search, and{' '}
          <span className="text-purple-400 font-semibold">
            end-to-end ML pipelines
          </span>
          .
        </p>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {techPills.map((pill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600/30 bg-[#0c0c1e]/40 backdrop-blur-sm text-xs font-medium text-gray-500 hover:border-purple-500/40 hover:text-gray-300 hover:bg-[#0c0c1e]/70 transition-all duration-300 cursor-default"
            >
              <Image
                src={pill.src}
                alt={pill.label}
                width={18}
                height={18}
                className="object-contain"
              />
              <span>{pill.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
