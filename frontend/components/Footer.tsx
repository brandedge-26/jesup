"use client";

const PRIMARY = "#6C63FF";

const NAV_LINKS = {
  "Quick Links": [
    { label: "Home",            href: "/" },
    { label: "Repair Services", href: "/repair" },
    { label: "Contact Us",      href: "/contact" },
    { label: "FAQs",            href: "/faq" },
    { label: "Support Center",  href: "/support" },
  ],
  "Shop": [
    { label: "Mobile Parts",    href: "/shop" },
    { label: "LCD Panels",      href: "/shop" },
    { label: "Touch Glass",     href: "/shop" },
    { label: "Accessories",     href: "/shop" },
    { label: "Used Phones",     href: "/shop" },
  ],
  "Account": [
    { label: "Sign In",         href: "/login" },
    { label: "Register",        href: "/signup" },
    { label: "View Cart",       href: "/#cart" },
    { label: "Track Order",     href: "/#track" },
  ],
};

const PERKS = [
  {
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    title: "Free Delivery",
    desc: "On orders $49+",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Secure Payment",
    desc: "100% protected checkout",
  },
  {
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    title: "24/7 Support",
    desc: "WhatsApp & call support",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Easy Returns",
    desc: "7-day return policy",
  },
];

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    color: "#1877F2",
    icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    color: "#E1306C",
    icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    color: "#FF0000",
    icon: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/19124270000",
    color: "#25D366",
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.124 1.535 5.856L.057 23.5l5.797-1.52A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.372l-.36-.213-3.713.974.992-3.626-.234-.373A9.818 9.818 0 0112 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.424-4.395 9.818-9.818 9.818z",
  },
];

