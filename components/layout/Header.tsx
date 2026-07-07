import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

const nav = [
  ["/floor-design-center", "Floor Systems"],
  ["/floor-design-center", "Design Center"],
  ["/products", "Project Gallery"],
  ["/estimate", "Resources"],
  ["/", "About Us"]
] as const;

export function Header() {
  return (
    <header className="w-full border-b border-black/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <BrandLogo className="h-10 w-auto" />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map(([href, label]) => (
            <Link key={label} href={href} className="text-sm font-semibold uppercase tracking-[0.08em] text-white/90">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="tel:1888123NEPX" className="rounded-full border border-[#d4af37]/30 bg-[#0b0b0b] px-4 py-2 text-sm font-bold text-[#f2b21c]">
            (888) 123-NEPX
          </Link>
          <Link href="/estimate" className="rounded-full bg-[#f2b21c] px-4 py-2 text-sm font-black text-black">
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
