import Seo from "@/components/Seo";
import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Seo page="about" />
      <PageLayout title={t.about.title}>
        <div className="space-y-4">
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-lg">
              {p}
            </p>
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export default AboutPage;
