"use client";
import { Phone, MapPin, Mail, Share2, Play, MessageCircle, Package, ShieldCheck, Headphones, RefreshCw } from "lucide-react";

const Facebook = Share2;
const Instagram = Share2;
const Youtube = Play;

const FOOTER_LINKS: Record<string, string[]> = {
  "Company": ["About Us", "Careers", "Blog", "Press"],
  "Support": ["Contact Us", "FAQs", "Shipping Policy", "Returns & Refunds"],
  "Shop": ["Mobile Parts", "LCD Panels", "Touch Glass", "Used Phones"],
  "My Account": ["Sign In", "Register", "View Cart", "Track Order"],
};

const SOCIAL = [
  { label: "Facebook", Icon: Facebook },
  { label: "Instagram", Icon: Instagram },
  { label: "YouTube", Icon: Youtube },
  { label: "WhatsApp", Icon: MessageCircle },
];

const PERKS = [
  { Icon: Package, title: "Free Delivery", desc: "On orders $49+" },
  { Icon: ShieldCheck, title: "Secure Payment", desc: "100% protected checkout" },
  { Icon: Headphones, title: "24/7 Support", desc: "WhatsApp & call support" },
  { Icon: RefreshCw, title: "Easy Returns", desc: "7-day return policy" },
];

