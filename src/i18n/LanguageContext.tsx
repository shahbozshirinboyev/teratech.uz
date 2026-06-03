import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  translations,
  languages,
  DEFAULT_LANG,
  type Dictionary,
  type LanguageCode,
} from "./translations";

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  /** Joriy til lug'ati */
  t: Dictionary;
  /** Mavjud tillar ro'yxati (toggle uchun) */
  languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "lang";

function getInitialLang(): LanguageCode {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && languages.some((l) => l.code === saved)) {
    return saved as LanguageCode;
  }
  return DEFAULT_LANG;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<LanguageCode>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: LanguageCode) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: translations[lang],
    languages,
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
