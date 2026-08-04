"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";

const STORAGE_KEY = "kristone-google-login-dismissed";
const SCROLL_THRESHOLD = 0.35; // 35% of page
const DELAY_MS = 2 * 60 * 1000; // 2 minutes

export function GoogleLoginPrompt() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [scrolledEnough, setScrolledEnough] = useState(false);
  const [waitedEnough, setWaitedEnough] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        setScrolledEnough(true);
        return;
      }
      const ratio = window.scrollY / maxScroll;
      if (ratio >= SCROLL_THRESHOLD) setScrolledEnough(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const timer = window.setTimeout(() => setWaitedEnough(true), DELAY_MS);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (status === "loading") return;
    if (session?.user) return;
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) return;
    if (scrolledEnough && waitedEnough) setOpen(true);
  }, [scrolledEnough, waitedEnough, session, status]);

  function dismiss() {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore storage errors
    }
  }

  if (!open || session?.user) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/55 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="google-login-title"
    >
      <div className="w-full max-w-md border border-border bg-[#141414] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.55)] md:p-9">
        <p className="text-xs uppercase tracking-[0.25em] text-gold">Stay Connected</p>
        <h2
          id="google-login-title"
          className="mt-3 font-display text-3xl text-foreground"
        >
          Sign in with Google
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Continue with your Google account so our export team can follow up with
          product updates, quotes, and stone availability relevant to your interest.
        </p>

        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="mt-7 flex w-full items-center justify-center gap-3 bg-gold px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-charcoal transition-colors hover:bg-gold-light"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        <button
          type="button"
          onClick={dismiss}
          className="mt-3 w-full border border-border px-6 py-3 text-xs uppercase tracking-widest text-muted transition-colors hover:border-gold/40 hover:text-foreground"
        >
          Maybe later
        </button>

        <p className="mt-4 text-[11px] leading-relaxed text-muted/80">
          We only store your name and email to contact you about Kristone Global
          stone collections. You can continue browsing without signing in.
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
