export const experience = [
  {
    title: 'June 2025 - Present',
    content: (
      <div className="rounded-lg shadow-lg border border-[#2A0E61] bg-[#1A1A2E] cursor-pointer p-4">
        <h3 className="text-white text-lg md:text-xl font-semibold mb-1">
          <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            AI/LLM Engineer
          </span>{' '}
          | SproutsAI
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-medium">
            Full-time
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 font-medium">
            Intern → Converted Apr 2026
          </span>
          <span className="text-gray-500 text-[11px]">Remote, India</span>
        </div>
        <ul className="list-disc list-inside text-white text-xs md:text-sm font-normal space-y-2">
          <li>
            Deployed and benchmarked open-source LLMs — Phi-4, Qwen2.5-72B
            (AWQ), Qwen3.5-35B MoE — on NVIDIA DGX Spark via vLLM + Docker;
            finalized Qwen3.5-35B for production deployment.
          </li>
          <li>
            Unified Match Parser architecture end-to-end, consolidating
            fragmented scoring logic into a modular pipeline; design spec
            approved by senior technical advisor.
          </li>
          <li>
            Designed candidate filtering pipeline with{' '}
            <span className="text-purple-400 font-semibold">8+ quality signals</span>{' '}
            — reducing irrelevant profiles by{' '}
            <span className="text-cyan-400 font-semibold">30%+</span> and
            low-quality match reviews by{' '}
            <span className="text-cyan-400 font-semibold">40%</span>.
          </li>
          <li>
            Extended sourcing pipeline with multi-source web retrieval (Tavily,
            Parallel AI, Exa AI, DuckDuckGo) and built GitHub enrichment
            pipeline for evidence-backed candidate profiles.
          </li>
          <li>
            Executed zero-downtime production migration from MongoDB to Qdrant
            across{' '}
            <span className="text-purple-400 font-semibold">5 NLP repositories</span>{' '}
            (<span className="text-cyan-400 font-semibold">10K+ daily queries</span>);
            deployed embedding service via FastAPI.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Dec 2024 - May 2025',
    content: (
      <div className="rounded-lg shadow-lg border border-[#2A0E61] bg-[#1A1A2E] cursor-pointer p-4">
        <h3 className="text-white text-lg md:text-xl font-semibold mb-1">
          <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Full-Stack Developer Intern
          </span>{' '}
          | CareAutomate
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-medium">
            Internship
          </span>
          <span className="text-gray-500 text-[11px]">Remote, India</span>
        </div>
        <ul className="list-disc list-inside text-white text-xs md:text-sm font-normal space-y-2">
          <li>
            Developed React.js frontend and Express.js backend with MongoDB;
            built and productionized Speech-to-Text and document extraction
            pipelines.
          </li>
          <li>
            Integrated AI models into backend services while optimizing for
            real-world latency and production reliability.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Aug 2024 - Present',
    content: (
      <div className="rounded-lg shadow-lg border border-[#2A0E61] bg-[#1A1A2E] cursor-pointer p-4">
        <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
          <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Teaching Aid
          </span>{' '}
          | StudyOwl & Vishnu Institute of Technology
        </h3>
        <ul className="list-disc list-inside text-white text-xs md:text-sm font-normal space-y-2">
          <li>
            Assisting peers and juniors in mastering full-stack development,
            focusing on technologies like React.js, Node.js, and Express.
          </li>
          <li>
            Providing mentorship and guidance through coding exercises,
            project-based learning, and hands-on labs to solidify understanding
            of front-end and back-end concepts.
          </li>
          <li>
            Organizing and conducting workshops and study sessions to help
            students grasp full-stack development concepts and best practices.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Aug 2024 - Aug 2025',
    content: (
      <div className="rounded-lg shadow-lg border border-[#2A0E61] bg-[#1A1A2E] cursor-pointer p-4">
        <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
          <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {' '}
            Community Manager & ML/DL Developer
          </span>{' '}
          | Nexus Sparks
        </h3>
        <ul className="list-disc list-inside text-white text-xs md:text-sm font-normal space-y-2">
          <li>
            Assisting team members and community members in learning and
            mastering ML & DL through workshops, tutorials, and one-on-one
            mentoring.
          </li>
          <li>
            Engaging with the community to provide technical support, answer
            questions, and foster a positive learning environment.
          </li>
          <li>
            Providing feedback on ML and DL projects and helping others
            troubleshoot issues and improve their code.
          </li>
          <li>
            Organizing ML and DL learning sessions and promoting a culture of
            continuous learning and skill development.
          </li>
        </ul>
      </div>
    ),
  },
];
