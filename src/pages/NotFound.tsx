import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { detectLang } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const lang = detectLang();

  useEffect(() => {
    document.title = "404";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const label = lang === "ru" ? "Упс! Страница не найдена." : "Oops! Sahifa topilmadi.";
  const back = lang === "ru" ? "Вернуться на главную" : "Bosh sahifaga qaytish";

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{label}</p>
        <a href={`/${lang}`} className="text-primary underline hover:text-primary/90">
          {back}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
