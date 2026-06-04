import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations } from "./translations";
import {
  languages,
  DEFAULT_LANG,
  PAGE_PATHS,
  type Dictionary,
  type LanguageCode,
  type PageKey,
} from "./types";

interface LanguageContextValue {
  lang: LanguageCode;
  /** Tilni almashtirish — joriy sahifani saqlagan holda boshqa til URL'iga o'tadi */
  setLang: (lang: LanguageCode) => void;
  /** Joriy til lug'ati */
  t: Dictionary;
  /** Mavjud tillar ro'yxati (toggle uchun) */
  languages: typeof languages;
  /** Berilgan sahifa uchun joriy tildagi to'liq yo'l (masalan "/uz/privacy") */
  path: (page: PageKey, lang?: LanguageCode) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "lang";

export function isLanguage(value: string | undefined): value is LanguageCode {
  return !!value && languages.some((l) => l.code === value);
}

export function buildPath(lang: LanguageCode, page: PageKey): string {
  return `/${lang}${PAGE_PATHS[page]}`;
}

/** localStorage yoki brauzer tilidan boshlang'ich tilni aniqlaydi */
export function detectLang(): LanguageCode {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (isLanguage(saved ?? undefined)) return saved as LanguageCode;
  const browser = window.navigator.language?.slice(0, 2).toLowerCase();
  if (isLanguage(browser)) return browser as LanguageCode;
  return DEFAULT_LANG;
}

interface ProviderProps {
  lang: LanguageCode;
  page: PageKey;
  children: ReactNode;
}

export const LanguageProvider = ({ lang, page, children }: ProviderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Tanlangan tilni eslab qolamiz va <html lang> ni yangilaymiz
  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const path = (target: PageKey, forLang: LanguageCode = lang) =>
    buildPath(forLang, target);

  const setLang = (next: LanguageCode) => {
    if (next === lang) return;
    // Joriy sahifani saqlagan holda boshqa til URL'iga o'tamiz
    navigate(buildPath(next, page) + location.hash, { replace: false });
  };

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: translations[lang],
    languages,
    path,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
