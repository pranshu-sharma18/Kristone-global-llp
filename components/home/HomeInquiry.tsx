import { SectionHeading } from "@/components/ui/SectionHeading";
import { InquiryForm } from "@/components/ui/InquiryForm";

export function HomeInquiry() {
  return (
    <section id="inquiry" className="section-padding">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Start Your Stone Inquiry"
              description="Whether you need slab specifications, sample dispatch, or a full container quote — our export team is ready to assist international buyers."
            />
            <div className="mt-10 space-y-6">
              <InfoBlock
                title="Sample Requests"
                text="Physical samples available for qualified buyers worldwide."
              />
              <InfoBlock
                title="Project Quotes"
                text="Volume pricing for developers, importers, and distributors."
              />
              <InfoBlock
                title="Brochure Download"
                text="Complete product catalog with specifications and finishes."
              />
            </div>
          </div>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-l-2 border-gold/40 pl-5">
      <h3 className="font-display text-lg text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted">{text}</p>
    </div>
  );
}
