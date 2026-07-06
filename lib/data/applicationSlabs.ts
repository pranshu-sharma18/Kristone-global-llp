export interface ApplicationSlab {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
}

export const applicationSlabs: ApplicationSlab[] = [
  {
    id: "breccia-fantasy",
    title: "Breccia Fantasy",
    category: "Breccia",
    description: "Dramatic brecciated pattern with grey, copper, and gold tones for luxury interiors.",
    image: "/images/applications/breccia-fantasy.png",
    alt: "Breccia Fantasy natural stone slab — Kristone Global LLP",
  },
  {
    id: "silver-veins-grey",
    title: "Silver Veins Grey",
    category: "Quartzite",
    description: "Sophisticated grey stone with striking silver veining for flooring and feature walls.",
    image: "/images/applications/silver-veins-grey.png",
    alt: "Silver Veins Grey natural stone slab — Kristone Global LLP",
  },
  {
    id: "rossa-levanto",
    title: "Rossa Levanto",
    category: "Marble",
    description: "Rich terracotta marble with bold white veining for prestigious residential projects.",
    image: "/images/applications/rossa-levanto.png",
    alt: "Rossa Levanto marble slab — Kristone Global LLP",
  },
];
