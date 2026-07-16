/**
 * @file index.js (constants)
 * @description Centralized constants configuration file for the Skills section of the portfolio.
 * Structuring AI domains, framework logo arrays with project descriptions, infrastructure tools,
 * frontend/workflow logos, models worked with, and applied engineering capabilities.
 */

// ─── Level 1: AI & Engineering Domains ────────────────────────────────────────
export const AI_Domains = [
  'Large Language Models',
  'Retrieval-Augmented Generation',
  'Natural Language Processing',
  'Deep Learning',
  'Machine Learning',
  'Model Serving',
  'Model Benchmarking',
  'Service Benchmarking',
  'Model Selection',
  'Semantic Search',
  'Prompt Engineering',
  'AI Agents',
  'Model Evaluation',
  'Fine-tuning',
];

// ─── Level 2: AI Frameworks (logo-based with project stories) ─────────────────
export const AI_Frameworks = [
  {
    skill_name: 'Python',
    Image: '/skills/Python.png',
    width: 70,
    height: 70,
    appliedIn: 'Core scripting, ML pipeline development, data processing scripts',
  },
  {
    skill_name: 'PyTorch',
    Image: '/skills/PyTorch.png',
    width: 70,
    height: 70,
    appliedIn: 'Model training, fine-tuning, tensor mathematical operations',
  },
  {
    skill_name: 'Hugging Face',
    Image: '/skills/huggingface.png',
    width: 70,
    height: 70,
    appliedIn: 'Transformer architectures, model hubs, dataset loaders, tokenizer APIs',
  },
  {
    skill_name: 'vLLM',
    Image: '/skills/vllm.png',
    width: 75,
    height: 75,
    appliedIn: 'High-throughput LLM serving, AWQ quantization, PagedAttention',
  },
  {
    skill_name: 'Ollama',
    Image: '/skills/ollama.png',
    width: 70,
    height: 70,
    appliedIn: 'Local LLM orchestration, model file customization, offline testing',
  },
  {
    skill_name: 'LangChain',
    Image: '/skills/langchain.png',
    width: 70,
    height: 70,
    appliedIn: 'LCEL pipelines, multi-agent frameworks, tool-calling integration',
  },
  {
    skill_name: 'FastAPI',
    Image: '/skills/fastapi.png',
    width: 70,
    height: 70,
    appliedIn: 'High-performance async APIs, agent router endpoints, request validation',
  },
];

// ─── Level 3: Infrastructure (logo-based with project stories) ────────────────
export const Infrastructure_skills = [
  {
    skill_name: 'Docker',
    Image: '/skills/docker.webp',
    width: 70,
    height: 70,
    appliedIn: 'Containerized deployment of microservices, multi-stage builds',
  },
  {
    skill_name: 'RabbitMQ',
    Image: '/skills/rabbitmq.png',
    width: 70,
    height: 70,
    appliedIn: 'Asynchronous event message broker, background task scheduling',
  },
  {
    skill_name: 'MongoDB',
    Image: '/skills/mongodb.png',
    width: 40,
    height: 40,
    appliedIn: 'Chat history storage, document metadata collection caching',
  },
  {
    skill_name: 'Qdrant',
    Image: '/skills/qdrant.png',
    width: 70,
    height: 70,
    appliedIn: 'High-speed vector DB search, custom payload filtration, 500K+ embeddings',
  },
  {
    skill_name: 'Neo4j',
    Image: '/skills/neo4j.png',
    width: 70,
    height: 70,
    appliedIn: 'Knowledge Graph construction, Entity-Relation Extraction, GraphRAG',
  },
  {
    skill_name: 'Elasticsearch',
    Image: '/skills/elasticsearch.png',
    width: 70,
    height: 70,
    appliedIn: 'Keyword search, hybrid search pipelines, BM25 indexing',
  },
  {
    skill_name: 'AWS',
    Image: '/skills/aws.png',
    width: 70,
    height: 70,
    appliedIn: 'S3 static bucket storage, EC2 GPU instance provisioning',
  },
];

// ─── Level 4: Frontend (logo-based with project stories) ──────────────────────
export const Frontend_skill = [
  // {
  //   skill_name: 'TypeScript',
  //   Image: '/skills/ts.png',
  //   width: 70,
  //   height: 70,
  //   appliedIn: 'Type-safe state management, system-wide interface schemas',
  // },
  {
    skill_name: 'React',
    Image: '/skills/react.png',
    width: 70,
    height: 70,
    appliedIn: 'Dynamic UI rendering, reusable custom dashboard components',
  },
  {
    skill_name: 'Next.js',
    Image: '/skills/next.png',
    width: 70,
    height: 70,
    appliedIn: 'App router architecture, server-side data fetching optimization',
  },
  {
    skill_name: 'Tailwind CSS',
    Image: '/skills/tailwind.png',
    width: 70,
    height: 70,
    appliedIn: 'Responsive layout designs, customized utility styles',
  },
];

// ─── Level 5: Workflow & Dev Tools (logo-based with project stories) ───────────
export const Workflow_skills = [
  {
    skill_name: 'Git',
    Image: '/skills/git.png',
    width: 70,
    height: 70,
    appliedIn: 'Version control, feature branching, and collaborative codebase management',
  },
  {
    skill_name: 'GitHub',
    Image: '/skills/github.png',
    width: 70,
    height: 70,
    appliedIn: 'Collaborative PR reviews, issue tracking, and repository management',
  },
  {
    skill_name: 'Postman',
    Image: '/skills/postman.svg',
    width: 70,
    height: 70,
    appliedIn: 'Async API endpoint testing, request validation collection, and benchmarking',
  },
  {
    skill_name: 'Linux',
    Image: '/skills/linux.svg',
    width: 70,
    height: 70,
    appliedIn: 'CLI execution, shell scripting, and server infrastructure environments',
  },
  {
    skill_name: 'Streamlit',
    Image: '/skills/streamlit.svg',
    width: 75,
    height: 75,
    appliedIn: 'Rapid prototyping of ML app interfaces and LLM playground dashboards',
  },
];

export const Models_worked_with = [
  'Phi-4',
  'Qwen 2.5',
  'Qwen 3',
  'Llama 3',
  'Gemma 2',
  'DeepSeek-V3',
  'Gemini',
  'OpenAI (GPT-4o)',
  'Azure OpenAI',
  'Grok',
  'Mistral',
];

// ─── Level 6: Capabilities (checklist items) ─────────────────────────────────
export const Capabilities = [
  'LLM Deployment',
  'RAG Pipelines',
  'Vector Search',
  'Model Quantization',
  'Prompt Engineering',
  'Fine-tuning',
  'Agentic Workflows',
  'AI Evaluation',
  'Resume Parsing',
  'Semantic Search',
];

// ─── Socials ─────────────────────────────────────────────────────────────────
export const Socials = [
  {
    name: 'LinkedIn',
    src: '/socials/linkedin144.png',
    link: 'https://www.linkedin.com/in/suryaabothula/',
  },
  {
    name: 'GitHub',
    src: '/gitwhite.png',
    link: 'https://github.com/Surya-0804',
  },
];
