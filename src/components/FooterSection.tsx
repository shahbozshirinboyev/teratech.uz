import { Phone, Send } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/80 px-4 py-8">
      <div className="container mx-auto flex flex-col gap-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="mt-4">
            <span className="text-2xl font-bold text-foreground">TeraTech</span>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              Kuchli kompyuterlar va monobloklar bo'yicha expert.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap mb-4">
            <a
              href="tel:+998878882244"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-foreground transition-colors hover:border-primary/45 hover:bg-primary/10"
            >
              <Phone size={15} />
              +998 87 888 22 44
            </a>
            <a
              href="https://t.me/teratechuz"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-foreground transition-colors hover:border-primary/45 hover:bg-primary/10"
              target="_blank"
              rel="noreferrer"
            >
              <Send size={15} />
              Telegram
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between  gap-3 border-t border-border/35 pt-4 mb-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} TeraTech. Barcha huquqlar himoyalangan.</span>
          <nav className="flex flex-wrap items-center gap-3">
            <a href="#curriculum" className="transition-colors hover:text-primary">
              Nega biz?
            </a>
            <a href="#pricing" className="transition-colors hover:text-primary">
              Narxlar
            </a>
            <a href="#faq" className="transition-colors hover:text-primary" target="_blank" rel="noreferrer">
              Savol-Javob
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
