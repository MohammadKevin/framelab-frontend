export type Language = "en" | "id";

export const dictionary: Record<
  Language,
  { heroTitle: string; heroDesc: string }
> = {
  en: {
    heroTitle: "The Future of Online Photo Booth",
    heroDesc: "Capture stunning moments directly from your browser",
  },
  id: {
    heroTitle: "Masa Depan Photo Booth Online",
    heroDesc: "Abadikan momen indah langsung dari browser",
  },
};
