import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/data/products";

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

  // Dynamically generates the exact SEO title we planned (e.g., "Rossa Levanto Marble Slab | Kristone Global Exports")
  const seoTitle = `${product.name} ${product.categoryLabel} Slab | Kristone Global Exports`;

  return {
    title: seoTitle,
    description: `Premium ${product.name} ${product.categoryLabel.toLowerCase()} slabs. ${product.tagline} Export-grade quality for luxury projects worldwide. Request a sample today.`,
    openGraph: {
      title: seoTitle,
      description: `Premium ${product.name} ${product.categoryLabel.toLowerCase()} slabs for global export.`,
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
      <section className="relative h-[50vh] min-h-[320px] max-h-[560px] pt-24">
        <Image
          src={product.heroImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </section>

      <section className="section-padding bg-charcoal pt-0">
        <div className="container-wide -mt-16 relative z-10">
          <div className="max-w-3xl border border-border bg-[#161616] p-8 md:p-12">
            {product.flagship && (
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Flagship Collection</span>
            )}
            <p className="mt-2 text-xs uppercase tracking-widest text-muted">
              {product.categoryLabel}
            </p>
            <h1 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
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

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Overview"
              title="Product Details"
              description="Each slab view is paired with the product details on the right for a cleaner, aligned presentation."
            />
          </div>

          <div className="mt-12 space-y-10">
            {product.galleryImages.map((src, i) => {
              const imageOnRight = i % 2 === 1;

              return (
              <article
                key={src}
                className="grid items-stretch gap-0 overflow-hidden border border-border bg-charcoal-light lg:grid-cols-2"
              >
                <div
                  className={`relative min-h-[280px] bg-background sm:min-h-[360px] ${
                    imageOnRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${product.name} — view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div
                  className={`flex flex-col justify-between p-8 md:p-10 ${
                    imageOnRight ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gold">
                      Slab View {i + 1}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-widest text-muted">
                      {product.flagship ? "Flagship Collection" : product.categoryLabel}
                    </p>
                    <h2 className="mt-3 font-display text-3xl text-foreground">
                      {product.name}
                    </h2>
                    <p className="mt-4 text-base italic text-stone-beige">
                      {product.tagline}
                    </p>
                    <p className="mt-6 leading-relaxed text-muted">
                      {product.description}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <DetailBlock title="Color & Pattern" content={product.colorPattern} />
                      <DetailBlock title="Finish Options" content={product.finishes.join(" · ")} />
                      <DetailBlock title="Thickness Options" content={product.thickness.join(" · ")} />
                      <DetailBlock
                        title="Best Applications"
                        content={product.applications.slice(0, 3).join(" · ")}
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button href="/contact#inquiry">Request Quote</Button>
                    <Button href="/contact?type=sample" variant="outline">
                      Request Sample
                    </Button>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
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

      <section className="section-padding bg-charcoal">
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
    <div className="border border-border bg-background px-5 py-4">
      <h3 className="text-xs uppercase tracking-widest text-gold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{content}</p>
    </div>
  );
}