const CONTACT = [
  { Icon: Phone, text: "+1 (912) 427-0000" },
  { Icon: MapPin, text: "Jesup, GA 31545, United States" },
  { Icon: Mail, text: "support@jesupwireless.com" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#fff", borderTop: "1px solid #ebebeb" }}>

      {/* ── Perks strip ── */}
      <div style={{ borderBottom: "1px solid #f0f0f0" }}>
        <div className="container-xl">
          <div className="footer-perks">
            {PERKS.map(({ Icon, title, desc }, i) => (
              <div key={title} className="footer-perk-item" style={{ borderRight: i < 3 ? "1px solid #f0f0f0" : "none" }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 11, flexShrink: 0,
                  backgroundColor: "#f0eeff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#6C63FF",
                }}>
                  <Icon size={19} strokeWidth={1.8} />
                </div>
                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#111", marginBottom: 2 }}>{title}</p>
                  <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Newsletter ── */}
      <div style={{ borderBottom: "1px solid #f0f0f0", padding: "2.25rem 0" }}>
        <div className="container-xl">
          <div className="footer-newsletter">
            <div>
              <p style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6C63FF", marginBottom: 5 }}>
                Newsletter
              </p>
              <p style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#111", letterSpacing: "-0.03em", lineHeight: 1.3 }}>
                Stay updated with latest arrivals
              </p>
              <p style={{ fontSize: "0.8125rem", color: "#9ca3af", marginTop: 4 }}>
                Exclusive deals, new launches &amp; restocks.
              </p>
            </div>
            <div style={{ display: "flex", flex: "1 1 320px", maxWidth: 420 }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex: 1, padding: "11px 15px",
                  fontSize: "0.875rem", fontFamily: "inherit",
                  backgroundColor: "#fff",
                  border: "1.5px solid #e5e7eb", borderRight: "none",
                  color: "#111", borderRadius: "10px 0 0 10px", outline: "none",
                }}
              />
              <button style={{
                padding: "11px 22px", fontSize: "0.875rem", fontWeight: 600,
                color: "#fff", backgroundColor: "#6C63FF",
                border: "none", borderRadius: "0 10px 10px 0",
                cursor: "pointer", whiteSpace: "nowrap",
                transition: "background-color 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5a52d5")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#6C63FF")}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div style={{ padding: "3rem 0 2rem" }}>
        <div className="container-xl">
          <div className="footer-main">

            {/* Brand */}
            <div className="footer-brand">
              <a href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.045em" }}>
                  <span style={{ color: "#111" }}>Jes</span>
                  <span style={{ color: "#6C63FF" }}>up</span>
                </span>
              </a>
              <p style={{ fontSize: "0.8125rem", color: "#9ca3af", lineHeight: 1.75, marginBottom: "1.25rem", maxWidth: 260 }}>
                America's trusted source for premium mobile accessories, cases, chargers, and more.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: "1.5rem" }}>
                {CONTACT.map(({ Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <Icon size={14} strokeWidth={2} color="#6C63FF" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "0.8125rem", color: "#6b7280" }}>{text}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                {SOCIAL.map(({ label, Icon }) => (
                  <a
                    key={label} href="#" aria-label={label}
                    style={{
                      width: 34, height: 34, borderRadius: 9,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      backgroundColor: "#f5f5f5", color: "#6b7280",
                      border: "1px solid #ebebeb", textDecoration: "none",
                      transition: "background-color 0.15s, color 0.15s, border-color 0.15s",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "#f0eeff";
                      el.style.color = "#6C63FF";
                      el.style.borderColor = "#ede9fe";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "#f5f5f5";
                      el.style.color = "#6b7280";
                      el.style.borderColor = "#ebebeb";
                    }}
                  >
                    <Icon size={15} strokeWidth={1.8} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title} className="footer-link-col">
                <h4 style={{
                  fontSize: "0.6875rem", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#6C63FF", marginBottom: "1rem",
                }}>
                  {title}
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                  {links.map(link => (
                    <li key={link}>
                      <a
                        href="#"
                        style={{
                          fontSize: "0.8125rem", color: "#6b7280",
                          textDecoration: "none", transition: "color 0.15s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#6C63FF")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid #f0f0f0", padding: "1rem 0" }}>
        <div className="container-xl footer-bottom">
          <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
            &copy; {new Date().getFullYear()} Jesup. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            {["Privacy Policy", "Terms of Service", "Shipping & Returns"].map(t => (
              <a key={t} href="#"
                style={{ fontSize: "0.75rem", color: "#9ca3af", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#6C63FF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Perks */
        .footer-perks {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .footer-perk-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 1.375rem 1.25rem;
        }
        @media (max-width: 900px) {
          .footer-perks { grid-template-columns: repeat(2, 1fr); }
          .footer-perk-item { border-right: none !important; border-bottom: 1px solid #f0f0f0; }
          .footer-perk-item:nth-child(odd) { border-right: 1px solid #f0f0f0 !important; }
          .footer-perk-item:nth-last-child(-n+2) { border-bottom: none; }
        }
        @media (max-width: 480px) {
          .footer-perks { grid-template-columns: 1fr; }
          .footer-perk-item { border-right: none !important; }
          .footer-perk-item:last-child { border-bottom: none; }
        }

        /* Newsletter */
        .footer-newsletter {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.75rem 2rem;
          border-radius: 16px;
          background: linear-gradient(130deg, #f0eeff 0%, #fff 100%);
          border: 1.5px solid #ede9fe;
        }
        @media (max-width: 600px) {
          .footer-newsletter { padding: 1.25rem; flex-direction: column; }
          .footer-newsletter > div:last-child { width: 100%; max-width: 100% !important; flex: unset !important; }
          .footer-nl-row { flex-direction: column !important; }
          .footer-nl-row input { border-right: 1.5px solid #e5e7eb !important; border-radius: 10px !important; margin-bottom: 8px; }
          .footer-nl-row button { border-radius: 10px !important; width: 100%; padding: 11px !important; }
        }

        /* Main columns */
        .footer-main {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .footer-brand { grid-column: span 3; }
        }
        @media (max-width: 640px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .footer-brand { grid-column: span 2; }
        }
        @media (max-width: 400px) {
          .footer-main { grid-template-columns: 1fr; }
          .footer-brand { grid-column: span 1; }
        }

        /* Bottom bar */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer-bottom-links {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          .footer-bottom { justify-content: center; text-align: center; }
          .footer-bottom-links { justify-content: center; gap: 0.875rem; }
        }
      `}</style>
    </footer>
  );
}
