import { ShieldCheck, MonitorCog, Globe, PackageOpen, Headset, Crosshair } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Ikonkalar tartibi translations.curriculum.skills tartibiga mos
const icons = [Globe, ShieldCheck, MonitorCog, PackageOpen, Headset, Crosshair];

const CurriculumSection = () => {
  const { t } = useLanguage();

  return (
    <section id="curriculum" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t.curriculum.headingPrefix}
          <span className="glow-text">{t.curriculum.headingHighlight}</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.curriculum.skills.map((title, i) => {
            const Icon = icons[i] ?? Crosshair;
            return (
              <div key={title} className="glass-card-hover p-6 text-center">
                <Icon className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
