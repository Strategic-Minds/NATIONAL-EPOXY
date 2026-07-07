export function StatusBadge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">{children}</span>;
}
