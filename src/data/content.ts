// ============================================================================
// SECTION CONTENT
// Capabilities, tech stack, journey, Halfwave, writing drafts, contact copy.
// Nothing here is invented beyond what was explicitly supplied — dates,
// rankings and awards are left out unless given.
// ============================================================================

export interface Capability {
  index: string;
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Artificial Intelligence",
    description:
      "Machine learning, deep learning, RAG, intelligent systems and AI-powered applications.",
  },
  {
    index: "02",
    title: "Software Engineering",
    description: "Full-stack development, backend architecture, databases and APIs.",
  },
  {
    index: "03",
    title: "Systems & Hardware",
    description:
      "Linux, operating systems, computer architecture, electronics and embedded systems.",
  },
  {
    index: "04",
    title: "Product Development",
    description:
      "Prototyping, independent products, hackathons and entrepreneurial experimentation.",
  },
];

export interface TechGroup {
  title: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  { title: "Programming", items: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL"] },
  {
    title: "AI / ML",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "Gemini"],
  },
  { title: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Flutter"] },
  { title: "Backend", items: ["Node.js", "Express", "Flask", "FastAPI"] },
  { title: "Database", items: ["MySQL", "MongoDB", "SQLite", "Supabase"] },
  { title: "Systems", items: ["Linux", "Docker", "Linux From Scratch", "Git"] },
  { title: "Tools", items: ["GitHub", "VS Code", "Android Studio", "Figma", "Google Colab"] },
];

export interface JourneyItem {
  title: string;
  description: string;
}

export const journey: JourneyItem[] = [
  {
    title: "Information Science and Engineering",
    description: "Undergraduate study in Information Science and Engineering.",
  },
  {
    title: "Minor in Data Science and Machine Learning",
    description: "CCE, IIT Mandi.",
  },
  {
    title: "Independent Engineering Projects",
    description:
      "Building projects across AI, fintech, healthtech, systems and spatial computing — Sanguis, Kosha, ShoreLeave, MapWave and more.",
  },
  {
    title: "Hacker House Goa 2026",
    description: "Participation in Hacker House Goa 2026.",
  },
  {
    title: "Srujana Hackathon — Top 10 Finalist",
    description: "Reached the top 10 as a finalist with Kosha, built under Halfwave.",
  },
  {
    title: "Building Halfwave Platforms",
    description: "Founding and building an independent technology initiative.",
  },
];

export const halfwave = {
  headline: "Building beyond the classroom.",
  intro:
    "Halfwave Platforms is my independent technology initiative focused on building practical digital products, exploring emerging technologies and creating opportunities for people to build together.",
  philosophy:
    "Ship real, working products. Learn by building rather than by waiting for permission, and treat every hackathon and side project as a chance to practise shipping something complete.",
  initiatives: [
    {
      name: "Senior Connect",
      description: "An initiative under Halfwave Platforms focused on connecting people across generations.",
    },
    {
      name: "Product line",
      description:
        "Kosha, Sanguis, ShoreLeave and other independent products are built and incubated under the Halfwave umbrella.",
    },
  ],
};

export interface WritingDraft {
  title: string;
  excerpt: string;
}

export const writingDrafts: WritingDraft[] = [
  {
    title: "Building AI products beyond prototypes",
    excerpt: "Notes on what changes when an AI demo has to become something people actually rely on.",
  },
  {
    title: "Lessons from Kosha",
    excerpt: "What a 90-day cash-flow simulator taught me about financial systems and hackathon timelines.",
  },
  {
    title: "Exploring Linux From Scratch",
    excerpt: "Building HalfwaveOS from first principles — partitions, toolchains and the parts of Linux we take for granted.",
  },
  {
    title: "Building products through hackathons",
    excerpt: "How constraint and a ticking clock shape the way a product actually gets built.",
  },
  {
    title: "Hardware meets software",
    excerpt: "Where electronics experimentation ends and product thinking begins.",
  },
  {
    title: "Independent product development",
    excerpt: "Building outside a company structure — what it gives you, and what it costs.",
  },
];

export const contact = {
  headline: "Have an idea worth building?",
  supporting:
    "Whether it's an ambitious product, an interesting collaboration, an engineering challenge or simply a conversation about technology, I'd love to connect.",
};
