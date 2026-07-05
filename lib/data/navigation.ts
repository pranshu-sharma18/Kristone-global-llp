import type { NavItem } from "@/lib/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Collections", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/quality" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  collections: [
    { label: "Quartzite", href: "/products?category=quartzite" },
    { label: "Marble", href: "/products?category=marble" },
    { label: "Granite", href: "/products?category=granite" },
    { label: "Onyx", href: "/products?category=onyx" },
    { label: "Engineered Stone", href: "/products?category=engineered-stone" },
  ],
  flagship: [
    { label: "Artemis Grey Quartzite", href: "/products/artemis-grey-quartzite" },
    { label: "Artemis Bronze Quartzite", href: "/products/artemis-bronze-quartzite" },
    { label: "Artemis Smoke Quartzite", href: "/products/artemis-smoke-quartzite" },
    { label: "Artemis Canyon Quartzite", href: "/products/artemis-canyon-quartzite" },
  ],
} as const;
