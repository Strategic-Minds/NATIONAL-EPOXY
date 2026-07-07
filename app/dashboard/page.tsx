import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DashboardPanels } from "@/components/dashboard/DashboardPanels";
import { CustomerDashboardPreview } from "@/components/dashboard/CustomerDashboardPreview";

export default function DashboardPage() {
  return (
    <AppShell>
      <Header />
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Customer view"
          title="Project dashboard"
          description="A realistic customer workspace for project stage, photos, quote status, and the next step to move the job forward."
        />
        <DashboardPanels />
        <CustomerDashboardPreview />
      </section>
    </AppShell>
  );
}
