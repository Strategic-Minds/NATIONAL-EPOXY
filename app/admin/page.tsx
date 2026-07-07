import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AdminCards } from "@/components/admin/AdminCards";

export default function AdminPage() {
  return (
    <AppShell>
      <Header />
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Operations"
          title="Admin control plane"
          description="Enterprise overview for leads, estimates, service areas, products, AI validation, and workflow health."
        />
        <AdminCards />
      </section>
    </AppShell>
  );
}
