import { capabilities } from "@/data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
      <SectionLabel index="03" title="Capabilities" />

      <div className="mt-6">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.title} delay={i * 50}>
            <div className="group grid grid-cols-1 gap-3 border-b border-[var(--color-border)] py-8 transition-colors md:grid-cols-12 md:gap-6 md:py-10">
              <span className="font-[family-name:var(--font-display)] text-sm text-[var(--color-text-secondary)] md:col-span-1">
                {cap.index}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight md:col-span-4 md:text-3xl">
                {cap.title}
              </h3>
              <p className="max-w-lg text-base leading-relaxed text-[var(--color-text-secondary)] md:col-span-7 md:text-lg">
                {cap.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
