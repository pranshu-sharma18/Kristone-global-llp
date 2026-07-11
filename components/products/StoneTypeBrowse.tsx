"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Category, CategoryGalleryItem } from "@/lib/types";
import { Button } from "@/components/ui/Button";

interface StoneTypeBrowseProps {
  categories: Category[];
  activeCategory?: string;
}

function getGalleryItems(cat: Category): CategoryGalleryItem[] {
  if (cat.galleryItems?.length) return cat.galleryItems;

  const images = cat.galleryImages?.length ? cat.galleryImages : [cat.image];
  return images.map((src, i) => ({
    src,
    title: `${cat.name} View ${i + 1}`,
    description: cat.description,
  }));
}

function CategoryBlock({ cat }: { cat: Category }) {
  const items = getGalleryItems(cat);
  const hasGallery = items.length > 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];

  return (
    <article className="border border-border bg-charcoal-light/30 transition-colors hover:border-gold/25">
      <div className="grid lg:grid-cols-5">
        <div className="relative lg:col-span-2">
          <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <Image
              key={active.src}
              src={active.src}
              alt={`${active.title} — Kristone Global LLP`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority={cat.id === "quartzite"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/20" />
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-12">
          <Link href={`/products?category=${cat.id}`}>
            <span className="text-xs uppercase tracking-[0.25em] text-gold">
              Export Collection
            </span>
          </Link>
          <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
            {hasGallery ? active.title : cat.name}
          </h2>
          <div className="divider-gold mt-4" />
          {hasGallery && active.origin && (
            <p className="mt-3 text-xs uppercase tracking-widest text-stone-beige">
              Origin · {active.origin}
            </p>
          )}
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            {hasGallery ? active.description : cat.description}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="border border-border/60 bg-background/40 p-5">
              <p className="text-xs uppercase tracking-widest text-gold">Applications</p>
              <ul className="mt-3 space-y-2">
                {cat.applications.map((app) => (
                  <li key={app} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-px w-3 bg-gold/60" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-border/60 bg-background/40 p-5">
              <p className="text-xs uppercase tracking-widest text-gold">Finish Options</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.finishes.map((finish) => (
                  <span
                    key={finish}
                    className="border border-border px-3 py-1 text-xs text-muted"
                  >
                    {finish}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={`/products?category=${cat.id}`}>View {cat.name}</Button>
            <Button href={`/contact?product=${encodeURIComponent(active.title)}`} variant="outline">
              Inquire About {hasGallery ? active.title : cat.name}
            </Button>
          </div>
        </div>
      </div>

      {hasGallery && (
        <div className="border-t border-border p-4 md:p-6">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">
            {cat.name} Collection · Click a slab to view details
          </p>
          <div
            className={`grid gap-3 sm:gap-4 ${
              items.length >= 6
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                : items.length === 5
                  ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                  : "grid-cols-2 sm:grid-cols-4"
            }`}
          >
            {items.map((item, i) => {
              const selected = i === activeIndex;
              return (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`group/thumb relative aspect-[4/3] overflow-hidden border text-left transition-all ${
                    selected
                      ? "border-gold ring-1 ring-gold/50"
                      : "border-border hover:border-gold/40"
                  }`}
                  aria-label={`View ${item.title}`}
                  aria-pressed={selected}
                >
                  <Image
                    src={item.src}
                    alt={`${item.title} — Kristone Global LLP`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-2">
                    <span className="line-clamp-1 text-[10px] uppercase tracking-wider text-stone-beige">
                      {item.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
}

export function StoneTypeBrowse({ categories, activeCategory }: StoneTypeBrowseProps) {
  const visible = categories.filter(
    (cat) => !activeCategory || cat.id === activeCategory
  );

  return (
    <div className="mt-12 space-y-10">
      {visible.map((cat) => (
        <CategoryBlock key={cat.id} cat={cat} />
      ))}
    </div>
  );
}
