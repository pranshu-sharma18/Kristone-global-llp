import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { exportMarkets } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "About Us — Premium Natural Stone Exporter",
  description:
    "Learn about Kristone Global LLP — our mission, export capability, and commitment to delivering premium quartzite, marble, and granite to international buyers.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Kristone Global"
        title="Crafted for Luxury. Built for the World."
        subtitle="A premium natural stone exporter dedicated to connecting global buyers with exceptional stone collections."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80"
        imageAlt="Natural stone quarry — Kristone Global LLP sourcing"
      />

      <section className="section-padding">
        <div className="container-wide grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Born from Stone. Driven by Global Ambition."
            />
            <div className="mt-8 space-y-4 text-muted leading-relaxed">
              <p>
                Kristone Global LLP was founded with a singular vision: to establish
                India&apos;s finest natural stone on the global stage. From our
                operations in Rajasthan — the heart of India&apos;s stone industry —
                we have built a reputation for export-grade quality, reliable supply,
                and premium collections that meet international specification.
              </p>
              <p>
                Our signature Artemis quartzite range has become the cornerstone of
                our export portfolio, trusted by architects and developers for luxury
                villas, five-star hotels, and landmark commercial projects worldwide.
              </p>
              <p>
                Today, Kristone Global serves importers, distributors, project
                suppliers, and specification teams across the Middle East, Europe,
                North America, Asia Pacific, and Africa.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
              alt="Premium marble and stone selection at Kristone Global LLP"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-wide grid gap-12 md:grid-cols-2">
          <MissionCard
            title="Our Mission"
            text="To deliver the world's finest natural stone with uncompromising quality, transparent trade practices, and dedicated support for every international buyer."
          />
          <MissionCard
            title="Our Vision"
            text="To be recognized globally as the premier Indian stone exporter — synonymous with premium collections, export excellence, and trusted partnerships."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Commitment to Quality"
            title="Every Slab. Every Shipment. Every Standard."
            description="Quality is not a checkpoint — it is embedded in every stage of our operation, from quarry selection to export crate sealing."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Premium Selection",
                text: "Only export-grade blocks and slabs pass our initial selection criteria.",
              },
              {
                title: "Precision Finishing",
                text: "Advanced processing ensures consistent thickness, finish, and surface quality.",
              },
              {
                title: "Rigorous Inspection",
                text: "Slab-by-slab inspection with photographic documentation available on request.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border p-8">
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-light">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Export Capability"
            title="Built for International Trade"
            description="Kristone Global LLP is structured for the demands of global stone commerce — from first inquiry to port delivery."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <ul className="space-y-4">
              {[
                "FOB and CIF shipping to major international ports",
                "Complete export documentation and certificates",
                "Secure wooden crate packing for ocean freight",
                "Flexible order quantities — samples to full containers",
                "Dedicated export sales and logistics coordination",
                "Multi-currency invoicing for international buyers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="grid gap-4 sm:grid-cols-2">
              {exportMarkets.map((m) => (
                <div key={m.region} className="border border-border p-5">
                  <h3 className="text-sm font-medium text-gold">{m.region}</h3>
                  <p className="mt-1 text-xs text-muted">{m.countries.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact#inquiry" size="lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function MissionCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="border border-border p-10">
      <h2 className="font-display text-2xl text-gold">{title}</h2>
      <div className="divider-gold mt-4" />
      <p className="mt-6 leading-relaxed text-muted">{text}</p>
    </div>
  );
}
