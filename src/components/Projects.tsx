import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectMockup from "./ProjectMockup";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
      <SectionLabel index="02" title="Selected Work" />

      <Reveal>
        <div className="mt-10 max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-bold tracking-tight md:text-5xl">
            Products, prototypes and experiments.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            A selection of independent builds across AI, fintech, healthtech, systems and
            spatial computing — each one a working attempt at a real problem.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 60}>
            <Link
              href={`/projects/${project.slug}`}
              className="focus-ring group block"
            >
              <div className="overflow-hidden rounded-2xl md:rounded-3xl transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                <ProjectMockup project={project} />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4 border-t border-[var(--color-border)] pt-4">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{project.category}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-xl text-[var(--color-text-secondary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-text)]"
                >
                  →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
