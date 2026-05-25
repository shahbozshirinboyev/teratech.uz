import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full  opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/50 to-background" />
    </div>
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />

    <div className="relative z-10 text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        <span>TeraTech</span>
      </h1>
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
        <span className="glow-text">O'zbekistonda birinchi qo'l</span>
        <br />
        <span className="glow-text">[IMPORTYOR]</span>
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Ofis, klinika, davlat tashkilotlari, maktablar va call canter uchun optimal monobloklar.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a href="#pricing" className="glow-button text-lg px-8 py-4">
          Narxlarni ko'rish
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
