import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { ChartStrip } from "@/components/home/ChartStrip";
import { AssetFrame } from "@/components/ui/AssetFrame";
import { Card } from "@/components/ui/Card";

const systems = [
  ["Garage Floors", "/color-charts/nep-color-chart-top-flake-v1.webp", "Built tough. Looks amazing."],
  ["Flake Floors", "/color-charts/nep-color-chart-glitter-v1.webp", "Stylish. Slip-resistant. Built to last."],
  ["Metallic Floors", "/color-charts/nep-color-chart-metallic-v1.webp", "High-gloss. Unique. One-of-a-kind."],
  ["Quartz Systems", "/color-charts/nep-color-chart-quartz-v1.webp", "Extreme durability. Maximum traction."],
  ["Polished Concrete", "/images/approved/nep-approved-pwa-launch-pack-v1.webp", "Sleek. Strong. Low maintenance."],
  ["Commercial Floors", "/images/approved/nep-approved-pwa-launch-pack-v1.webp", "Durable. Professional. Built to perform."]
] as const;

function TrustBar() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-xs font-bold uppercase tracking-[0.12em] sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {["100% Satisfaction Guaranteed", "Industry Leading Warranties", "Fast, Professional Installation", "Thousands of 5-Star Reviews"].map((item) => (
          <div key={item} className="flex items-center justify-center rounded-2xl border border-[#f2b21c]/20 bg-black px-4 py-3 text-center text-white">
            <span className="mr-2 text-[#f2b21c]">◆</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function BottomCta() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Call now for a free quote</div>
          <div className="text-3xl font-black tracking-tight text-[#f2b21c]">(888) 123-NEPX</div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="rounded-full border border-white/10 px-4 py-2 text-sm">Lifetime warranty</div>
          <div className="rounded-full border border-white/10 px-4 py-2 text-sm">5-star service</div>
          <div className="rounded-full border border-white/10 px-4 py-2 text-sm">Nationwide coverage</div>
          <Link href="/estimate" className="rounded-full bg-[#f2b21c] px-5 py-3 text-sm font-black text-black">
            Get My Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <AppShell>
      <Header />
      <main className="bg-white text-black">
        <section className="relative overflow-hidden bg-[#f7f5f1]">
          <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c28a00]">National Epoxy Pros</p>
                <h1 className="mt-4 max-w-md text-5xl font-black leading-[0.92] tracking-tight text-black sm:text-7xl">
                  DURABLE FLOORS.
                  <br />
                  BUILT TO LAST.
                  <br />
                  <span className="text-[#f2b21c]">NATIONWIDE.</span>
                </h1>
                <p className="mt-5 max-w-lg text-base leading-7 text-black/80 sm:text-lg">
                  Premium epoxy, flake, metallic & polished concrete flooring for garages, homes and businesses.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[0.18em] text-black">
                  {["Premium Materials", "Built To Last", "Installed By Experts"].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3">
                      <span className="text-[#f2b21c]">⬢</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-[56%] hidden h-full w-8 -skew-x-[18deg] bg-gradient-to-b from-[#f2b21c] via-[#d19a16] to-[#f6d56c] lg:block" />
            </div>
            <div className="relative min-h-[420px] px-4 pb-8 pt-2 sm:px-6 lg:px-8 lg:py-8">
              <AssetFrame
                src="/images/nep-hero-metallic-showroom-v1.webp"
                alt="National Epoxy Pros metallic epoxy showroom floor"
                testId="homepage-hero-image"
                className="absolute inset-0 rounded-none lg:rounded-l-[1.5rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5f1] via-transparent to-transparent lg:from-transparent lg:to-transparent" />
              <div className="relative ml-auto mt-4 max-w-md rounded-[1.75rem] bg-white p-5 shadow-[0_18px_40px_rgba(0,0,0,0.16)] lg:mt-6">
                <div className="text-xl font-black leading-tight">
                  GET A <span className="text-[#f2b21c]">FAST</span>, NO-OBLIGATION
                  <br />
                  QUOTE FOR YOUR PROJECT
                </div>
                <div className="mt-4 grid gap-3">
                  {["Full Name", "Phone Number", "Email Address", "Zip Code", "Project Type", "Tell us about your project..."].map((field, index) => (
                    <div key={field} className={index === 5 ? "h-24 rounded-xl border border-black/10 px-4 py-3 text-sm text-black/45" : "rounded-xl border border-black/10 px-4 py-3 text-sm text-black/45"}>
                      {field}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl bg-[#f2b21c] px-4 py-3 text-center text-sm font-black text-black">
                  GET MY FREE QUOTE
                </div>
                <div className="mt-2 text-center text-xs text-black/60">100% Private & Secure</div>
              </div>
            </div>
          </div>
          <div className="h-4 bg-black [clip-path:polygon(0_0,100%_0,100%_100%,0_40%)]" />
        </section>

        <TrustBar />

        <section className="mx-auto max-w-7xl bg-white px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card title="Before / After">
              <AssetFrame
                src="/images/approved/nep-approved-pwa-launch-pack-v1.webp"
                alt="Before and after epoxy floor comparison"
                testId="before-after-comparison"
                className="aspect-[16/9] rounded-[1.25rem]"
              />
            </Card>
            <Card title="Reviews 4.9 ★★★★★">
              <div className="grid gap-3">
                {[
                  "Looks incredible! Couldn't be happier!",
                  "Professional team and amazing results.",
                  "Best investment we've made!"
                ].map((quote) => (
                  <div key={quote} className="rounded-2xl border border-black/10 bg-[#faf8f3] p-4 text-sm leading-6">{quote}</div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl bg-white px-4 pb-6 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map(([title, src, copy]) => (
              <Card key={title} title={title}>
                <AssetFrame src={src} alt={title} className="aspect-[4/3] rounded-[1rem]" />
                <p className="mt-3 text-sm leading-6 text-black/75">{copy}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl bg-white px-4 pb-8 sm:px-6 lg:px-8">
          <ChartStrip />
        </section>

        <section className="border-t border-black/10 bg-[#f7f5f1] px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 rounded-[1.5rem] border border-black/10 bg-white p-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Step 1\nTell us about your project",
                "Step 2\nGet your custom quote",
                "Step 3\nReview & approve your options",
                "Step 4\nWe schedule your installation",
                "Step 5\nEnjoy your new floor for years"
              ].map((step) => (
                <div key={step} className="rounded-2xl px-3 py-2 text-sm font-semibold text-black/80 whitespace-pre-line">
                  {step}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[1.25rem] border border-[#f2b21c]/30 bg-white px-5 py-4 text-center text-sm font-bold text-black shadow-sm">
              Prefer to talk now? <span className="text-[#f2b21c]">(888) 123-NEPX</span>
            </div>
          </div>
        </section>

        <BottomCta />
      </main>
    </AppShell>
  );
}
