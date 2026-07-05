"use client";

import { useState } from "react";
import { company } from "@/lib/data/company";

interface InquiryFormProps {
  id?: string;
  title?: string;
  compact?: boolean;
}

export function InquiryForm({
  id = "inquiry",
  title = "Request a Quote",
  compact = false,
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-gold/30 bg-charcoal-light p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
          <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-foreground">Thank You</h3>
        <p className="mt-2 text-muted">
          Your inquiry has been received. Our export team will respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`space-y-5 ${compact ? "" : "rounded-sm border border-border bg-charcoal-light p-8 md:p-10"}`}
    >
      {!compact && (
        <h3 className="font-display text-2xl text-foreground">{title}</h3>
      )}
      <div className={`grid gap-5 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <Field label="Full Name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Country" name="country" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Product Interest" name="product" placeholder="e.g. Artemis Grey Quartzite" />
      <div>
        <label htmlFor={`${id}-message`} className="mb-2 block text-xs uppercase tracking-widest text-muted">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project requirements, quantities, and timeline..."
          className="w-full resize-none border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-gold/50 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-widest text-charcoal transition-colors hover:bg-gold-light disabled:opacity-60 md:w-auto"
      >
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>
      <p className="text-xs text-muted">
        By submitting, you agree to be contacted by {company.name} regarding your inquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs uppercase tracking-widest text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-gold/50 focus:outline-none"
      />
    </div>
  );
}
