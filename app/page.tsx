import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CategoryHighlights } from "@/components/home/CategoryHighlights";
import { FeaturedProduct } from "@/components/home/FeaturedProduct";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { GlobalReach } from "@/components/home/GlobalReach";
import { CollectionsPreview } from "@/components/home/CollectionsPreview";
import { ProjectGalleryPreview } from "@/components/home/ProjectGalleryPreview";
import { TrustSection } from "@/components/home/TrustSection";
import { HomeInquiry } from "@/components/home/HomeInquiry";
export const metadata: Metadata = {
  title: "Premium Marble & Quartzite Slab Exporter | Kristone Global",
  description:
    "Kristone Global LLP exports premium marble & quartzite slabs — Valerian Breccia, Rossa Levanto & more — to architects worldwide. Request a quote.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryHighlights />
      <FeaturedProduct />
      <AboutPreview />
      <WhyChooseUs />
      <GlobalReach />
      <CollectionsPreview />
      <ProjectGalleryPreview />
      <TrustSection />
      <HomeInquiry />
    </>
  );
}
