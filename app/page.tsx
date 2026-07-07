import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { DigitalBidFunnel } from "@/components/home/DigitalBidFunnel";
import { LaunchStatus } from "@/components/home/LaunchStatus";
import { CustomerDashboardPreview } from "@/components/dashboard/CustomerDashboardPreview";
import { InstallerPWA } from "@/components/installer/InstallerPWA";
import { AdminControlPlane } from "@/components/admin/AdminControlPlane";

export default function HomePage() {
  return <AppShell><Header /><div className="grid gap-6 lg:grid-cols-2"><DigitalBidFunnel /><LaunchStatus /><CustomerDashboardPreview /><InstallerPWA /><AdminControlPlane /></div></AppShell>;
}
