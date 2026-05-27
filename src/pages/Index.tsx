import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProgramsSection from "@/components/ProgramsSection";
import CurriculumSection from "@/components/CurriculumSection";
import PricingSection from "@/components/PricingSection";
import DashboardPreview from "@/components/DashboardPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import DownloadButton from "@/components/download";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      {/* <AboutSection /> */}
      {/* <SkillsSection /> */}
      {/* <ProgramsSection /> */}
      <CurriculumSection />
      <PricingSection onOpenModal={() => setModalOpen(true)} />
      {/* <DashboardPreview /> */}
      {/* <TestimonialsSection /> */}
      {/* <BlogSection /> */}
      <FAQSection />
      {/* <CTASection /> */}
      <DownloadButton/>
      <FooterSection />
      <LeadCaptureModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Index;
