"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center bg-gold px-8 py-4 text-sm font-medium uppercase tracking-widest text-charcoal transition-all duration-300 hover:bg-gold-light"
    >
      Print Brochure
    </button>
  );
}
