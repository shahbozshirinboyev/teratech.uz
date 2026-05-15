import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onOpenModal?: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
    </div>
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />

    <div className="relative z-10 text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        <span>TeraTech</span>
        <br />
        <span className="glow-text">O'zbekistonda birinchi qo'l sotuvchi</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Ofis, klinika, maktablar va call canter uchun kuchli monobloklar.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a href="#pricing" className="glow-button text-lg px-8 py-4">
          Start Learning
        </a>
        <button
          onClick={onOpenModal}
          className="px-8 py-4 rounded-lg border border-primary/30 text-foreground font-semibold hover:bg-primary/10 transition-all duration-300"
        >
          Get Free Starter Kit
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <span>10,000+ Students</span>
        <span>4.8⭐ Rating</span>
        <span>Certified Instructor</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
