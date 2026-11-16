// ============================================================================
// PROJECT DATA
// Every project listed here is rendered on the homepage grid and gets its
// own detail page at /projects/[slug]. No screenshots or outcomes are
// fabricated — only what was supplied is represented.
// ============================================================================

export interface Project {
  slug: string;
  name: string;
  category: string;
  oneLiner: string;
  color: string; // accent colour used for the project's mockup card
  description: string;
  features: string[];
  technology: string[];
  achievement?: string;
  github?: string;
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "sanguis",
    name: "Sanguis",
    category: "HealthTech / Geospatial Technology",
    oneLiner: "A blood donor matching platform built on real-time geospatial search.",
    color: "#D1352B",
    description:
      "Sanguis is a blood donor matching platform designed to connect donors and recipients faster by using location data, demand forecasting and reliable payment infrastructure.",
    features: [
      "Real-time geospatial matching between donors and recipients",
      "Predictive shortage forecasting",
      "Razorpay integration for transactions",
      "Socket.IO for real-time communication",
    ],
    technology: ["Geospatial APIs", "Socket.IO", "Razorpay"],
    github: "https://github.com/deeepakgm-hw/Sanguis",
  },
  {
    slug: "kosha",
    name: "Kosha",
    category: "FinTech / Financial Intelligence",
    oneLiner: "A predictive cash-flow management system for simulating financial futures.",
    color: "#1B6F4C",
    description:
      "Kosha is a predictive cash-flow management system that simulates how a business's finances could unfold over the next 90 days, helping surface risk before it becomes a problem.",
    features: [
      "90-day rolling cash-flow simulation",
      "Financial reconciliation",
      "Delayed payment scenario modelling",
      "Unexpected expense simulations",
      "Receivables and payables tracking",
      "Cash reserve analysis",
      "Duplicate transaction prevention",
      "Scenario comparison",
    ],
    technology: ["Python", "FastAPI", "React", "TypeScript"],
    achievement: "Top 10 finalist — Srujana Hackathon",
    github: "https://github.com/deeepakgm-hw/Kosha_Team_Halfwave_Srujana",
  },
  {
    slug: "shoreleave",
    name: "ShoreLeave",
    category: "Maritime Technology",
    oneLiner: "A digital shore-leave management platform for maritime crews.",
    color: "#0F4C81",
    description:
      "ShoreLeave digitises the shore-leave process for maritime crews — covering applications, gate passes, attendance and readiness advisories for both officers and cadets.",
    features: [
      "Shore-leave applications",
      "Digital QR gate passes",
      "Biometric attendance",
      "Curfew countdown",
      "AI leave readiness advisories",
      "Officer and cadet workflows",
    ],
    technology: ["Next.js", "React", "Node.js", "MongoDB Atlas", "Supabase"],
  },
  {
    slug: "raggoa",
    name: "RAGGOA",
    category: "Voice-first Artificial Intelligence",
    oneLiner: "A voice-first retrieval-augmented generation system.",
    color: "#164BFF",
    description:
      "RAGGOA is a voice-first RAG system that combines speech recognition with document retrieval, letting people query their own documents conversationally.",
    features: [
      "Voice-first RAG system",
      "Sarvam Saaras v3 speech recognition",
      "Gemini embeddings",
      "Document ingestion",
      "Vector search",
      "Retrieval-augmented responses",
    ],
    technology: ["Vite", "React", "TypeScript", "Node.js", "Express"],
  },
  {
    slug: "mapwave",
    name: "MapWave",
    category: "Spatial Computing / Indoor Navigation",
    oneLiner: "Interactive indoor navigation and mapping exploration.",
    color: "#7A3FE0",
    description:
      "MapWave explores indoor navigation through interactive floor plans and searchable locations across multiple floors of a building.",
    features: [
      "Interactive indoor floor plans (implemented)",
      "Building navigation (implemented)",
      "Searchable locations (implemented)",
      "Multi-floor exploration (implemented)",
      "Interactive mapping (implemented)",
      "3D mapping exploration (in progress / planned)",
    ],
    technology: ["Spatial computing", "Interactive mapping"],
    note: "Some 3D mapping capabilities are still exploratory and not yet production-complete.",
  },
  {
    slug: "halfwaveos",
    name: "HalfwaveOS",
    category: "Systems Engineering",
    oneLiner: "An experimental operating system built through Linux From Scratch.",
    color: "#111111",
    description:
      "HalfwaveOS is an experimental operating system project built by following Linux From Scratch — a hands-on way of learning filesystem management, partitioning and toolchain configuration from first principles.",
    features: [
      "Built via Linux From Scratch",
      "Filesystem management",
      "Partitioning",
      "Toolchain configuration",
      "Low-level systems fundamentals",
    ],
    technology: ["Linux From Scratch", "Shell", "GCC toolchain"],
  },
  {
    slug: "backwave",
    name: "Backwave",
    category: "Developer Tools",
    oneLiner: "A developer tooling project exploring real-time streaming patterns.",
    color: "#E0A100",
    description:
      "Backwave is a developer tools project exploring server-sent event streaming alongside a modern full-stack setup.",
    features: [
      "Next.js 14.2",
      "React 18.3",
      "Tailwind CSS",
      "Server-sent event streaming",
      "Prisma ORM",
      "SQLite",
    ],
    technology: ["Next.js 14.2", "React 18.3", "Tailwind CSS", "Prisma", "SQLite"],
  },
  {
    slug: "cinenova",
    name: "CineNova",
    category: "Software Engineering",
    oneLiner: "A desktop-and-web software engineering project.",
    color: "#B5121B",
    description:
      "CineNova is a software engineering project combining a Java Swing desktop interface with a web-based React front end and a Node.js and MySQL backend.",
    features: [
      "Java Swing desktop interface",
      "React web interface",
      "Node.js backend",
      "MySQL database",
    ],
    technology: ["Java Swing", "React", "Node.js", "MySQL"],
  },
  {
    slug: "spot-the-scam",
    name: "Spot the Scam",
    category: "Machine Learning",
    oneLiner: "A machine learning project for identifying scam patterns, built with Streamlit.",
    color: "#2E8B8B",
    description:
      "Spot the Scam is a machine learning exploration focused on identifying scam patterns, presented through an interactive Streamlit interface.",
    features: ["Machine learning classification", "Interactive Streamlit interface"],
    technology: ["Python", "Streamlit", "Scikit-learn"],
  },
  {
    slug: "automated-resume-grader",
    name: "Automated Resume Grader",
    category: "Artificial Intelligence",
    oneLiner: "An AI-assisted system for evaluating resumes.",
    color: "#4C5B7A",
    description:
      "An AI-assisted resume evaluation project exploring how language models can help assess and score resumes against role requirements.",
    features: ["AI-assisted resume evaluation"],
    technology: ["Python", "NLP"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
