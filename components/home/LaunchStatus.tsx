import { StatusBadge } from "@/components/ui/StatusBadge";
export function LaunchStatus() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <StatusBadge>Preview Ready</StatusBadge>
      <span className="text-sm text-white/72">Cron, routes, assets, and receipts are wired for validation.</span>
    </div>
  );
}
