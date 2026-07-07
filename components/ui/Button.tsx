export function Button({
  children,
  variant = "primary"
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "rounded-full border border-white/15 bg-[#d9a441] px-4 py-2 font-semibold text-black"
      : "rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold text-white";
  return <button className={className}>{children}</button>;
}
