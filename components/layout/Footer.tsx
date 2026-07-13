import Link from "next/link";
import { footerNav } from "@/lib/data/navigation";
import { company } from "@/lib/data/company";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="section-padding container-wide">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl text-foreground">Kristone</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-gold">
                Global LLP
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Premium natural stone exporter specializing in quartzite, marble,
              granite, and luxury stone collections for global projects.
            </p>
            <div className="mt-6 flex gap-4">
              {Object.entries(company.social).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-border text-muted transition-colors hover:border-gold hover:text-gold"
                  aria-label={key}
                >
                  <SocialIcon name={key} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Collections" links={footerNav.collections} />
          <FooterColumn title="Artemis Series" links={footerNav.flagship} />
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
          <ContactBlock label="Email" value={company.email} href={`mailto:${company.email}`} />
          <ContactBlock label="Phone" value={company.phone} href={`tel:${company.phone.replace(/\s/g, "")}`} />
          <div>
            <p className="text-xs uppercase tracking-widest text-gold">Office</p>
            <p className="mt-2 text-sm text-muted">
              {company.address.line1}
              <br />
              {company.address.line2}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted md:text-right">
            Natural Stone Exporter · Quartzite · Marble · Granite · Global Supplier
          </p>
        </div>

        <div className="mt-6 border-t border-border/60 pt-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted/80">
            Website created &amp; tested by{" "}
            <span className="text-gold/90">ByteLock Security</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-widest text-gold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactBlock({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-gold">{label}</p>
      <a
        href={href}
        className="mt-2 block text-sm text-muted transition-colors hover:text-gold"
      >
        {value}
      </a>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    linkedin: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    instagram: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    facebook: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  };
  return icons[name] ?? null;
}
