export const experienceData = [
  {
    id: 'sproutsai',
    date: 'June 2025 - Present',
    role: 'AI/LLM Engineer',
    company: 'SproutsAI',
    badges: [
      { text: 'Full-time', color: 'emerald' },
      { text: 'Converted to Full-Time', color: 'indigo' },
    ],
    location: 'Remote, India',
    clusters: [
      {
        icon: 'Server',
        title: 'LLM Deployment & Core Architecture',
        bullets: [
          'Deployed and benchmarked open-source LLMs (Phi-4, Qwen2.5-72B, Qwen3.5-35B MoE) on NVIDIA DGX Spark via vLLM + Docker.',
          'Unified the Match Parser architecture end-to-end into a modular pipeline, with design spec approved by SproutsAI\'s senior technical advisor.'
        ]
      },
      {
        icon: 'Search',
        title: 'Search Quality & AI Pipelines',
        bullets: [
          'Designed candidate filtering pipeline with 8+ quality signals, reducing irrelevant profiles by 30%+ and low-quality match reviews by 40%.',
          'Executed zero-downtime production vector search migration from MongoDB to Qdrant across 5 NLP repositories (10K+ daily queries).'
        ]
      },
      {
        icon: 'Bot',
        title: 'Agentic Sourcing & Profile Enrichment',
        bullets: [
          'Extended candidate sourcing with multi-source web retrieval (Tavily, Parallel AI, Exa AI, DuckDuckGo).',
          'Built a GitHub enrichment pipeline resolving candidate profiles and extracting evidence-backed project history.'
        ]
      }
    ]
  },
  {
    id: 'careautomate',
    date: 'Dec 2024 - May 2025',
    role: 'Full-Stack Developer Intern',
    company: 'CareAutomate',
    badges: [
      { text: 'Internship', color: 'blue' }
    ],
    location: 'Remote, India',
    clusters: [
      {
        icon: 'Workflow',
        title: 'Pipeline Development',
        bullets: [
          'Developed React.js frontend and Express.js backend with MongoDB storage.',
          'Built and productionized Speech-to-Text and document extraction pipelines.'
        ]
      },
      {
        icon: 'Layers',
        title: 'Production Reliability',
        bullets: [
          'Integrated AI models into backend services while optimizing for latency and production stability.'
        ]
      }
    ]
  },
  {
    id: 'nexussparks',
    date: 'Aug 2024 - Aug 2025',
    role: 'Community Manager & ML/DL Developer',
    company: 'Nexus Sparks',
    badges: [
      { text: 'Community & Tech Lead', color: 'violet' }
    ],
    location: 'Remote, India',
    clusters: [
      {
        icon: 'Users',
        title: 'Technical Mentorship',
        bullets: [
          'Assisted community members in mastering ML & DL through workshops, tutorials, and one-on-one mentoring.',
          'Provided constructive feedback on ML and DL projects and helped troubleshoot code issues.'
        ]
      },
      {
        icon: 'Globe',
        title: 'Community Engagement',
        bullets: [
          'Engaging with the community to provide technical support, answer questions, and foster a positive learning environment.',
          'Organizing ML and DL learning sessions and promoting a culture of continuous skill development.'
        ]
      }
    ]
  },
  {
    id: 'studyowl',
    date: 'Aug 2024 - Sep 2024',
    role: 'Teaching Aid',
    company: 'StudyOwl & VIT',
    badges: [
      { text: 'Mentorship', color: 'cyan' }
    ],
    location: 'Remote, India',
    clusters: [
      {
        icon: 'GraduationCap',
        title: 'Peer Mentorship',
        bullets: [
          'Assisting peers and juniors in mastering full-stack development (React.js, Node.js, and Express).',
          'Providing mentorship and guidance through coding exercises, project-based learning, and hands-on labs.'
        ]
      },
      {
        icon: 'Cpu',
        title: 'Technical Workshops',
        bullets: [
          'Organizing and conducting workshops and study sessions to help students grasp full-stack development.'
        ]
      }
    ]
  }
];
