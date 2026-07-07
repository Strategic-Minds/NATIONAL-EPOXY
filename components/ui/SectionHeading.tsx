export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/80">{eyebrow}</div>
      ) : null}
      <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72 sm:text-base">{description}</p> : null}
    </div>
  );
}
