import { mockStats } from "@/lib/mock-data";

export function CustomerDashboardPreview() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-[#140f0b] p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Preview</div>
          <h3 className="mt-2 text-xl font-black text-white">Customer dashboard snapshot</h3>
        </div>
        <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
          Quote ready
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {mockStats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs uppercase tracking-[0.24em] text-white/50">{s.label}</div>
            <div className="mt-2 text-2xl font-black text-white">{s.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-3 rounded-3xl border border-white/10 bg-black/25 p-4 sm:grid-cols-2">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Next step</div>
          <p className="mt-2 text-sm leading-6 text-white/75">Book a walkthrough and confirm the floor system, sheen, and date.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Uploaded photos</div>
          <p className="mt-2 text-sm leading-6 text-white/75">Before shots, slab condition, and garage layout are ready for review.</p>
        </div>
      </div>
    </section>
  );
}
