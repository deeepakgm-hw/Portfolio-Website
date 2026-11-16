import { contact } from "@/data/content";
import { personal } from "@/data/personal";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
      <SectionLabel index="08" title="Contact" />

      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl">
            {contact.headline}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
            {contact.supporting}
          </p>
        </Reveal>

        <Reveal delay={100} className="md:col-span-5">
          <div className="flex flex-col gap-1 md:pl-8">
            <ContactLink href={`mailto:${personal.email}`} label="Email" value={personal.email} />
            <ContactLink href={personal.website} label="Website" value={personal.domain} external />
            <ContactLink href={personal.github} label="GitHub" value="deeepakgm-hw" external />
            <ContactLink href={personal.halfwave} label="Halfwave" value="halfwaveplatforms.com" external />
            {personal.linkedin && (
              <ContactLink href={personal.linkedin} label="LinkedIn" value="Deepak GM" external />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  label,
  value,
  external,
}: {
  href: string;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="focus-ring group flex items-center justify-between border-t border-[var(--color-border)] py-5"
    >
      <span>
        <span className="block text-[11px] font-medium tracking-[0.15em] text-[var(--color-text-secondary)] uppercase">
          {label}
        </span>
        <span className="mt-1 block font-[family-name:var(--font-display)] text-lg font-medium">
          {value}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="text-xl text-[var(--color-text-secondary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-accent)]"
      >
        ↗
      </span>
    </a>
  );
}
