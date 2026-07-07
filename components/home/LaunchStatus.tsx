import { StatusBadge } from "@/components/ui/StatusBadge";
export function LaunchStatus() { return <div className="flex items-center gap-3"><StatusBadge>Preview Ready</StatusBadge><span className="text-sm text-white/70">Cron, routes, assets, and receipts are wired for validation.</span></div>; }
