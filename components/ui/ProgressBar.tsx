export function ProgressBar({ value }: { value: number }) {
  return <div className="h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-[#d9a441]" style={{ width: `${value}%` }} /></div>;
}
