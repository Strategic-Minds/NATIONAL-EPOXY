import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { AdminAIInsights } from "@/components/ai/AdminAIInsights";
import { AIWorkflowValidation } from "@/components/ai/AIWorkflowValidation";

export default function AdminPage() {
  return (
    <AppShell>
      <Header />
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/70">Internal operations</p>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Admin control plane</h1>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {[
            ["Leads", "48", "Open opportunities in the pipeline."],
            ["Projects", "16", "Active installs in progress."],
            ["Customers", "124", "Tracked customer accounts."],
            ["Schedule", "9 jobs", "Assigned installs and inspections."],
            ["Products", "24 systems", "Floor families and color options."],
            ["Analytics", "92%", "Forecast and conversion health."]
          ].map(([title, value, copy]) => (
            <Card key={title} title={title}>
              <div className="text-2xl font-black text-amber-200">{value}</div>
              <p className="mt-2 text-sm leading-6 text-white/70">{copy}</p>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 xl:grid-cols-2">
          <AdminAIInsights />
          <AIWorkflowValidation />
        </div>
        <Card title="Owner Demo: AI Enhanced Operating System">
          <div className="grid gap-3 text-sm leading-7 text-white/75 lg:grid-cols-2">
            <div>Lead comes in from quote form</div>
            <div>AI summarizes project and scores quality</div>
            <div>Admin reviews estimate and pricing check</div>
            <div>SMS/WhatsApp follow-up prepared in dry-run</div>
            <div>Customer dashboard updates</div>
            <div>Installer PWA receives job checklist</div>
            <div>Vercel cron validates system health</div>
            <div>Receipts are written</div>
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
