import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { AssetFrame } from "@/components/ui/AssetFrame";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Card } from "@/components/ui/Card";

const systems = [
  ["Garage Floors", "Durable, high-gloss systems for everyday homes."],
  ["Commercial Floors", "Built for traffic, safety, and easy maintenance."],
  ["Polished Concrete", "Clean modern surfaces with long service life."],
  ["Flake Floors", "Textured, decorative, and slip-resistant."],
  ["Metallic Floors", "Luxury depth and high-impact visual finishes."]
] as const;

export default function HomePage() {
  return (
    <AppShell>
      <Header />
      <main className="space-y-10">
        <section className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#120e0a] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-10 lg:p-12">
            <BrandLogo className="h-10 w-auto brightness-110" />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">National Epoxy Pros</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-6xl">
              DURABLE FLOORS. BUILT TO LAST. NATIONWIDE.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
              Premium epoxy, flake, and polished concrete flooring for garages, homes, and businesses.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/estimate" className="rounded-full bg-[#d4af37] px-5 py-3 text-sm font-bold text-black">
                Get My Free Quote
              </Link>
              <Link href="/floor-design-center" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
                View Floor Systems
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Licensed & insured", "Trusted for residential and commercial work."],
                ["5-star reviews", "Consistent service and premium finishes."],
                ["Nationwide service", "Built for fast, professional installation."]
              ].map(([title, text]) => (
                <Card key={title} title={title}>
                  <p className="text-sm leading-6 text-white/70">{text}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px]">
            <AssetFrame src="/images/nep-hero-metallic-showroom-v1.webp" alt="National Epoxy Pros metallic showroom hero" className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <div className="rounded-3xl border border-white/10 bg-black/55 p-5 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Hero quote card</div>
                <div className="mt-2 text-lg font-bold text-white">Get a fast, no-obligation estimate.</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {["Name", "Phone", "Email", "Zip"].map((field) => (
                    <div key={field} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/50">
                      {field}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 md:grid-cols-5">
            {systems.map(([title, copy]) => (
              <Card key={title} title={title}>
                <p className="text-sm leading-6 text-white/70">{copy}</p>
              </Card>
            ))}
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-2">
          <Card title="Before / After">
            <AssetFrame src="/images/approved/nep-approved-pwa-launch-pack-v1.webp" alt="Before and after floor transformation" className="aspect-[16/10] rounded-[1.25rem]" />
          </Card>
          <Card title="Reviews">
            <div className="space-y-4 text-sm leading-7 text-white/75">
              <p>“Looks incredible. Professional team and amazing results.”</p>
              <p>“Best investment we have made for our garage and showroom.”</p>
            </div>
          </Card>
        </section>
        <section className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/70">Color charts</p>
              <h2 className="text-2xl font-black text-white">quote-first funnel and approved system visuals</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card title="Top flake">
              <AssetFrame src="/color-charts/nep-color-chart-top-flake-v1.webp" alt="Top flake color chart" className="aspect-[4/3] rounded-[1.25rem]" />
            </Card>
            <Card title="Glitter">
              <AssetFrame src="/color-charts/nep-color-chart-glitter-v1.webp" alt="Glitter color chart" className="aspect-[4/3] rounded-[1.25rem]" />
            </Card>
            <Card title="Metallic color chart">
              <AssetFrame src="/color-charts/nep-color-chart-metallic-v1.webp" alt="Metallic color chart" className="aspect-[4/3] rounded-[1.25rem]" />
            </Card>
            <Card title="Quartz">
              <AssetFrame src="/color-charts/nep-color-chart-quartz-v1.webp" alt="Quartz color chart" className="aspect-[4/3] rounded-[1.25rem]" />
            </Card>
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card title="Digital bid funnel">
            <p className="text-sm leading-7 text-white/75">Use the estimate flow to collect photos, project details, and contact information before scheduling the install.</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-200/75">quote-first funnel</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/estimate" className="rounded-full bg-[#d4af37] px-5 py-3 text-sm font-bold text-black">Start estimate</Link>
              <Link href="/products" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">Project gallery</Link>
            </div>
          </Card>
          <Card title="How it works">
            <div className="space-y-3 text-sm leading-7 text-white/75">
              <p>1. Request a quote.</p>
              <p>2. Pick your floor system and color family.</p>
              <p>3. Schedule the project and install.</p>
            </div>
          </Card>
        </section>
        <footer className="rounded-[2rem] border border-white/10 bg-black/65 p-6 text-sm text-white/65">
          National Epoxy Pros · Durable floors built to last nationwide.
        </footer>
      </main>
    </AppShell>
  );
}
