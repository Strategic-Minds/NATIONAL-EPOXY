export function AdminControlPlane() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-[#140f0b] p-5">
      <div className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Control plane</div>
      <h3 className="mt-2 text-xl font-black text-white">Enterprise operations</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {["Leads", "Estimates", "Service areas", "Products", "AI validation", "Workflow health"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold text-white">{item}</div>
            <div className="mt-2 text-sm text-white/66">Ready for preview, routing, and operations control.</div>
          </div>
        ))}
      </div>
    </section>
  );
}
