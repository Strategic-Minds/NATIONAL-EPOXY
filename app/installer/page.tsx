import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { MobileShell } from "@/components/layout/MobileShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstallerPanels } from "@/components/installer/InstallerPanels";
import { InstallerPWA } from "@/components/installer/InstallerPWA";

export default function InstallerPage() {
  return (
    <AppShell>
      <Header />
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Field workflow"
          title="Installer PWA"
          description="A phone-first operating surface for the crew: job card, progress, uploads, checklist, and notes."
        />
        <MobileShell>
          <InstallerPWA />
          <div className="mt-4">
            <InstallerPanels />
          </div>
        </MobileShell>
      </section>
    </AppShell>
  );
}
