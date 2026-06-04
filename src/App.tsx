import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import { LanguageProvider, detectLang, isLanguage } from "@/i18n/LanguageContext";
import { type LanguageCode, type PageKey } from "@/i18n/types";
import Index from "./pages/Index";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Til prefiksli sahifani o'raydi: URL'dan tilni tekshiradi va kontekstni beradi
const LangPage = ({ page, children }: { page: PageKey; children: React.ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();

  if (!isLanguage(lang)) {
    // Noto'g'ri til prefiksi -> default tilga yo'naltiramiz
    return <Navigate to={`/${detectLang()}`} replace />;
  }

  return (
    <LanguageProvider lang={lang as LanguageCode} page={page}>
      {/* location.key orqali sahifa o'zgarganda komponentlar yangilanadi */}
      <div key={location.pathname}>{children}</div>
    </LanguageProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Ildiz -> aniqlangan tilga yo'naltirish */}
          <Route path="/" element={<Navigate to={`/${detectLang()}`} replace />} />

          <Route path="/:lang" element={<LangPage page="home"><Index /></LangPage>} />
          <Route path="/:lang/privacy" element={<LangPage page="privacy"><PrivacyPage /></LangPage>} />
          <Route path="/:lang/terms" element={<LangPage page="terms"><TermsPage /></LangPage>} />
          <Route path="/:lang/about" element={<LangPage page="about"><AboutPage /></LangPage>} />
          <Route path="/:lang/contact" element={<LangPage page="contact"><ContactPage /></LangPage>} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
