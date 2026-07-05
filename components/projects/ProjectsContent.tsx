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
        title="Stone in Global Application"
        subtitle="From luxury villas to commercial facades — discover how Kristone Global stone transforms prestigious environments."
        image="https://images.unsplash.com/photo-1616486338822-3d67e38f53f1?w=1920&q=80"
        imageAlt="Luxury interior project featuring premium natural stone"
      />

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Application Areas"
            title="Versatile Stone Solutions"
            description="Our premium stone collections serve diverse architectural and interior applications across residential, hospitality, and commercial sectors."
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {applicationCategories.map((cat) => (
              <span
                key={cat}
                className="border border-border px-4 py-2 text-xs uppercase tracking-widest text-muted"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal pt-0">
        <div className="container-wide">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, i) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className={`group relative overflow-hidden text-left ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <div className={`relative ${i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs uppercase tracking-widest text-gold">{project.category}</p>
                    <h2 className="mt-1 font-display text-lg text-foreground">{project.title}</h2>
                    <p className="mt-2 text-sm text-muted opacity-0 transition-opacity group-hover:opacity-100">
                      {project.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide text-center">
          <SectionHeading
            eyebrow="Your Project"
            title="Specify Kristone Stone for Your Next Project"
            description="Our export team supports architects, developers, and importers with specifications, samples, and project-volume supply."
            align="center"
          />
          <div className="mt-10">
            <Button href="/contact#inquiry" size="lg">
              Discuss Your Project
            </Button>
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
