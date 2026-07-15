import { trustPoints } from "@/lib/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TrustSection() {
  return (
    <section className="section-padding bg-charcoal-light">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Quality Assurance"
          title="Trusted by Global Buyers"
          description="Our export processes are designed to meet the expectations of international importers, distributors, and project specification teams."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-4 border border-border bg-background px-6 py-5"
            >
              <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-foreground">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
