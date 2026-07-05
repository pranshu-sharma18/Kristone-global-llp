import { whyChooseUs } from "@/lib/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why Kristone Global"
          title="Built for International Buyers"
          description="We understand the demands of global stone trade — from specification to shipment."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => (
            <div
              key={item.title}
              className="group border border-border p-8 transition-all duration-500 hover:border-gold/30 hover:bg-background/50"
            >
              <span className="font-display text-4xl text-gold/30 transition-colors group-hover:text-gold/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
