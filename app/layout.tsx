import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
