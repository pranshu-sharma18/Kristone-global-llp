import type { Metadata } from "next";
import { ProjectsContent } from "@/components/projects/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects & Applications — Luxury Stone Installations",
  description:
    "Explore Kristone Global LLP stone applications in luxury villas, hotels, commercial interiors, flooring, cladding, countertops, and facades worldwide.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
