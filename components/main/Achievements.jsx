'use client';
import React from 'react';
import { Calendar, Award, Trophy, Star, Sparkles } from 'lucide-react';
import achievements from '@/constants/achievements';

const Achievements = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 relative w-full"
      id="achievements"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-16 pb-12">
        Achievements
      </h1>

      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 mt-4">
        {achievements.map((item) => {
          if (item.type === 'primary') {
            return (
              <div
                key={item.id}
                className="md:col-span-2 rounded-2xl border border-purple-500/30 bg-[#0c0c1e]/50 backdrop-blur-md p-6 md:p-8 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(112,66,248,0.1)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Glowing Background Glow behind the trophy */}
                <div className="absolute top-[-20%] right-[-5%] w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-purple-500/15 transition-all duration-500" />
                
                <div>
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300">
                        <Award className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <h3 className="text-white text-lg md:text-xl font-extrabold tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-purple-400 text-sm font-semibold tracking-wide mt-0.5">
                          {item.organization}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-semibold bg-purple-500/10 border border-purple-500/20 rounded-lg px-3 py-1.5 self-start md:self-auto font-mono">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullet points list */}
                  {item.bullets && (
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/5 pt-6 mt-4">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-400 text-xs md:text-sm leading-relaxed p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                          <Star className="w-4.5 h-4.5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          } else {
            // Secondary cards (hackathons)
            return (
              <div
                key={item.id}
                className="col-span-1 rounded-2xl border border-white/10 bg-[#0c0c1e]/30 backdrop-blur-md p-6 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(112,66,248,0.05)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Glowing Background Glow behind the card */}
                <div className="absolute top-[-30%] right-[-10%] w-48 h-48 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-500" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-cyan-300">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-white text-base md:text-lg font-bold tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 text-xs md:text-sm mt-0.5">
                          {item.organization}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-slate-400 font-mono">
                      {item.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Achievements;
