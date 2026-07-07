import { AssetFrame } from "@/components/ui/AssetFrame";

const charts = [
  ["/color-charts/nep-color-chart-top-flake-v1.webp", "Flake", "Rich flake broadcast with deep contrast."],
  ["/color-charts/nep-color-chart-glitter-v1.webp", "Glitter", "Refined sparkle for premium showroom lighting."],
  ["/color-charts/nep-color-chart-metallic-v1.webp", "Metallic", "Organic movement and luxe reflective depth."],
  ["/color-charts/nep-color-chart-quartz-v1.webp", "Quartz", "Dense texture with durable upscale finish."]
];

export function FloorDesignGrid() {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      {charts.map(([src, title, description]) => (
        <article key={title} className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#120e0a]">
          <div className="relative aspect-[16/10]">
            <AssetFrame src={src} alt={`National Epoxy Pros ${title} floor chart`} className="absolute inset-0" />
          </div>
          <div className="p-5">
            <div className="text-sm font-bold text-white">{title}</div>
            <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
