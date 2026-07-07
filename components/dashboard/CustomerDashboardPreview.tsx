import { Card } from "@/components/ui/Card";
import { mockStats } from "@/lib/mock-data";
export function CustomerDashboardPreview() { return <Card title="Customer Dashboard Preview"><div className="grid gap-3 sm:grid-cols-2">{mockStats.map((s) => <div key={s.label} className="rounded-2xl border border-white/10 bg-black/20 p-4"><div className="text-xs uppercase tracking-[0.24em] text-white/50">{s.label}</div><div className="mt-2 text-2xl font-bold">{s.value}</div></div>)}</div></Card>; }
