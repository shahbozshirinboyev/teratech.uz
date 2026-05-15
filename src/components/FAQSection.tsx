import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Qanday dasturlarda ishlaydi?", a: "Word, Excel, PowerPoint, Telegram, WhatsApp, WeChat, Chrome, 1C, CRM, ERP, Google Sheets, Zoom, Photoshop 2015 gacha, AutoCAD, va boshqa offis dasturlari" },
  { q: "Qanday video o'yinlarni o'rnatsa bo'ladi?", a: "Counter-Strike 1.6, Call of Duty 4: Modern Warfare, Left 4 Dead 2, Command & Conquer: Generals, Command & Conquer: Red Alert 3, Age of Empires II HD, Warcraft III, StarCraft II, Need for Speed: Most Wanted, Need for Speed: Underground 2, FlatOut 2, FIFA 15 gacha, Grand Theft Auto: San Andreas, Minecraft (OptiFine bilan)" },
  { q: "Buyurtma berilsa qancha vaqtda tayyor bo'ladi?", a: "10 tagacha har doim sotuvda mavjud, to'lov qilib sotib olishingiz mumkin." },
  { q: "Katta hajmdagi buyurtma tayyorlash muddati qancha?", a: "TeraTech kompaniyasining bir oylik ishlab chiqarish salohiyati 6000+ to'plam." },
  { q: "Kafolat muddati bormi?", a: "12 oylik kafolat muddati mavjud." },
  { q: "Yetkazib berish turlari qanday?", a: "Toshkent shahri bo'ylab YandexGo orqali, O'zbekiston bo'ylab BTS yoki maxsus shaharlararo qatnovchi transport vositalari orqali." },
  { q: "Yetkazib berish bepulmi?", a: "Toshkent shahri bo'ylab 5+ to'plam, O'zbekiston bo'ylab 100+ to'plamga yetkazib berish bepul." },
  { q: "Qanday to'lov turlari mavjud?", a: "Har qanday, hattoki pul o'tkazish yo'li orqali(QQS guvohnomasi mavjud)." },
  { q: "Servis markazi mavjudmi?", a: "Ha albatta." },
  { q: "TeraTech kompaniyasi manzili qayerda?", a: "Toshkent shahar, Chilonzor tumani. Mo'ljal: Olmazor metro bekati." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding gradient-bg">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Eng ko'p beriladigan <span className="glow-text">savollar</span>
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
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

export default FAQSection;
