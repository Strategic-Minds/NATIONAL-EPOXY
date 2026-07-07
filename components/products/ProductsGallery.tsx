import Link from "next/link";
import { AssetFrame } from "@/components/ui/AssetFrame";
import { Card } from "@/components/ui/Card";

const products = [
  { title: "Flake systems", src: "/color-charts/nep-color-chart-top-flake-v1.webp" },
  { title: "Glitter systems", src: "/color-charts/nep-color-chart-glitter-v1.webp" },
  { title: "Metallic systems", src: "/color-charts/nep-color-chart-metallic-v1.webp" },
  { title: "Quartz systems", src: "/color-charts/nep-color-chart-quartz-v1.webp" }
] as const;

export function ProductsGallery() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/70">Products</p>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Floor systems built for garages, homes, and commercial spaces</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.title} title={product.title}>
            <AssetFrame src={product.src} alt={product.title} className="aspect-[4/3] rounded-[1.25rem]" />
            <div className="mt-4 text-sm leading-6 text-white/70">
              Browse the approved color family and move into the design center or quote funnel.
            </div>
            <Link href="/floor-design-center" className="mt-4 inline-flex rounded-full bg-[#d4af37] px-4 py-2 text-sm font-bold text-black">
              Explore in design center
            </Link>
          </Card>
        ))}
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white/75">
        Need a quote? <Link href="/estimate" className="font-semibold text-amber-200">Start the estimate funnel</Link>.
      </div>
    </section>
  );
}
