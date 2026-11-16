// ============================================================================
// CENTRAL PERSONAL CONFIGURATION
// Edit this file to update every personal detail across the entire site.
// ============================================================================

export interface SocialLink {
  label: string;
  url: string;
}

export interface PersonalConfig {
  name: string;
  title: string;
  tagline: string;
  secondaryTagline: string;
  email: string;
  website: string;
  domain: string;
  github: string;
  /** Optional — leave null until a real profile exists. The UI hides the link when null. */
  linkedin: string | null;
  halfwave: string;
  halfwaveName: string;
  location: string;
  /** Path relative to /public. Replace the file at this path to update the portrait everywhere. */
  portrait: string;
  portraitAlt: string;
  heroIntro: string;
  aboutIntro: string[];
  heroInfo: {
    basedIn: string;
    exploring: string;
    building: string;
  };
}

export const personal: PersonalConfig = {
  name: "Deepak GM",
  title: "Engineer | Independent Builder | Founder | Innovator",
  tagline: "I build technology that solves real-world problems.",
  secondaryTagline: "Curious mind. Relentless builder. Real-world impact.",
  email: "deeeepakgm@gmail.com",
  website: "https://deepakgm.in",
  domain: "deepakgm.in",
  github: "https://github.com/deeepakgm-hw",
  linkedin: null,
  halfwave: "https://halfwaveplatforms.com",
  halfwaveName: "Halfwave Platforms",
  location: "India",
  portrait: "/images/deepak-portrait.jpg",
  portraitAlt: "Portrait of Deepak GM",
  heroIntro:
    "I turn ambitious ideas into working products — from intelligent software systems to engineering solutions that solve real problems.",
  aboutIntro: [
    "I'm Deepak GM, an engineer and independent builder who enjoys turning ambitious ideas into working technology.",
    "My work spans artificial intelligence, software engineering, systems, electronics and product development. I enjoy exploring difficult engineering problems, experimenting with emerging technologies and building practical solutions that make a difference.",
    "Beyond individual projects, I'm building Halfwave Platforms — an initiative focused on creating technology products and opportunities.",
  ],
  heroInfo: {
    basedIn: "India",
    exploring: "AI / ML / Systems / Electronics / Product Engineering",
    building: "Halfwave Platforms and independent technology products.",
  },
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: personal.github },
  { label: "Halfwave", url: personal.halfwave },
  ...(personal.linkedin ? [{ label: "LinkedIn", url: personal.linkedin }] : []),
];

export const interests: string[] = [
  "Artificial Intelligence and Machine Learning",
  "Full-stack software engineering",
  "Electronics and hardware experimentation",
  "Systems engineering and operating systems",
  "Product development",
  "Geospatial technology",
  "Financial technology",
  "Voice-first AI",
  "Entrepreneurship and open source",
];
