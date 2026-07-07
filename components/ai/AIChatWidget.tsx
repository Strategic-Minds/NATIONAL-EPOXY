import { Card } from "@/components/ui/Card";

export function AIChatWidget() {
  return (
    <Card title="AI Chat Assistant">
      <div className="space-y-3 text-sm leading-7 text-white/75">
        <p>Demo-safe customer assistant for quote questions, floor system suggestions, and project next steps.</p>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white/90">"How do I pick between flake and metallic?"</div>
        <div className="rounded-2xl border border-[#f2b21c]/20 bg-[#fff7df] p-4 text-black">Use flake for texture and durability; metallic for a dramatic premium finish.</div>
      </div>
    </Card>
  );
}
