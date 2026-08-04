import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { categories } from "@/lib/data/categories";
import { products, getFlagshipProducts } from "@/lib/data/products";
import { StoneTypeBrowse } from "@/components/products/StoneTypeBrowse";

export const metadata: Metadata = {
  title: "Premium Marble, Quartzite & Breccia Collections | Kristone Global",
  description:
    "Explore our export-grade natural stone collections. Kristone Global LLP offers premium marble, quartzite, and breccia slabs for luxury projects worldwide.",
};

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const activeCategory = params.category;
  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;
  const flagship = getFlagshipProducts();

  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="Premium Stone Collections"
        subtitle="Export-quality marble, quartzite, and breccia slabs for global specification."
        image="/images/categories/quartzite-lifestyle-2.png"
        imageAlt="Premium quartzite stone walls and flooring in luxury dining interior"
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Artemis Series"
            title="Signature Quartzite Collection"
            description="Our flagship export range — four distinctive quartzite varieties curated for luxury projects worldwide."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {flagship.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group overflow-hidden border border-border bg-background transition-all hover:border-gold/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.heroImage}
                    alt={`${product.name} — export quartzite slab`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-widest text-gold">Flagship</span>
                  <h3 className="mt-1 font-display text-lg text-foreground">{product.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{product.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Categories"
            title="Browse by Stone Type"
            description="Each category offers export-grade slabs with multiple finish and thickness options."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <FilterLink href="/products" active={!activeCategory} label="All" />
            {categories.map((cat) => (
              <FilterLink
                key={cat.id}
                href={`/products?category=${cat.id}`}
                active={activeCategory === cat.id}
                label={cat.name}
              />
            ))}
          </div>

          <StoneTypeBrowse
            categories={categories}
            activeCategory={activeCategory}
          />
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <SectionHeading
            eyebrow="All Products"
            title={activeCategory ? `${categories.find((c) => c.id === activeCategory)?.name ?? ""} Products` : "Complete Product Range"}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group overflow-hidden border border-border bg-background transition-all hover:border-gold/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.heroImage}
                    alt={`${product.name} — ${product.categoryLabel} export slab`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {product.flagship && (
                    <span className="absolute left-4 top-4 bg-gold px-3 py-1 text-[10px] uppercase tracking-widest text-charcoal">
                      Flagship
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-gold">{product.categoryLabel}</p>
                  <h3 className="mt-1 font-display text-xl text-foreground">{product.name}</h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{product.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FilterLink({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={`border px-4 py-2 text-xs uppercase tracking-widest transition-all ${
        active
          ? "border-gold bg-gold text-charcoal"
          : "border-border text-muted hover:border-gold/50 hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}
