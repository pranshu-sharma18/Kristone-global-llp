import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CategoryHighlights() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Collections"
          title="Premium Stone Categories"
          description="From signature quartzite to classic marble and granite — curated for international specification and luxury application."
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="group relative overflow-hidden border border-border bg-background transition-all duration-500 hover:border-gold/40"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl text-foreground">{cat.name}</h3>
                <p className="mt-1 text-xs text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  View Collection →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
