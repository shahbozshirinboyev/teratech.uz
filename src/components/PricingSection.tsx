import { Check } from "lucide-react";

export type PricingPlan = {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
};

const plans: PricingPlan[] = [
  {
    name: "Arzon",
    price: "2 115 000 so'm",
    features: ["CPU: i3-2th", "RAM: 4GB DDR3", "Xotira: SSD 120GB"],
    popular: false,
  },
  {
    name: "Standart",
    price: "2 499 000 so'm",
    features: ["CPU: i5-2th", "RAM: 8GB DDR3", "Xotira: SSD 240GB"],
    popular: true,
  },
  {
    name: "Optimal",
    price: "3 400 000 so'm",
    features: ["CPU: i7-2th", "RAM: 16GB DDR3", "Xotira: SSD 512GB"],
    popular: false,
  },
];

interface PricingSectionPage {
  onOpenModal?: (plan: PricingPlan) => void;
}

const PricingSection = ({ onOpenModal }: PricingSectionPage) => (
  <section id="pricing" className="section-padding gradient-bg">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Bizning <span className="glow-text">narxlarimiz</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`glass-card-hover p-8 flex flex-col relative ${
              p.popular ? "border-primary/50 ring-1 ring-primary/30" : ""
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-center text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                Eng ko'p sotiladigan
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
              Sotib olish
            </button>

          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
