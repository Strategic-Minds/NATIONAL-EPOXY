import { validateShell } from "@/lib/validation";
import { makeReceipt } from "@/lib/receipts";
import { scanForForbiddenBranding } from "@/lib/no-phoenix";

export function GET() {
  const checks = validateShell();
  const brandingHit = scanForForbiddenBranding(JSON.stringify(checks));
  const payload = {
    ok: !brandingHit,
    timestamp: new Date().toISOString(),
    checks: { ...checks, brandingHit },
    blockers: brandingHit ? ["Forbidden branding detected"] : [],
    nextAction: brandingHit ? "Remove forbidden branding" : "Ready for Vercel preview validation"
  };
  return Response.json(makeReceipt("cron-validation", payload));
}
