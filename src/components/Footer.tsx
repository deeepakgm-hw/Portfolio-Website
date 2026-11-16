import { personal } from "@/data/personal";

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <h2 className="font-[family-name:var(--font-display)] text-[14vw] leading-[0.9] font-black tracking-tight sm:text-[12vw] md:text-[9vw]">
          Deepak GM
        </h2>

        <div className="mt-10 flex flex-col gap-6 border-t border-[var(--color-border)] pt-8 text-sm text-[var(--color-text-secondary)] md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {YEAR} {personal.name}. All rights reserved.
          </p>

          <nav aria-label="Social" className="flex flex-wrap gap-6">
            <a href={personal.github} target="_blank" rel="noreferrer noopener" className="focus-ring hover:text-[var(--color-text)]">
              GitHub
            </a>
            <a href={personal.halfwave} target="_blank" rel="noreferrer noopener" className="focus-ring hover:text-[var(--color-text)]">
              Halfwave Platforms
            </a>
            {personal.linkedin && (
              <a href={personal.linkedin} target="_blank" rel="noreferrer noopener" className="focus-ring hover:text-[var(--color-text)]">
                LinkedIn
              </a>
            )}
            <a href={`mailto:${personal.email}`} className="focus-ring hover:text-[var(--color-text)]">
              Email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
