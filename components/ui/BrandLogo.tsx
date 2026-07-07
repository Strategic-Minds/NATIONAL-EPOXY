export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logos/nep-logo-horizontal-black-gold-v1.svg"
      alt="National Epoxy Pros"
      className={className}
      loading="eager"
    />
  );
}
