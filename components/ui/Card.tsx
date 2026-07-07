export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl"><h3 className="mb-3 text-lg font-semibold">{title}</h3><div>{children}</div></section>;
}
