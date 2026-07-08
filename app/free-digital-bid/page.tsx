import { LockedPage } from "@/components/locked/LockedPage";
import { AssetFrame } from "@/components/ui/AssetFrame";

export default function FreeDigitalBidPage() {
  return (
    <LockedPage
      title="GET YOUR FREE DIGITAL BID."
      subtitle="A premium conversion-focused quote funnel with project details, upload slots, finish selection, and an approval-ready summary."
      heroSrc="/images/hero/national-epoxy-pros-garage-epoxy-hero.png"
      heroAlt="National Epoxy Pros digital bid hero"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[1rem] bg-[#fbfaf8] p-4">
          <div className="grid gap-3 md:grid-cols-2">
            {["Contact & Project Information", "Upload Photos", "Choose Floor Finish", "Choose Colors & Finish Details", "Preview Your Floor Direction", "Review & Submit Your Request"].map((item) => (
              <div key={item} className="rounded-[0.8rem] border border-black/10 bg-white p-4 text-sm font-black uppercase">{item}</div>
            ))}
          </div>
        </div>
        <div className="rounded-[1rem] bg-black p-4 text-white">
          <div className="text-xl font-black uppercase text-[#f2b21c]">Flooring Inspiration</div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <AssetFrame src="/images/floor-systems/nep-hero-flake-garage-sports-cars.png" alt="flake" className="aspect-[4/3] rounded-[0.7rem]" />
            <AssetFrame src="/images/floor-systems/nep-metallic-epoxy-luxury-lounge.png" alt="metallic" className="aspect-[4/3] rounded-[0.7rem]" />
            <AssetFrame src="/images/floor-systems/nep-polished-concrete-commercial-lobby.png" alt="polished" className="aspect-[4/3] rounded-[0.7rem]" />
            <AssetFrame src="/images/floor-systems/nep-exterior-driveway-coating.png" alt="driveway" className="aspect-[4/3] rounded-[0.7rem]" />
          </div>
        </div>
      </div>
    </LockedPage>
  );
}
