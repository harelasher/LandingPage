import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "plotseeker",
    title: "PlotSeekerAI",
    tagline: "AI-Powered Book Discovery Engine",
    description:
      "A self-contained book discovery platform that uses AI-powered semantic search to match readers with books based on meaning, not just keywords. Built around a local catalog of 45k+ titles so every query is fast and independent of external APIs.",
    achievements: [
      "Three-layer hybrid search: pgvector semantics, trigram fuzzy match, and full-text — merged by weighted score.",
      "search_cache stores AI embeddings to skip redundant OpenAI calls on repeat queries.",
      "Local catalog of 45k+ books with vector embeddings and ISBN-to-affiliate mappings.",
    ],
    imageSrc: "/images/projects/plotseeker.png",
    imageAlt: "PlotSeekerAI book discovery interface",
    url: "plotseekerai.com",
    flagship: true,
    topology: {
      nodes: [
        {
          id: "client",
          role: "client",
          label: "Client",
          detail: "React + Vite · debounced search · api.js",
        },
        {
          id: "server",
          role: "server",
          label: "Server",
          detail: "Node.js / Express · OpenAI embeddings",
        },
        {
          id: "genai",
          role: "genai",
          label: "Search Pipeline",
          detail: "Hybrid RAG · cache · AI match summaries",
        },
        {
          id: "database",
          role: "database",
          label: "Database",
          detail: "PostgreSQL + pgvector · books · search_cache",
        },
      ],
      edges: [
        { from: "client", to: "server", bidirectional: true },
        { from: "server", to: "genai", bidirectional: true },
        { from: "genai", to: "database", bidirectional: true },
      ],
      metrics: [
        { label: "ISBN map", value: "45k+" },
        { label: "Search", value: "3-layer hybrid" },
      ],
    },
  },
  {
    id: "blackjack",
    title: "Networked Blackjack",
    tagline: "Multiplayer Game over Raw Sockets",
    description:
      "A fully networked multiplayer Blackjack game built from scratch — no game framework, just raw sockets. The server manages all game state, enforces rules, and handles multiple concurrent tables while clients connect over an encrypted custom protocol.",
    achievements: [
      "Threaded server handles each client independently across up to three concurrent tables.",
      "Custom fixed-width protocol with AES-CBC encryption between Pygame client and server.",
      "All game logic is server-side — bets, cards, and seats can't be manipulated client-side.",
      "SQLite stores profiles, chip balances, and a leaderboard with hourly chip top-ups.",
    ],
    imageSrc: "/images/projects/blackjack.png",
    imageAlt: "Networked Blackjack Pygame client",
    topology: {
      nodes: [
        {
          id: "client",
          role: "client",
          label: "Client",
          detail: "Python / Pygame · UI + listener thread",
        },
        {
          id: "server",
          role: "server",
          label: "Server",
          detail: "Sockets · per-client threads · game state",
        },
        {
          id: "logic",
          role: "logic",
          label: "Security",
          detail: "AES protocol · server-side rules",
        },
        {
          id: "database",
          role: "database",
          label: "Database",
          detail: "SQLite · users · scores · profiles",
        },
      ],
      edges: [
        { from: "client", to: "server", bidirectional: true },
        { from: "server", to: "logic", bidirectional: true },
        { from: "server", to: "database", bidirectional: true },
      ],
      metrics: [
        { label: "Sync", value: "Real-time tables" },
        { label: "Protocol", value: "AES encrypted" },
        { label: "Clients", value: "Threaded pool" },
      ],
    },
  },
];
