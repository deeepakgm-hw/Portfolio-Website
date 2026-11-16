"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#halfwave", label: "Halfwave" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur border-b border-[var(--color-border)]" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="focus-ring font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight"
        >
          Deepak<span className="text-[var(--color-accent)]">.</span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="focus-ring hidden rounded-full border border-[var(--color-text)] px-5 py-2 text-sm font-medium transition-colors hover:bg-[var(--color-text)] hover:text-white md:inline-block"
        >
          Let&rsquo;s connect
        </a>

        <button
          type="button"
          className="focus-ring flex flex-col gap-[5px] p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block h-[1.5px] w-6 bg-[var(--color-text)] transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-[var(--color-text)] transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-white px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block text-base font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="focus-ring inline-block rounded-full border border-[var(--color-text)] px-5 py-2 text-sm font-medium"
              >
                Let&rsquo;s connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
