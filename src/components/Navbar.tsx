import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const { t, lang, setLang, languages, path } = useLanguage();
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

  // Ro'yxatdagi keyingi til (toggle bosilganda shunga o'tadi)
  const nextLang = (() => {
    const idx = languages.findIndex((l) => l.code === lang);
    return languages[(idx + 1) % languages.length];
  })();

  const cycleLang = () => setLang(nextLang.code);

  // Tugmada o'tiladigan tilning yorlig'i ko'rinadi (uz'da "RU", ru'da "UZ")
  const nextLabel = nextLang.label;

  // Bo'lim havolalari bosh sahifaga ishora qiladi (boshqa sahifada bo'lsak ham ishlaydi)
  const sectionHref = (section: string) => `${path("home")}#${section.toLowerCase()}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-none ${
        scrolled ? "glass-card border-b py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to={path("home")} className="text-xl font-bold glow-text">
          TeraTech
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {t.nav.links.map((l) => (
            <a
              key={l.link}
              href={sectionHref(l.link)}
              className="text-sm hover:text-primary transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={cycleLang}
            className="px-3 py-2 rounded-lg text-sm font-semibold border border-primary/30 hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Til / Язык"
          >
            {nextLabel}
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
        <div className="flex md:hidden items-center gap-1.5">
          <button
            onClick={cycleLang}
            className="h-9 w-9 flex items-center justify-center rounded-lg text-sm font-bold text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Til / Язык"
          >
            {nextLabel}
          </button>
          <button
            onClick={toggleTheme}
            className="h-9 w-9 flex items-center justify-center rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-9 w-9 flex items-center justify-center rounded-lg text-foreground hover:bg-primary/10 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 p-4 rounded-xl">
          {t.nav.links.map((l) => (
            <a
              key={l.link}
              href={sectionHref(l.link)}
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
