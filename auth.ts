import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { saveGoogleVisitor } from "@/lib/visitors";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session }) {
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      if (!user.email) return;
      try {
        await saveGoogleVisitor({
          email: user.email,
          name: user.name ?? null,
          image: user.image ?? null,
          source: "google-login",
        });
      } catch (error) {
        console.error("Failed to store Google visitor:", error);
      }
    },
  },
  trustHost: true,
});
