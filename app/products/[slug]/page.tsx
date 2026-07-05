import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { ProductGallery } from "@/components/products/ProductGallery";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} — Premium ${product.categoryLabel} Exporter`,
    description: `${product.description.slice(0, 155)}... Request samples and export quotes from Kristone Global LLP.`,
    openGraph: {
      title: product.name,
      description: product.tagline,
      images: [{ url: product.heroImage }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug);

  return (
    <>
      <section className="relative min-h-[70vh] pt-24">
        <Image
          src={product.heroImage}
          alt={`${product.name} — premium ${product.categoryLabel.toLowerCase()} slab for export`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="relative z-10 flex min-h-[70vh] items-end section-padding container-wide pb-16">
          <div className="max-w-3xl">
            {product.flagship && (
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Flagship Collection</span>
            )}
            <p className="mt-2 text-xs uppercase tracking-widest text-stone-beige">
              {product.categoryLabel}
            </p>
            <h1 className="mt-3 font-display text-4xl text-foreground md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg italic text-stone-beige">{product.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact#inquiry">Request Quote</Button>
              <Button href="/contact?type=sample" variant="outline">
                Request Sample
              </Button>
              <Button href="/brochure" variant="ghost">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Overview" title="Product Details" />
            <p className="mt-6 leading-relaxed text-muted">{product.description}</p>

            <div className="mt-10 space-y-6">
              <DetailBlock title="Color & Pattern" content={product.colorPattern} />
              <DetailBlock title="Finish Options" content={product.finishes.join(" · ")} />
              <DetailBlock title="Thickness Options" content={product.thickness.join(" · ")} />
            </div>
          </div>

          <ProductGallery
            images={product.galleryImages.map((src, i) => ({
              src,
              alt: `${product.name} slab view ${i + 1} — Kristone Global LLP`,
            }))}
          />
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-wide grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-foreground">Applications</h2>
            <div className="divider-gold mt-3" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.applications.map((app) => (
                <li key={app} className="flex items-center gap-3 text-sm text-muted">
                  <span className="h-px w-4 bg-gold" />
                  {app}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground">Key Features</h2>
            <div className="divider-gold mt-3" />
            <ul className="mt-6 space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide flex flex-col items-center gap-6 border border-gold/20 bg-charcoal-light p-10 text-center md:p-16">
          <h2 className="font-display text-3xl text-foreground">
            Ready to Specify {product.name}?
          </h2>
          <p className="max-w-xl text-muted">
            Contact our export team for slab availability, pricing, sample dispatch, and container quotes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact#inquiry" size="lg">Request Quote</Button>
            <Button href="/contact?type=sample" variant="outline" size="lg">Request Sample</Button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-charcoal">
          <div className="container-wide">
            <SectionHeading eyebrow="Related" title="Related Products" align="center" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group overflow-hidden border border-border bg-background transition-all hover:border-gold/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.heroImage}
                      alt={`${p.name} — related ${p.categoryLabel}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-foreground">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted">{p.categoryLabel}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function DetailBlock({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-widest text-gold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{content}</p>
    </div>
  );
}
