import { personal, interests } from "@/data/personal";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
      <SectionLabel index="01" title="About" />

      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-bold tracking-tight md:text-5xl">
            {personal.secondaryTagline}
          </h2>
        </Reveal>

        <div className="md:col-span-7">
          <Reveal delay={80}>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
              {personal.aboutIntro.map((para, i) => (
                <p key={i} className={i === 0 ? "text-[var(--color-text)]" : ""}>
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 border-t border-[var(--color-border)] pt-8">
              <p className="text-[11px] font-medium tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">
                Interests &amp; focus areas
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm text-[var(--color-text)]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
