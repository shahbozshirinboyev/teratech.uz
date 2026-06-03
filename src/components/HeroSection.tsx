import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
      <div className="absolute inset-0 bg-black/40">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background/90" />
      </div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          <span>TeraTech</span>
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          <span className="glow-text">{t.hero.titleLine1}</span>
          <br />
          <span className="glow-text">{t.hero.titleLine2}</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#pricing" className="glow-button text-lg px-8 py-4">
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
