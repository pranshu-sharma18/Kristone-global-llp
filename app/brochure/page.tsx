import type { Metadata } from "next";
import Link from "next/link";
import { getFlagshipProducts } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { company } from "@/lib/data/company";
import { Button } from "@/components/ui/Button";
import { PrintButton } from "@/components/ui/PrintButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Product Brochure — Premium Stone Collections",
  description:
    "Download the Kristone Global LLP product brochure featuring Artemis Quartzite and premium natural stone collections for export.",
};

export default function BrochurePage() {
  const flagship = getFlagshipProducts();

  return (
    <div className="pt-24">
      <section className="section-padding bg-charcoal">
        <div className="container-wide text-center">
          <SectionHeading
            eyebrow="Product Catalog"
            title="Kristone Global Product Brochure"
            description="Complete overview of our premium stone collections, finishes, and export specifications."
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PrintButton />
            <Button href="/contact#inquiry" variant="outline">
              Request Full Catalog
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding print:break-inside-avoid">
        <div className="container-wide space-y-16">
          <div>
            <h2 className="font-display text-3xl text-gold">Artemis Quartzite Series</h2>
            <div className="divider-gold mt-3" />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {flagship.map((p) => (
                <div key={p.slug} className="border border-border p-6">
                  <h3 className="font-display text-xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted">{p.tagline}</p>
                  <p className="mt-3 text-xs text-muted">
                    Finishes: {p.finishes.join(", ")} · Thickness: {p.thickness.join(", ")}
                  </p>
                  <Link href={`/products/${p.slug}`} className="mt-3 inline-block text-xs text-gold hover:underline">
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl text-gold">Stone Categories</h2>
            <div className="divider-gold mt-3" />
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <div key={cat.id} className="border border-border p-5">
                  <h3 className="font-display text-lg">{cat.name}</h3>
                  <p className="mt-2 text-sm text-muted">{cat.description.slice(0, 120)}...</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gold/20 p-8 text-center">
            <p className="font-display text-xl">{company.name}</p>
            <p className="mt-2 text-sm text-muted">{company.email} · {company.phone}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
