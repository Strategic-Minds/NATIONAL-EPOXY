import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

const nav = [
  ["/floor-systems", "Floor Systems"],
  ["/design-center", "Design Center"],
  ["/free-digital-bid", "Digital Bid"],
  ["/contact", "Reviews"],
  ["/contact", "About"],
  ["/contact", "Contact"]
] as const;

export function Header() {
  return (
    <header className="border-b border-black/10 bg-black text-white">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <BrandLogo className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 xl:flex">
          {nav.map(([href, label]) => (
            <Link key={label} href={href} className="text-sm font-semibold uppercase tracking-[0.05em] text-white transition hover:text-[#f2b21c]">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="tel:1888123NEPX" className="hidden text-sm font-black text-[#f2b21c] lg:inline-flex">
            (888) 123-NEPX
          </Link>
          <Link href="/free-digital-bid" className="rounded-[0.35rem] bg-[#f2b21c] px-5 py-3 text-sm font-black uppercase tracking-[0.04em] text-black">
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
