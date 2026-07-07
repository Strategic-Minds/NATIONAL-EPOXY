import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";

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
              {["Photo upload", "Space details", "Project details", "Contact info"].map((field) => (
                <div key={field} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/55">
                  {field}
                </div>
              ))}
            </div>
          </Card>
          <Card title="Trust and security">
            <p className="text-sm leading-7 text-white/75">Your information stays private. We use the intake form only to prepare your quote and suggested installation plan.</p>
          </Card>
        </div>
      </section>
    </AppShell>
  );
}
