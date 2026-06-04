import { type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useLanguage } from "@/i18n/LanguageContext";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

/** Huquqiy / ma'lumot sahifalari uchun umumiy karkas (Navbar + Footer + konteyner) */
const PageLayout = ({ title, children }: PageLayoutProps) => {
  const { t, path } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="section-padding pt-32">
        <div className="container mx-auto max-w-3xl">
          <Link
            to={path("home")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            {t.legal.backHome}
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 glow-text">{title}</h1>
          {children}
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default PageLayout;
