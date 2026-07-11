export type StoneCategory =
  | "quartzite"
  | "marble"
  | "granite"
  | "onyx"
  | "engineered-stone";

export interface Product {
  slug: string;
  name: string;
  category: StoneCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  colorPattern: string;
  finishes: string[];
  thickness: string[];
  applications: string[];
  features: string[];
  heroImage: string;
  galleryImages: string[];
  featured: boolean;
  flagship?: boolean;
}

export interface CategoryGalleryItem {
  src: string;
  title: string;
  description: string;
  origin?: string;
}

export interface Category {
  id: StoneCategory;
  name: string;
  description: string;
  applications: string[];
  finishes: string[];
  image: string;
  alt: string;
  galleryImages?: string[];
  galleryItems?: CategoryGalleryItem[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Market {
  region: string;
  countries: string[];
}
