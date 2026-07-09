import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "signature-kitchen-island",
    title: "Signature Kitchen Island",
    category: "Kitchen Applications",
    description:
      "A refined kitchen concept featuring dramatic grey quartzite across the island, backsplash, and work surfaces for a seamless high-end finish.",
    image: "/images/projects/kitchen-application.png",
    alt: "Luxury kitchen interior with grey quartzite island and backsplash",
  },
  {
    slug: "spa-bathroom-vanity-suite",
    title: "Spa Bathroom Vanity Suite",
    category: "Bathroom Applications",
    description:
      "Warm-toned natural stone creates a luxurious hospitality-style bathroom with book-matched wall panels, vanity surfaces, and ambient lighting.",
    image: "/images/projects/bathroom-application.png",
    alt: "Premium bathroom vanity space finished in rich natural stone",
  },
  {
    slug: "hotel-reception-counter",
    title: "Hotel Reception Counter",
    category: "Hospitality Interiors",
    description:
      "A bold reception concept designed to make a premium first impression with deep burgundy stone tones across the front desk and lobby focal areas.",
    image: "/images/projects/hotel-reception-application.png",
    alt: "Luxury hotel reception desk finished in burgundy natural stone",
  },
  {
    slug: "luxury-corridor-flooring",
    title: "Luxury Corridor Flooring",
    category: "Flooring Solutions",
    description:
      "Elegant polished flooring with soft veining, specified for upscale residential and hospitality corridors where brightness and scale matter.",
    image: "/images/projects/flooring-application.png",
    alt: "Elegant corridor with polished white natural stone flooring",
  },
  {
    slug: "fireplace-feature-wall",
    title: "Fireplace Feature Wall",
    category: "Feature Installations",
    description:
      "A statement fireplace surround that transforms a classic lounge into a rich, luxurious interior anchored by natural movement and depth.",
    image: "/images/projects/fireplace-application.png",
    alt: "Classic lounge with dramatic marble fireplace feature wall",
  },
];

export const applicationCategories = [
  "Kitchen Applications",
  "Bathroom Applications",
  "Hospitality Interiors",
  "Flooring Solutions",
  "Feature Installations",
] as const;
