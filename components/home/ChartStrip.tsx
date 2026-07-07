import Link from "next/link";
import { AssetFrame } from "@/components/ui/AssetFrame";

const charts = [
  ["/color-charts/nep-color-chart-top-flake-v1.webp", "Top flake epoxy color chart", "top-flake-chart"],
  ["/color-charts/nep-color-chart-glitter-v1.webp", "Glitter additive color chart", "glitter-chart"],
  ["/color-charts/nep-color-chart-metallic-v1.webp", "Metallic epoxy color chart", "metallic-chart"],
  ["/color-charts/nep-color-chart-quartz-v1.webp", "Quartz epoxy color chart", "quartz-chart"]
];

export function ChartStrip() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-6">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/80">Color chart preview</div>
          <h2 className="mt-2 text-2xl font-black text-white">Available finishes</h2>
        </div>
        <Link href="/floor-design-center" className="text-sm font-semibold text-amber-200">
          Open floor design center
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {charts.map(([src, label, testId]) => (
          <article key={label} className="overflow-hidden rounded-3xl border border-white/10 bg-[#120e0a]">
            <div className="relative aspect-[4/3]">
              <AssetFrame src={src} alt={label} testId={testId} className="absolute inset-0" />
            </div>
            <div className="p-4">
              <div className="text-sm font-bold text-white">{label}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
