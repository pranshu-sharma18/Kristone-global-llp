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
      "Hard-wearing igneous stone offering superior strength and dramatic character. From Black Galaxy and Platinum Black to Tropical Brown, Galaxy Gold, Alaska White, and Royal Porphyry Grey — our granite range delivers bold architectural statements for countertops, flooring, and facades.",
    applications: [
      "Kitchen countertops",
      "Commercial flooring",
      "Monuments",
      "Staircases",
      "Outdoor paving",
    ],
    finishes: ["Polished", "Flamed", "Brushed", "Leathered"],
    image: "/images/categories/granite/black-galaxy.png",
    alt: "Premium Black Galaxy Granite polished slab — Kristone Global LLP",
    galleryImages: [
      "/images/categories/granite/black-galaxy.png",
      "/images/categories/granite/platinum-black.png",
      "/images/categories/granite/tropical-brown.png",
      "/images/categories/granite/alaska-white.png",
      "/images/categories/granite/galaxy-gold.png",
      "/images/categories/granite/royal-porphyry-grey.png",
    ],
    galleryItems: [
      {
        src: "/images/categories/granite/black-galaxy.png",
        title: "Black Galaxy Granite",
        description:
          "Deep black polished granite with gold and bronze flecks — a classic export favourite for countertops, flooring, and premium commercial interiors.",
        origin: "India",
      },
      {
        src: "/images/categories/granite/platinum-black.png",
        title: "Platinum Black Granite",
        description:
          "Intense solid black granite with a flawless mirror finish. Ideal for modern kitchens, luxury receptions, and statement architectural surfaces.",
        origin: "India",
      },
      {
        src: "/images/categories/granite/tropical-brown.png",
        title: "Tropical Brown Granite",
        description:
          "Rich brown and copper-toned granite with flowing movement. Perfect for warm luxury interiors, feature walls, and high-end residential projects.",
        origin: "India",
      },
      {
        src: "/images/categories/granite/alaska-white.png",
        title: "Alaska White Granite",
        description:
          "Bright white and cream granite with soft tan and grey movement. A refined choice for kitchens, bathrooms, and bright contemporary spaces.",
        origin: "Brazil",
      },
      {
        src: "/images/categories/granite/galaxy-gold.png",
        title: "Galaxy Gold Granite",
        description:
          "Cream and beige granite with warm gold flecks and fine mineral texture. Excellent for polished countertops and elegant residential finishes.",
        origin: "India",
      },
      {
        src: "/images/categories/granite/royal-porphyry-grey.png",
        title: "Royal Porphyry Grey",
        description:
          "Charcoal-grey granite with crystalline speckles and a polished surface. Strong, durable character for flooring, cladding, and commercial use.",
        origin: "India",
      },
    ],
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
    image: "/images/categories/onyx/spectrum-fire-onyx.png",
    alt: "Spectrum Fire Onyx raw form collection piece — Kristone Global LLP",
    galleryImages: [
      "/images/categories/onyx/spectrum-fire-onyx.png",
      "/images/categories/onyx/fireside-onyx.png",
      "/images/categories/onyx/fire-ash-onyx.png",
    ],
    galleryItems: [
      {
        src: "/images/categories/onyx/spectrum-fire-onyx.png",
        title: "Spectrum Fire Onyx",
        description:
          "A dramatic raw-form onyx specimen with warm internal glow through natural cavities. Ideal for statement displays, luxury lobbies, and exclusive interior art installations.",
        origin: "Raw Form Collection · Item SFX001",
      },
      {
        src: "/images/categories/onyx/fireside-onyx.png",
        title: "Premium Fireside Onyx",
        description:
          "Architectural onyx slab with rich brown-to-cream banding and a glowing amber translucent core. Perfect for backlit feature walls and premium hospitality interiors.",
        origin: "Architectural Slab",
      },
      {
        src: "/images/categories/onyx/fire-ash-onyx.png",
        title: "Premium Fire & Ash Onyx",
        description:
          "Striking architectural column piece combining fiery translucent amber zones with ash-grey and charcoal layers. Designed for dramatic vertical installations and luxury statement spaces.",
        origin: "Architectural Column",
      },
    ],
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
