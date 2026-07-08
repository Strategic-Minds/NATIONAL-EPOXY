import { LockedPage } from "@/components/locked/LockedPage";
import { AssetFrame } from "@/components/ui/AssetFrame";

export default function ExteriorCoatingsPage() {
  return (
    <LockedPage title="EXTERIOR COATINGS" subtitle="Patio and driveway imagery." heroSrc="/images/floor-systems/nep-exterior-patio-coating.png" heroAlt="Exterior coatings hero">
      <div className="grid gap-4 md:grid-cols-2">
        <AssetFrame src="/images/floor-systems/nep-exterior-patio-coating.png" alt="patio coating" className="aspect-[4/3] rounded-[0.8rem]" />
        <AssetFrame src="/images/floor-systems/nep-exterior-driveway-coating.png" alt="driveway coating" className="aspect-[4/3] rounded-[0.8rem]" />
      </div>
    </LockedPage>
  );
}
