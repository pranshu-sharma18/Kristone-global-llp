"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { signatureCollectionSlides } from "@/lib/data/signatureCollection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const INTERVAL_MS = 3000;

export function SignatureCollectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = signatureCollectionSlides.length;

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [total]);

  const active = signatureCollectionSlides[activeIndex];

  return (
    <section className="section-padding bg-charcoal">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Artemis Series"
            title="Discover the Signature Collection"
            description="Our premium quartzite range — curated for luxury projects and global specification."
          />
          <Button href="/products" variant="outline" className="shrink-0">
            All Collections
          </Button>
        </div>

        <div className="relative mt-12 overflow-hidden border border-border bg-background">
          <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
            {signatureCollectionSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={index !== activeIndex}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
            ))}

            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">{active.category}</p>
              <h3 className="mt-2 font-display text-2xl text-foreground md:text-4xl">
                {active.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm text-stone-beige/90 md:text-base">
                {active.alt}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border px-4 py-4 md:px-6">
            <div className="flex gap-2">
              {signatureCollectionSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`View ${slide.title}`}
                  className={`h-1.5 transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-gold"
                      : "w-3 bg-border hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {signatureCollectionSlides.map((slide, index) => (
            <button
              key={`thumb-${slide.id}`}
              type="button"
              onClick={() => goTo(index)}
              className={`relative aspect-[4/3] overflow-hidden border transition-all ${
                index === activeIndex
                  ? "border-gold ring-1 ring-gold/40"
                  : "border-border opacity-70 hover:border-gold/40 hover:opacity-100"
              }`}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                aria-hidden
                className="object-cover"
                sizes="120px"
              />
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/products/artemis-grey-quartzite"
            className="text-sm uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
          >
            Explore Artemis Grey Quartzite →
          </Link>
        </div>
      </div>
    </section>
  );
}
