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
        image="/images/about-hero-quarry.png"
        imageAlt="Natural stone quarry — Kristone Global LLP sourcing"
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="rounded-sm border border-border/60 bg-background/90 p-8 backdrop-blur-sm md:p-10">
            <SectionHeading
              eyebrow="Our Story"
              title="Born from Stone. Driven by Global Ambition."
            />
            <div className="mt-8 space-y-4 text-muted leading-relaxed">
              <p>
                Kristone Global LLP was founded with a singular vision: to establish
                India&apos;s finest natural stone on the global stage. From our base in
                Dewas, Madhya Pradesh, we have built a reputation for export-grade
                quality, reliable supply, and premium collections that meet
                international specification.
              </p>
              <p>
                Our signature Artemis quartzite range has become the cornerstone of
                our export portfolio, trusted by architects, contractors, importers,
                and developers for luxury villas, hospitality spaces, premium
                residences, and landmark commercial projects. We focus on stones that
                combine visual distinction with dependable performance, helping our
                clients specify materials that elevate both design and long-term value.
              </p>
              <p>
                Over time, we have strengthened our international presence through
                active collaboration with buyers, partners, and project teams in
                China, Dubai, and 5+ countries across key global markets. These
                relationships have helped us understand the expectations of
                international trade, from product consistency and presentation to
                documentation, logistics, and timely delivery.
              </p>
              <p>
                Today, Kristone Global serves importers, distributors, project
                suppliers, and specification teams across the Middle East, Europe,
                North America, Asia Pacific, and Africa. Our approach is simple:
                select better stone, maintain higher quality standards, communicate
                transparently, and build long-term business relationships that grow
                with every successful shipment.
              </p>
              <p>
                As we continue to expand, our ambition remains clear: to represent
                Indian natural stone with professionalism, trust, and a premium
                global identity rooted in quality, consistency, and service.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative min-h-[320px] overflow-hidden bg-charcoal-light sm:min-h-[420px]">
              <Image
                src="/images/about-story-founder-1.png"
                alt="Kristone Global team member at an international business event"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative min-h-[320px] overflow-hidden bg-charcoal-light sm:min-h-[420px]">
              <Image
                src="/images/about-story-founder-2.png"
                alt="Kristone Global representative at a global trade event"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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

      <section className="section-padding bg-charcoal">
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
              <div key={item.title} className="border border-border bg-background p-8">
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
                <div key={m.region} className="border border-border bg-background p-5">
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
    <div className="border border-border bg-background p-10">
      <h2 className="font-display text-2xl text-gold">{title}</h2>
      <div className="divider-gold mt-4" />
      <p className="mt-6 leading-relaxed text-muted">{text}</p>
    </div>
  );
}
