"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export function AuthMenu({ mobile = false }: { mobile?: boolean }) {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (session?.user) {
    return (
      <div className={mobile ? "flex flex-col items-center gap-3" : "flex items-center gap-3"}>
        <span className="max-w-[140px] truncate text-xs text-muted" title={session.user.email ?? undefined}>
          {session.user.email}
        </span>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-xs uppercase tracking-widest text-foreground/80 transition-colors hover:text-gold"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="text-xs uppercase tracking-widest text-foreground/80 transition-colors hover:text-gold"
    >
      Sign in
    </Link>
  );
}
