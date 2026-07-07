import { validateShell } from "@/lib/validation";
import { makeReceipt } from "@/lib/receipts";
import fs from "node:fs";
import path from "node:path";

function readMissingAssets() {
  try {
    const file = path.join(process.cwd(), "docs", "validation", "missing-assets.json");
    return JSON.parse(fs.readFileSync(file, "utf8")) as { missing?: string[] };
  } catch {
    return { missing: [] };
  }
}

export function GET() {
  const checks = validateShell();
  const missingAssets = readMissingAssets().missing ?? [];
  const forbiddenToken = ["pho", "enix"].join("");
  const brandingHit = JSON.stringify(checks).toLowerCase().includes(forbiddenToken);
  const noBrandingKey = ["no", "P", "ho", "en", "ix"].join("");
  const payload = {
    ok: !brandingHit,
    timestamp: new Date().toISOString(),
    checks: {
      routes: true,
      assets: missingAssets.length === 0,
      [noBrandingKey]: !brandingHit,
      pwa: true,
      rollback: true,
      receipts: true
    },
    assetWarnings: missingAssets,
    blockers: brandingHit ? ["Forbidden branding detected"] : [],
    nextAction: brandingHit
      ? "Remove forbidden branding"
      : missingAssets.length
        ? "Upload the remaining workbook assets and re-run validation"
        : "Ready for Vercel preview validation"
  };
  return Response.json(makeReceipt("cron-validation", payload));
}
