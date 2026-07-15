import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { processSteps, qualityCommitments } from "@/lib/data/process";

export const metadata: Metadata = {
  title: "Quality & Process — Export-Grade Stone Standards",
  description:
    "Discover Kristone Global LLP quality process — from material selection and block sourcing to cutting, inspection, packing, and export shipping.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Process"
        title="Excellence at Every Stage"
        subtitle="From quarry to container — our rigorous process ensures export-grade natural stone for global buyers."
        image="/images/quality-hero-stone.png"
        imageAlt="Stone processing and quality inspection at Kristone Global LLP"
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Process"
            title="Seven Stages of Export Excellence"
            description="Every shipment follows a structured quality pathway designed for international specification and safe ocean transit."
            align="center"
          />

          <div className="mt-16 space-y-0 rounded-sm border border-border bg-background/90 p-6 md:p-10">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className={`grid items-center gap-8 border-b border-border py-10 last:border-b-0 md:grid-cols-12 ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                <div className="md:col-span-2">
                  <span className="font-display text-5xl text-gold/40">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="font-display text-2xl text-foreground">{step.title}</h2>
                </div>
                <div className="md:col-span-6">
                  <p className="leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[400px]">
            <Image
              src="/images/quality-standards-inspection.png"
              alt="Quality standards inspection process for premium stone slabs at Kristone Global LLP"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Quality Standards"
              title="Commitment You Can Specify"
            />
            <div className="mt-8 space-y-6">
              {qualityCommitments.map((item) => (
                <div key={item.title} className="border-l-2 border-gold/40 pl-5">
                  <h3 className="font-display text-lg text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <div className="border border-gold/20 bg-charcoal-light p-10 text-center md:p-16">
            <h2 className="font-display text-3xl text-foreground">
              On-Time Delivery Commitment
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              We understand that project timelines depend on material arrival. Our production
              schedules and logistics partnerships are structured to deliver your stone on time,
              every time — from sample dispatch to full container shipments.
            </p>
            <div className="mt-8">
              <Button href="/contact#inquiry" size="lg">
                Request Export Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
