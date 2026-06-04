// ── Sayt sozlamalari ─────────────────────────────────────────────
export const SITE_URL = "https://teratech.uz";

// ── Tillar ro'yxati ──────────────────────────────────────────────
// Yangi til qo'shish uchun:
//   1. shu massivga { code, label, name } qo'shing
//   2. src/i18n/<code>.ts faylini yarating (uz.ts dan nusxa oling)
//   3. src/i18n/translations.ts da ro'yxatdan o'tkazing
// TypeScript Dictionary tipini to'liq to'ldirishni majburlaydi —
// hech bir matn tarjimasiz qolib ketmaydi.
export const languages = [
  { code: "uz", label: "UZ", name: "O'zbekcha" },
  { code: "ru", label: "RU", name: "Русский" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const DEFAULT_LANG: LanguageCode = "uz";

// Sahifa kalitlari (SEO va routing uchun)
export type PageKey = "home" | "privacy" | "about" | "contact" | "terms";

// Sahifa kaliti -> URL yo'li (til prefiksidan keyingi qism)
export const PAGE_PATHS: Record<PageKey, string> = {
  home: "",
  privacy: "/privacy",
  about: "/about",
  contact: "/contact",
  terms: "/terms",
};

// ── Lug'at tuzilishi (har bir til shu interfeysga mos bo'lishi shart) ──
export interface NavLink {
  name: string;
  link: string; // sahifadagi bo'lim id'si (Curriculum, Pricing, FAQ)
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PricingPlanText {
  name: string;
  price: string;
  features: string[];
}

export interface SeoMeta {
  title: string;
  description: string;
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  title: string;
  updated: string; // masalan "2026-06-03"
  sections: LegalSection[];
}

export interface Dictionary {
  seo: Record<PageKey, SeoMeta>;
  nav: {
    links: NavLink[];
    phone: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    cta: string;
  };
  curriculum: {
    headingPrefix: string;
    headingHighlight: string;
    skills: string[]; // tartibi CurriculumSection ikonkalariga mos
  };
  pricing: {
    headingPrefix: string;
    headingHighlight: string;
    popularBadge: string;
    buyButton: string;
    plans: PricingPlanText[];
  };
  faq: {
    headingPrefix: string;
    headingHighlight: string;
    items: FaqItem[];
  };
  footer: {
    description: string;
    telegram: string;
    rights: string;
    pagesHeading: string;
    links: {
      privacy: string;
      about: string;
      contact: string;
      terms: string;
    };
    address: string;
  };
  modal: {
    purposeOptions: string[];
    title: string;
    subtitle: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    purposePlaceholder: string;
    submit: string;
    privacy: string;
    errorTelegram: string;
    errorGeneric: string;
    successTitle: string;
    successSubtitle: string;
    close: string;
  };
  download: {
    label: string;
  };
  cookie: {
    text: string;
    accept: string;
    more: string;
  };
  legal: {
    updatedLabel: string;
    backHome: string;
    privacy: LegalDoc;
    terms: LegalDoc;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  contact: {
    title: string;
    intro: string;
    phoneLabel: string;
    telegramLabel: string;
    addressLabel: string;
    address: string;
    hoursLabel: string;
    hours: string;
    emailLabel: string;
    email: string;
  };
}
