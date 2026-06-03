// ── Tillar ro'yxati ──────────────────────────────────────────────
// Yangi til qo'shish uchun:
//   1. shu massivga { code, label, name } qo'shing
//   2. quyidagi `translations` obyektiga shu code bilan tarjima qo'shing
//      (TypeScript barcha kalitlarni to'ldirishni majburlaydi)
export const languages = [
  { code: "uz", label: "UZ", name: "O'zbekcha" },
  { code: "ru", label: "RU", name: "Русский" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const DEFAULT_LANG: LanguageCode = "uz";

// ── Lug'at tuzilishi (har bir til shu interfeysga mos bo'lishi shart) ──
export interface NavLink {
  name: string;
  link: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PricingPlanText {
  name: string;
  price: string;
  features: string[];
}

export interface Dictionary {
  nav: {
    links: NavLink[];
    phone: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    cta: string;
  };
  curriculum: {
    headingPrefix: string;
    headingHighlight: string;
    skills: string[]; // tartibi CurriculumSection ikonkalariga mos
  };
  pricing: {
    headingPrefix: string;
    headingHighlight: string;
    popularBadge: string;
    buyButton: string;
    plans: PricingPlanText[];
  };
  faq: {
    headingPrefix: string;
    headingHighlight: string;
    items: FaqItem[];
  };
  footer: {
    description: string;
    telegram: string;
    rights: string;
  };
  modal: {
    purposeOptions: string[];
    title: string;
    subtitle: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    purposePlaceholder: string;
    submit: string;
    privacy: string;
    errorTelegram: string;
    errorGeneric: string;
    successTitle: string;
    successSubtitle: string;
    close: string;
  };
  download: {
    label: string;
  };
}

export const translations: Record<LanguageCode, Dictionary> = {
  // ── O'ZBEKCHA ───────────────────────────────────────────────────
  uz: {
    nav: {
      links: [
        { name: "Nega biz?", link: "Curriculum" },
        { name: "Narxlar", link: "Pricing" },
        { name: "Savol-Javob", link: "FAQ" },
      ],
      phone: "+998 87 888 22 44",
    },
    hero: {
      titleLine1: "O'zbekistonda birinchi qo'l",
      titleLine2: "[IMPORTYOR]",
      subtitle:
        "Ofis, klinika, davlat tashkilotlari, maktablar va call canter uchun optimal monobloklar.",
      cta: "Narxlarni ko'rish",
    },
    curriculum: {
      headingPrefix: "Nega aynan ",
      headingHighlight: "biz?",
      skills: [
        "O'zbekistonda birinchi qo'l (importyor)",
        "Rasmiy 1 yillik kafolat",
        "Servis xizmati",
        "Katta hajmda ishlash imkoniyati",
        "Tezkor xizmat ko'rsatish",
        "Professional yechimlar",
      ],
    },
    pricing: {
      headingPrefix: "Bizning ",
      headingHighlight: "narxlarimiz",
      popularBadge: "Eng ko'p sotiladigan",
      buyButton: "Sotib olish",
      plans: [
        {
          name: "Arzon",
          price: "2 115 000 so'm",
          features: ["CPU: i3-2th", "RAM: 4GB DDR3", "Xotira: SSD 120GB"],
        },
        {
          name: "Standart",
          price: "2 499 000 so'm",
          features: ["CPU: i5-2th", "RAM: 8GB DDR3", "Xotira: SSD 240GB"],
        },
        {
          name: "Optimal",
          price: "3 400 000 so'm",
          features: ["CPU: i7-2th", "RAM: 16GB DDR3", "Xotira: SSD 512GB"],
        },
      ],
    },
    faq: {
      headingPrefix: "Eng ko'p beriladigan ",
      headingHighlight: "savollar",
      items: [
        {
          q: "Qanday dasturlarda ishlaydi?",
          a: "Word, Excel, PowerPoint, Telegram, WhatsApp, WeChat, Chrome, 1C, CRM, ERP, Google Sheets, Zoom, Photoshop 2015 gacha, AutoCAD, va boshqa offis dasturlari",
        },
        {
          q: "Qanday video o'yinlarni o'rnatsa bo'ladi?",
          a: "Counter-Strike 1.6, Call of Duty 4: Modern Warfare, Left 4 Dead 2, Command & Conquer: Generals, Command & Conquer: Red Alert 3, Age of Empires II HD, Warcraft III, StarCraft II, Need for Speed: Most Wanted, Need for Speed: Underground 2, FlatOut 2, FIFA 15 gacha, Grand Theft Auto: San Andreas, Minecraft (OptiFine bilan)",
        },
        {
          q: "Buyurtma berilsa qancha vaqtda tayyor bo'ladi?",
          a: "10 tagacha har doim sotuvda mavjud, to'lov qilib sotib olishingiz mumkin.",
        },
        {
          q: "Katta hajmdagi buyurtma tayyorlash muddati qancha?",
          a: "TeraTech kompaniyasining bir oylik ishlab chiqarish salohiyati 6000+ to'plam.",
        },
        {
          q: "Kafolat muddati bormi?",
          a: "12 oylik kafolat muddati mavjud.",
        },
        {
          q: "Yetkazib berish turlari qanday?",
          a: "Toshkent shahri bo'ylab YandexGo orqali, O'zbekiston bo'ylab BTS yoki maxsus shaharlararo qatnovchi transport vositalari orqali.",
        },
        {
          q: "Yetkazib berish bepulmi?",
          a: "Toshkent shahri bo'ylab 5+ to'plam, O'zbekiston bo'ylab 100+ to'plamga yetkazib berish bepul.",
        },
        {
          q: "Qanday to'lov turlari mavjud?",
          a: "Har qanday, hattoki pul o'tkazish yo'li orqali(QQS guvohnomasi mavjud).",
        },
        {
          q: "Servis markazi mavjudmi?",
          a: "Ha albatta.",
        },
        {
          q: "TeraTech kompaniyasi manzili qayerda?",
          a: "Toshkent shahar, Chilonzor tumani. Mo'ljal: Olmazor metro bekati.",
        },
      ],
    },
    footer: {
      description: "Kuchli kompyuterlar va monobloklar bo'yicha expert.",
      telegram: "Telegram",
      rights: "Barcha huquqlar himoyalangan.",
    },
    modal: {
      purposeOptions: [
        "Game club",
        "Ofis",
        "Uy uchun",
        "Maktab / Ta'lim",
        "Grafik dizayn",
        "Boshqa",
      ],
      title: "Buyurtma berish",
      subtitle: "Ma'lumotlaringizni qoldiring — biz siz bilan bog'lanamiz.",
      namePlaceholder: "Ismingiz",
      phonePlaceholder: "+998 dan keyin raqam",
      purposePlaceholder: "Maqsad tanlang",
      submit: "Yuborish",
      privacy: "Ma'lumotlaringiz uchinchi shaxslarga berilmaydi.",
      errorTelegram: "Telegramga yuborishda xatolik yuz berdi",
      errorGeneric: "Yuborishda xatolik yuz berdi",
      successTitle: "Muvaffaqiyatli yuborildi!",
      successSubtitle: "Tez orada siz bilan bog'lanamiz.",
      close: "Yopish",
    },
    download: {
      label: "Telegram",
    },
  },

  // ── РУССКИЙ ──────────────────────────────────────────────────────
  ru: {
    nav: {
      links: [
        { name: "Почему мы?", link: "Curriculum" },
        { name: "Цены", link: "Pricing" },
        { name: "Вопрос-Ответ", link: "FAQ" },
      ],
      phone: "+998 87 888 22 44",
    },
    hero: {
      titleLine1: "Первый поставщик в Узбекистане",
      titleLine2: "[ИМПОРТЁР]",
      subtitle:
        "Оптимальные моноблоки для офисов, клиник, государственных учреждений, школ и call-центров.",
      cta: "Посмотреть цены",
    },
    curriculum: {
      headingPrefix: "Почему именно ",
      headingHighlight: "мы?",
      skills: [
        "Первый поставщик в Узбекистане (импортёр)",
        "Официальная гарантия 1 год",
        "Сервисное обслуживание",
        "Возможность работы с большими объёмами",
        "Быстрое обслуживание",
        "Профессиональные решения",
      ],
    },
    pricing: {
      headingPrefix: "Наши ",
      headingHighlight: "цены",
      popularBadge: "Самый покупаемый",
      buyButton: "Купить",
      plans: [
        {
          name: "Бюджетный",
          price: "2 115 000 сум",
          features: ["CPU: i3-2th", "RAM: 4GB DDR3", "Память: SSD 120GB"],
        },
        {
          name: "Стандарт",
          price: "2 499 000 сум",
          features: ["CPU: i5-2th", "RAM: 8GB DDR3", "Память: SSD 240GB"],
        },
        {
          name: "Оптимальный",
          price: "3 400 000 сум",
          features: ["CPU: i7-2th", "RAM: 16GB DDR3", "Память: SSD 512GB"],
        },
      ],
    },
    faq: {
      headingPrefix: "Часто задаваемые ",
      headingHighlight: "вопросы",
      items: [
        {
          q: "В каких программах работает?",
          a: "Word, Excel, PowerPoint, Telegram, WhatsApp, WeChat, Chrome, 1C, CRM, ERP, Google Sheets, Zoom, Photoshop до 2015, AutoCAD и другие офисные программы",
        },
        {
          q: "Какие видеоигры можно установить?",
          a: "Counter-Strike 1.6, Call of Duty 4: Modern Warfare, Left 4 Dead 2, Command & Conquer: Generals, Command & Conquer: Red Alert 3, Age of Empires II HD, Warcraft III, StarCraft II, Need for Speed: Most Wanted, Need for Speed: Underground 2, FlatOut 2, FIFA до 15, Grand Theft Auto: San Andreas, Minecraft (с OptiFine)",
        },
        {
          q: "Как быстро готов заказ?",
          a: "До 10 штук всегда в наличии, можно купить сразу с оплатой.",
        },
        {
          q: "Каков срок изготовления крупного заказа?",
          a: "Месячная производственная мощность компании TeraTech — 6000+ комплектов.",
        },
        {
          q: "Есть ли гарантия?",
          a: "Предоставляется гарантия сроком 12 месяцев.",
        },
        {
          q: "Какие виды доставки?",
          a: "По городу Ташкенту через YandexGo, по Узбекистану через BTS или специальные междугородние транспортные средства.",
        },
        {
          q: "Доставка бесплатная?",
          a: "По Ташкенту от 5 комплектов, по Узбекистану от 100 комплектов доставка бесплатная.",
        },
        {
          q: "Какие способы оплаты доступны?",
          a: "Любые, в том числе банковский перевод (имеется свидетельство НДС).",
        },
        {
          q: "Есть ли сервисный центр?",
          a: "Да, конечно.",
        },
        {
          q: "Где находится компания TeraTech?",
          a: "город Ташкент, Чиланзарский район. Ориентир: станция метро Алмазар.",
        },
      ],
    },
    footer: {
      description: "Эксперт по мощным компьютерам и моноблокам.",
      telegram: "Telegram",
      rights: "Все права защищены.",
    },
    modal: {
      purposeOptions: [
        "Игровой клуб",
        "Офис",
        "Для дома",
        "Школа / Образование",
        "Графический дизайн",
        "Другое",
      ],
      title: "Оформить заказ",
      subtitle: "Оставьте свои данные — мы свяжемся с вами.",
      namePlaceholder: "Ваше имя",
      phonePlaceholder: "Номер после +998",
      purposePlaceholder: "Выберите цель",
      submit: "Отправить",
      privacy: "Ваши данные не передаются третьим лицам.",
      errorTelegram: "Произошла ошибка при отправке в Telegram",
      errorGeneric: "Произошла ошибка при отправке",
      successTitle: "Успешно отправлено!",
      successSubtitle: "Скоро мы свяжемся с вами.",
      close: "Закрыть",
    },
    download: {
      label: "Telegram",
    },
  },
};
