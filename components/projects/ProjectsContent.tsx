"use client";

import Image from "next/image";
import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { Button } from "@/components/ui/Button";
import { projects, applicationCategories } from "@/lib/data/projects";

export function ProjectsContent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = projects.map((p) => ({ src: p.image, alt: p.alt }));

  return (
    <>
      <PageHero
        eyebrow="Projects & Applications"
        title="Designed to Impress. Built to Be Remembered."
        subtitle="Explore how Kristone Global stone elevates kitchens, bathrooms, hospitality spaces, flooring, and feature installations for premium projects."
        image="/images/projects/hotel-reception-application.png"
        imageAlt="Luxury hospitality interior featuring premium natural stone reception desk"
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
            <SectionHeading
              eyebrow="Project Showcase"
              title="Applications That Help Clients Visualize the Result"
              description="The right stone becomes far more compelling when buyers can imagine it in a real project. This page is designed to show premium application ideas that speak directly to architects, developers, hospitality buyers, and import partners."
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: "5", label: "Curated concept spaces" },
                { value: "Premium", label: "Luxury presentation style" },
                { value: "Global", label: "Design-ready applications" },
              ].map((item) => (
                <div key={item.label} className="border border-border bg-charcoal-light p-6 text-center">
                  <p className="font-display text-3xl text-gold">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {applicationCategories.map((cat) => (
              <span
                key={cat}
                className="border border-border bg-background px-4 py-2 text-xs uppercase tracking-widest text-muted"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal pt-0">
        <div className="container-wide">
          <div className="space-y-10">
            {projects.map((project, i) => (
              <article
                key={project.slug}
                className="grid overflow-hidden border border-border bg-background lg:grid-cols-2"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className={`group relative min-h-[320px] text-left sm:min-h-[420px] ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="border border-gold/40 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold backdrop-blur-sm">
                      Click to enlarge
                    </span>
                  </div>
                </button>

                <div className={`flex flex-col justify-center p-8 md:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">{project.category}</p>
                  <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-5 leading-relaxed text-muted">{project.description}</p>
                  <p className="mt-5 text-sm leading-relaxed text-muted">
                    This concept highlights how premium stone can shape the first visual impression of a space,
                    add material depth, and create a specification language that feels refined, durable, and
                    globally relevant for luxury-focused clients.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="border border-border bg-background px-5 py-4">
                      <p className="text-xs uppercase tracking-widest text-gold">Ideal For</p>
                      <p className="mt-2 text-sm text-muted">{project.category}</p>
                    </div>
                    <div className="border border-border bg-background px-5 py-4">
                      <p className="text-xs uppercase tracking-widest text-gold">Project Value</p>
                      <p className="mt-2 text-sm text-muted">
                        Premium aesthetics, stronger presentation, and export-ready material appeal.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center border border-gold/20 bg-charcoal-light p-10 md:p-14">
            <div>
              <SectionHeading
                eyebrow="Your Project"
                title="Present Your Next Space with Kristone Global Stone"
                description="Whether you are developing a luxury residence, hospitality space, retail environment, or design-led commercial project, our team can help you shortlist the right stone, finish, and supply format for your requirements."
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact#inquiry" size="lg">
                Discuss Your Project
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Explore Collections
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal pt-0">
        <div className="container-wide text-center">
          <SectionHeading
            eyebrow="Why It Works"
            title="A Stronger Visual Story for Visiting Clients"
            description="This showcase is built to help buyers quickly understand how your stone can perform in real luxury settings, making the conversation easier from first impression to inquiry."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Real Application Ideas",
                text: "Clients can immediately imagine the stone in kitchens, bathrooms, reception desks, flooring, and feature spaces.",
              },
              {
                title: "Premium Positioning",
                text: "The page speaks in a more refined language that supports luxury and export-quality brand perception.",
              },
              {
                title: "Faster Decision Making",
                text: "Better visuals and clearer use cases help architects, importers, and project buyers move from browsing to inquiry.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border bg-background p-8 text-left">
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
