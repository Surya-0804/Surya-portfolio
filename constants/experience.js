import React from 'react';
import { Calendar, MapPin, Server, Search, Bot, Workflow, Layers, Users, Globe, GraduationCap, Cpu } from 'lucide-react';
import { experienceData } from '../data/experienceData';

const iconMap = {
  Server,
  Search,
  Bot,
  Workflow,
  Layers,
  Users,
  Globe,
  GraduationCap,
  Cpu
};

const badgeColors = {
  emerald: 'bg-emerald-950 text-emerald-300 border-emerald-500/30',
  indigo: 'bg-indigo-950 text-indigo-300 border-indigo-500/30',
  blue: 'bg-blue-950 text-blue-300 border-blue-500/30',
  violet: 'bg-violet-950 text-violet-300 border-violet-500/30',
  cyan: 'bg-cyan-950 text-cyan-300 border-cyan-500/30',
};

export const experience = experienceData.map((job) => ({
  title: job.date,
  content: (
    <div className="rounded-xl border border-white/10 bg-[#0c0c1e]/65 backdrop-blur-md p-5 md:p-6 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(112,66,248,0.08)] transition-all duration-300">
      
      {/* Card Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 border-b border-white/5 pb-4">
        <div>
          <h3 className="text-white text-xl md:text-2xl font-bold flex flex-wrap items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              {job.role}
            </span>
            <span className="text-gray-400 font-medium text-lg">| {job.company}</span>
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {job.badges.map((badge, idx) => (
              <span key={idx} className={`text-[11px] px-2.5 py-0.5 rounded-full border font-semibold ${badgeColors[badge.color] || badgeColors.blue}`}>
                {badge.text}
              </span>
            ))}
            <span className="flex items-center gap-1 text-slate-400 text-xs font-medium ml-1">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              {job.location}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-semibold bg-white/[0.03] border border-white/5 rounded-lg px-3 py-1.5 self-start md:self-auto">
          <Calendar className="w-4 h-4 text-purple-400" />
          <span>{job.date}</span>
        </div>
      </div>

      {/* Impact Clusters */}
      <div className="grid grid-cols-1 gap-6">
        {job.clusters.map((cluster, cIdx) => {
          const Icon = iconMap[cluster.icon] || Server;
          return (
            <div key={cIdx} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2 w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-white text-sm md:text-base font-semibold">{cluster.title}</h4>
              </div>
              <ul className="list-disc list-outside pl-6 md:pl-12 text-gray-400 text-xs md:text-sm leading-relaxed space-y-1.5">
                {cluster.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  )
}));
