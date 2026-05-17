export const site = {
  brand: "Harel Asher",
  status: "Available for technical roles",
  hero: {
    title: "Harel Asher — Software Developer",
    paragraphs: [
      "I'm a Software Developer specializing in high-performance web systems and Generative AI integration.",
      "A graduate with Academic Honors from John Bryce's Full-Stack & AI program, dedicated to building intelligent, scalable software that bridges complex data with seamless user experiences.",
      "From search engines to real-time networked games, I've built projects that prioritize both speed and architectural integrity.",
      "I thrive on optimizing backend workflows, mastering databases, and turning complex algorithmic challenges into production-ready results.",
      'A relentless learner with a "mission-first" mindset.',
      "As Head of a Special Forces Selection Unit, I bring the same precision and reliability to code that high-stakes operations demand.",
    ],
  },
  skills: [
    {
      title: "AI Engineering",
      items: [
        { id: "openai", label: "RAG / Embeddings" },
        { id: "langchain", label: "LangChain" },
        { id: "agents", label: "Agents" },
        { id: "prompt", label: "Prompt Engineering" },
        { id: "pgvector", label: "pgvector" },
      ],
    },
    {
      title: "Full-Stack",
      items: [
        { id: "csharp", label: "C#" },
        { id: "typescript", label: "TypeScript" },
        { id: "python", label: "Python" },
        { id: "react", label: "React" },
        { id: "nodedotjs", label: "Node.js" },
        { id: "express", label: "Express" },
      ],
    },
    {
      title: "Infrastructure",
      items: [
        { id: "sql", label: "SQL" },
        { id: "docker", label: "Docker" },
        { id: "rest", label: "REST APIs" },
        { id: "git", label: "Git" },
        { id: "network", label: "Client-Server" },
      ],
    },
  ],
  leadership: {
    title: "Military Leadership",
    subtitle: "Head of Special Forces Selection Unit · Aug 2023 – Jun 2026",
    bullets: [
      "Certificate of Excellence for leadership and operational performance.",
      "Mentored a team of 5 soldiers managing complex placement systems for elite units under extreme workload.",
      "Designed custom software and database scripts as the primary interface for real-time placement decisions.",
      "Automated candidate analysis with SQL, Excel, and SAP—improving selection accuracy and throughput.",
    ],
  },
  contact: {
    email: "harelasher1@gmail.com",
    phone: "053-7011490",
    linkedin: "https://linkedin.com/in/harel-asher",
    github: "https://github.com/harelasher",
  },
  ticker: [
    "[SYSTEM OK] DOM hydrated · portfolio v1",
    "[CACHE HIT] search_cache embedding reused",
    "[PGVECTOR] HNSW semantic layer active",
    "[SOCKET] table_state broadcast ack",
    "[AES-CBC] protocol decrypt ok",
    "[POOL] pg connection ready · 100 concurrent",
  ],
} as const;

export type SkillId = (typeof site.skills)[number]["items"][number]["id"];
