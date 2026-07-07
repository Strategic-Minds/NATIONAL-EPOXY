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
    <header className="mb-6 rounded-[1.75rem] border border-white/10 bg-black/85 px-4 py-4 backdrop-blur sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-4">
          <BrandLogo className="h-9 w-auto sm:h-10" />
          <div className="hidden text-xs uppercase tracking-[0.35em] text-amber-200/70 sm:block">Durable Floors. Built To Last.</div>
        </Link>
        <div className="flex flex-col gap-3 lg:items-end">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="tel:18005551234" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
              (800) 555-1234
            </Link>
            <Link href="/estimate" className="rounded-full bg-[#d4af37] px-4 py-2 text-sm font-bold text-black">
              Get Quote
            </Link>
          </div>
          <nav className="flex flex-wrap gap-2">
            {nav.map(([href, label]) => (
              <Link
                key={href + label}
                href={href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-amber-300/40 hover:bg-amber-300/10"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
