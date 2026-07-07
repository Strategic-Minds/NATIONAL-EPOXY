import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { AIQuoteAssistant } from "@/components/ai/AIQuoteAssistant";

const steps = ["Upload photos", "Space details", "Project details", "Floor system", "Contact", "Review"] as const;

export default function EstimatePage() {
  return (
    <AppShell>
      <Header />
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/70">Digital Quote Funnel</p>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Get a fast, no-obligation quote for your project</h1>
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Card title="Step flow">
            <div className="flex flex-wrap gap-2">
              {steps.map((step, index) => (
                <span key={step} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">
                  {index + 1}. {step}
                </span>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Photo upload", "Measurements / sq ft", "Floor system selection", "Color / design selection", "Project urgency", "Contact info"].map((field) => (
                <div key={field} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/55">
                  {field}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span>By submitting, you agree to receive project updates by SMS or WhatsApp. Message and data rates may apply. Reply STOP to opt out.</span>
              </label>
            </div>
            <div className="mt-4 rounded-2xl border border-[#f2b21c]/30 bg-[#fff7df] p-4 text-black">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">AI estimate-readiness</div>
              <div className="mt-1 text-2xl font-black">92%</div>
              <p className="mt-2 text-sm leading-6 text-black/70">Demo preview indicates the project is ready for a fast quote and install planning.</p>
            </div>
          </Card>
          <div className="space-y-4">
            <AIQuoteAssistant />
            <Card title="Dry-run payload preview">
              <pre className="overflow-x-auto rounded-2xl bg-black/40 p-4 text-xs text-white/75">{JSON.stringify({ mode: "dry-run", channel: "sms", sent: false, requiresConsent: true }, null, 2)}</pre>
            </Card>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
