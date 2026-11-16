import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectMockup from "@/components/ProjectMockup";
import Reveal from "@/components/Reveal";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.oneLiner,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-[1400px] px-6 pt-10 pb-24 md:px-12 md:pt-16">
        <Reveal>
          <Link
            href="/#work"
            className="focus-ring inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
          >
            <span aria-hidden="true">←</span> Back to work
          </Link>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="text-xs font-medium tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
              {project.category}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-[1.02] font-bold tracking-tight md:text-7xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[var(--color-text-secondary)]">
              {project.oneLiner}
            </p>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-text)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-text)] hover:text-white"
              >
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </Reveal>

          <Reveal delay={100} className="md:col-span-5">
            <ProjectMockup project={project} />
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-[var(--color-border)] pt-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <h2 className="text-sm font-medium tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">
              Overview
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-text)]">{project.description}</p>

            {project.note && (
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)] italic">
                {project.note}
              </p>
            )}

            <h2 className="mt-12 text-sm font-medium tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">
              Features
            </h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-base leading-relaxed text-[var(--color-text)]">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="md:col-span-5">
            <div className="md:pl-8">
              <h2 className="text-sm font-medium tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">
                Technology
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technology.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.achievement && (
                <div className="mt-10 border-t border-[var(--color-border)] pt-6">
                  <h2 className="text-sm font-medium tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">
                    Achievement
                  </h2>
                  <p className="mt-3 text-base font-medium">{project.achievement}</p>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="mt-20 flex items-center justify-between border-t border-[var(--color-border)] pt-8">
            <span className="text-sm text-[var(--color-text-secondary)]">Next project</span>
            <Link
              href={`/projects/${next.slug}`}
              className="focus-ring group flex items-center gap-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight"
            >
              {next.name}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
