import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="section-padding gradient-bg">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t.faq.headingPrefix}
          <span className="glow-text">{t.faq.headingHighlight}</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {t.faq.items.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card border px-6 rounded-xl">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
