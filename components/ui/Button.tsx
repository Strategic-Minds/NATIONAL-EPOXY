export function Button({ children }: { children: React.ReactNode }) {
  return <button className="rounded-full border border-white/15 bg-[#d9a441] px-4 py-2 font-semibold text-black">{children}</button>;
}
