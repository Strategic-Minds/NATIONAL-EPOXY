export function AssetFrame({
  src,
  alt,
  testId,
  className = ""
}: {
  src: string;
  alt: string;
  testId?: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      data-testid={testId}
      className={`block h-full w-full object-cover ${className}`}
      loading="lazy"
    />
  );
}
