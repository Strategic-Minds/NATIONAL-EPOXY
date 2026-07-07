import { Card } from "@/components/ui/Card";

export function AdminAIInsights() {
  return (
    <Card title="AI Command Center">
      <div className="grid gap-3 text-sm text-white/75 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-3">AI Quote Assistant: Ready / Demo Mode</div>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-3">WhatsApp Automation: Dry Run Ready</div>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-3">SMS Follow-Up: Dry Run Ready</div>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-3">AI Lead Scoring: Ready</div>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-3">Photo Review Assistant: Demo Mode</div>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-3">Proposal Drafting: Ready</div>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-3">Vercel AI Gateway: Config Required</div>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-3">Supabase Memory: Config Required</div>
      </div>
    </Card>
  );
}
