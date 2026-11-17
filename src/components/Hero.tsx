import Image from "next/image";
import { personal } from "@/data/personal";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-10 pb-16 md:px-12 md:pt-16 md:pb-24">
      <Reveal>
        <p className="text-xs font-medium tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
          Deepak GM / Independent Builder
        </p>
      </Reveal>

      <Reveal delay={60}>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-[16vw] leading-[0.88] font-black tracking-tight text-[var(--color-text)] sm:text-[13vw] md:text-[10.5vw] lg:text-[9vw]">
          DEEPAK GM
        </h1>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <Reveal delay={120} className="md:col-span-7">
          <p className="max-w-xl text-xl leading-relaxed text-[var(--color-text)] md:text-2xl">
            {personal.heroIntro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="focus-ring rounded-full bg-[var(--color-text)] px-6 py-3 text-sm font-medium !text-white text-white transition-opacity hover:opacity-80"
              style={{ color: "#ffffff" }}
            >
              Explore my work
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-full border border-[var(--color-text)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-text)] hover:text-white"
            >
              Let&rsquo;s connect
            </a>
          </div>
        </Reveal>

        <Reveal delay={180} className="md:col-span-5">
          <div className="grid grid-cols-1 gap-6 border-t border-[var(--color-border)] pt-6 sm:grid-cols-3 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <InfoItem label="Based in" value={personal.heroInfo.basedIn} />
            <InfoItem label="Exploring" value={personal.heroInfo.exploring} />
            <InfoItem label="Building" value={personal.heroInfo.building} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]">{value}</p>
    </div>
  );
}

export function Portrait() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-20 md:px-12 md:pb-28">
      <Reveal>
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:rounded-3xl border border-[var(--color-border)] bg-[#f3f3f3] sm:aspect-[21/9] md:aspect-[21/8]">
          <Image
            src={personal.portrait}
            alt={personal.portraitAlt}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            priority
          />
        </div>
      </Reveal>
    </section>
  );
}
