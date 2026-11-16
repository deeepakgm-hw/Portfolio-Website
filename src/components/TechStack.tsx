import { techStack } from "@/data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function TechStack() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
      <SectionLabel index="04" title="Technology Stack" />

      <Reveal>
        <h2 className="mt-10 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-bold tracking-tight md:text-5xl">
          Tools I reach for.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((group, i) => (
          <Reveal key={group.title} delay={(i % 4) * 50}>
            <div className="border-t border-[var(--color-border)] pt-5">
              <h3 className="text-[11px] font-medium tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="font-[family-name:var(--font-display)] text-base font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
