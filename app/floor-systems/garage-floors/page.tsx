import { LockedPage } from "@/components/locked/LockedPage";
import { AssetFrame } from "@/components/ui/AssetFrame";

export default function GarageFloorsPage() {
  return (
    <LockedPage title="GARAGE / FLAKE" subtitle="Garage flake imagery and the Top 12 Epoxy Flake Colors chart." heroSrc="/images/floor-systems/nep-hero-flake-garage-sports-cars.png" heroAlt="Garage flake hero">
      <div className="grid gap-4 md:grid-cols-2">
        <AssetFrame src="/images/floor-systems/nep-hero-flake-garage-sports-cars.png" alt="garage" className="aspect-[4/3] rounded-[0.8rem]" />
        <AssetFrame src="/color-charts/xps-top-flake-colors-approved.webp" alt="flake chart" className="aspect-[4/3] rounded-[0.8rem]" />
      </div>
    </LockedPage>
  );
}
