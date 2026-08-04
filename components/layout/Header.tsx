"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { mainNav } from "@/lib/data/navigation";
import { company } from "@/lib/data/company";
import { AuthMenu } from "@/components/auth/AuthMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#0f0f0f] border-b border-border shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide flex items-center justify-end gap-8 px-6 py-4 md:px-10 lg:justify-between lg:px-16">
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-widest text-foreground/80 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <AuthMenu />
            <Link
              href="/contact"
              className="border border-gold/60 px-5 py-2.5 text-xs uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-charcoal"
            >
              Request Quote
            </Link>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[45] flex flex-col bg-[#0f0f0f] transition-all duration-500 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="h-[72px] shrink-0 border-b border-border" />
        <nav
          className="flex flex-1 flex-col items-center justify-center gap-8 px-6"
          aria-label="Mobile navigation"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-foreground transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 border border-gold px-8 py-3 text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-charcoal"
          >
            Request Quote
          </Link>
          <div className="mt-6" onClick={() => setMenuOpen(false)}>
            <AuthMenu mobile />
          </div>
        </nav>
        <div className="border-t border-border bg-[#0f0f0f] p-6 text-center text-sm text-muted">
          {company.email}
          <br />
          {company.phone}
        </div>
      </div>
    </>
  );
}
