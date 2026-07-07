import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { PremiumHero } from "@/components/home/PremiumHero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { WorkflowCards } from "@/components/home/WorkflowCards";
import { ChartStrip } from "@/components/home/ChartStrip";
import { CustomerDashboardPreview } from "@/components/dashboard/CustomerDashboardPreview";
import { InstallerPWA } from "@/components/installer/InstallerPWA";
import { AdminControlPlane } from "@/components/admin/AdminControlPlane";
import { LaunchStatus } from "@/components/home/LaunchStatus";

export default function HomePage() {
  return (
    <AppShell>
      <Header />
      <div className="space-y-8">
        <PremiumHero />
        <ServiceCards />
        <section className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <WorkflowCards />
            <ChartStrip />
          </div>
          <div className="space-y-8">
            <CustomerDashboardPreview />
            <InstallerPWA />
            <AdminControlPlane />
            <LaunchStatus />
          </div>
        </section>
      </div>
    </AppShell>
  );
}
