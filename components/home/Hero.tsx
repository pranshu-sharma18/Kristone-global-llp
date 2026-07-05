import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data/company";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1615873966236-02aec638b129?w=1920&q=80"
        alt="Premium grey quartzite slab — Kristone Global LLP natural stone exporter"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

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

        <div className="animate-fade-in animate-delay-400 mt-20 hidden items-end justify-between border-t border-border/50 pt-8 md:flex">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Flagship Collection</p>
            <Link
              href="/products/artemis-grey-quartzite"
              className="mt-1 font-display text-xl text-gold transition-colors hover:text-gold-light"
            >
              Artemis Grey Quartzite →
            </Link>
          </div>
          <p className="max-w-xs text-right text-sm text-muted">
            Trusted natural stone exporter · Quartzite · Marble · Granite · Onyx
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-gold/60" />
      </div>
    </section>
  );
}
