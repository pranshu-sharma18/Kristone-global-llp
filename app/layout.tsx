import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { AuthSessionProvider } from "@/components/auth/AuthSessionProvider";
import { GoogleLoginPrompt } from "@/components/auth/GoogleLoginPrompt";
import { company, seoKeywords } from "@/lib/data/company";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Premium Natural Stone Exporter`,
    template: `%s | ${company.name}`,
  },
  description:
    "Kristone Global LLP — premium natural stone exporter specializing in quartzite, marble, granite, onyx, and engineered stone. Export-quality slabs for global luxury projects.",
  keywords: [...seoKeywords],
  openGraph: {
    title: `${company.name} | Premium Natural Stone Exporter`,
    description: company.description,
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [],
    apple: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="relative min-h-full flex flex-col bg-transparent text-foreground antialiased">
        <AuthSessionProvider>
          <AmbientBackground />
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
          <GoogleLoginPrompt />
        </AuthSessionProvider>
      </body>
    </html>
  );
}
