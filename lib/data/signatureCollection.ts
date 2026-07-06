export interface SignatureSlide {
  id: string;
  image: string;
  alt: string;
  title: string;
  category: string;
}

export const signatureCollectionSlides: SignatureSlide[] = [
  {
    id: "dining-room",
    image: "/images/signature-collection/dining-room.png",
    alt: "Luxury dining room with premium natural stone table, flooring, and feature wall",
    title: "Luxury Dining Spaces",
    category: "Quartzite Application",
  },
  {
    id: "bathroom",
    image: "/images/signature-collection/bathroom.png",
    alt: "Premium stone bathroom with marble walls, flooring, and vanity",
    title: "Spa-Grade Bathrooms",
    category: "Marble Application",
  },
  {
    id: "living-room",
    image: "/images/signature-collection/living-room.png",
    alt: "Contemporary living room with natural stone feature wall",
    title: "Living Room Cladding",
    category: "Feature Walls",
  },
  {
    id: "feature-wall",
    image: "/images/signature-collection/feature-wall.png",
    alt: "Luxury living space with backlit stone feature wall and flooring",
    title: "Backlit Feature Walls",
    category: "Luxury Interiors",
  },
  {
    id: "bedroom",
    image: "/images/signature-collection/bedroom.png",
    alt: "Premium bedroom with stone accent wall and polished flooring",
    title: "Bedroom Interiors",
    category: "Residential Projects",
  },
  {
    id: "stone-interior",
    image: "/images/signature-collection/stone-interior.png",
    alt: "Modern interior with dark natural stone walls and flooring",
    title: "Full Stone Interiors",
    category: "Architectural Stone",
  },
];
