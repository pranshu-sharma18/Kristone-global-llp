import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/lib/data/products";
import { Button } from "@/components/ui/Button";

export function FeaturedProduct() {
  const product = getProductBySlug("artemis-grey-quartzite");
  if (!product) return null;

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={product.heroImage}
              alt={`${product.name} — premium quartzite slab by Kristone Global LLP`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute left-6 top-6 border border-gold/40 bg-background/80 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-widest text-gold">Flagship</span>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold">
              Signature Collection
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              {product.name}
            </h2>
            <div className="divider-gold mt-4" />
            <p className="mt-6 text-lg italic text-stone-beige">{product.tagline}</p>
            <p className="mt-4 leading-relaxed text-muted">{product.description}</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold">Finishes</p>
                <p className="mt-1 text-sm text-muted">{product.finishes.join(" · ")}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gold">Thickness</p>
                <p className="mt-1 text-sm text-muted">{product.thickness.slice(0, 2).join(" · ")}</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={`/products/${product.slug}`}>View Details</Button>
              <Button href="/contact#inquiry" variant="outline">
                Request Sample
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
