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
  title: "Premium Natural Stone Exporter | Quartzite, Marble & Granite",
  description:
    "Kristone Global LLP exports premium natural stone including Artemis Grey Quartzite, marble, granite, and onyx to global buyers. Request a quote for export-quality stone slabs.",
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
