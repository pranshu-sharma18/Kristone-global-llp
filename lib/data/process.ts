import type { ProcessStep } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Material Selection",
    description:
      "Our sourcing team selects premium blocks from trusted quarries, evaluating color consistency, structural integrity, and export suitability before any processing begins.",
  },
  {
    step: 2,
    title: "Block Sourcing",
    description:
      "Direct quarry partnerships across India's premier stone regions ensure traceability, competitive pricing, and reliable volume for international orders.",
  },
  {
    step: 3,
    title: "Cutting & Finishing",
    description:
      "State-of-the-art saws and CNC equipment produce precise slabs, tiles, and custom formats. Finishes include polished, honed, leathered, brushed, and flamed.",
  },
  {
    step: 4,
    title: "Quality Inspection",
    description:
      "Every slab undergoes rigorous inspection for cracks, color variation, thickness tolerance, and surface finish quality before approval for export.",
  },
  {
    step: 5,
    title: "Secure Packing",
    description:
      "Slabs are vertically crated in export-grade wooden bundles with foam protection, plastic wrapping, and reinforced corners for safe ocean freight transit.",
  },
  {
    step: 6,
    title: "Export Shipping",
    description:
      "We coordinate FOB and CIF shipments to major ports worldwide, providing complete export documentation including invoices, packing lists, and certificates of origin.",
  },
  {
    step: 7,
    title: "On-Time Delivery",
    description:
      "Committed production schedules and logistics partnerships ensure your materials arrive on time, ready for installation at your project site.",
  },
];

export const qualityCommitments = [
  {
    title: "Slab-Level Inspection",
    description: "Individual slab grading with photographic records available on request.",
  },
  {
    title: "Thickness Tolerance",
    description: "Precision calibration to ±1mm for consistent installation results.",
  },
  {
    title: "Batch Consistency",
    description: "Matched lots for large projects to ensure uniform appearance across installations.",
  },
  {
    title: "Export Documentation",
    description: "Complete commercial invoice, packing list, bill of lading, and origin certificates.",
  },
] as const;
