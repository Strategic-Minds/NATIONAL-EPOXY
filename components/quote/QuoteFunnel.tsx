import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const steps = ["Project details", "Photos", "System choice", "Contact", "Review"] as const;

export function QuoteFunnel() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/70">Digital Quote Funnel</p>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Get a fast, no-obligation quote for your project</h1>
        <p className="max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
          Share your space, upload photos, and choose the floor system you want. We will review the request and return a clear estimate.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card title="Step-based intake">
          <div className="flex flex-wrap gap-2">
            {steps.map((step, index) => (
              <span key={step} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">
                {index + 1}. {step}
              </span>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {["Name", "Phone", "Email", "Zip code"].map((field) => (
              <label key={field} className="grid gap-2 text-sm text-white/80">
                {field}
                <span className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white/45">{field} input</span>
              </label>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button>Get my quote</Button>
            <Button variant="secondary">Next step</Button>
          </div>
        </Card>
        <Card title="What happens next">
          <ul className="space-y-4 text-sm leading-7 text-white/75">
            <li>• We review photos and project details.</li>
            <li>• We match the right floor system and color family.</li>
            <li>• We send a clear estimate and suggested install window.</li>
            <li>• No payment is collected from this preview funnel.</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