export default function Footer() {
  return (
    <footer>
      {/* ── Perks strip ── */}
      <div style={{ backgroundColor: "#f8fafc", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div className="container-xl">
          <div className="footer-perks">
            {PERKS.map(({ icon, title, desc }, i) => (
              <div key={title} className="footer-perk-item" style={{ borderRight: i < 3 ? "1px solid #e5e7eb" : "none" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, backgroundColor: "#f0eeff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={1.7}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
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

      {/* ── Light gray main footer ── */}
      <div style={{ backgroundColor: "#e5e7eb" }}>

          {/* ── Newsletter ── */}
          <div style={{ borderBottom: "1px solid #d1d5db" }}>
            <div className="container-xl" style={{ padding: "2.5rem 1.25rem" }}>
              <div className="footer-newsletter">
                <div>
                  <p style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PRIMARY, marginBottom: 6 }}>Newsletter</p>
                  <p style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em", lineHeight: 1.3 }}>Stay updated with latest arrivals</p>
                  <p style={{ fontSize: "0.8125rem", color: "#6b7280", marginTop: 5 }}>Exclusive deals, new launches &amp; restocks.</p>
                </div>
                <div style={{ display: "flex", flex: "1 1 300px", maxWidth: 440, minWidth: 0, alignItems: "center", backgroundColor: "#fff", border: "1.5px solid #d1d5db", borderRadius: 12, padding: "5px 5px 5px 16px", gap: 8 }}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    style={{
                      flex: 1, minWidth: 0,
                      fontSize: "0.875rem", fontFamily: "inherit",
                      backgroundColor: "transparent",
                      border: "none", color: "#111", outline: "none",
                    }}
                  />
                  <button style={{
                    padding: "9px 20px", fontSize: "0.875rem", fontWeight: 700,
                    color: "#fff", backgroundColor: PRIMARY,
                    border: "none", borderRadius: 8,
                    cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
                    transition: "background 0.15s", fontFamily: "inherit",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5a52d5")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = PRIMARY)}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Main columns ── */}
          <div className="container-xl" style={{ padding: "3.5rem 1.25rem 2.5rem" }}>
            <div className="footer-main">

              {/* Brand column */}
              <div className="footer-brand">
                <a href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "1.1rem" }}>
                  <span style={{ fontSize: "1.625rem", fontWeight: 900, letterSpacing: "-0.045em" }}>
                    <span style={{ color: "#111" }}>Jes</span>
                    <span style={{ color: PRIMARY }}>up</span>
                    <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#9ca3af", marginLeft: 6, letterSpacing: "0.08em", textTransform: "uppercase", verticalAlign: "middle" }}>Wireless</span>
                  </span>
                </a>
                <p style={{ fontSize: "0.8125rem", color: "#6b7280", lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: 260 }}>
                  Jesup, GA's trusted repair shop. Genuine parts, expert technicians, and fast 24–48 hour turnaround on all devices.
                </p>

                {/* Contact info */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: "1.75rem" }}>
                  {[
                    { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "+1 (912) 427-0000", href: "tel:9124270000" },
                    { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Jesup, GA 31545, USA", href: "#" },
                    { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "support@jesupwireless.com", href: "mailto:support@jesupwireless.com" },
                  ].map(c => (
                    <a key={c.text} href={c.href} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={2} style={{ flexShrink: 0 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                      </svg>
                      <span style={{ fontSize: "0.8125rem", color: "#6b7280", transition: "color 0.15s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#111")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
                      >{c.text}</span>
                    </a>
                  ))}
                </div>

                {/* Social icons */}
                <div style={{ display: "flex", gap: 8 }}>
                  {SOCIAL.map(({ label, href, color, icon }) => (
                    <a
                      key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                      style={{
                        width: 36, height: 36, borderRadius: 10,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        backgroundColor: "#fff",
                        border: "1px solid #d1d5db",
                        textDecoration: "none", transition: "background 0.15s, border-color 0.15s",
                        color: "#9ca3af",
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.backgroundColor = color + "18";
                        el.style.borderColor = color + "55";
                        el.querySelector("svg")!.style.color = color;
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.backgroundColor = "#fff";
                        el.style.borderColor = "#d1d5db";
                        el.querySelector("svg")!.style.color = "#9ca3af";
                      }}
                    >
                      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} style={{ transition: "color 0.15s" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Link columns */}
              {Object.entries(NAV_LINKS).map(([title, links]) => (
                <div key={title} className="footer-link-col">
                  <h4 style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PRIMARY, marginBottom: "1.1rem" }}>
                    {title}
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {links.map(({ label, href }) => (
                      <li key={label}>
                        <a
                          href={href}
                          style={{ fontSize: "0.8125rem", color: "#6b7280", textDecoration: "none", transition: "color 0.15s", display: "inline-flex", alignItems: "center", gap: 6 }}
                          onMouseEnter={e => (e.currentTarget.style.color = PRIMARY)}
                          onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div style={{ borderTop: "1px solid #d1d5db", padding: "1.25rem 0" }}>
            <div className="container-xl footer-bottom" style={{ padding: "0 1.25rem" }}>
              <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                &copy; {new Date().getFullYear()} Jesup Wireless Inc. All rights reserved.
              </p>
              <div className="footer-bottom-links">
                {[
                  { label: "Privacy Policy",     href: "/privacy" },
                  { label: "Terms & Conditions", href: "/terms" },
                  { label: "Shipping & Returns", href: "#" },
                ].map(({ label, href }) => (
                  <a key={label} href={href}
                    style={{ fontSize: "0.75rem", color: "#9ca3af", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = PRIMARY)}
                    onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

      </div>

      <style>{`
        /* Perks */
        .footer-perks { display: grid; grid-template-columns: repeat(4, 1fr); }
        .footer-perk-item { display: flex; align-items: center; gap: 14px; padding: 1.375rem 1.5rem; }
        @media (max-width: 900px) {
          .footer-perks { grid-template-columns: repeat(2, 1fr); }
          .footer-perk-item { border-right: none !important; border-bottom: 1px solid #e5e7eb; }
          .footer-perk-item:nth-child(odd) { border-right: 1px solid #e5e7eb !important; }
          .footer-perk-item:nth-last-child(-n+2) { border-bottom: none; }
        }
        @media (max-width: 480px) {
          .footer-perks { grid-template-columns: 1fr; }
          .footer-perk-item { border-right: none !important; }
          .footer-perk-item:last-child { border-bottom: none; }
        }

        /* Newsletter */
        .footer-newsletter { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.5rem; }
        @media (max-width: 600px) {
          .footer-newsletter { flex-direction: column; }
          .footer-newsletter > div:last-child { width: 100%; max-width: 100% !important; flex: unset !important; }
        }

        /* Main columns */
        .footer-main { display: grid; grid-template-columns: 1.7fr 1fr 1fr 1fr; gap: 2.5rem; align-items: start; }
        @media (max-width: 1024px) { .footer-main { grid-template-columns: 1fr 1fr 1fr; } .footer-brand { grid-column: span 3; } }
        @media (max-width: 640px) { .footer-main { grid-template-columns: 1fr 1fr; gap: 2rem; } .footer-brand { grid-column: span 2; } }
        @media (max-width: 400px) { .footer-main { grid-template-columns: 1fr; } .footer-brand { grid-column: span 1; } }

        /* Bottom bar */
        .footer-bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
        .footer-bottom-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
        @media (max-width: 480px) { .footer-bottom { justify-content: center; text-align: center; } .footer-bottom-links { justify-content: center; gap: 1rem; } }
      `}</style>
    </footer>
  );
}
