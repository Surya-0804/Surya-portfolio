'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cpu, Database } from 'lucide-react';

const steps = [
  { id: 0, text: "Checking GPU Compute...", icon: Cpu },
  { id: 1, text: "Loading vLLM & Qdrant...", icon: Database },
  { id: 2, text: "Starting AI Interface...", icon: Bot }
];

// Helper Typewriter component for active step terminal printing
const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15); // Fast typing speed

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

export default function LoadingScreen() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isDev = process.env.NODE_ENV === 'development';
    if (sessionStorage.getItem('hasBooted') && !isDev) {
      setIsVisible(false);
      return; 
    }
    
    if (!isDev) {
      sessionStorage.setItem('hasBooted', 'true');
    }
    document.body.style.overflow = 'hidden';

    let startTimestamp = null;
    const duration = 1500;
    let lastProgress = 0;
    
    const animateProgress = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      
      const progressRatio = Math.min(elapsed / duration, 1);
      const easeOutRatio = 1 - Math.pow(1 - progressRatio, 3);
      const currentProgress = Math.floor(easeOutRatio * 100);
      
      if (currentProgress !== lastProgress) {
        setProgress(currentProgress);
        lastProgress = currentProgress;
      }
      
      if (elapsed >= 400 && elapsed < 900) {
        setActiveStep(1);
        setCompleted(prev => prev.includes(0) ? prev : [...prev, 0]);
      } else if (elapsed >= 900 && elapsed < 1300) {
        setActiveStep(2);
        setCompleted(prev => prev.includes(1) ? prev : [...prev, 0, 1]);
      } else if (elapsed >= 1300) {
        setActiveStep(3);
        setCompleted([0, 1, 2]);
      }
      
      if (elapsed < duration) {
        requestAnimationFrame(animateProgress);
      }
    };
    
    requestAnimationFrame(animateProgress);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 300); 
    }, 1500);

    return () => {
      clearTimeout(hideTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-[#030014] flex flex-col items-center justify-center p-4 loading-screen-overlay"
        >
          {/* Glowing background shapes to match site's style */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-md w-full">
            {/* Pulsing AI Brain / Neural Core Visual */}
            <div className="relative mb-10 w-32 h-32 flex items-center justify-center">
              {/* Outer pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 shadow-[0_0_40px_rgba(168,85,247,0.1)]"
              />
              
              {/* Inner glowing circle */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-24 h-24 rounded-full border border-cyan-500/20 bg-[#030014] flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.05)]"
              />

              {/* Central Glowing Symbol / SVG Neural Net */}
              <svg className="w-16 h-16 z-20" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                {/* Connecting lines */}
                <motion.line
                  x1="50" y1="20" x2="30" y2="50"
                  stroke="url(#neuralGrad)" strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.line
                  x1="50" y1="20" x2="70" y2="50"
                  stroke="url(#neuralGrad)" strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.line
                  x1="30" y1="50" x2="50" y2="80"
                  stroke="url(#neuralGrad)" strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.line
                  x1="70" y1="50" x2="50" y2="80"
                  stroke="url(#neuralGrad)" strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.line
                  x1="30" y1="50" x2="70" y2="50"
                  stroke="url(#neuralGrad)" strokeWidth="1"
                  strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -10] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Animated Data Pulses along connecting lines */}
                <motion.circle
                  r="1.5"
                  fill="#22d3ee"
                  animate={{
                    cx: [50, 30],
                    cy: [20, 50]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.circle
                  r="1.5"
                  fill="#22d3ee"
                  animate={{
                    cx: [50, 70],
                    cy: [20, 50]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.4
                  }}
                />
                <motion.circle
                  r="1.5"
                  fill="#a855f7"
                  animate={{
                    cx: [30, 50],
                    cy: [50, 80]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.7
                  }}
                />
                <motion.circle
                  r="1.5"
                  fill="#a855f7"
                  animate={{
                    cx: [70, 50],
                    cy: [50, 80]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1.1
                  }}
                />
                
                {/* Nodes */}
                <motion.circle
                  cx="50" cy="20" r="6"
                  fill="#a855f7"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle
                  cx="30" cy="50" r="6"
                  fill="#22d3ee"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                />
                <motion.circle
                  cx="70" cy="50" r="6"
                  fill="#22d3ee"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                />
                <motion.circle
                  cx="50" cy="80" r="6"
                  fill="#a855f7"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                />
              </svg>

              {/* Percentage Indicator inside the orb/below */}
              <div className="absolute -bottom-8 flex flex-col items-center">
                <span className="text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Console Log Area */}
            <div className="w-full bg-[#0c0c1e]/60 border border-white/5 rounded-2xl p-5 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] font-mono tracking-wider text-slate-500">
                  surya@portfolio:~$
                </span>
              </div>

              <div className="flex flex-col gap-3 font-mono text-xs">
                {steps.map((step) => {
                  const isCompleted = completed.includes(step.id);
                  const isActive = activeStep === step.id;
                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: (isActive || isCompleted) ? 1 : 0.25, 
                        x: 0 
                      }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400 animate-pulse' : isCompleted ? 'text-purple-400' : 'text-slate-600'}`} />
                        <span className={`${isActive ? 'text-slate-200 font-medium' : isCompleted ? 'text-slate-400' : 'text-slate-600'}`}>
                          {isActive ? (
                            <TypewriterText text={step.text} />
                          ) : (
                            step.text
                          )}
                        </span>
                      </div>
                      
                      {isCompleted ? (
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold uppercase tracking-wider">
                          [ OK ]
                        </span>
                      ) : isActive ? (
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                          <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider animate-pulse">
                            RUN
                          </span>
                        </div>
                      ) : (
                        <span className="text-[10px] text-slate-700 uppercase tracking-wider font-bold">
                          PEND
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Subtle easter egg footer */}
            <div className="mt-6 text-center">
              <span className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">
                Production AI Engineer Portfolio // v2.0 // Build 2026
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
