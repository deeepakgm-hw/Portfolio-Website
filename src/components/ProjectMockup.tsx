import type { Project } from "@/data/projects";

/**
 * A custom, code-drawn mockup card for a project — never a fabricated
 * screenshot. Each project gets a distinctive accent colour and its
 * category rendered as an abstract, editorial pattern.
 */
export default function ProjectMockup({ project }: { project: Project }) {
  return (
    <div
      className="relative flex aspect-[4/3] w-full items-end overflow-hidden"
      style={{ backgroundColor: project.color }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.16]"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="330" cy="40" r="110" fill="white" />
        <rect x="-40" y="200" width="300" height="140" fill="white" />
      </svg>

      <div className="relative z-10 flex w-full items-end justify-between p-6">
        <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {project.name}
        </span>
        <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          {project.technology[0]}
        </span>
      </div>
    </div>
  );
}
