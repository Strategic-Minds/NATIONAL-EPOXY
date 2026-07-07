import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { AIChatWidget } from "@/components/ai/AIChatWidget";
import { AIQuoteAssistant } from "@/components/ai/AIQuoteAssistant";
import { AIWorkflowValidation } from "@/components/ai/AIWorkflowValidation";

export default function DashboardPage() {
  return (
    <AppShell>
      <Header />
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/70">Customer dashboard</p>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Welcome back, John. Here’s the status of your project.</h1>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {[
            ["Customer", "John Martinez", "Project ID NEP-2048"],
            ["Project status", "Estimate in review", "We are confirming materials and next steps."],
            ["Selected system", "Metallic floor", "Premium finish matched to your selected space."],
            ["Quote / proposal", "Ready to review", "Open the proposal and confirm the install window."],
            ["Uploaded photos", "8 images", "Garage and entry photos received."],
            ["Project timeline", "On schedule", "Measurement, prep, and installation stages ready."]
          ].map(([title, value, copy]) => (
            <Card key={title} title={title}>
              <div className="text-2xl font-black text-amber-200">{value}</div>
              <p className="mt-2 text-sm leading-6 text-white/70">{copy}</p>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          <AIQuoteAssistant />
          <AIChatWidget />
          <AIWorkflowValidation />
        </div>
        <Card title="Next action">
          <p className="text-sm leading-7 text-white/75">Review the proposal, confirm your preferred install window, and start the chat thread with the project team.</p>
        </Card>
      </section>
    </AppShell>
  );
}
