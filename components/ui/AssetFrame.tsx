export function AssetFrame({
  src,
  alt,
  className = ""
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`block h-full w-full object-cover ${className}`}
      loading="lazy"
    />
  );
}
