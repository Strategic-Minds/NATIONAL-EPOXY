import { AppShell } from "@/components/layout/AppShell";
import { Header } from "@/components/layout/Header";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FloorDesignGrid } from "@/components/floor-design/FloorDesignGrid";

export default function FloorDesignCenterPage() {
  return (
    <AppShell>
      <Header />
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Visualizer"
          title="Floor design center"
          description="Compare the four final chart families with a clean mobile and desktop gallery."
        />
        <FloorDesignGrid />
      </section>
    </AppShell>
  );
}
