export default function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-[var(--color-border)] pb-6">
      <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-accent)]">
        {index}
      </span>
      <h2 className="text-sm font-medium tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
        {title}
      </h2>
    </div>
  );
}
