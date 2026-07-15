import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data/company";

const heroSlabs = [
  {
    src: "/images/hero/valerian-breccia.png",
    alt: "Valerian Breccia slab by Kristone Global LLP",
  },
  {
    src: "/images/hero/rossa-levanto.png",
    alt: "Rossa Levanto slab by Kristone Global LLP",
  },
  {
    src: "/images/hero/antique-grey-gold.png",
    alt: "Antique Grey & Gold slab by Kristone Global LLP",
  },
  {
    src: "/images/hero/breccia-fantasy.png",
    alt: "Breccia Fantasy slab by Kristone Global LLP",
  },
  {
    src: "/images/hero/golden-harvest-grey.png",
    alt: "Golden Harvest Grey slab by Kristone Global LLP",
  },
  {
    src: "/images/hero/silver-veins-grey.png",
    alt: "Silver Veins Grey slab by Kristone Global LLP",
  },
  {
    src: "/images/hero/copper-vein-grey.png",
    alt: "Copper Vein Grey slab by Kristone Global LLP",
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-transparent">
        <div className="absolute inset-y-0 -left-[15%] flex w-[220%] -rotate-6 items-center opacity-90">
          <div className="flex min-w-max gap-6 animate-marquee-left">
            {[...heroSlabs, ...heroSlabs].map((slab, index) => (
              <div
                key={`${slab.src}-top-${index}`}
                className="relative h-[220px] w-[320px] shrink-0 overflow-hidden rounded-sm border border-white/25 bg-charcoal-light shadow-2xl shadow-black/40 md:h-[280px] md:w-[420px] lg:h-[320px] lg:w-[480px]"
              >
                <Image
                  src={slab.src}
                  alt={slab.alt}
                  fill
                  priority={index < heroSlabs.length}
                  className="object-cover brightness-110 contrast-105"
                  sizes="(max-width: 768px) 320px, (max-width: 1200px) 420px, 480px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 -left-[10%] flex w-[220%] rotate-3 items-center opacity-80">
          <div className="flex min-w-max gap-6 animate-marquee-right pt-56 md:pt-64 lg:pt-72">
            {[...heroSlabs.slice(2), ...heroSlabs.slice(0, 2), ...heroSlabs].map(
              (slab, index) => (
                <div
                  key={`${slab.src}-bottom-${index}`}
                  className="relative h-[200px] w-[300px] shrink-0 overflow-hidden rounded-sm border border-white/20 bg-charcoal-light shadow-2xl shadow-black/30 md:h-[240px] md:w-[380px] lg:h-[280px] lg:w-[440px]"
                >
                  <Image
                    src={slab.src}
                    alt=""
                    fill
                    aria-hidden
                    className="object-cover brightness-110 contrast-105"
                    sizes="(max-width: 768px) 300px, (max-width: 1200px) 380px, 440px"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-background/40 to-background/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/45 via-background/15 to-transparent" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 container-wide px-6 pt-32 pb-20 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="animate-fade-up text-xs font-medium uppercase tracking-[0.3em] text-gold">
            {company.name}
          </p>
          <h1 className="animate-fade-up animate-delay-100 mt-4 font-display text-4xl leading-tight text-foreground md:text-6xl lg:text-7xl">
            Premium Natural Stone for{" "}
            <span className="gold-gradient-text">Global Projects</span>
          </h1>
          <p className="animate-fade-up animate-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-stone-beige/90 md:text-xl">
            {company.subtitle} Exporting excellence in quartzite and natural
            stone to architects, developers, and importers worldwide.
          </p>
          <div className="animate-fade-up animate-delay-300 mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/products" size="lg">
              Explore Collections
            </Button>
            <Button href="/contact#inquiry" variant="outline" size="lg">
              Request a Quote
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-gold/60" />
      </div>
    </section>
  );
}
