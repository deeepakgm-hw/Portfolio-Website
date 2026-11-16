import { journey } from "@/data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Journey() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
      <SectionLabel index="05" title="Journey & Achievements" />

      <Reveal>
        <h2 className="mt-10 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-bold tracking-tight md:text-5xl">
          A timeline of building.
        </h2>
      </Reveal>

      <ol className="mt-12 flex flex-col">
        {journey.map((item, i) => (
          <Reveal key={item.title} delay={i * 50}>
            <li className="grid grid-cols-1 gap-2 border-t border-[var(--color-border)] py-7 md:grid-cols-12 md:gap-6 md:py-8">
              <div className="flex items-center gap-3 md:col-span-4">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight md:text-xl">
                  {item.title}
                </h3>
              </div>
              <p className="text-base text-[var(--color-text-secondary)] md:col-span-8">
                {item.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
