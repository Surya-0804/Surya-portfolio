import React from 'react';
import { Calendar, MapPin, Server, Search, Bot, Workflow, Layers, Users, Globe, GraduationCap, Cpu } from 'lucide-react';

export const experience = [
  {
    title: 'June 2025 - Present',
    content: (
      <div className="rounded-xl border border-white/10 bg-[#0c0c1e]/65 backdrop-blur-md p-5 md:p-6 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(112,66,248,0.08)] transition-all duration-300">
        
        {/* Card Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 border-b border-white/5 pb-4">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold flex flex-wrap items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                AI/LLM Engineer
              </span>
              <span className="text-gray-400 font-medium text-lg">| SproutsAI</span>
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-semibold">
                Full-time
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/30 font-semibold">
                Converted to Full-Time
              </span>
              <span className="flex items-center gap-1 text-slate-400 text-xs font-medium ml-1">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Remote, India
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-semibold bg-white/[0.03] border border-white/5 rounded-lg px-3 py-1.5 self-start md:self-auto">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span>June 2025 - Present</span>
          </div>
        </div>

        {/* Impact Clusters */}
        <div className="grid grid-cols-1 gap-6">
          
          {/* Cluster 1: Inference & Architecture */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2 w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0">
                <Server className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-white text-sm md:text-base font-semibold">LLM Deployment &amp; Core Architecture</h4>
            </div>
            <ul className="list-disc list-outside pl-6 md:pl-12 text-gray-400 text-xs md:text-sm leading-relaxed space-y-1.5">
              <li>Deployed and benchmarked open-source LLMs (Phi-4, Qwen2.5-72B, Qwen3.5-35B MoE) on NVIDIA DGX Spark via vLLM + Docker.</li>
              <li>Unified the Match Parser architecture end-to-end into a modular pipeline, with design spec approved by SproutsAI&apos;s senior technical advisor.</li>
            </ul>
          </div>

          {/* Cluster 2: AI Pipelines & Search Quality */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2 w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0">
                <Search className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-white text-sm md:text-base font-semibold">Search Quality &amp; AI Pipelines</h4>
            </div>
            <ul className="list-disc list-outside pl-6 md:pl-12 text-gray-400 text-xs md:text-sm leading-relaxed space-y-1.5">
              <li>Designed candidate filtering pipeline with 8+ quality signals, reducing irrelevant profiles by <span className="text-cyan-400 font-semibold">30%+</span> and low-quality match reviews by <span className="text-cyan-400 font-semibold">40%</span>.</li>
              <li>Executed zero-downtime production vector search migration from MongoDB to Qdrant across 5 NLP repositories (10K+ daily queries).</li>
            </ul>
          </div>

          {/* Cluster 3: Sourcing & Enrichment */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2 w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-white text-sm md:text-base font-semibold">Agentic Sourcing &amp; Profile Enrichment</h4>
            </div>
            <ul className="list-disc list-outside pl-6 md:pl-12 text-gray-400 text-xs md:text-sm leading-relaxed space-y-1.5">
              <li>Extended candidate sourcing with multi-source web retrieval (Tavily, Parallel AI, Exa AI, DuckDuckGo).</li>
              <li>Built a GitHub enrichment pipeline resolving candidate profiles and extracting evidence-backed project history.</li>
            </ul>
          </div>

        </div>

      </div>
    ),
  },
  {
    title: 'Dec 2024 - May 2025',
    content: (
      <div className="rounded-xl border border-white/10 bg-[#0c0c1e]/65 backdrop-blur-md p-5 md:p-6 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(112,66,248,0.08)] transition-all duration-300">
        
        {/* Card Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 border-b border-white/5 pb-4">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold flex flex-wrap items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Full-Stack Developer Intern
              </span>
              <span className="text-gray-400 font-medium text-lg">| CareAutomate</span>
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-500/30 font-semibold">
                Internship
              </span>
              <span className="flex items-center gap-1 text-slate-400 text-xs font-medium ml-1">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Remote, India
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-semibold bg-white/[0.03] border border-white/5 rounded-lg px-3 py-1.5 self-start md:self-auto">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span>Dec 2024 - May 2025</span>
          </div>
        </div>

        {/* Impact Clusters */}
        <div className="grid grid-cols-1 gap-6">
          
          {/* Cluster 1: Pipeline Development */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2 w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0">
                <Workflow className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-white text-sm md:text-base font-semibold">Pipeline Development</h4>
            </div>
            <ul className="list-disc list-outside pl-6 md:pl-12 text-gray-400 text-xs md:text-sm leading-relaxed space-y-1.5">
              <li>Developed React.js frontend and Express.js backend with MongoDB storage.</li>
              <li>Built and productionized Speech-to-Text and document extraction pipelines.</li>
            </ul>
          </div>

          {/* Cluster 2: Production Reliability */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2 w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0">
                <Layers className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-white text-sm md:text-base font-semibold">Production Reliability</h4>
            </div>
            <ul className="list-disc list-outside pl-6 md:pl-12 text-gray-400 text-xs md:text-sm leading-relaxed space-y-1.5">
              <li>Integrated AI models into backend services while optimizing for latency and production stability.</li>
            </ul>
          </div>

        </div>

      </div>
    ),
  },
  {
    title: 'Aug 2024 - Aug 2025',
    content: (
      <div className="rounded-xl border border-white/10 bg-[#0c0c1e]/65 backdrop-blur-md p-5 md:p-6 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(112,66,248,0.08)] transition-all duration-300">
        
        {/* Card Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 border-b border-white/5 pb-4">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold flex flex-wrap items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Community Manager &amp; ML/DL Developer
              </span>
              <span className="text-gray-400 font-medium text-lg">| Nexus Sparks</span>
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-violet-950 text-violet-300 border border-violet-500/30 font-semibold">
                Community &amp; Tech Lead
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-semibold bg-white/[0.03] border border-white/5 rounded-lg px-3 py-1.5 self-start md:self-auto">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span>Aug 2024 - Aug 2025</span>
          </div>
        </div>

        {/* Impact Clusters */}
        <div className="grid grid-cols-1 gap-6">
          
          {/* Cluster 1: Technical Mentorship */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2 w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0">
                <Users className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-white text-sm md:text-base font-semibold">Technical Mentorship</h4>
            </div>
            <ul className="list-disc list-outside pl-6 md:pl-12 text-gray-400 text-xs md:text-sm leading-relaxed space-y-1.5">
              <li>Assisted community members in mastering ML &amp; DL through workshops, tutorials, and one-on-one mentoring.</li>
              <li>Provided constructive feedback on ML and DL projects and helped troubleshoot code issues.</li>
            </ul>
          </div>

          {/* Cluster 2: Community Engagement */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2 w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0">
                <Globe className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-white text-sm md:text-base font-semibold">Community Engagement</h4>
            </div>
            <ul className="list-disc list-outside pl-6 md:pl-12 text-gray-400 text-xs md:text-sm leading-relaxed space-y-1.5">
              <li>Engaging with the community to provide technical support, answer questions, and foster a positive learning environment.</li>
              <li>Organizing ML and DL learning sessions and promoting a culture of continuous skill development.</li>
            </ul>
          </div>

        </div>

      </div>
    ),
  },
  {
    title: 'Aug 2024 - Sep 2024',
    content: (
      <div className="rounded-xl border border-white/10 bg-[#0c0c1e]/65 backdrop-blur-md p-5 md:p-6 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(112,66,248,0.08)] transition-all duration-300">
        
        {/* Card Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 border-b border-white/5 pb-4">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold flex flex-wrap items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Teaching Aid
              </span>
              <span className="text-gray-400 font-medium text-lg">| StudyOwl &amp; VIT</span>
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-semibold">
                Mentorship
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-semibold bg-white/[0.03] border border-white/5 rounded-lg px-3 py-1.5 self-start md:self-auto">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span>Aug 2024 - Sep 2024</span>
          </div>
        </div>

        {/* Impact Clusters */}
        <div className="grid grid-cols-1 gap-6">
          
          {/* Cluster 1: Peer Mentorship */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2 w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-white text-sm md:text-base font-semibold">Peer Mentorship</h4>
            </div>
            <ul className="list-disc list-outside pl-6 md:pl-12 text-gray-400 text-xs md:text-sm leading-relaxed space-y-1.5">
              <li>Assisting peers and juniors in mastering full-stack development (React.js, Node.js, and Express).</li>
              <li>Providing mentorship and guidance through coding exercises, project-based learning, and hands-on labs.</li>
            </ul>
          </div>

          {/* Cluster 2: Technical Workshops */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2 w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0">
                <Cpu className="w-4.5 h-4.5" />
              </div>
              <h4 className="text-white text-sm md:text-base font-semibold">Technical Workshops</h4>
            </div>
            <ul className="list-disc list-outside pl-6 md:pl-12 text-gray-400 text-xs md:text-sm leading-relaxed space-y-1.5">
              <li>Organizing and conducting workshops and study sessions to help students grasp full-stack development.</li>
            </ul>
          </div>

        </div>

      </div>
    ),
  },
];
