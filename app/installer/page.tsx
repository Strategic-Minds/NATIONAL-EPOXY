import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";

export default function InstallerPage() {
  return (
    <AppShell>
      <Header />
      <section className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/70">Installer PWA</p>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Job ID NEP-1042 · Stage 3 of 5</h1>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card title="Crew workflow">
            <div className="space-y-3 text-sm leading-7 text-white/75">
              <p>Checklist, materials, mix notes, photo uploads, and save/continue buttons.</p>
              <p>Mobile-first layout designed for field use.</p>
            </div>
          </Card>
          <Card title="Bottom nav">
            <div className="flex gap-2 text-xs font-semibold text-white/75">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Jobs</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Checklist</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Photos</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Notes</span>
            </div>
          </Card>
        </div>
      </section>
    </AppShell>
  );
}
