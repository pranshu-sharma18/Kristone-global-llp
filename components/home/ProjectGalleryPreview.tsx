"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { Button } from "@/components/ui/Button";

export function ProjectGalleryPreview() {
  const preview = projects.slice(0, 6);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = preview.map((p) => ({ src: p.image, alt: p.alt }));

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Stone in Application"
            description="See how Kristone Global stone transforms luxury villas, hotels, and commercial environments."
          />
          <Button href="/projects" variant="outline" className="shrink-0">
            View All Projects
          </Button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className={`group relative overflow-hidden text-left ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-widest text-gold">{project.category}</p>
                  <h3 className="mt-1 font-display text-lg text-foreground">{project.title}</h3>
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
