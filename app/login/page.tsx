import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Sign In with Google",
  description:
    "Sign in with Google to stay connected with Kristone Global LLP for stone quotes and product updates.",
};

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <section className="section-padding bg-charcoal pt-32">
      <div className="container-wide mx-auto max-w-lg">
        <div className="border border-border bg-[#161616] p-8 md:p-10">
          <SectionHeading
            eyebrow="Account"
            title="Sign in with Google"
            description="Use your Google account so our export team can contact you with quotes, samples, and collection updates."
            align="center"
          />

          <form
            className="mt-10"
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 bg-gold px-6 py-4 text-sm font-medium uppercase tracking-widest text-charcoal transition-colors hover:bg-gold-light"
            >
              Continue with Google
            </button>
          </form>

          <p className="mt-6 text-center text-xs leading-relaxed text-muted">
            We store your name and email in{" "}
            <span className="text-stone-beige">data/google-visitors.json</span> on
            the server for future follow-up. You can leave anytime and keep browsing.
          </p>
        </div>
      </div>
    </section>
  );
}
