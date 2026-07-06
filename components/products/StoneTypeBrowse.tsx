import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/types";
import { Button } from "@/components/ui/Button";

interface StoneTypeBrowseProps {
  categories: Category[];
  activeCategory?: string;
}

export function StoneTypeBrowse({ categories, activeCategory }: StoneTypeBrowseProps) {
  const visible = categories.filter(
    (cat) => !activeCategory || cat.id === activeCategory
  );

  return (
    <div className="mt-12 space-y-10">
      {visible.map((cat) => (
        <article
          key={cat.id}
          className="group overflow-hidden border border-border bg-charcoal-light/30 transition-colors hover:border-gold/25"
        >
          <div className="grid lg:grid-cols-5">
            <div className="relative lg:col-span-2">
              <div className="relative aspect-[4/3] min-h-[280px] lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={cat.id === "quartzite"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/20" />
              </div>

              {cat.galleryImages && cat.galleryImages.length > 1 && (
                <div className="grid grid-cols-4 border-t border-border">
                  {cat.galleryImages.slice(0, 4).map((src, i) => (
                    <div key={src} className="relative aspect-square border-r border-border last:border-r-0">
                      <Image
                        src={src}
                        alt={`${cat.name} application ${i + 1} — Kristone Global LLP`}
                        fill
                        className="object-cover"
                        sizes="10vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-12">
              <Link href={`/products?category=${cat.id}`}>
                <span className="text-xs uppercase tracking-[0.25em] text-gold">
                  Export Collection
                </span>
              </Link>
              <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
                {cat.name}
              </h2>
              <div className="divider-gold mt-4" />
              <p className="mt-5 max-w-2xl leading-relaxed text-muted">
                {cat.description}
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
                <Button href={`/contact?product=${cat.name}`} variant="outline">
                  Inquire About {cat.name}
                </Button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
