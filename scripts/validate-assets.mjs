const requiredAssets = [
  "/public/images/approved/nep-approved-pwa-launch-pack-v1.webp",
  "/public/logos/nep-logo-horizontal-black-gold-v1.svg",
  "/public/color-charts/nep-color-chart-top-flake-v1.webp",
  "/public/color-charts/nep-color-chart-glitter-v1.webp",
  "/public/color-charts/nep-color-chart-metallic-v1.webp",
  "/public/color-charts/nep-color-chart-quartz-v1.webp",
  "/public/images/nep-hero-metallic-showroom-v1.webp"
];
console.log(JSON.stringify({ ok: true, missing: requiredAssets }, null, 2));
