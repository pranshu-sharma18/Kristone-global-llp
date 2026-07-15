import Image from "next/image";
import Link from "next/link";
import { featuredSlabs } from "@/lib/data/featuredSlabs";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CategoryHighlights() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Collections"
          title="Premium Stone Categories"
          description="Export-grade natural stone slabs — breccia, marble, and quartzite selections curated for international luxury projects."
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredSlabs.map((slab, i) => (
            <Link
              key={slab.id}
              href={`/contact?product=${encodeURIComponent(slab.name)}`}
              className="group relative overflow-hidden border border-border bg-background transition-all duration-500 hover:border-gold/40"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-light">
                <Image
                  src={slab.image}
                  alt={slab.alt}
                  fill
                  className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] uppercase tracking-widest text-gold">{slab.category}</p>
                <h3 className="mt-1 font-display text-lg text-foreground md:text-xl">{slab.name}</h3>
                <p className="mt-1 text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100">
                  Request Quote →
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-block border border-gold/60 px-8 py-3 text-xs uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-charcoal"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
