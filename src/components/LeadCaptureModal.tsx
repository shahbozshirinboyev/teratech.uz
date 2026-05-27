import { useState, useEffect, useRef } from "react";
import { X, User, Phone, ChevronDown, ArrowRight, CheckCircle } from "lucide-react";
import type { PricingPlan } from "@/components/PricingSection";

interface LeadCaptureModalProps {
  open: boolean;
  onClose: () => void;
  selectedPlan?: PricingPlan | null;
}

const PURPOSE_OPTIONS = [
  "Game club",
  "Ofis",
  "Uy uchun",
  "Maktab / Ta'lim",
  "Grafik dizayn",
  "Boshqa",
];

function formatPhone(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("998")) digits = digits.slice(3);
  digits = digits.slice(0, 9);

  let out = "+998";
  if (!digits) return out + " ";
  if (digits.length <= 2) return out + " (" + digits;
  out += " (" + digits.slice(0, 2) + ") ";
  if (digits.length <= 5) return out + digits.slice(2);
  out += digits.slice(2, 5) + "-";
  if (digits.length <= 7) return out + digits.slice(5);
  return out + digits.slice(5, 7) + "-" + digits.slice(7, 9);
}

function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  return digits ? `+${digits}` : "";
}

const LeadCaptureModal = ({ open, onClose, selectedPlan }: LeadCaptureModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [visible, setVisible] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
      const t = setTimeout(() => {
        setSubmitted(false);
        setName(""); setPhone(""); setPurpose("");
        setSubmitError("");
        setDropdownOpen(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (visible && firstInputRef.current) firstInputRef.current.focus();
  }, [visible]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const phoneDigits = phone.replace(/\D/g, "");
  const isValid = name.trim().length > 1 && phoneDigits.startsWith("998") && phoneDigits.length === 12 && purpose !== "";

  const handleSubmit = async () => {
    if (!isValid || loading) return;
    setLoading(true);
    setSubmitError("");

    try {
      const response = await fetch("./send-lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: normalizePhone(phone),
          purpose,
          plan: selectedPlan,
        }),
      });

      if (!response.ok) {
        throw new Error("Telegramga yuborishda xatolik yuz berdi");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Yuborishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&display=swap');

        .lcm-overlay { font-family: 'Onest', sans-serif; }

        .lcm-backdrop { transition: opacity 0.3s ease; opacity: 0; }
        .lcm-backdrop.lcm-visible { opacity: 1; }

        .lcm-card {
          transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
          opacity: 0; transform: translateY(24px) scale(0.97);
        }
        .lcm-card.lcm-visible { opacity: 1; transform: translateY(0) scale(1); }

        /* ── fields ── */
        .lcm-field { position: relative; }

        .lcm-field-icon {
          position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
          color: hsl(var(--muted-foreground) / 0.78);
          pointer-events: none; transition: color 0.2s;
        }
        .lcm-field:focus-within .lcm-field-icon { color: hsl(var(--primary) / 0.9); }

        .lcm-input {
          width: 100%; box-sizing: border-box;
          padding: 13px 14px 13px 42px;
          border-radius: 10px;
          /* Pricing sectiondagi border-primary/30 dan kuchliroq — /50 */
          border: 1.5px solid hsl(var(--primary) / 0.28);
          background: hsl(var(--background) / 0.34);
          color: var(--foreground);
          font-family: 'Onest', sans-serif;
          font-size: 14.5px;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .lcm-input::placeholder { color: hsl(var(--muted-foreground) / 0.68); }
        .lcm-input:focus {
          border-color: hsl(var(--primary) / 0.7);
          background: hsl(var(--background) / 0.48);
          /* glow-button dan ilhom — primary shadow */
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.12);
        }

        /* ── dropdown trigger ── */
        .lcm-select-btn {
          width: 100%; box-sizing: border-box;
          padding: 13px 42px 13px 42px;
          border-radius: 10px;
          border: 1.5px solid hsl(var(--primary) / 0.28);
          background: hsl(var(--background) / 0.34);
          color: var(--foreground);
          font-family: 'Onest', sans-serif;
          font-size: 14.5px;
          text-align: left; cursor: pointer; outline: none;
          display: flex; align-items: center;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .lcm-select-btn.placeholder { color: hsl(var(--muted-foreground) / 0.68); }
        .lcm-select-btn.open, .lcm-select-btn:focus {
          border-color: hsl(var(--primary) / 0.7);
          background: hsl(var(--background) / 0.48);
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.12);
        }

        .lcm-chevron {
          position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
          color: hsl(var(--muted-foreground) / 0.78);
          pointer-events: none;
          transition: transform 0.22s ease, color 0.2s;
        }
        .lcm-chevron.open {
          transform: translateY(-50%) rotate(180deg);
          color: hsl(var(--primary) / 0.9);
        }

        /* dropdown list */
        .lcm-dropdown {
          position: absolute; top: calc(100% + 6px); left: 0; right: 0;
          background: hsl(var(--popover) / 0.98);
          border: 1px solid hsl(var(--primary) / 0.28);
          border-radius: 10px; overflow: hidden; z-index: 999;
          box-shadow: 0 16px 36px hsl(var(--foreground) / 0.14);
          animation: lcm-dd-in 0.16s ease forwards;
        }
        @keyframes lcm-dd-in {
          from { opacity:0; transform:translateY(-6px) }
          to   { opacity:1; transform:translateY(0) }
        }
        .lcm-option {
          padding: 11px 16px; font-size: 14px;
          color: hsl(var(--muted-foreground));
          cursor: pointer;
          border-bottom: 1px solid hsl(var(--border) / 0.75);
          transition: background 0.13s, color 0.13s;
        }
        .lcm-option:last-child { border-bottom: none; }
        /* hover: pricing'dagi hover:bg-primary/10 */
        .lcm-option:hover {
          background: hsl(var(--primary) / 0.1);
          color: hsl(var(--foreground));
        }
        /* selected: bg-primary uslubida */
        .lcm-option.selected {
          background: hsl(var(--primary) / 0.14);
          color: hsl(var(--primary));
          font-weight: 700;
        }

        /* ── button — glow-button bilan bir xil ruh ── */
        .lcm-btn {
          position: relative; width: 100%; padding: 14px;
          border-radius: 10px; border: none;
          background: linear-gradient(135deg, hsl(var(--primary) / 1) 0%, hsl(var(--primary) / 0.75) 100%);
          color: var(--primary-foreground, #fff);
          font-family: 'Onest', sans-serif;
          font-size: 15px; font-weight: 700; letter-spacing: 0.02em;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          /* glow-button shadow */
          box-shadow: 0 0 14px hsl(var(--primary) / 0.28), 0 4px 12px hsl(var(--primary) / 0.22);
          transition: transform 0.15s, box-shadow 0.2s, opacity 0.2s, background 0.2s, color 0.2s;
          overflow: hidden;
        }
        .lcm-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.14) 0%, transparent 60%);
          pointer-events: none;
        }
        .lcm-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 0 20px hsl(var(--primary) / 0.38), 0 8px 18px hsl(var(--primary) / 0.28);
        }
        .lcm-btn:active:not(:disabled) { transform: translateY(0); }
        .lcm-btn:disabled {
          opacity: 1;
          cursor: not-allowed;
          background: hsl(var(--secondary) / 0.78);
          color: hsl(var(--muted-foreground) / 0.82);
          box-shadow: none;
        }

        /* spinner */
        @keyframes lcm-spin { to { transform: rotate(360deg) } }
        .lcm-spinner {
          width: 18px; height: 18px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%;
          animation: lcm-spin 0.7s linear infinite;
        }

        /* success icon */
        @keyframes lcm-pop {
          0%  { transform:scale(0.6); opacity:0 }
          70% { transform:scale(1.15) }
          100%{ transform:scale(1); opacity:1 }
        }
        .lcm-success-icon { animation: lcm-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }

        /* badge — border-primary/50 + bg-primary/10 */
        .lcm-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 10px; border-radius: 20px;
          font-size: 12.5px; font-weight: 600;
          background: hsl(var(--primary) / 0.12);
          color: var(--primary);
          border: 1px solid hsl(var(--primary) / 0.4);
          letter-spacing: 0.03em;
        }
        .lcm-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--primary);
        }

        /* divider */
        .lcm-divider {
          width: 36px; height: 3px; border-radius: 99px;
          background: var(--primary);
          margin: 10px 0 18px;
        }

        /* close */
        .lcm-close {
          position: absolute; top: 16px; right: 16px;
          width: 32px; height: 32px; border-radius: 8px;
          border: 1px solid hsl(var(--primary) / 0.2);
          background: hsl(var(--primary) / 0.06);
          color: var(--muted-foreground); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }
        .lcm-close:hover {
          background: hsl(var(--primary) / 0.15);
          border-color: hsl(var(--primary) / 0.4);
          color: var(--foreground);
        }

        /* phone hint */
        .lcm-hint {
          font-size: 11.5px;
          color: var(--muted-foreground, rgba(255,255,255,0.3));
          margin-top: 4px; padding-left: 4px;
          transition: color 0.2s;
        }
        .lcm-hint.valid { color: #86efac; }
        .lcm-hint.error { color: #fca5a5; }
      `}</style>

      <div className="lcm-overlay">
        {/* Backdrop */}
        <div
          className={`lcm-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 ${visible ? "lcm-visible" : ""}`}
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
        >
          {/* Card — glass-card kabi */}
          <div
            className={`lcm-card glass-card relative z-10 w-full max-w-[420px] rounded-2xl p-8 ${visible ? "lcm-visible" : ""}`}
            style={{
              border: "1px solid hsl(var(--primary) / 0.3)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px hsl(var(--primary) / 0.1)",
            }}
            onClick={e => e.stopPropagation()}
          >
            <button className="lcm-close" onClick={onClose} aria-label="Yopish">
              <X size={16} />
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                    Buyurtma berish
                  </h3>
                  <div className="lcm-divider" />
                  <p style={{ color: "var(--muted-foreground)", fontSize: 13.5 }}>
                    Ma'lumotlaringizni qoldiring — biz siz bilan bog'lanamiz.
                  </p>
                </div>

                {/* Fields */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>

                  {/* Name */}
                  <div className="lcm-field">
                    <input
                      ref={firstInputRef}
                      className="lcm-input"
                      type="text"
                      placeholder="Ismingiz"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                    <span className="lcm-field-icon"><User size={16} /></span>
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="lcm-field">
                      <input
                        className="lcm-input"
                        type="tel"
                        placeholder="+998 dan keyin raqam"
                        value={phone}
                        onChange={handlePhoneChange}
                        onFocus={() => { if (!phone) setPhone("+998 "); }}
                        maxLength={19}
                      />
                      <span className="lcm-field-icon"><Phone size={16} /></span>
                    </div>
                  </div>

                  {/* Purpose dropdown */}
                  <div className="lcm-field" ref={dropdownRef}>
                    <button
                      type="button"
                      className={`lcm-select-btn ${!purpose ? "placeholder" : ""} ${dropdownOpen ? "open" : ""}`}
                      onClick={() => setDropdownOpen(v => !v)}
                    >
                      <span style={{ paddingLeft: 28 }}>
                        {purpose || "Maqsad tanlang"}
                      </span>
                    </button>
                    <span className="lcm-field-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2"/>
                        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                      </svg>
                    </span>
                    <span className={`lcm-chevron ${dropdownOpen ? "open" : ""}`}>
                      <ChevronDown size={15} />
                    </span>
                    {dropdownOpen && (
                      <div className="lcm-dropdown">
                        {PURPOSE_OPTIONS.map(opt => (
                          <div
                            key={opt}
                            className={`lcm-option ${purpose === opt ? "selected" : ""}`}
                            onClick={() => { setPurpose(opt); setDropdownOpen(false); }}
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    className="lcm-btn"
                    style={{ marginTop: 4 }}
                    onClick={handleSubmit}
                    disabled={!isValid || loading}
                  >
                    {loading
                      ? <span className="lcm-spinner" />
                      : <><span>Yuborish</span><ArrowRight size={17} /></>
                    }
                  </button>
                  {submitError && (
                    <p style={{ color: "#fca5a5", fontSize: 12.5, textAlign: "center", margin: 0 }}>
                      {submitError}
                    </p>
                  )}
                </div>

                <p style={{ color: "var(--muted-foreground)", fontSize: 12, textAlign: "center", marginTop: 16 }}>
                  Ma'lumotlaringiz uchinchi shaxslarga berilmaydi.
                </p>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "16px 0 8px" }}>
                <div className="lcm-success-icon" style={{ display: "inline-block", marginBottom: 16, color: "var(--primary)" }}>
                  <CheckCircle size={52} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: "var(--foreground)", marginBottom: 8 }}>
                  Muvaffaqiyatli yuborildi!
                </h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: 14, marginBottom: 28 }}>
                  Tez orada siz bilan bog'lanamiz.
                </p>
                <button className="lcm-btn" onClick={onClose}>Yopish</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadCaptureModal;
