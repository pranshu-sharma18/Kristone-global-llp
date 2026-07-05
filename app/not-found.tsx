import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">404</p>
      <h1 className="mt-4 font-display text-4xl text-foreground">Page Not Found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you are looking for may have been moved or does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 border border-gold px-8 py-3 text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-charcoal"
      >
        Return Home
      </Link>
    </div>
  );
}
