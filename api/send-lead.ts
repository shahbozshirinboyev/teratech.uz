type LeadPlan = {
  name?: string;
  price?: string;
  features?: string[];
};

type LeadPayload = {
  name?: string;
  phone?: string;
  purpose?: string;
  plan?: LeadPlan | null;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const formatLeadMessage = ({ name, phone, purpose, plan }: LeadPayload) => {
  const features = plan?.features?.length
    ? plan.features.map((feature) => `• ${escapeHtml(feature)}`).join("\n")
    : "Kiritilmagan";

  return [
    "<b>Yangi buyurtma</b>",
    "",
    `<b>Tarif:</b> ${escapeHtml(plan?.name || "Tanlanmagan")}`,
    `<b>Narx:</b> ${escapeHtml(plan?.price || "Kiritilmagan")}`,
    "<b>Xarakteristika:</b>",
    features,
    "",
    `<b>Ism:</b> ${escapeHtml(name || "Kiritilmagan")}`,
    `<b>Telefon:</b> ${escapeHtml(phone || "Kiritilmagan")}`,
    `<b>Maqsad:</b> ${escapeHtml(purpose || "Kiritilmagan")}`,
  ].join("\n");
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({ error: "Telegram bot token yoki chat id sozlanmagan" });
  }

  const payload = req.body as LeadPayload;
  const text = formatLeadMessage(payload);

  const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!telegramResponse.ok) {
    const result = await telegramResponse.text();
    return res.status(telegramResponse.status).json({ error: "Telegramga yuborilmadi", details: result });
  }

  return res.status(200).json({ ok: true });
}
