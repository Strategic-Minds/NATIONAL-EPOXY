import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { CustomerDashboardPreview } from "@/components/dashboard/CustomerDashboardPreview";

export default function DashboardPage() { return <AppShell><Header /><CustomerDashboardPreview /></AppShell>; }
