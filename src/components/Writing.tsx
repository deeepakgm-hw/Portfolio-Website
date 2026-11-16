import { writingDrafts } from "@/data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Writing() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
      <SectionLabel index="07" title="Writing & Explorations" />

      <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-bold tracking-tight md:text-5xl">
            Thinking out loud.
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="max-w-xs text-sm text-[var(--color-text-secondary)]">
            Draft topics I&rsquo;m exploring — not yet published articles.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
        {writingDrafts.map((draft, i) => (
          <Reveal key={draft.title} delay={(i % 2) * 50}>
            <div className="group border-t border-[var(--color-border)] py-7">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                  {draft.title}
                </h3>
                <span className="shrink-0 rounded-full border border-[var(--color-border)] px-3 py-1 text-[10px] font-medium tracking-[0.1em] text-[var(--color-text-secondary)] uppercase">
                  Draft
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {draft.excerpt}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
