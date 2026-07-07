import Link from "next/link";

export function Header() {
  return <header className="mb-8 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4"><div className="font-black tracking-[0.24em] text-amber-100">NATIONAL EPOXY PROS</div><nav className="flex gap-4 text-sm text-white/80"><Link href="/">Home</Link><Link href="/dashboard">Dashboard</Link><Link href="/admin">Admin</Link></nav></header>;
}
