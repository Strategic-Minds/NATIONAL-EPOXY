import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { AdminControlPlane } from "@/components/admin/AdminControlPlane";

export default function AdminPage() { return <AppShell><Header /><AdminControlPlane /></AppShell>; }
