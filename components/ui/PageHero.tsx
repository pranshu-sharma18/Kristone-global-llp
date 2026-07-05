import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  image = "https://images.unsplash.com/photo-1615873966236-02aec638b129?w=1920&q=80",
  imageAlt = "Premium natural stone slabs by Kristone Global LLP",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-24">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      <div className="relative z-10 section-padding container-wide w-full pb-16">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-4xl text-foreground md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-stone-beige/90">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
