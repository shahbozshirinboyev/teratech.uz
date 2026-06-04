import { Phone, Send, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t, path } = useLanguage();
  const year = new Date().getFullYear();

  const pageLinks = [
    { to: path("about"), label: t.footer.links.about },
    { to: path("contact"), label: t.footer.links.contact },
    { to: path("privacy"), label: t.footer.links.privacy },
    { to: path("terms"), label: t.footer.links.terms },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/80 px-4 py-8">
      <div className="container mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          {/* Brand + address */}
          <div className="mt-4 max-w-sm">
            <span className="text-2xl font-bold text-foreground">TeraTech</span>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.footer.description}
            </p>
            <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
              {t.footer.address}
            </p>
          </div>

          {/* Pages */}
          <div className="mb-2">
            <h3 className="mb-3 text-sm font-semibold text-foreground">{t.footer.pagesHeading}</h3>
            <nav className="flex flex-col gap-2 text-sm">
              {pageLinks.map((l) => (
                <Link key={l.to} to={l.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-2 text-sm mb-4">
            <a
              href="tel:+998878882244"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-foreground transition-colors hover:border-primary/45 hover:bg-primary/10"
            >
              <Phone size={15} />
              {t.nav.phone}
            </a>
            <a
              href="https://t.me/teratechuz"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-foreground transition-colors hover:border-primary/45 hover:bg-primary/10"
              target="_blank"
              rel="noreferrer"
            >
              <Send size={15} />
              {t.footer.telegram}
            </a>
          </div>
        </div>

        <div className="border-t border-border/35 pt-4 text-sm text-muted-foreground">
          <span>&copy; {year} TeraTech. {t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
