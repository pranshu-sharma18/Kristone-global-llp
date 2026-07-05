import Image from "next/image";
import Link from "next/link";
import { getFlagshipProducts } from "@/lib/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function CollectionsPreview() {
  const flagship = getFlagshipProducts();

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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {flagship.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group overflow-hidden border border-border bg-background transition-all hover:border-gold/40"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.heroImage}
                  alt={`${product.name} — premium quartzite export slab`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-gold">
                  {product.categoryLabel}
                </p>
                <h3 className="mt-2 font-display text-lg text-foreground">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
