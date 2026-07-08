import { LockedPage } from "@/components/locked/LockedPage";
import { AssetFrame } from "@/components/ui/AssetFrame";

export default function PolishedConcretePage() {
  return (
    <LockedPage title="POLISHED CONCRETE" subtitle="Polished concrete imagery for commercial spaces." heroSrc="/images/floor-systems/nep-polished-concrete-commercial-lobby.png" heroAlt="Polished concrete hero">
      <div className="grid gap-4 md:grid-cols-2">
        <AssetFrame src="/images/floor-systems/nep-polished-concrete-commercial-lobby.png" alt="polished lobby" className="aspect-[4/3] rounded-[0.8rem]" />
        <AssetFrame src="/images/floor-systems/nep-polished-concrete-retail.png" alt="polished retail" className="aspect-[4/3] rounded-[0.8rem]" />
      </div>
    </LockedPage>
  );
}
