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
    id: "living-room-flooring",
    title: "Luxury Living Room Flooring",
    category: "Flooring",
    description: "Premium natural stone flooring in a contemporary living space with poolside views.",
    image: "/images/applications/living-room-flooring.png",
    alt: "Luxury living room with premium natural stone flooring — Kristone Global LLP",
  },
  {
    id: "kitchen-rossa-levanto",
    title: "Rossa Levanto Kitchen",
    category: "Countertops & Backsplash",
    description: "Rossa Levanto marble applied to kitchen countertops, island, and full-height backsplash.",
    image: "/images/applications/kitchen-rossa-levanto.png",
    alt: "Modern kitchen with Rossa Levanto marble countertops and backsplash — Kristone Global LLP",
  },
  {
    id: "hotel-lobby",
    title: "Hotel Lobby — Silver Veins Grey",
    category: "Commercial Interiors",
    description: "Silver Veins Grey marble flooring and wall cladding in a five-star hotel reception.",
    image: "/images/applications/hotel-lobby.png",
    alt: "Five-star hotel lobby with Silver Veins Grey marble flooring — Kristone Global LLP",
  },
];
