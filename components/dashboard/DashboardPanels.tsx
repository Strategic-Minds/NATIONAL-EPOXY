const panels = [
  ["Project stage", "Estimate ready", "Goldenrod / showroom metallic"],
  ["Uploaded photos", "12 assets received", "Garage prep, masking, slab condition"],
  ["Quote status", "Pending approval", "Strong chance to close this week"],
  ["Next step", "Schedule walkthrough", "Confirm floor system and color"]
];

export function DashboardPanels() {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      {panels.map(([title, value, meta]) => (
        <section key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-xs uppercase tracking-[0.3em] text-amber-200/80">{title}</div>
          <div className="mt-3 text-2xl font-black text-white">{value}</div>
          <p className="mt-2 text-sm leading-6 text-white/70">{meta}</p>
        </section>
      ))}
    </div>
  );
}
