'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { articles } from '@/constants/articles';

// Custom Visual Components
const NeuralNetworkVisual = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black/40 rounded-xl border border-white/5 p-4 overflow-hidden group">
      <svg className="w-full h-44" viewBox="0 0 300 200">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Input Layer to Hidden Layer connecting lines */}
        {[
          { from: [40, 50], to: [150, 30] },
          { from: [40, 50], to: [150, 80] },
          { from: [40, 50], to: [150, 130] },
          { from: [40, 100], to: [150, 30] },
          { from: [40, 100], to: [150, 80] },
          { from: [40, 100], to: [150, 130] },
          { from: [40, 100], to: [150, 170] },
          { from: [40, 150], to: [150, 80] },
          { from: [40, 150], to: [150, 130] },
          { from: [40, 150], to: [150, 170] },
        ].map((line, i) => (
          <line
            key={`line1-${i}`}
            x1={line.from[0]}
            y1={line.from[1]}
            x2={line.to[0]}
            y2={line.to[1]}
            stroke="#818cf8"
            strokeWidth="1"
            strokeOpacity="0.2"
            className="group-hover:stroke-purple-500/40 transition-colors duration-500"
          />
        ))}

        {/* Hidden Layer to Output Layer connecting lines */}
        {[
          { from: [150, 30], to: [260, 70] },
          { from: [150, 30], to: [260, 130] },
          { from: [150, 80], to: [260, 70] },
          { from: [150, 80], to: [260, 130] },
          { from: [150, 130], to: [260, 70] },
          { from: [150, 130], to: [260, 130] },
          { from: [150, 170], to: [260, 130] },
        ].map((line, i) => (
          <line
            key={`line2-${i}`}
            x1={line.from[0]}
            y1={line.from[1]}
            x2={line.to[0]}
            y2={line.to[1]}
            stroke="#22d3ee"
            strokeWidth="1"
            strokeOpacity="0.2"
            className="group-hover:stroke-cyan-500/40 transition-colors duration-500"
          />
        ))}

        {/* Glowing pulse nodes behind hidden layer */}
        <circle cx="150" cy="80" r="14" fill="url(#glow)" className="animate-pulse" />
        <circle cx="150" cy="130" r="14" fill="url(#glow)" className="animate-pulse [animation-delay:0.8s]" />

        {/* Input Layer Nodes */}
        {[50, 100, 150].map((y, i) => (
          <circle key={`input-${i}`} cx="40" cy={y} r="5.5" fill="#818cf8" />
        ))}

        {/* Hidden Layer Nodes */}
        {[30, 80, 130, 170].map((y, i) => (
          <circle
            key={`hidden-${i}`}
            cx="150"
            cy={y}
            r="6.5"
            fill="#a855f7"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}

        {/* Output Layer Nodes */}
        {[70, 130].map((y, i) => (
          <circle key={`output-${i}`} cx="260" cy={y} r="6.5" fill="#22d3ee" />
        ))}
      </svg>
      <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-3 group-hover:text-purple-400 transition-colors duration-500 font-semibold">
        Neural Architecture Log #01
      </span>
    </div>
  );
};

const RegressionVisual = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black/40 rounded-xl border border-white/5 p-4 overflow-hidden group">
      <svg className="w-full h-44" viewBox="0 0 300 200">
        <defs>
          <linearGradient id="boundary-glow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>

        {/* Plot Axes */}
        <line x1="30" y1="170" x2="270" y2="170" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <line x1="30" y1="30" x2="30" y2="170" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

        {/* Scattered Class 0 Nodes (Purple) */}
        {[
          [60, 130], [80, 150], [70, 110], [100, 120], [120, 140], [90, 95], [140, 115]
        ].map((dot, i) => (
          <circle
            key={`class0-${i}`}
            cx={dot[0]}
            cy={dot[1]}
            r="4.5"
            fill="#a855f7"
            fillOpacity="0.75"
            className="group-hover:scale-110 transition-transform duration-500"
          />
        ))}

        {/* Scattered Class 1 Nodes (Cyan) */}
        {[
          [170, 60], [190, 80], [210, 45], [230, 85], [200, 105], [240, 55], [180, 35]
        ].map((dot, i) => (
          <circle
            key={`class1-${i}`}
            cx={dot[0]}
            cy={dot[1]}
            r="4.5"
            fill="#22d3ee"
            fillOpacity="0.75"
            className="group-hover:scale-110 transition-transform duration-500"
          />
        ))}

        {/* Classifier Decision boundary line */}
        <line
          x1="30"
          y1="150"
          x2="260"
          y2="45"
          stroke="url(#boundary-glow)"
          strokeWidth="3"
          className="animate-pulse"
        />
      </svg>
      <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-3 group-hover:text-cyan-400 transition-colors duration-500 font-semibold">
        Decision Boundary Log #02
      </span>
    </div>
  );
};

const LossFunctionVisual = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black/40 rounded-xl border border-white/5 p-4 overflow-hidden group">
      <div className="relative w-full h-36 rounded-lg overflow-hidden border border-white/10 bg-[#070715] flex items-center justify-center">
        <Image
          src="/articles/DLSeries3.png"
          width={220}
          height={140}
          className="h-auto w-[90%] object-contain rounded transition-transform duration-500 group-hover:scale-105"
          alt="Loss Function Visual"
        />
      </div>
      <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-3 group-hover:text-purple-400 transition-colors duration-500 font-semibold font-mono">
        Optimization Landscape Log #03
      </span>
    </div>
  );
};

