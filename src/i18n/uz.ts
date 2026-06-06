import type { Dictionary } from "./types";

const uz: Dictionary = {
  seo: {
    home: {
      title: "TeraTech — Monobloklar va kompyuterlar O'zbekistonda",
      description:
        "Ofis, klinika, davlat tashkilotlari, maktablar va call-center uchun optimal monobloklar. Rasmiy kafolat, servis xizmati va tezkor yetkazib berish.",
    },
    privacy: {
      title: "Maxfiylik siyosati — TeraTech",
      description:
        "TeraTech maxfiylik siyosati: qanday shaxsiy ma'lumotlar yig'iladi, ulardan qanday foydalaniladi va himoyalanadi.",
    },
    about: {
      title: "Biz haqimizda — TeraTech",
      description:
        "TeraTech — O'zbekistonda monobloklar va kompyuterlar bo'yicha mutaxassis. Bizning maqsadimiz va xizmatlarimiz haqida.",
    },
    contact: {
      title: "Aloqa — TeraTech",
      description:
        "TeraTech bilan bog'lanish: telefon, Telegram, manzil va ish vaqti.",
    },
    terms: {
      title: "Foydalanish shartlari — TeraTech",
      description:
        "TeraTech veb-sayti va xizmatlaridan foydalanish shartlari.",
    },
  },
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
        features: ["Displey: 24\" IPS FullHD", "Protsessor: i3-2chi avlod", "Tezkor xotira: 4GB DDR3", "Doimiy xotira: SSD 120GB"],
      },
      {
        name: "Standart",
        price: "2 499 000 so'm",
        features: ["Displey: 24\" IPS FullHD", "Protsessor: i5-2chi avlod", "Tezkor xotira: 8GB DDR3", "Doimiy xotira: SSD 256GB"],
      },
      {
        name: "Optimal",
        price: "3 400 000 so'm",
        features: ["Displey: 24\" IPS FullHD", "Protsessor: i7-2chi avlod", "Tezkor xotira: 16GB DDR3", "Doimiy xotira: SSD 512GB"],
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
    pagesHeading: "Sahifalar",
    links: {
      privacy: "Maxfiylik siyosati",
      about: "Biz haqimizda",
      contact: "Aloqa",
      terms: "Foydalanish shartlari",
    },
    address: "Toshkent shahar, Chilonzor tumani. Mo'ljal: Olmazor metro bekati.",
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
  cookie: {
    text: "Biz saytdan foydalanishni yaxshilash va tahlil uchun cookie-fayllardan foydalanamiz.",
    accept: "Roziman",
    more: "Batafsil",
  },
  legal: {
    updatedLabel: "Oxirgi yangilanish",
    backHome: "Bosh sahifaga qaytish",
    privacy: {
      title: "Maxfiylik siyosati",
      updated: "2026-06-03",
      sections: [
        {
          heading: "1. Umumiy ma'lumot",
          paragraphs: [
            "Ushbu Maxfiylik siyosati TeraTech (keyingi o'rinlarda — \"biz\") veb-saytidan foydalanganingizda shaxsiy ma'lumotlaringiz qanday yig'ilishi, ishlatilishi va himoyalanishini tushuntiradi.",
            "Saytdan foydalanish orqali siz ushbu siyosatda bayon etilgan shartlarga rozilik bildirasiz.",
          ],
        },
        {
          heading: "2. Qanday ma'lumotlar yig'iladi",
          paragraphs: [
            "Buyurtma yoki bog'lanish formasini to'ldirganingizda biz siz kiritgan ism, telefon raqami va tanlangan maqsad kabi ma'lumotlarni yig'amiz.",
            "Bundan tashqari, sayt avtomatik ravishda texnik ma'lumotlarni (brauzer turi, qurilma, taxminiy joylashuv, sahifalarga tashriflar) cookie-fayllar va tahlil vositalari orqali yig'ishi mumkin.",
          ],
        },
        {
          heading: "3. Cookie va uchinchi tomon xizmatlari",
          paragraphs: [
            "Saytda Google (Google Ads, Google Analytics) kabi uchinchi tomon xizmatlari ishlatiladi. Ushbu xizmatlar cookie-fayllar yordamida reklama samaradorligini o'lchashi va remarketing maqsadida ma'lumot to'plashi mumkin.",
            "Brauzeringiz sozlamalari orqali cookie-fayllarni o'chirib qo'yishingiz mumkin, ammo bu holda saytning ba'zi funksiyalari to'liq ishlamasligi mumkin.",
          ],
        },
        {
          heading: "4. Ma'lumotlardan foydalanish",
          paragraphs: [
            "Yig'ilgan ma'lumotlar siz bilan bog'lanish, buyurtmangizni qayta ishlash, xizmat sifatini yaxshilash va qonuniy talablarni bajarish uchun ishlatiladi.",
            "Biz sizning shaxsiy ma'lumotlaringizni uchinchi shaxslarga sotmaymiz va ijaraga bermaymiz.",
          ],
        },
        {
          heading: "5. Ma'lumotlar xavfsizligi",
          paragraphs: [
            "Biz shaxsiy ma'lumotlaringizni ruxsatsiz kirish, o'zgartirish yoki yo'qotishdan himoya qilish uchun oqilona texnik va tashkiliy choralarni qo'llaymiz.",
          ],
        },
        {
          heading: "6. Sizning huquqlaringiz",
          paragraphs: [
            "Siz o'zingiz haqingizdagi ma'lumotlarni ko'rish, tuzatish yoki o'chirishni so'rashga haqlisiz. Buning uchun quyidagi aloqa ma'lumotlari orqali biz bilan bog'laning.",
          ],
        },
        {
          heading: "7. Aloqa",
          paragraphs: [
            "Maxfiylik siyosati bo'yicha savollaringiz bo'lsa: telefon +998 87 888 22 44, Telegram: t.me/teratechuz, manzil: Toshkent shahar, Chilonzor tumani.",
          ],
        },
      ],
    },
    terms: {
      title: "Foydalanish shartlari",
      updated: "2026-06-03",
      sections: [
        {
          heading: "1. Shartlarni qabul qilish",
          paragraphs: [
            "Ushbu veb-saytdan foydalanish orqali siz quyidagi foydalanish shartlariga rozilik bildirasiz. Agar shartlarga rozi bo'lmasangiz, saytdan foydalanmang.",
          ],
        },
        {
          heading: "2. Xizmatlar haqida",
          paragraphs: [
            "Sayt TeraTech mahsulotlari (monobloklar va kompyuterlar) hamda ularning narxlari to'g'risida ma'lumot beradi. Narxlar va texnik xususiyatlar oldindan ogohlantirmasdan o'zgartirilishi mumkin.",
            "Saytdagi ma'lumotlar umumiy tanishtiruv maqsadida bo'lib, yakuniy shartlar buyurtma rasmiylashtirilganda aniqlashtiriladi.",
          ],
        },
        {
          heading: "3. Buyurtma va to'lov",
          paragraphs: [
            "Buyurtma formasi orqali qoldirilgan so'rov xarid majburiyatini anglatmaydi. Bizning mutaxassisimiz siz bilan bog'lanib, tafsilotlarni kelishadi.",
          ],
        },
        {
          heading: "4. Intellektual mulk",
          paragraphs: [
            "Saytdagi barcha matn, logotip va grafik materiallar TeraTech mulki bo'lib, ruxsatsiz nusxalash taqiqlanadi.",
          ],
        },
        {
          heading: "5. Javobgarlikni cheklash",
          paragraphs: [
            "Biz saytdan foydalanish natijasida yuzaga kelishi mumkin bo'lgan bilvosita zararlar uchun javobgar emasmiz. Sayt \"qanday bo'lsa shunday\" tarzida taqdim etiladi.",
          ],
        },
        {
          heading: "6. Aloqa",
          paragraphs: [
            "Savollar uchun: telefon +998 87 888 22 44, Telegram: t.me/teratechuz.",
          ],
        },
      ],
    },
  },
  about: {
    title: "Biz haqimizda",
    paragraphs: [
      "TeraTech — O'zbekistonda monobloklar va kompyuterlar yetkazib berish bo'yicha ishonchli hamkor. Biz mahsulotlarni birinchi qo'ldan (importyor sifatida) yetkazib beramiz, bu esa narx va sifat muvozanatini ta'minlaydi.",
      "Bizning maqsadimiz — ofislar, klinikalar, davlat tashkilotlari, maktablar va call-centerlar uchun ishonchli va arzon kompyuter yechimlarini taqdim etish.",
      "Har bir mahsulot rasmiy kafolat bilan ta'minlanadi, bizda servis markazi va tezkor xizmat ko'rsatish xizmati mavjud. Bir oylik ishlab chiqarish salohiyatimiz 6000+ to'plamni tashkil etadi.",
    ],
  },
  contact: {
    title: "Aloqa",
    intro: "Savollaringiz bormi? Biz bilan quyidagi usullar orqali bog'lanishingiz mumkin.",
    phoneLabel: "Telefon",
    telegramLabel: "Telegram",
    addressLabel: "Manzil",
    address: "Toshkent shahar, Chilonzor tumani. Mo'ljal: Olmazor metro bekati.",
    hoursLabel: "Ish vaqti",
    hours: "Dushanba — Shanba, 09:00 — 18:00",
    emailLabel: "Email",
    email: "info@teratech.uz",
  },
};

export default uz;
