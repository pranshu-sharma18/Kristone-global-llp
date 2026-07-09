import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    slug: "artemis-grey-quartzite",
    name: "Artemis Grey Quartzite",
    category: "quartzite",
    categoryLabel: "Quartzite",
    tagline: "The Signature Collection by Kristone Global LLP",
    description:
      "Artemis Grey Quartzite is our flagship export collection — a sophisticated grey stone with subtle silver veining and exceptional hardness. Selected from premium quarries, it delivers the performance and aesthetic demanded by luxury residential, hospitality, and commercial projects globally.",
    colorPattern:
      "Soft grey base with silver-white veining and occasional warm undertones. Consistent slab character with natural movement.",
    finishes: ["Polished", "Honed", "Leathered", "Brushed"],
    thickness: ["2cm", "3cm", "Custom thickness on request"],
    applications: [
      "Luxury villa flooring",
      "Hotel lobby cladding",
      "Kitchen countertops",
      "Feature walls",
      "Exterior facades",
      "Staircase treads",
    ],
    features: [
      "Export-grade slab selection",
      "High Mohs hardness rating",
      "Low water absorption",
      "Suitable for interior and exterior use",
      "Available in jumbo slab formats",
      "Consistent batch matching for large projects",
    ],
    heroImage: "/images/slabs/artemis-grey-quartzite.png",
    galleryImages: [
      "/images/slabs/artemis-grey-gallery-1.png",
      "/images/slabs/artemis-grey-gallery-2.png",
      "/images/slabs/artemis-grey-gallery-3.png",
      "/images/slabs/artemis-grey-gallery-4.png",
    ],
    featured: true,
    flagship: true,
  },
  {
    slug: "artemis-bronze-quartzite",
    name: "Artemis Bronze Quartzite",
    category: "quartzite",
    categoryLabel: "Quartzite",
    tagline: "Warm Bronze Tones for Distinguished Interiors",
    description:
      "Artemis Bronze Quartzite presents rich bronze and copper undertones with dynamic veining. A statement stone for feature walls, luxury bathrooms, and premium hospitality environments.",
    colorPattern:
      "Bronze-grey base with copper and amber veining. Warm, inviting character with natural depth.",
    finishes: ["Polished", "Honed", "Leathered"],
    thickness: ["2cm", "3cm"],
    applications: [
      "Feature walls",
      "Luxury bathrooms",
      "Hotel suites",
      "Bar counters",
      "Fireplace surrounds",
    ],
    features: [
      "Distinctive warm color palette",
      "High durability for commercial use",
      "Excellent polish retention",
      "Unique veining per slab",
      "Export-ready packaging",
    ],
    heroImage: "/images/slabs/artemis-bronze-quartzite.png",
    galleryImages: [
      "/images/slabs/artemis-bronze-quartzite.png",
      "/images/slabs/artemis-bronze-quartzite-detail.png",
    ],
    featured: true,
    flagship: true,
  },
  {
    slug: "artemis-smoke-quartzite",
    name: "Artemis Smoke Quartzite",
    category: "quartzite",
    categoryLabel: "Quartzite",
    tagline: "Smoky Elegance for Contemporary Architecture",
    description:
      "Artemis Smoke Quartzite offers deep charcoal-grey tones with subtle movement — perfect for minimalist interiors, modern facades, and high-end commercial fit-outs.",
    colorPattern:
      "Deep smoke grey with soft charcoal movement and faint silver highlights.",
    finishes: ["Polished", "Honed", "Brushed"],
    thickness: ["2cm", "3cm"],
    applications: [
      "Modern facades",
      "Minimalist interiors",
      "Commercial lobbies",
      "Flooring",
      "Wall cladding",
    ],
    features: [
      "Contemporary aesthetic",
      "Uniform color consistency",
      "Weather-resistant for exteriors",
      "Low maintenance surface",
      "Ideal for large-format installations",
    ],
    heroImage: "/images/slabs/artemis-smoke-quartzite.png",
    galleryImages: [
      "/images/slabs/artemis-smoke-quartzite.png",
      "/images/slabs/artemis-smoke-quartzite-detail.png",
    ],
    featured: true,
    flagship: true,
  },
  {
    slug: "artemis-canyon-quartzite",
    name: "Artemis Canyon Quartzite",
    category: "quartzite",
    categoryLabel: "Quartzite",
    tagline: "Dramatic Veining Inspired by Natural Landscapes",
    description:
      "Artemis Canyon Quartzite features bold, landscape-inspired veining with warm earth tones. An exceptional choice for statement installations in luxury villas and boutique hotels.",
    colorPattern:
      "Multi-tonal grey and beige base with dramatic canyon-like veining patterns.",
    finishes: ["Polished", "Honed", "Leathered"],
    thickness: ["2cm", "3cm"],
    applications: [
      "Statement feature walls",
      "Luxury villas",
      "Boutique hotels",
      "Reception areas",
      "Spa interiors",
    ],
    features: [
      "Dramatic natural veining",
      "Book-matched slab availability",
      "Premium quarry selection",
      "Architect-favorite aesthetic",
      "Limited premium batches",
    ],
    heroImage: "/images/slabs/artemis-canyon-quartzite.png",
    galleryImages: [
      "/images/slabs/artemis-canyon-quartzite.png",
      "/images/slabs/artemis-canyon-quartzite-detail.png",
    ],
    featured: true,
    flagship: true,
  },
  {
    slug: "statuario-marble",
    name: "Statuario White Marble",
    category: "marble",
    categoryLabel: "Marble",
    tagline: "Classic White Marble for Prestigious Projects",
    description:
      "Premium white marble with bold grey veining, sourced for luxury bathrooms, hotel suites, and high-end residential applications worldwide.",
    colorPattern: "Pure white background with distinctive grey veining.",
    finishes: ["Polished", "Honed"],
    thickness: ["2cm", "3cm"],
    applications: ["Bathrooms", "Flooring", "Wall cladding", "Vanity tops"],
    features: [
      "Iconic white marble aesthetic",
      "Premium grade selection",
      "Suitable for wet areas with proper sealing",
    ],
    heroImage: "/images/slabs/statuario-white-marble.png",
    galleryImages: [
      "/images/slabs/statuario-white-marble.png",
    ],
    featured: false,
  },
  {
    slug: "black-galaxy-granite",
    name: "Black Galaxy Granite",
    category: "granite",
    categoryLabel: "Granite",
    tagline: "Stellar Black Granite for Commercial Excellence",
    description:
      "Deep black granite with golden fleck inclusions. A proven export favorite for countertops, flooring, and commercial interiors.",
    colorPattern: "Deep black with golden and silver mineral flecks.",
    finishes: ["Polished", "Flamed"],
    thickness: ["2cm", "3cm"],
    applications: ["Countertops", "Flooring", "Staircases", "Monuments"],
    features: [
      "Extremely hard wearing",
      "Stain resistant when sealed",
      "Consistent commercial supply",
    ],
    heroImage: "/images/slabs/black-galaxy-granite.png",
    galleryImages: [
      "/images/slabs/black-galaxy-granite.png",
    ],
    featured: false,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getFlagshipProducts() {
  return products.filter((p) => p.flagship);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(slug: string, limit = 3) {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return products
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, limit);
}
