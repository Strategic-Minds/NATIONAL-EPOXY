import Link from "next/link";
import { AssetFrame } from "@/components/ui/AssetFrame";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function PremiumHero() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#120e0a] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative p-6 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_50%)]" />
          <div className="relative">
            <BrandLogo className="h-10 w-auto brightness-110" />
            <div className="mt-8 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">National Epoxy Pros</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
                Durable floors. Built to last. Nationwide.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                Premium epoxy, flake, and polished concrete flooring for garages, homes, and businesses.
                Move customers from inspiration to quote with a clean, customer-facing experience.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/estimate" className="rounded-full bg-[#d4af37] px-5 py-3 text-sm font-bold text-black">
                Get my free quote
              </Link>
              <Link href="/floor-design-center" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
                View floor systems
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Quote-first funnel", "Capture intent before the estimate"],
                ["Nationwide service", "Licensed, insured, and built for fast installs"],
                ["5-star reputation", "Trusted by homeowners and commercial clients"]
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold text-white">{title}</div>
                  <div className="mt-1 text-sm text-white/62">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative min-h-[420px] border-t border-white/10 lg:border-l lg:border-t-0">
          <AssetFrame src="/images/nep-hero-metallic-showroom-v1.webp" alt="National Epoxy Pros metallic showroom hero" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <div className="rounded-3xl border border-white/10 bg-black/55 p-5 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Launch-ready hero</div>
              <div className="mt-2 text-lg font-bold text-white">Premium showroom lighting, metallic floor depth, and strong negative space for headlines.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
