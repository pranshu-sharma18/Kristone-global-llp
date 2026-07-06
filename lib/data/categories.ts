import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "quartzite",
    name: "Quartzite",
    description:
      "Exceptionally durable metamorphic stone with rich veining and natural depth. Our signature Artemis Grey Quartzite collection transforms luxury dining spaces, feature walls, and flooring for international projects.",
    applications: [
      "Luxury flooring",
      "Feature walls",
      "Countertops",
      "Hotel lobbies",
      "Exterior cladding",
    ],
    finishes: ["Polished", "Honed", "Leathered", "Brushed"],
    image: "/images/categories/quartzite.png",
    alt: "Luxury dining room with Artemis Grey Quartzite table, flooring, and feature wall — Kristone Global LLP",
    galleryImages: [
      "/images/categories/quartzite.png",
      "/images/categories/quartzite-lifestyle-2.png",
      "/images/categories/quartzite-living.png",
      "/images/categories/quartzite-bedroom.png",
    ],
  },
  {
    id: "marble",
    name: "Marble",
    description:
      "Timeless elegance with distinctive veining patterns. Premium marble creates spa-like bathrooms, statement walls, and prestigious interiors for residential and hospitality projects worldwide.",
    applications: [
      "Bathroom suites",
      "Statement walls",
      "Flooring",
      "Fireplace surrounds",
      "Luxury retail",
    ],
    finishes: ["Polished", "Honed", "Sandblasted"],
    image: "/images/categories/marble.png",
    alt: "Luxury bathroom with premium grey marble walls, flooring, and vanity — Kristone Global LLP",
  },
  {
    id: "granite",
    name: "Granite",
    description:
      "Hard-wearing igneous stone offering superior strength and dramatic character. Dark granite with copper and charcoal veining delivers bold architectural statements for countertops, flooring, and facades.",
    applications: [
      "Kitchen countertops",
      "Commercial flooring",
      "Monuments",
      "Staircases",
      "Outdoor paving",
    ],
    finishes: ["Polished", "Flamed", "Brushed", "Leathered"],
    image: "/images/categories/granite.png",
    alt: "Modern interior with dark granite stone flooring and dramatic copper-veined feature wall",
  },
  {
    id: "onyx",
    name: "Onyx",
    description:
      "Translucent and dramatic, onyx creates breathtaking backlit features and exclusive interior statements. Ideal for accent walls, reception areas, and premium hospitality environments.",
    applications: [
      "Backlit panels",
      "Bar fronts",
      "Feature walls",
      "Luxury bathrooms",
      "Reception desks",
    ],
    finishes: ["Polished", "Backlit-ready"],
    image: "/images/categories/onyx.png",
    alt: "Luxury living room with dramatic backlit onyx-style stone feature wall and polished flooring",
  },
  {
    id: "engineered-stone",
    name: "Engineered Stone",
    description:
      "Consistent performance with design flexibility. Engineered surfaces deliver uniform aesthetics for kitchen islands, commercial countertops, and large-scale residential specifications.",
    applications: [
      "Commercial countertops",
      "Retail fit-outs",
      "Healthcare interiors",
      "Multi-unit residential",
      "Work surfaces",
    ],
    finishes: ["Polished", "Matte", "Textured"],
    image: "/images/categories/engineered-stone.png",
    alt: "Modern kitchen and dining space with engineered stone waterfall island and stone flooring",
  },
];

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id);
}
