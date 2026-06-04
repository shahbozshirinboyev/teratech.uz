import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { buildPath } from "@/i18n/LanguageContext";
import { SITE_URL, languages, type PageKey } from "@/i18n/types";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

interface SeoProps {
  page: PageKey;
}

/** Sahifa va tilga qarab title, description, canonical va hreflang teglarini yangilaydi */
const Seo = ({ page }: SeoProps) => {
  const { lang, t } = useLanguage();
  const meta = t.seo[page];

  useEffect(() => {
    document.title = meta.title;
    setMeta("name", "description", meta.description);

    // Open Graph
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:locale", lang === "ru" ? "ru_RU" : "uz_UZ");

    const canonical = `${SITE_URL}${buildPath(lang, page)}`;
    setLink("canonical", canonical);
    setMeta("property", "og:url", canonical);

    // hreflang — har bir til uchun + x-default
    languages.forEach((l) => {
      setLink("alternate", `${SITE_URL}${buildPath(l.code, page)}`, l.code);
    });
    setLink("alternate", `${SITE_URL}${buildPath("uz", page)}`, "x-default");
  }, [lang, page, meta.title, meta.description]);

  return null;
};

export default Seo;