// Dynamic visual component mapping
const StickyVisual = ({ activeArticle }) => {
  if (!activeArticle) return null;

  switch (activeArticle.visualType) {
    case 'network':
      return <NeuralNetworkVisual />;
    case 'regression':
      return <RegressionVisual />;
    case 'loss':
      return <LossFunctionVisual />;
    case 'image':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black/40 rounded-xl border border-white/5 p-4 overflow-hidden group">
          <div className="relative w-full h-36 rounded-lg overflow-hidden border border-white/10 bg-[#070715] flex items-center justify-center">
            <Image
              src={activeArticle.imageSrc || "/articles/DLSeries3.png"}
              width={220}
              height={140}
              className="h-auto w-[90%] object-contain rounded transition-transform duration-500 group-hover:scale-105"
              alt={activeArticle.title}
            />
          </div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-3 group-hover:text-purple-400 transition-colors duration-500 font-semibold font-mono text-center px-2 line-clamp-1">
            {activeArticle.title}
          </span>
        </div>
      );
    default:
      // High-end generic cosmic code card fallback
      return (
        <div className="w-full h-full flex flex-col items-between justify-between bg-[#030014]/60 rounded-xl border border-white/5 p-5 overflow-hidden group relative">
          <div className="absolute -inset-10 bg-gradient-to-tr from-purple-500/10 via-cyan-500/5 to-transparent rounded-xl opacity-40 blur-lg group-hover:opacity-70 transition-opacity duration-700" />
          
          <div className="relative z-10 w-full flex justify-between items-center pb-2 border-b border-white/5">
            <span className="text-[10px] font-mono text-purple-400/80 font-bold uppercase tracking-wider">
              LOG // {activeArticle.id}
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-slate-400 font-medium">
              {activeArticle.readTime}
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center py-4 my-auto">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <h5 className="text-white text-xs md:text-sm font-bold line-clamp-2 leading-relaxed">
              {activeArticle.title}
            </h5>
          </div>

          <div className="relative z-10 w-full flex flex-wrap gap-1.5 justify-center pt-2 border-t border-white/5">
            {activeArticle.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      );
  }
};

// Row wrapper with in-view detection
const ArticleRow = ({ article, index, setActiveIndex }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: '-5% 0px -25% 0px',
  });

  useEffect(() => {
    if (inView) {
      setActiveIndex(index);
    }
  }, [inView, index, setActiveIndex]);

  return (
    <div
      ref={ref}
      className="py-12 first:pt-4 last:pb-24 border-b border-white/5 last:border-b-0 flex flex-col gap-4"
    >
      {/* Title ID & Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3 text-xs font-semibold tracking-wider uppercase text-purple-400 font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>LOG #{article.id} • {article.date}</span>
        </div>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl md:text-2xl font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-300"
        >
          {article.title}
        </a>
      </div>

      {/* Meta tags */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-slate-300 font-medium font-mono">
          ⏱ {article.readTime}
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-slate-300 font-medium flex items-center gap-1.5 font-mono">
          <span className={`w-1.5 h-1.5 rounded-full ${article.difficultyColor === 'emerald' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
          {article.difficulty}
        </span>
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        {article.description}
      </p>

      {/* Mobile Inline Graphic */}
      <div className="block lg:hidden my-3 w-full max-w-sm mx-auto">
        <StickyVisual activeArticle={article} />
      </div>

      {/* Tech Used & CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Uses:</span>
          {article.uses.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-slate-400 font-semibold font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 self-start sm:self-auto"
        >
          Read on Medium
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

const Articles = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="flex flex-col items-center justify-center py-24 z-[20] relative w-full"
      id="articles"
    >
      {/* Title */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-16 pb-4">
        Technical Writing
      </h1>
      <p className="text-slate-400 text-sm md:text-base text-center max-w-md mb-8">
        Sharing practical AI engineering and Deep Learning insights.
      </p>

      {/* Series Progress Bar */}
      <div className="w-full max-w-lg mx-auto mb-12 p-4 rounded-xl border border-white/10 bg-[#0c0c1e]/40 backdrop-blur-md flex flex-col items-center gap-2.5 px-6">
        <div className="flex justify-between w-full text-[10px] md:text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono">
          <span>Technical Journal</span>
          <span className="text-cyan-400">
            {articles.length} Logs • {articles.reduce((acc, art) => acc + (parseInt(art.readTime) || 0), 0)} Mins Read
          </span>
        </div>
        <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-500 rounded-full" />
      </div>

      {/* Two Column Layout container */}
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl mx-auto px-4 md:px-8 mt-4">
        {/* Left Column: Natural page-scroll list */}
        <div className="flex-1 flex flex-col">
          {articles.map((article, index) => (
            <ArticleRow
              key={article.id}
              article={article}
              index={index}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

        {/* Right Column: Sticky Graphics display container */}
        <div className="hidden lg:flex w-[350px] h-[320px] sticky top-[28vh] self-start rounded-2xl border border-white/10 bg-[#0c0c1e]/65 backdrop-blur-md overflow-hidden p-5 flex-shrink-0">
          <div className="relative w-full h-full">
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="absolute inset-0 transition-all duration-500 ease-in-out"
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                  transform: activeIndex === index ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(10px)',
                  pointerEvents: activeIndex === index ? 'auto' : 'none'
                }}
              >
                <StickyVisual activeArticle={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
