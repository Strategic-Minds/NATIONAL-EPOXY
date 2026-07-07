import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { AssetFrame } from "@/components/ui/AssetFrame";
import { Card } from "@/components/ui/Card";

const charts = [
  ["/color-charts/nep-color-chart-top-flake-v1.webp", "Flake systems"],
  ["/color-charts/nep-color-chart-metallic-v1.webp", "Metallic systems"],
  ["/color-charts/nep-color-chart-quartz-v1.webp", "Quartz systems"],
  ["/color-charts/nep-color-chart-glitter-v1.webp", "Glitter systems"]
] as const;

export default function FloorDesignCenterPage() {
  return (
    <AppShell>
      <Header />
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/70">Design Center</p>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Design your floor. Built to last.</h1>
        </div>
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {charts.map(([src, title]) => (
              <Card key={title} title={title}>
                <AssetFrame src={src} alt={title} className="aspect-[4/3] rounded-[1.25rem]" />
              </Card>
            ))}
            <Card title="Solid color systems">
              <p className="text-sm leading-7 text-white/75">Clean, uniform finishes for shops, utility areas, and modern spaces.</p>
            </Card>
            <Card title="Stain / dye systems">
              <p className="text-sm leading-7 text-white/75">Organic variation and rich tone for decorative concrete floors.</p>
            </Card>
          </div>
          <Card title="Project at a glance">
            <div className="space-y-3 text-sm leading-7 text-white/75">
              <p>System filter: flake, metallic, quartz, solid, stain.</p>
              <p>Color filter: warm, cool, bold, neutral.</p>
              <p>Quote drawer: compare selected system and next step.</p>
            </div>
          </Card>
        </div>
      </section>
    </AppShell>
  );
}
