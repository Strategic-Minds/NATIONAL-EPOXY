import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";

const items = [
  "Garage Floors",
  "Commercial Floors",
  "Polished Concrete",
  "Flake Floors",
  "Metallic Floors",
  "Quartz Systems",
  "Solid Color",
  "Concrete Stain"
] as const;

export default function ProductsPage() {
  return (
    <AppShell>
      <Header />
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/70">Project Gallery</p>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Floor systems built for every space</h1>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <Card key={item} title={item}>
              <p className="text-sm leading-7 text-white/75">Browse the approved family and move into the design center or estimate funnel.</p>
            </Card>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
