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
    heroImage: "/images/categories/granite/black-galaxy.png",
    galleryImages: [
      "/images/categories/granite/black-galaxy.png",
    ],
    featured: false,
  },
  {
    slug: "platinum-black-granite",
    name: "Platinum Black Granite",
    category: "granite",
    categoryLabel: "Granite",
    tagline: "Flawless Mirror-Finish Black Granite",
    description:
      "Intense solid black granite with a premium mirror-polished finish. Ideal for modern kitchens, luxury receptions, and contemporary architectural surfaces.",
    colorPattern: "Solid deep black with a clean, uniform polished character.",
    finishes: ["Polished", "Honed"],
    thickness: ["2cm", "3cm"],
    applications: ["Kitchen countertops", "Reception desks", "Flooring", "Feature walls"],
    features: [
      "Mirror-finish polish quality",
      "Strong commercial durability",
      "Modern luxury aesthetic",
      "Export-ready slab selection",
    ],
    heroImage: "/images/categories/granite/platinum-black.png",
    galleryImages: ["/images/categories/granite/platinum-black.png"],
    featured: false,
  },
  {
    slug: "tropical-brown-granite",
    name: "Tropical Brown Granite",
    category: "granite",
    categoryLabel: "Granite",
    tagline: "Warm Copper-Toned Granite for Luxury Interiors",
    description:
      "Rich brown and copper-toned granite with flowing movement. A warm, expressive choice for feature walls, countertops, and high-end residential projects.",
    colorPattern: "Deep browns and blacks with copper and tan flowing veins.",
    finishes: ["Polished", "Leathered"],
    thickness: ["2cm", "3cm"],
    applications: ["Feature walls", "Countertops", "Flooring", "Hospitality interiors"],
    features: [
      "Warm luxury color palette",
      "Dramatic natural movement",
      "High polish retention",
      "Suitable for residential and commercial use",
    ],
    heroImage: "/images/categories/granite/tropical-brown.png",
    galleryImages: ["/images/categories/granite/tropical-brown.png"],
    featured: false,
  },
  {
    slug: "alaska-white-granite",
    name: "Alaska White Granite",
    category: "granite",
    categoryLabel: "Granite",
    tagline: "Bright White Granite with Soft Natural Movement",
    description:
      "Bright white and cream granite with soft tan and grey movement. A refined export selection for kitchens, bathrooms, and bright contemporary interiors.",
    colorPattern: "Off-white and cream base with tan, grey, and soft mineral accents.",
    finishes: ["Polished", "Honed"],
    thickness: ["2cm", "3cm"],
    applications: ["Kitchen countertops", "Bathrooms", "Flooring", "Vanity tops"],
    features: [
      "Bright, elegant aesthetic",
      "Brazilian origin character",
      "Excellent for light interiors",
      "Premium polished finish",
    ],
    heroImage: "/images/categories/granite/alaska-white.png",
    galleryImages: ["/images/categories/granite/alaska-white.png"],
    featured: false,
  },
  {
    slug: "galaxy-gold-granite",
    name: "Galaxy Gold Granite",
    category: "granite",
    categoryLabel: "Granite",
    tagline: "Cream Granite with Warm Gold Flecks",
    description:
      "Cream and beige granite with warm gold flecks and fine mineral texture. Excellent for polished countertops and elegant residential finishes.",
    colorPattern: "Cream and beige speckled base with gold, grey, and charcoal mineral flecks.",
    finishes: ["Polished", "Honed"],
    thickness: ["2cm", "3cm"],
    applications: ["Countertops", "Flooring", "Residential interiors", "Commercial fit-outs"],
    features: [
      "Warm gold fleck character",
      "Durable granite performance",
      "Versatile residential appeal",
      "Export-grade polish quality",
    ],
    heroImage: "/images/categories/granite/galaxy-gold.png",
    galleryImages: ["/images/categories/granite/galaxy-gold.png"],
    featured: false,
  },
  {
    slug: "royal-porphyry-grey-granite",
    name: "Royal Porphyry Grey",
    category: "granite",
    categoryLabel: "Granite",
    tagline: "Charcoal Grey Granite with Crystalline Speckle",
    description:
      "Charcoal-grey granite with crystalline speckles and a polished surface. Strong, durable character for flooring, cladding, and commercial use.",
    colorPattern: "Dark charcoal grey densely speckled with lighter crystalline inclusions.",
    finishes: ["Polished", "Flamed", "Brushed"],
    thickness: ["2cm", "3cm"],
    applications: ["Commercial flooring", "Wall cladding", "Exterior paving", "Staircases"],
    features: [
      "High wear resistance",
      "Strong architectural presence",
      "Suitable for interior and exterior",
      "Consistent commercial supply",
    ],
    heroImage: "/images/categories/granite/royal-porphyry-grey.png",
    galleryImages: ["/images/categories/granite/royal-porphyry-grey.png"],
    featured: false,
  },
  {
    slug: "spectrum-fire-onyx",
    name: "Spectrum Fire Onyx",
    category: "onyx",
    categoryLabel: "Onyx",
    tagline: "Raw Form Collection · Dramatic Backlit Character",
    description:
      "A dramatic raw-form onyx specimen with warm internal glow through natural cavities. Ideal for statement displays, luxury lobbies, and exclusive interior art installations.",
    colorPattern: "Earthy reddish-brown and cream with glowing amber translucent cavities.",
    finishes: ["Raw form", "Backlit-ready"],
    thickness: ["Custom thickness on request"],
    applications: ["Statement displays", "Luxury lobbies", "Art installations", "Feature accents"],
    features: [
      "Unique raw-form presentation",
      "Backlit visual drama",
      "Exclusive limited pieces",
      "Premium hospitality appeal",
    ],
    heroImage: "/images/categories/onyx/spectrum-fire-onyx.png",
    galleryImages: ["/images/categories/onyx/spectrum-fire-onyx.png"],
    featured: true,
  },
  {
    slug: "fireside-onyx",
    name: "Premium Fireside Onyx",
    category: "onyx",
    categoryLabel: "Onyx",
    tagline: "Architectural Slab with Amber Translucence",
    description:
      "Architectural onyx slab with rich brown-to-cream banding and a glowing amber translucent core. Perfect for backlit feature walls and premium hospitality interiors.",
    colorPattern: "Chocolate brown, cream, and white banding with fiery amber translucence.",
    finishes: ["Polished", "Backlit-ready"],
    thickness: ["2cm", "3cm", "Custom thickness on request"],
    applications: ["Backlit feature walls", "Reception areas", "Luxury bathrooms", "Bar fronts"],
    features: [
      "Strong translucent glow",
      "Architectural slab format",
      "Premium hospitality aesthetic",
      "Export-ready selection",
    ],
    heroImage: "/images/categories/onyx/fireside-onyx.png",
    galleryImages: ["/images/categories/onyx/fireside-onyx.png"],
    featured: true,
  },
  {
    slug: "fire-ash-onyx",
    name: "Premium Fire & Ash Onyx",
    category: "onyx",
    categoryLabel: "Onyx",
    tagline: "Architectural Column with Fire and Ash Contrast",
    description:
      "Striking architectural column piece combining fiery translucent amber zones with ash-grey and charcoal layers. Designed for dramatic vertical installations and luxury statement spaces.",
    colorPattern: "Amber translucent fire zones contrasted with charcoal, ash-grey, and earthy layers.",
    finishes: ["Polished", "Raw edge", "Backlit-ready"],
    thickness: ["Custom thickness on request"],
    applications: ["Architectural columns", "Feature installations", "Luxury lobbies", "Design statements"],
    features: [
      "Dramatic fire-and-ash contrast",
      "Vertical architectural impact",
      "Backlit-ready translucence",
      "Exclusive statement piece",
    ],
    heroImage: "/images/categories/onyx/fire-ash-onyx.png",
    galleryImages: ["/images/categories/onyx/fire-ash-onyx.png"],
    featured: true,
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
