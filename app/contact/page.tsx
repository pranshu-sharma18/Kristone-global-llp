import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Contact Us — Request Quote & Stone Samples",
  description:
    "Contact Kristone Global LLP for export quotes, sample requests, and buyer inquiries. Premium natural stone exporter serving global markets.",
};

export default function ContactPage() {
  const primaryPhone = company.phone.split(",")[0]?.trim() ?? company.phone;
  const whatsappMessage = encodeURIComponent(
    "Hello Kristone Global LLP, I would like to inquire about your premium natural stone collections."
  );
  const whatsappUrl = `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${whatsappMessage}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect With Our Export Team"
        subtitle="Request quotes, samples, and specifications — we respond to international inquiries within 24 hours."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        imageAlt="Kristone Global LLP export sales office"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            <ContactCard
              title="Email"
              value={company.email}
              href={`mailto:${company.email}`}
              icon="email"
            />
            <ContactCard
              title="Phone"
              value={company.phone}
              href={`tel:${primaryPhone.replace(/\D/g, "")}`}
              icon="phone"
            />
            <ContactCard
              title="WhatsApp"
              value="Chat with Export Team"
              href={whatsappUrl}
              icon="whatsapp"
              external
            />
          </div>
        </div>
      </section>

      <section id="inquiry" className="section-padding bg-charcoal">
        <div className="container-wide grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Buyer Inquiry"
              title="Request a Quote or Sample"
              description="Complete the form below and our export specialists will respond with availability, pricing, and shipping options."
            />
            <div className="mt-10 space-y-4">
              <div className="border border-border p-6">
                <h3 className="text-xs uppercase tracking-widest text-gold">Office Address</h3>
                <p className="mt-2 text-sm text-muted">
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                </p>
              </div>
              <div className="border border-border p-6">
                <h3 className="text-xs uppercase tracking-widest text-gold">Download Brochure</h3>
                <p className="mt-2 text-sm text-muted">
                  Complete product catalog with specifications and finish options.
                </p>
                <Button
                  href={company.brochureUrl}
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  external
                >
                  Download PDF
                </Button>
              </div>
              <div className="overflow-hidden border border-border bg-background">
                <div className="grid gap-0 sm:grid-cols-[180px_1fr]">
                  <div className="relative min-h-[220px] bg-charcoal-light">
                    <img
                      src="/images/hr-monika-sharma.png"
                      alt="Er. Monika Sharma, HR at Kristone Global LLP"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xs uppercase tracking-widest text-gold">HR Contact</h3>
                    <h4 className="mt-3 font-display text-2xl text-foreground">
                      Er. Monika Sharma
                    </h4>
                    <p className="mt-2 text-sm text-stone-beige">Human Resources</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      Er. Monika Sharma supports communication and coordination at
                      Kristone Global LLP, helping ensure smooth interaction for
                      business inquiries, company coordination, and client-facing
                      support. She represents the company with professionalism,
                      responsiveness, and a people-first approach.
                    </p>
                    <div className="mt-5">
                      <a
                        href="tel:8770076052"
                        className="text-sm font-medium text-foreground transition-colors hover:text-gold"
                      >
                        Contact: 8770076052
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InquiryForm id="contact-inquiry" title="Buyer Inquiry Form" />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Location"
            title="Find Us"
            description="Visit our office or connect with us for factory and quarry visits by appointment."
            align="center"
          />
          <div className="mt-10 flex aspect-[21/9] items-center justify-center border border-border bg-charcoal-light">
            <div className="text-center">
              <p className="text-sm text-muted">Map Embed Placeholder</p>
              <p className="mt-2 text-xs text-muted/60">
                {company.address.line1}, {company.address.line2}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-light">
        <div className="container-wide text-center">
          <SectionHeading
            eyebrow="Newsletter"
            title="Stay Updated on New Collections"
            description="Subscribe for updates on new stone arrivals, Artemis series launches, and export availability."
            align="center"
          />
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-gold/50 focus:outline-none"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="bg-gold px-6 py-3 text-xs uppercase tracking-widest text-charcoal transition-colors hover:bg-gold-light"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  title,
  value,
  href,
  icon,
  external,
}: {
  title: string;
  value: string;
  href: string;
  icon: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group border border-border p-8 transition-all hover:border-gold/40 hover:bg-charcoal-light"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center border border-gold/30 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
        <ContactIcon name={icon} />
      </div>
      <h3 className="text-xs uppercase tracking-widest text-gold">{title}</h3>
      <p className="mt-2 text-sm text-foreground">{value}</p>
    </a>
  );
}

function ContactIcon({ name }: { name: string }) {
  if (name === "email") {
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (name === "phone") {
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
