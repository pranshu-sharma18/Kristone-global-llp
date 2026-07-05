export const defaultLocale = "en" as const;
export const locales = ["en", "ar", "es", "fr", "de"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

/** Placeholder for future i18n integration — content keys map to translation files */
export const i18nReady = true;
