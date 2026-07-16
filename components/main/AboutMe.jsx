'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Cpu, Workflow, Gauge, Binary, Bot, Layers, GraduationCap, School, BookOpen } from 'lucide-react';

/* ── Tech Stack Pills ── */
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

/* ── Education Data ── */
const education = [
  {
    icon: GraduationCap,
    degree: 'B.Tech in CSE (Honors in AI & ML)',
    school: 'Vishnu Institute of Technology, Bhimavaram',
    score: '9.11 CGPA',
    year: '2022 – 2026',
  },
  {
    icon: School,
    degree: 'Intermediate – MPC',
    school: 'Sasi Junior College, Rajahmundry',
    score: '93.8%',
    year: '2020 – 2022',
  },
  {
    icon: BookOpen,
    degree: 'SSC',
    school: 'Ravindra Bharathi High School, Rajahmundry',
    score: '93.7%',
    year: '2019 – 2020',
  },
];

/* ── Capability Cards ── */
const capabilities = [
  {
    icon: Cpu,
    title: 'LLM Deployment',
    description:
      'Deploy & benchmark open-source LLMs (Phi-4, Qwen2.5-72B, Qwen3.5-35B) on NVIDIA DGX via vLLM + Docker.',
  },
  {
    icon: Workflow,
    title: 'RAG Pipelines',
    description:
      'Design end-to-end retrieval-augmented generation with vector search, embeddings & prompt engineering.',
  },
  {
    icon: Gauge,
    title: 'Model Evaluation',
    description:
      'Benchmark LLMs against production use cases — resume parsing, email generation — with quantization (AWQ).',
  },
  {
    icon: Binary,
    title: 'Semantic Search',
    description:
      'Vector DB migrations (MongoDB → Qdrant), embedding model evaluation & false positive reduction at scale.',
  },
  {
    icon: Bot,
    title: 'Agentic Sourcing',
    description:
      'Multi-source web retrieval (Tavily, Exa AI, DuckDuckGo) & GitHub enrichment pipelines for candidate discovery.',
  },
  {
    icon: Layers,
    title: 'Full Stack Apps',
    description:
      'React, Next.js, FastAPI — building end-to-end web applications with modern frontend & scalable backends.',
  },
];

/* ── Animation Variants ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: 'easeOut' },
  },
});

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

/* ── Glassmorphic Card Wrapper ── */
const BentoCard = ({ children, className = '', delay = 0, inView }) => (
  <motion.div
    variants={fadeUp(delay)}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    className={`relative overflow-hidden rounded-2xl border border-[#2A0E61]/60 bg-[#0c0c1e]/50 backdrop-blur-md p-6 md:p-8 transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(112,66,248,0.08)] ${className}`}
  >
    {/* Subtle gradient shimmer */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] to-cyan-500/[0.03]" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

/* ── Main Component ── */
const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section
      className="relative flex flex-col items-center justify-center py-20 px-4 md:px-12 lg:px-20"
      id="about-me"
      ref={ref}
    >
      {/* Section Title */}
      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-[40px] font-semibold text-center text-gray-200 mb-14"
      >
        About{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Me
        </span>
      </motion.h2>

      {/* ── Bento Grid ── */}
      <div className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-5 gap-5 mx-auto">

        {/* ─── Top Left: Narrative Bio (3 cols) ─── */}
        <BentoCard className="lg:col-span-3" delay={0.1} inView={inView}>
          <div className="flex flex-col gap-4">
            <p className="text-[15px] leading-8 text-gray-400">
              I&apos;m an <span className="text-white font-semibold">AI/LLM Engineer</span> building production-grade NLP systems at{' '}
              <span className="text-purple-400 font-semibold">SproutsAI</span>, having recently completed my B.Tech in CSE (Honors in AI &amp; ML) from Vishnu Institute of Technology.
            </p>
            <p className="text-[15px] leading-8 text-gray-400">
              My engineering focus is bridging the gap between open-source models and live environments — through agentic workflows, high-performance RAG pipelines, and scalable inference infrastructure.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {techPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-700/40 bg-white/[0.03] text-[11px] font-medium text-gray-500 hover:border-purple-500/40 hover:text-gray-300 transition-all duration-300"
                >
                  <Image
                    src={pill.src}
                    alt={pill.label}
                    width={14}
                    height={14}
                    className="object-contain"
                  />
                  <span>{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* ─── Top Right: Education (2 cols) ─── */}
        <BentoCard className="lg:col-span-2" delay={0.2} inView={inView}>
          <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            Education
          </h3>
          <div className="flex flex-col">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`flex items-start justify-between gap-4 ${idx < education.length - 1 ? 'pb-5 mb-5 border-b border-gray-700/20' : ''}`}
              >
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-white text-sm font-semibold leading-snug">{edu.degree}</h4>
                  <p className="text-gray-500 text-[11px] leading-snug">{edu.school}</p>
                </div>
                <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
                  <span className="text-cyan-400 text-sm font-bold">{edu.score}</span>
                  <span className="text-gray-600 text-[11px]">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* ─── Bottom Row: What I Build (full width) ─── */}
        <div className="lg:col-span-5">
          <motion.h3
            variants={fadeUp(0.35)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-2xl font-semibold text-gray-200 mb-5 text-center"
          >
            What I{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Build
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="group relative overflow-hidden rounded-xl border border-[#2A0E61]/50 bg-[#0c0c1e]/40 backdrop-blur-sm p-5 cursor-default transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(112,66,248,0.1)]"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="p-2.5 w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 group-hover:text-cyan-400 group-hover:border-cyan-400/40 transition-all duration-300 flex items-center justify-center mb-3">
                    <cap.icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h4 className="text-white text-[15px] font-semibold mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {cap.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
