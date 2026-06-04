import Seo from "@/components/Seo";
import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const PrivacyPage = () => {
  const { t } = useLanguage();
  const doc = t.legal.privacy;

  return (
    <>
      <Seo page="privacy" />
      <PageLayout title={doc.title}>
        <p className="text-sm text-muted-foreground mb-8">
          {t.legal.updatedLabel}: {doc.updated}
        </p>
        <div className="space-y-8">
          {doc.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold mb-3">{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-muted-foreground leading-relaxed mb-3">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export default PrivacyPage;
