import { LockedPage } from "@/components/locked/LockedPage";
import { AssetFrame } from "@/components/ui/AssetFrame";

export default function DesignCenterPage() {
  return (
    <LockedPage
      title="FLOOR DESIGN CENTER"
      subtitle="Explore all six exact charts and combinations in a premium visualizer experience."
      heroSrc="/images/hero/national-epoxy-pros-garage-epoxy-hero.png"
      heroAlt="National Epoxy Pros design center hero"
      ctaHref="/free-digital-bid"
      ctaLabel="Continue Bid"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          ["/color-charts/xps-top-flake-colors-approved.webp", "Top 12 Epoxy Flake Colors"],
          ["/color-charts/xps-top-glitter-additive-colors.webp", "Top Glitter Additive Colors"],
          ["/color-charts/xps-top-metallic-colors-standardized.webp", "Top Metallic Colors"],
          ["/color-charts/xps-top-quartz-colors-standardized.webp", "Top Quartz Colors"],
          ["/color-charts/xps-concrete-dye-stain-colors.webp", "Concrete Dye & Stain Colors"],
          ["/color-charts/xps-solid-color-epoxy-base-coats.webp", "Solid Color Epoxy Base Coats"]
        ].map(([src, label]) => (
          <div key={label} className="rounded-[1rem] border border-black/10 bg-white p-3">
            <AssetFrame src={src} alt={label} className="aspect-[4/3] rounded-[0.7rem]" />
            <div className="mt-3 text-sm font-black uppercase">{label}</div>
          </div>
        ))}
      </div>
    </LockedPage>
  );
}
