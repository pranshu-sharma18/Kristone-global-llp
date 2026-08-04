import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/lib/data/company";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="section-padding stone-texture">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="About Kristone Global"
            title="Exporting Excellence in Natural Stone"
            description="Kristone Global LLP is built for international trade — connecting premium Indian stone resources with global buyers who demand quality, reliability, and exceptional collections."
          />
          <div className="flex flex-col justify-center">
            <p className="leading-relaxed text-muted">
              With deep expertise in quartzite, marble, granite, onyx, and engineered
              stone, we serve architects, interior designers, developers, importers,
              and project suppliers across five continents. Our signature Artemis
              quartzite collection represents the pinnacle of our export portfolio.
            </p>
            
            {/* --- NEW SEO BLOCK ADDED HERE --- */}
            <div className="mt-6">
              <h3 className="font-semibold text-foreground/90">A Complete Natural Stone Portfolio</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We export three distinct categories of natural stone. Our <strong>marble</strong> collection, including Rossa Levanto, offers classic warmth. Our <strong>breccia</strong> range, led by Valerian Breccia, delivers dramatic patterning. Our <strong>quartzite</strong> collection combines exceptional hardness with sophisticated elegance.
              </p>
            </div>
            {/* -------------------------------- */}

            <ul className="mt-8 space-y-3">
              {[
                "Direct quarry sourcing partnerships",
                "Export-grade quality inspection",
                "Flexible slab and tile formats",
                "Dedicated international sales support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground/90">
                  <span className="h-px w-6 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/about" variant="outline">
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}