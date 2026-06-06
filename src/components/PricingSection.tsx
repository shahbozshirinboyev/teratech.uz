import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export type PricingPlan = {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
};

interface PricingSectionPage {
  onOpenModal?: (plan: PricingPlan) => void;
}

// Qaysi reja "popular" ekani indeks bo'yicha (translations'da til-mustaqil)
const POPULAR_INDEX = 1;

const PricingSection = ({ onOpenModal }: PricingSectionPage) => {
  const { t } = useLanguage();

  const plans: PricingPlan[] = t.pricing.plans.map((p, i) => ({
    ...p,
    popular: i === POPULAR_INDEX,
  }));

  return (
    <section id="pricing" className="section-padding gradient-bg">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t.pricing.headingPrefix}
          <span className="glow-text">{t.pricing.headingHighlight}</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`glass-card-hover p-8 flex flex-col relative ${
                p.popular ? "border-primary/50 ring-1 ring-primary/30" : ""
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-center text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  {t.pricing.popularBadge}
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-3xl font-extrabold glow-text mb-6">{p.price}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="text-primary shrink-0" size={18} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onOpenModal?.(p)}
                className={`text-center rounded-lg py-3 font-semibold transition-all duration-300 ${
                  p.popular
                    ? "glow-button"
                    : "border border-primary/30 text-foreground hover:bg-primary/10"
                }`}
              >
                {t.pricing.buyButton}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
