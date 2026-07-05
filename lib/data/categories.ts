import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "quartzite",
    name: "Quartzite",
    description:
      "Exceptionally durable metamorphic stone with rich veining and natural depth. Ideal for luxury interiors, facades, and high-traffic commercial spaces.",
    applications: [
      "Luxury flooring",
      "Feature walls",
      "Countertops",
      "Hotel lobbies",
      "Exterior cladding",
    ],
    finishes: ["Polished", "Honed", "Leathered", "Brushed"],
    image:
      "https://images.unsplash.com/photo-1615873966236-02aec638b129?w=800&q=80",
    alt: "Premium grey quartzite slab with natural veining",
  },
  {
    id: "marble",
    name: "Marble",
    description:
      "Timeless elegance with distinctive veining patterns. The preferred choice for prestigious residential and hospitality projects worldwide.",
    applications: [
      "Bathroom suites",
      "Statement walls",
      "Flooring",
      "Fireplace surrounds",
      "Luxury retail",
    ],
    finishes: ["Polished", "Honed", "Sandblasted"],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "White marble slab with elegant grey veining",
  },
  {
    id: "granite",
    name: "Granite",
    description:
      "Hard-wearing igneous stone offering superior strength and versatility for countertops, flooring, and architectural applications.",
    applications: [
      "Kitchen countertops",
      "Commercial flooring",
      "Monuments",
      "Staircases",
      "Outdoor paving",
    ],
    finishes: ["Polished", "Flamed", "Brushed", "Leathered"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Dark granite stone surface texture",
  },
  {
    id: "onyx",
    name: "Onyx",
    description:
      "Translucent and dramatic, onyx creates breathtaking backlit features and exclusive interior statements for premium environments.",
    applications: [
      "Backlit panels",
      "Bar fronts",
      "Feature walls",
      "Luxury bathrooms",
      "Reception desks",
    ],
    finishes: ["Polished", "Backlit-ready"],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Translucent onyx stone with warm amber tones",
  },
  {
    id: "engineered-stone",
    name: "Engineered Stone",
    description:
      "Consistent performance with design flexibility. Engineered surfaces deliver uniform aesthetics for large-scale commercial specifications.",
    applications: [
      "Commercial countertops",
      "Retail fit-outs",
      "Healthcare interiors",
      "Multi-unit residential",
      "Work surfaces",
    ],
    finishes: ["Polished", "Matte", "Textured"],
    image:
      "https://images.unsplash.com/photo-1600210492493-027691e750de?w=800&q=80",
    alt: "Engineered stone countertop surface",
  },
];

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id);
}
