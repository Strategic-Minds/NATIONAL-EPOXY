import { Card } from "@/components/ui/Card";

export function AIWorkflowValidation() {
  return (
    <Card title="AI Workflow Validation">
      <div className="space-y-3 text-sm leading-7 text-white/75">
        <p>Lead quality scoring, scope validation, pricing checks, and receipt generation are safe for preview validation.</p>
        <p>Live outreach remains disabled unless approved env vars are configured.</p>
      </div>
    </Card>
  );
}
