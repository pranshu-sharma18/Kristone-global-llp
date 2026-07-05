import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "luxury-villa-dubai",
    title: "Luxury Villa — Dubai",
    category: "Luxury Villas",
    description:
      "Artemis Grey Quartzite flooring and feature walls in a premium residential villa development.",
    image:
      "https://images.unsplash.com/photo-1616486338822-3d67e38f53f1?w=800&q=80",
    alt: "Luxury villa interior with premium stone flooring",
  },
  {
    slug: "five-star-hotel-lobby",
    title: "Five-Star Hotel Lobby",
    category: "Hotels",
    description:
      "Full-height wall cladding and reception desk in Artemis Smoke Quartzite for an international hotel brand.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "Five-star hotel lobby with stone wall cladding",
  },
  {
    slug: "commercial-office-interior",
    title: "Commercial Office Interior",
    category: "Commercial Interiors",
    description:
      "Engineered stone and granite surfaces across a corporate headquarters fit-out.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Modern commercial office with stone surfaces",
  },
  {
    slug: "premium-flooring-project",
    title: "Premium Flooring Installation",
    category: "Flooring",
    description:
      "Large-format quartzite slabs installed across a luxury retail flagship store.",
    image:
      "https://images.unsplash.com/photo-1600210492493-027691e750de?w=800&q=80",
    alt: "Premium stone flooring in luxury retail space",
  },
  {
    slug: "wall-cladding-facade",
    title: "Exterior Wall Cladding",
    category: "Wall Cladding",
    description:
      "Weather-resistant quartzite facade panels for a contemporary residential tower.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    alt: "Modern building facade with stone cladding",
  },
  {
    slug: "kitchen-countertops",
    title: "Kitchen Countertops",
    category: "Countertops",
    description:
      "Granite and quartzite countertops for a multi-unit luxury residential development.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Premium stone kitchen countertops",
  },
  {
    slug: "architectural-facade",
    title: "Architectural Facade",
    category: "Facades",
    description:
      "Artemis Canyon Quartzite applied to a landmark commercial building exterior.",
    image:
      "https://images.unsplash.com/photo-1511818966892-7c671f390128?w=800&q=80",
    alt: "Architectural stone facade on commercial building",
  },
  {
    slug: "grand-staircase",
    title: "Grand Staircase",
    category: "Staircases",
    description:
      "Polished marble and quartzite treads for a luxury hotel atrium staircase.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    alt: "Grand staircase with polished stone treads",
  },
];

export const applicationCategories = [
  "Luxury Villas",
  "Hotels",
  "Commercial Interiors",
  "Flooring",
  "Wall Cladding",
  "Countertops",
  "Facades",
  "Staircases",
] as const;
