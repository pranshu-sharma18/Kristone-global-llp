import { exportMarkets } from "@/lib/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GlobalReach() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Global Reach"
            title="Export Markets Worldwide"
            description="Kristone Global LLP delivers premium natural stone to importers and project suppliers across major international markets."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {exportMarkets.map((market) => (
              <div
                key={market.region}
                className="border border-border p-6 transition-colors hover:border-gold/30"
              >
                <h3 className="font-display text-lg text-gold">{market.region}</h3>
                <p className="mt-2 text-sm text-muted">{market.countries.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border border-border bg-charcoal-light px-8 py-10">
          <Stat value="25+" label="Export Countries" />
          <div className="hidden h-12 w-px bg-border sm:block" />
          <Stat value="500+" label="Projects Supplied" />
          <div className="hidden h-12 w-px bg-border sm:block" />
          <Stat value="15+" label="Stone Varieties" />
          <div className="hidden h-12 w-px bg-border sm:block" />
          <Stat value="100%" label="Export Focus" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-3xl text-gold md:text-4xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}
