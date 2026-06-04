import { Phone, Send, MapPin, Clock, Mail } from "lucide-react";
import Seo from "@/components/Seo";
import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();
  const c = t.contact;

  const items = [
    {
      icon: Phone,
      label: c.phoneLabel,
      value: t.nav.phone,
      href: "tel:+998878882244",
    },
    {
      icon: Send,
      label: c.telegramLabel,
      value: "t.me/teratechuz",
      href: "https://t.me/teratechuz",
    },
    {
      icon: Mail,
      label: c.emailLabel,
      value: c.email,
      href: `mailto:${c.email}`,
    },
    { icon: MapPin, label: c.addressLabel, value: c.address },
    { icon: Clock, label: c.hoursLabel, value: c.hours },
  ];

  return (
    <>
      <Seo page="contact" />
      <PageLayout title={c.title}>
        <p className="text-muted-foreground text-lg mb-8">{c.intro}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="glass-card-hover p-5 flex items-start gap-4 h-full">
                <Icon className="text-primary shrink-0 mt-1" size={22} />
                <div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                  <div className="font-semibold">{value}</div>
                </div>
              </div>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>
      </PageLayout>
    </>
  );
};

export default ContactPage;
