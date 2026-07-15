"use client";

import Image from "next/image";
import { useState } from "react";
import { applicationSlabs } from "@/lib/data/applicationSlabs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { Button } from "@/components/ui/Button";

export function ProjectGalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = applicationSlabs.map((slab) => ({ src: slab.image, alt: slab.alt }));

  return (
    <section className="section-padding bg-charcoal">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Stone in Application"
            description="See how Kristone Global stone transforms luxury living spaces, kitchens, and hospitality environments."
          />
          <Button href="/projects" variant="outline" className="shrink-0">
            View All Projects
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {applicationSlabs.map((slab, i) => (
            <button
              key={slab.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative overflow-hidden border border-border bg-charcoal-light text-left transition-all hover:border-gold/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={slab.image}
                  alt={slab.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-widest text-gold">{slab.category}</p>
                  <h3 className="mt-1 font-display text-lg text-foreground">{slab.title}</h3>
                  <p className="mt-2 text-sm text-muted opacity-0 transition-opacity group-hover:opacity-100">
                    {slab.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
