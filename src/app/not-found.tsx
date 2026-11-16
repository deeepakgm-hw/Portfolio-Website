import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="mx-auto flex max-w-[1400px] flex-col items-start px-6 py-32 md:px-12">
        <p className="text-sm font-medium tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
          404
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight md:text-7xl">
          Page not found.
        </h1>
        <p className="mt-6 max-w-md text-lg text-[var(--color-text-secondary)]">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-text)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
