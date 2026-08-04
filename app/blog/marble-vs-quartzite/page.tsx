import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Marble vs. Quartzite: Which Natural Stone Is Right for Your Luxury Project?",
  description: "Discover the differences between marble and quartzite slabs for luxury interiors. Compare hardness, porosity, maintenance, and aesthetics.",
};

export default function MarbleVsQuartzitePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is quartzite more expensive than marble?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally yes — true quartzite's hardness makes it more difficult and costly to quarry and cut than marble, which is typically reflected in pricing. Exact costs depend on the specific stone, slab size, and finish."
        }
      },
      {
        "@type": "Question",
        "name": "Is quartzite better than marble for kitchens?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most kitchens, yes. Quartzite's lower porosity and higher scratch resistance make it more forgiving for daily cooking use, though marble remains a popular choice for buyers prioritizing aesthetics over low-maintenance performance."
        }
      },
      {
        "@type": "Question",
        "name": "Can marble be used outdoors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Marble can be used outdoors, but its porosity makes it more vulnerable to weathering and staining over time compared to quartzite, particularly in humid or coastal climates."
        }
      },
      {
        "@type": "Question",
        "name": "How can I tell if a 'quartzite' slab is true quartzite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ask your supplier for hardness verification or mineral composition data. Reputable exporters, including Kristone Global, can confirm this for any stone in their catalog."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <PageHero
        eyebrow="Stone Education"
        title="Marble vs. Quartzite"
        subtitle="Which Natural Stone Is Right for Your Luxury Project?"
        image="/images/hero/valerian-breccia.png"
        imageAlt="Marble and Quartzite slabs"
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide max-w-4xl mx-auto text-lg leading-relaxed text-muted space-y-8">
          
          <h2 className="text-3xl font-display text-foreground mt-12">What Is Marble? Geological Formation & Properties</h2>
          <p>Marble is a metamorphic rock that forms when limestone is subjected to immense heat and pressure over time. It is globally prized for its classic, elegant veining and luminous surface. However, because its base is calcium carbonate, it is relatively soft (rating a 3 to 4 on the Mohs hardness scale) and porous.</p>

          <h2 className="text-3xl font-display text-foreground mt-12">What Is Quartzite? Geological Formation & Properties</h2>
          <p>Quartzite is a hard, non-foliated metamorphic rock which was originally pure quartz sandstone. Through tectonic heating and pressure, the quartz grains recrystallize into an incredibly dense, interlocking network. True quartzite rates a 7 on the Mohs scale—making it harder than glass and even granite.</p>

          <h2 className="text-3xl font-display text-foreground mt-12">Side-by-Side Comparison</h2>
          <ul className="space-y-4 mt-6">
            <li className="flex gap-4"><span className="text-gold">✦</span> <strong>Porosity & Staining:</strong> Quartzite is significantly less porous than marble, making it highly resistant to stains from wine, coffee, or oils.</li>
            <li className="flex gap-4"><span className="text-gold">✦</span> <strong>Scratch Resistance:</strong> Quartzite's extreme hardness means it won't scratch easily from knives or heavy cookware, whereas marble requires more care.</li>
            <li className="flex gap-4"><span className="text-gold">✦</span> <strong>Maintenance:</strong> Marble requires frequent sealing and immediate wipe-downs of acidic spills (like lemon juice) to prevent "etching." Quartzite is much more forgiving for daily use.</li>
          </ul>

          <h2 className="text-3xl font-display text-foreground mt-12">Which Stone Fits Your Project?</h2>
          <p>If you are designing a high-traffic hotel lobby, a heavily used chef's kitchen, or an outdoor facade in a harsh climate, <strong>Quartzite</strong> is usually the superior choice for longevity. If you are designing a luxury bathroom, a decorative feature wall, or a low-traffic baking station where classic, warm aesthetics are the highest priority, <strong>Marble</strong> remains an unmatched symbol of luxury.</p>

          <div className="mt-16 p-8 md:p-12 border border-gold/20 bg-[#161616] text-center">
            <h3 className="text-2xl font-display text-foreground">Explore Our Export-Grade Collections</h3>
            <p className="mt-4 mb-8 text-sm">Compare the materials for yourself. We supply both premium marble and quartzite to international standards.</p>
            <div className="flex flex-wrap justify-center gap-4">
               <Link href="/products/rossa-levanto" className="bg-gold text-charcoal px-6 py-3 font-semibold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                 View Marble
               </Link>
               <Link href="/products/silver-veins-grey" className="border border-gold text-gold px-6 py-3 font-semibold uppercase tracking-widest text-xs hover:bg-gold hover:text-charcoal transition-colors">
                 View Quartzite
               </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}