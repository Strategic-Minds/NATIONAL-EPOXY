import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { AssetFrame } from "@/components/ui/AssetFrame";

export function LockedPage({
  title,
  subtitle,
  heroSrc,
  heroAlt,
  ctaHref = "/free-digital-bid",
  ctaLabel = "Start My Free Digital Bid",
  children
}: {
  title: string;
  subtitle: string;
  heroSrc: string;
  heroAlt: string;
  ctaHref?: string;
  ctaLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-black">
      <Header />
      <section className="mx-auto max-w-[1600px] px-4 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.2rem] bg-white p-5 shadow-sm">
            <div className="text-[56px] font-black leading-[0.9] tracking-tight">{title}</div>
            <div className="mt-4 max-w-[760px] text-[18px] leading-7 text-black/75">{subtitle}</div>
            <div className="mt-6">{children}</div>
          </div>
          <div className="rounded-[1.2rem] bg-black p-4 shadow-sm">
            <AssetFrame src={heroSrc} alt={heroAlt} className="aspect-[4/5] rounded-[0.9rem] object-cover" />
            <div className="mt-4 rounded-[0.9rem] bg-white p-4">
              <div className="text-xl font-black uppercase leading-tight">GET A FAST, NO-OBLIGATION QUOTE</div>
              <div className="mt-3 grid gap-2">
                {["Full Name", "Phone Number", "Email Address", "Zip Code", "Project Type"].map((f) => (
                  <div key={f} className="rounded-[0.35rem] border border-black/15 px-4 py-3 text-sm text-black/45">{f}</div>
                ))}
              </div>
              <Link href={ctaHref} className="mt-4 block rounded-[0.35rem] bg-[#f2b21c] px-4 py-3 text-center text-sm font-black uppercase text-black">
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
