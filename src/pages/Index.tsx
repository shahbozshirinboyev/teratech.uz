import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProgramsSection from "@/components/ProgramsSection";
import CurriculumSection from "@/components/CurriculumSection";
import PricingSection, { type PricingPlan } from "@/components/PricingSection";
import DashboardPreview from "@/components/DashboardPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import DownloadButton from "@/components/download";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const location = useLocation();

  // Boshqa sahifadan #bo'lim havolasi bilan kelganda o'sha bo'limga scroll qilamiz
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        // Render tugagach scroll qilish uchun kichik kechikish
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location.hash]);

  const openLeadModal = (plan?: PricingPlan) => {
    setSelectedPlan(plan ?? null);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo page="home" />
      <Navbar />
      <HeroSection />
      {/* <AboutSection /> */}
      {/* <SkillsSection /> */}
      {/* <ProgramsSection /> */}
      <CurriculumSection />
      <PricingSection onOpenModal={openLeadModal} />
      {/* <DashboardPreview /> */}
      {/* <TestimonialsSection /> */}
      {/* <BlogSection /> */}
      <FAQSection />
      {/* <CTASection /> */}
      <DownloadButton/>
      <FooterSection />
      <CookieConsent />
      <LeadCaptureModal open={modalOpen} onClose={() => setModalOpen(false)} selectedPlan={selectedPlan} />
    </div>
  );
};

export default Index;
