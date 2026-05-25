import { ShieldCheck, MonitorCog, Globe, PackageOpen, Headset, Crosshair } from "lucide-react";

const skills = [
  { icon: Globe, title: "O'zbekistonda birinchi qo'l (importyor)" },
  { icon: ShieldCheck, title: "Rasmiy 1 yillik kafolat" },
  { icon: MonitorCog, title: "Servis xizmati" },
  { icon: PackageOpen, title: "Katta hajmda ishlash imkoniyati" },
  { icon: Headset, title: "Tezkor xizmat ko'rsatish" },
  { icon: Crosshair, title: "Professional yechimlar" },
];


const CurriculumSection = () => (
  <section id="curriculum" className="section-padding">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Nega aynan <span className="glow-text">biz?</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ icon: Icon, title }) => (
          <div key={title} className="glass-card-hover p-6 text-center">
            <Icon className="mx-auto mb-4 text-primary" size={40} />
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CurriculumSection;
