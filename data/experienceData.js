export const experienceData = [
  {
    id: 'sproutsai',
    date: 'June 2025 - Present · 1 yr 5 mos',
    company: 'SproutsAI',
    badges: [
      { text: 'Star Performer, Jul 2025', color: 'emerald' },
      { text: 'Converted to Full-Time', color: 'indigo' },
    ],
    location: 'Remote, India',
    roles: [
      {
        title: 'Machine Learning Engineer - AI/NLP',
        type: 'Full-time',
        typeColor: 'emerald',
        date: 'Apr 2026 - Present · 7 mos',
        clusters: [
          {
            icon: 'Server',
            title: 'LLM Benchmarking & DGX Spark Infrastructure',
            bullets: [
              'Architected and deployed an LLM benchmarking suite on NVIDIA DGX Spark (vLLM, Docker) evaluating Qwen3.6-35B-A3B MoE, Qwen3.5, Gemma 4, Phi-4, and Qwen2.5-72B-AWQ against Gemini; shipped Qwen3.6-35B-A3B, ~39% faster than Qwen3.5 (~60% under concurrent load) and ~26% faster than Gemma 4.',
              'Executed model quantization experiments (Qwen2.5-72B-AWQ) within DGX Spark\'s 128GB unified memory constraint; built local inference pipelines eliminating reliance on cloud APIs (SageMaker) to cut compute costs and ensure data privacy.'
            ]
          },
          {
            icon: 'Search',
            title: 'Match Parser & Candidate Recommendation Engine',
            bullets: [
              'Diagnosed inflated match scores on empty and sparse candidate profiles; consolidated scattered scoring logic into a single evidence-based, queue-driven (RabbitMQ) Match Parser pipeline, cutting false positives by 20%.',
              'Designed and built a feedback-driven candidate recommendation engine: multi-vector Qdrant retrieval (E5 embeddings, fused with RRF) driven by recruiter thumbs-up/down signals, re-ranked by Gemini 2.5 Flash with per-candidate reasoning.'
            ]
          },
          {
            icon: 'Bot',
            title: 'Agentic Autosourcing & Profile Enrichment',
            bullets: [
              'Expanded autosourcing beyond Elasticsearch-indexed ATS profiles to 8 new web-search and people-data sources (Exa, Tavily, Apollo, Google, DuckDuckGo) with must-have/nice-to-have ranking, cutting low-quality candidate reviews by 40%.',
              'Built a GitHub enrichment agent that identifies technical skills with confidence scores backed by repo- and commit-level evidence, cross-referencing candidate portfolios and resumes.'
            ]
          }
        ]
      },
      {
        title: 'NLP/AI Engineer Intern',
        type: 'Internship',
        typeColor: 'blue',
        date: 'Jun 2025 - Mar 2026 · 10 mos',
        badges: [
          { text: 'Star Performer Award, Jul 2025', color: 'emerald' }
        ],
        clusters: [
          {
            icon: 'Layers',
            title: 'Vector Search Migration & Embedding Microservices',
            bullets: [
              'Executed zero-downtime production vector search migration from MongoDB to Qdrant across 5 NLP repositories (10K+ daily queries), validating result parity.',
              'Deployed containerized FastAPI-based embedding service (Hugging Face SentenceTransformer) with backward-compatible validation for scalable semantic matching.'
            ]
          },
          {
            icon: 'Search',
            title: 'Candidate Filtering & Profiling Pipelines',
            bullets: [
              'Built candidate filtering pipeline (4 rule-based filters, 3 LLM smart labels) across autosourcing and enrichment, reducing early-stage candidate noise by ~80% and cutting irrelevant profiles reaching recruiters by 30%+.',
              'Built and deployed NLP profile enrichment agents for skill extraction, job title normalization, and achievement detection using embeddings and LLMs.'
            ]
          },
          {
            icon: 'Workflow',
            title: 'Distributed Event-Driven Pipelines',
            bullets: [
              'Engineered real-time, distributed queue pipelines using RabbitMQ and Elasticsearch to ingest and process large-scale candidate data with low latency.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'careautomate',
    date: 'Dec 2024 - May 2025',
    role: 'Full-Stack Developer Intern',
    company: 'Care Automate',
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
