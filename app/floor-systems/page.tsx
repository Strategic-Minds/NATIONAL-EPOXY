import { LockedPage } from "@/components/locked/LockedPage";
import { AssetFrame } from "@/components/ui/AssetFrame";
import Link from "next/link";

export default function FloorSystemsPage() {
  return (
    <LockedPage title="FLOOR SYSTEMS" subtitle="Overview of all core systems." heroSrc="/images/floor-systems/nep-metallic-epoxy-luxury-lounge.png" heroAlt="Floor systems hero">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          ["/floor-systems/garage-floors", "/images/floor-systems/nep-hero-flake-garage-sports-cars.png", "Garage Floors"],
          ["/floor-systems/metallic", "/images/floor-systems/nep-metallic-epoxy-luxury-lounge.png", "Metallic Epoxy"],
          ["/floor-systems/polished-concrete", "/images/floor-systems/nep-polished-concrete-commercial-lobby.png", "Polished Concrete"],
          ["/floor-systems/exterior-coatings", "/images/floor-systems/nep-exterior-patio-coating.png", "Exterior Coatings"]
        ].map(([href, src, label]) => (
          <Link key={label} href={href as string} className="rounded-[1rem] border border-black/10 bg-white p-3">
            <AssetFrame src={src as string} alt={label as string} className="aspect-[4/3] rounded-[0.7rem]" />
            <div className="mt-3 text-sm font-black uppercase">{label}</div>
          </Link>
        ))}
      </div>
    </LockedPage>
  );
}
