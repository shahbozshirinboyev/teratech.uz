import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const telegramLeadPlugin = (): Plugin => ({
  name: "telegram-lead-api",
  configureServer(server) {
    const env = loadEnv("", process.cwd(), "");

    const leadHandler = async (req: any, res: any) => {
      if (req.method !== "POST") {
        res.statusCode = 405;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Method not allowed" }));
        return;
      }

      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", async () => {
        try {
          const token = env.TELEGRAM_BOT_TOKEN;
          const chatId = env.TELEGRAM_CHAT_ID;

          if (!token || !chatId) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Telegram bot token yoki chat id sozlanmagan" }));
            return;
          }

          const payload = JSON.parse(body || "{}");
          const plan = payload.plan;
          const features = Array.isArray(plan?.features) && plan.features.length
            ? plan.features.map((feature: string) => `• ${escapeHtml(feature)}`).join("\n")
            : "Kiritilmagan";

          const text = [
            "<b>Yangi buyurtma</b>",
            "",
            `<b>Tarif:</b> ${escapeHtml(plan?.name || "Tanlanmagan")}`,
            `<b>Narx:</b> ${escapeHtml(plan?.price || "Kiritilmagan")}`,
            "<b>Xarakteristika:</b>",
            features,
            "",
            `<b>Ism:</b> ${escapeHtml(payload.name || "Kiritilmagan")}`,
            `<b>Telefon:</b> ${escapeHtml(payload.phone || "Kiritilmagan")}`,
            `<b>Maqsad:</b> ${escapeHtml(payload.purpose || "Kiritilmagan")}`,
          ].join("\n");

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
            res.statusCode = telegramResponse.status;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Telegramga yuborilmadi", details: await telegramResponse.text() }));
            return;
          }

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ ok: true }));
        } catch (error) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Yuborishda xatolik yuz berdi" }));
          server.config.logger.error(error instanceof Error ? error.message : String(error));
        }
      });
    };

    server.middlewares.use("/api/send-lead", leadHandler);
    server.middlewares.use("/send-lead.php", leadHandler);
  },
});

export default defineConfig({
  base: "./",

  server: {
    host: true,
    port: 8080,
  },

  plugins: [react(), telegramLeadPlugin()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/js/index.js",
        chunkFileNames: "assets/js/[name].js",
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? "";

          if (name.endsWith(".css")) {
            return "assets/css/index.css";
          }

          if (/\.(png|jpe?g|svg|gif|webp)$/.test(name)) {
            return "assets/images/[name][extname]";
          }

          return "assets/[name][extname]";
        },
      },
    },
  },
});
