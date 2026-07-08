import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { AssetFrame } from "@/components/ui/AssetFrame";

const systems = [
  ["Flake Systems", "/images/floor-systems/nep-hero-flake-garage-sports-cars.png", "Decorative flake finishes with endless color combinations."],
  ["Metallic Epoxy", "/images/floor-systems/nep-metallic-epoxy-luxury-lounge.png", "Stunning, one-of-a-kind metallic floors with depth and movement."],
  ["Polished Concrete", "/images/floor-systems/nep-polished-concrete-commercial-lobby.png", "Sleek, natural shine with long-lasting performance."],
  ["Solid Color Epoxy", "/images/floor-systems/nep-solid-color-commercial-epoxy.png", "Clean, seamless, and durable floors in a wide range of colors."],
  ["Exterior Patio Coating", "/images/floor-systems/nep-exterior-patio-coating.png", "Slip-resistant, UV-stable coatings built for outdoor living spaces."],
  ["Exterior Driveway Coating", "/images/floor-systems/nep-exterior-driveway-coating.png", "Tough, long-lasting finishes that stand up to weather and wear."]
] as const;

const trust = ["100% Satisfaction Guaranteed", "Industry Leading Warranties", "Fast, Professional Installation", "Thousands of 5-Star Reviews"];

function UtilityBar() {
  return (
    <div className="hidden border-b border-[#3b2c00] bg-black text-[#f2b21c] lg:block">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.06em]">
        {["24-Hour Quote Guarantee", "Over 70 Locations Nationwide", "Licensed, Insured & Bonded", "5-Star Rated by Homeowners", "Powered by Xtreme Polishing Systems"].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span>✦</span>
            <span className="text-white/90">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroForm() {
  return (
    <div className="w-full max-w-[470px] rounded-[1.7rem] bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
      <div className="text-[1.9rem] font-black leading-[0.92] tracking-tight">
        GET YOUR <span className="text-[#f2b21c]">FREE</span> DIGITAL BID.
      </div>
      <div className="mt-1 text-sm text-black/70">Fast. Accurate. No Obligation.</div>
      <div className="mt-4 grid gap-2">
        {["Full Name", "Phone Number", "Email Address", "Zip Code", "Project Type", "Project Notes"].map((f, i) => (
          <div key={f} className={i === 5 ? "rounded-[0.35rem] border border-black/15 px-4 py-4 text-sm text-black/45" : "rounded-[0.35rem] border border-black/15 px-4 py-3 text-sm text-black/45"}>
            {f}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-[0.35rem] bg-[#d6a018] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.04em] text-black">
        START MY FREE DIGITAL BID
      </div>
      <div className="mt-2 text-center text-xs text-black/60">🔒 Routes to /free-digital-bid</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-black">
      <UtilityBar />
      <Header />
      <section className="relative overflow-hidden bg-[#f5f1e8]">
        <div className="mx-auto grid max-w-[1600px] items-stretch gap-0 px-4 pb-0 pt-6 lg:grid-cols-[0.9fr_1.15fr_0.78fr] lg:px-0 lg:pt-0">
          <div className="relative z-10 px-2 py-4 lg:px-8 lg:py-14">
            <div className="text-[64px] font-black leading-[0.92] tracking-tight xl:text-[76px]">
              DURABLE FLOORS.
              <br />
              BUILT TO LAST.
              <br />
              <span className="text-[#f2b21c]">NATIONWIDE.</span>
            </div>
            <p className="mt-4 max-w-[500px] text-[20px] leading-[1.15] text-black/80">
              Premium epoxy, flake, metallic, and concrete coating systems for homes, businesses, and industrial spaces.
            </p>
          </div>
          <div className="relative min-h-[520px] bg-[#1b1b1b]">
            <AssetFrame src="/images/hero/national-epoxy-pros-garage-epoxy-hero.png" alt="National Epoxy Pros garage epoxy hero" testId="homepage-hero-image" className="absolute inset-0 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1e8] via-transparent to-transparent" />
            <div className="absolute left-[36%] top-0 hidden h-full w-[46px] bg-[#f2b21c] [clip-path:polygon(0_0,100%_0,86%_100%,0_100%)] lg:block" />
            <div className="absolute right-0 top-8 hidden w-full justify-end pr-6 lg:flex">
              <HeroForm />
            </div>
          </div>
          <div className="relative hidden items-end pb-6 lg:flex">
            <div className="w-full rounded-[2.25rem] bg-black p-3 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
              <div className="rounded-[1.7rem] bg-[#0b0b0b] p-4 text-white">
                <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em] text-[#f2b21c]">
                  <span>☰</span>
                  <img src="/logos/nep-logo-horizontal-black-gold-v1.svg" alt="National Epoxy Pros" className="h-6 brightness-0 invert" />
                  <span>☎</span>
                </div>
                <div className="rounded-[1.1rem] bg-white p-4 text-black">
                  <div className="text-[1.3rem] font-black leading-[0.92] tracking-tight">
                    DURABLE FLOORS.
                    <br />
                    BUILT TO LAST.
                    <br />
                    <span className="text-[#f2b21c]">NATIONWIDE.</span>
                  </div>
                  <p className="mt-3 text-[0.78rem] leading-5 text-black/75">Premium epoxy, flake, metallic and polished concrete flooring for garages, homes and businesses.</p>
                  <div className="mt-4 grid gap-2">
                    {["Full Name", "Phone Number", "Email Address", "Zip Code", "Project Type"].map((field) => (
                      <div key={field} className="rounded-lg border border-black/10 px-3 py-2 text-xs text-black/45">
                        {field}
                      </div>
                    ))}
                    <div className="rounded-lg border border-black/10 px-3 py-3 text-xs text-black/45">Tell us about your project...</div>
                    <div className="rounded-lg bg-[#f2b21c] px-3 py-3 text-center text-xs font-black uppercase tracking-[0.08em] text-black">Get My Free Quote</div>
                    <div className="text-center text-[0.68rem] text-black/60">100% Private & Secure</div>
                  </div>
                </div>
                <div className="mt-3 flex justify-around rounded-[1rem] border border-white/10 bg-[#111] px-2 py-3 text-[0.62rem] font-bold uppercase tracking-[0.08em] text-[#f2b21c]">
                  <span>Premium Materials</span>
                  <span>Built To Last</span>
                  <span>Installed By Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-4 max-w-[1600px] px-4 lg:hidden">
          <HeroForm />
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-[1600px] gap-3 px-4 py-4 text-[11px] font-black uppercase tracking-[0.08em] sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {trust.map((item) => (
            <div key={item} className="flex items-center justify-center gap-3">
              <span className="text-[#f2b21c]">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-8 lg:px-8">
        <div className="mb-3 text-center text-[30px] font-black uppercase tracking-tight">Premium Floor Systems</div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {systems.map(([title, src, copy]) => (
            <article key={title} className="overflow-hidden rounded-[0.9rem] border border-black/15 bg-white shadow-sm">
              <AssetFrame src={src} alt={title} className="aspect-[4/3] object-cover" />
              <div className="p-4">
                <h3 className="text-[18px] font-black uppercase leading-5">{title}</h3>
                <p className="mt-2 text-sm leading-5 text-black/75">{copy}</p>
                <div className="mt-4 inline-flex rounded-full bg-[#f2b21c] px-4 py-2 text-xs font-black uppercase tracking-[0.04em] text-black">Learn More →</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 pb-10 lg:px-8">
        <div className="rounded-[1.2rem] bg-black p-4 text-white shadow-sm lg:flex lg:items-center lg:justify-between">
          <div className="grid gap-2 lg:max-w-[65%]">
            <div className="text-[28px] font-black uppercase tracking-tight text-[#f2b21c]">Design Center</div>
            <div className="text-sm text-white/85">Explore colors, flakes, and finishes. Visualize your space with our interactive tools and premium material options.</div>
          </div>
          <Link href="/design-center" className="mt-4 inline-flex rounded-[0.35rem] bg-[#f2b21c] px-5 py-3 text-sm font-black uppercase text-black lg:mt-0">Explore Design Center</Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 pb-8 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Built To Last", "Industry-leading materials and systems backed by up to a Lifetime Warranty."],
            ["Nationwide Service", "Over 70 locations and growing. Premium results, no matter where you are."],
            ["Expert Installers", "Background-checked, certified professionals delivering flawless results."],
            ["5-Star Experience", "Thousands of happy customers and a proven track record of excellence."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-[0.9rem] border border-black/15 bg-white p-5">
              <div className="text-[20px] font-black uppercase">{title}</div>
              <div className="mt-2 text-sm leading-6 text-black/75">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 pb-12 lg:px-8">
        <div className="text-center text-[32px] font-black uppercase">How It Works</div>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            ["Submit Your Project", "Fill out our quick form with details about your space. It only takes 2 minutes."],
            ["Receive Your Digital Bid", "Get a fast, accurate digital bid with pricing and recommended floor system."],
            ["Design & Approve", "Choose your colors and finishes in our Design Center and approve your project."],
            ["Professional Installation", "Our expert team installs your floor with precision and care. Built to last."]
          ].map(([title, text], idx) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-[#f2b21c] text-xl font-black">{idx + 1}</div>
              <div className="mt-4 text-[18px] font-black uppercase">{title}</div>
              <div className="mt-2 text-sm leading-6 text-black/75">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-4 py-10 md:grid-cols-4 lg:px-8">
          <div>
            <img src="/logos/nep-logo-horizontal-black-gold-v1.svg" alt="National Epoxy Pros" className="h-12 brightness-0 invert" />
            <p className="mt-4 text-sm leading-6 text-white/75">Premium epoxy, flake, metallic, and concrete coating systems for homes, businesses, and industrial spaces nationwide.</p>
          </div>
          <div>
            <div className="text-lg font-black uppercase text-[#f2b21c]">Quick Links</div>
            <div className="mt-3 grid gap-2 text-sm text-white/80">
              {["Floor Systems", "Design Center", "Digital Bid", "Reviews", "About Us", "Contact"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div>
            <div className="text-lg font-black uppercase text-[#f2b21c]">Services</div>
            <div className="mt-3 grid gap-2 text-sm text-white/80">
              {["Flake Systems", "Metallic Epoxy", "Polished Concrete", "Solid Color Epoxy", "Exterior Patio Coating", "Exterior Driveway Coating"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div>
            <div className="text-lg font-black uppercase text-[#f2b21c]">Contact Us</div>
            <div className="mt-3 grid gap-2 text-sm text-white/80">
              <span>support@nationalepoxypros.com</span>
              <span>leads@nationalepoxypros.com</span>
              <span>WhatsApp: +15559730487</span>
              <span>70+ Locations Nationwide</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
