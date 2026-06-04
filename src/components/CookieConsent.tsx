import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const STORAGE_KEY = "cookie-consent";

const CookieConsent = () => {
  const { t, path } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4">
      <div className="container mx-auto glass-card border flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl">
        <p className="flex-1 text-sm text-muted-foreground">
          {t.cookie.text}{" "}
          <Link to={path("privacy")} className="text-primary underline hover:text-primary/80">
            {t.cookie.more}
          </Link>
        </p>
        <button onClick={accept} className="glow-button text-sm whitespace-nowrap">
          {t.cookie.accept}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
