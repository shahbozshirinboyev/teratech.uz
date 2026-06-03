import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const { t, lang, setLang, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  // Ro'yxatdagi keyingi tilga aylanib o'tadi (2 tildan ko'p bo'lsa ham ishlaydi)
  const cycleLang = () => {
    const idx = languages.findIndex((l) => l.code === lang);
    const next = languages[(idx + 1) % languages.length];
    setLang(next.code);
  };

  const currentLabel = languages.find((l) => l.code === lang)?.label ?? lang.toUpperCase();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-none ${
        scrolled ? "glass-card border-b py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-xl font-bold glow-text">
          TeraTech
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {t.nav.links.map((l) => (
            <a
              key={l.link}
              href={`#${l.link.toLowerCase()}`}
              className="text-sm hover:text-primary transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={cycleLang}
            className="flex items-center gap-1.5 p-2 rounded-lg hover:text-primary transition-colors"
            aria-label="Til / Язык"
          >
            <Languages size={18} />
            <span className="text-sm font-semibold">{currentLabel}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:text-foreground transition-colors"
            aria-label="Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="tel:+998878882244" className="glow-button text-sm">{t.nav.phone}</a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={cycleLang}
            className="flex items-center gap-1 p-2 text-muted-foreground"
            aria-label="Til / Язык"
          >
            <Languages size={18} />
            <span className="text-xs font-semibold">{currentLabel}</span>
          </button>
          <button onClick={toggleTheme} className="p-2 text-muted-foreground" aria-label="Theme">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 p-4 rounded-xl">
          {t.nav.links.map((l) => (
            <a
              key={l.link}
              href={`#${l.link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {l.name}
            </a>
          ))}

          <a href="tel:+998878882244" className="glow-button block text-center mt-3 text-sm">{t.nav.phone}</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
