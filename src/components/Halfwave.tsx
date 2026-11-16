import { halfwave } from "@/data/content";
import { personal } from "@/data/personal";
import Reveal from "./Reveal";

export default function Halfwave() {
  return (
    <section
      id="halfwave"
      className="relative overflow-hidden bg-[var(--color-halfwave)] text-white"
    >
      <svg
        className="pointer-events-none absolute -top-24 -right-24 h-[500px] w-[500px] opacity-20"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="100" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="flex items-baseline gap-4 border-b border-white/15 pb-6">
          <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-white/70">
            06
          </span>
          <h2 className="text-sm font-medium tracking-[0.2em] text-white/70 uppercase">
            Halfwave Platforms
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <h3 className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-bold tracking-tight md:text-5xl">
              {halfwave.headline}
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-white/75 md:text-xl">{halfwave.intro}</p>
            <a
              href={personal.halfwave}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-white hover:text-[var(--color-halfwave)]"
            >
              Visit halfwaveplatforms.com
              <span aria-hidden="true">↗</span>
            </a>
          </Reveal>

          <Reveal delay={100} className="md:col-span-6">
            <div className="space-y-8 md:pl-8">
              <div>
                <p className="text-[11px] font-medium tracking-[0.15em] text-white/60 uppercase">
                  Product philosophy
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/85">{halfwave.philosophy}</p>
              </div>

              <div>
                <p className="text-[11px] font-medium tracking-[0.15em] text-white/60 uppercase">
                  Selected initiatives
                </p>
                <div className="mt-4 space-y-5">
                  {halfwave.initiatives.map((init) => (
                    <div key={init.name} className="border-t border-white/15 pt-4">
                      <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                        {init.name}
                      </h4>
                      <p className="mt-1 text-sm text-white/70">{init.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
