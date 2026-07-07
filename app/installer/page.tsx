import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { MobileShell } from "@/components/layout/MobileShell";
import { InstallerPWA } from "@/components/installer/InstallerPWA";

export default function InstallerPage() { return <AppShell><Header /><MobileShell><InstallerPWA /></MobileShell></AppShell>; }
