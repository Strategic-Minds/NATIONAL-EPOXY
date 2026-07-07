const adminCards = [
  ["Leads", "48 open opportunities", "High-intent driveway and garage requests"],
  ["Estimates", "16 pending approvals", "Commercial and residential queue"],
  ["Service areas", "Metro coverage healthy", "Priority installs within range"],
  ["Products", "24 active floor systems", "Metallic, flake, quartz, and custom"],
  ["AI validation", "Brand and safety checks green", "No forbidden branding detected"],
  ["Workflow health", "Cron and receipt readiness on", "Preview validation ready"]
];

export function AdminCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {adminCards.map(([title, value, meta]) => (
        <article key={title} className="rounded-3xl border border-white/10 bg-[#15110d] p-5">
          <div className="text-sm font-bold text-white">{title}</div>
          <div className="mt-2 text-2xl font-black text-amber-200">{value}</div>
          <p className="mt-2 text-sm leading-6 text-white/70">{meta}</p>
        </article>
      ))}
    </div>
  );
}
