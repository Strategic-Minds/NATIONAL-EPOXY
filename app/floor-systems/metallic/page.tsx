import { LockedPage } from "@/components/locked/LockedPage";
import { AssetFrame } from "@/components/ui/AssetFrame";

export default function MetallicPage() {
  return (
    <LockedPage title="METALLIC EPOXY" subtitle="Metallic imagery, metallic chart, glitter chart." heroSrc="/images/floor-systems/nep-metallic-epoxy-luxury-lounge.png" heroAlt="Metallic epoxy hero">
      <div className="grid gap-4 md:grid-cols-2">
        <AssetFrame src="/images/floor-systems/nep-metallic-epoxy-luxury-lounge.png" alt="metallic" className="aspect-[4/3] rounded-[0.8rem]" />
        <AssetFrame src="/color-charts/xps-top-metallic-colors-standardized.webp" alt="metallic chart" className="aspect-[4/3] rounded-[0.8rem]" />
      </div>
    </LockedPage>
  );
}
