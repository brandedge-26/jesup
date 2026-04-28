"use client";
const FOOTER_LINKS: Record<string, string[]> = {
  Information:  ["About Us", "Contact Us", "FAQs", "Terms & Conditions"],
  "My Account": ["Sign In", "Register", "View Cart", "My Account"],
};

const SOCIAL = [
  {
    label: "Facebook", href: "#", fill: true,
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "X / Twitter", href: "#", fill: true,
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram", href: "#", fill: false, isInstagram: true, path: null,
  },
  {
    label: "YouTube", href: "#", fill: true,
    path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
  },
];

const BADGES = [
  {
    icon: (
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    text: "Fast Shipping",
  },
  {
    icon: (
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    text: "Trusted Support",
  },
  {
    icon: (
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    text: "Secure Checkout",
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#060606" }}>

      {/* ── Newsletter Banner ── */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "3rem 0" }}>
        <div className="container-xl">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
              padding: "2.5rem 2.5rem",
              borderRadius: 20,
              background: "linear-gradient(130deg, rgba(0,194,176,0.10) 0%, rgba(0,194,176,0.03) 100%)",
              border: "1px solid rgba(0,194,176,0.18)",
            }}
          >
            {/* Left */}
            <div style={{ flex: "1 1 280px" }}>
              <p style={{
                fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "var(--accent)", marginBottom: 8,
              }}>
                Newsletter
              </p>
              <p style={{
                fontSize: "1.25rem", fontWeight: 700, color: "#fff",
                letterSpacing: "-0.03em", lineHeight: 1.25, marginBottom: 6,
              }}>
                Stay updated with latest arrivals
              </p>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", letterSpacing: "-0.01em" }}>
                Exclusive offers, launches &amp; wholesale updates.
              </p>
            </div>

            {/* Input */}
            <div style={{ display: "flex", flex: "1 1 340px", maxWidth: 440 }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex: 1,
                  padding: "13px 18px",
                  fontSize: "0.875rem",
                  fontFamily: "inherit",
                  letterSpacing: "-0.01em",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRight: "none",
                  color: "#fff",
                  borderRadius: "12px 0 0 12px",
                  outline: "none",
                }}
              />
              <button
                style={{
                  padding: "13px 24px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#fff",
                  backgroundColor: "var(--accent)",
                  border: "none",
                  borderRadius: "0 12px 12px 0",
                  cursor: "pointer",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 20px rgba(0,194,176,0.25)",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div style={{ padding: "4rem 0 3rem" }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "3.5rem", alignItems: "start" }}>

            {/* Brand column */}
            <div>
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 32, height: 32, borderRadius: 9,
                  backgroundColor: "var(--accent)", color: "#fff",
                  fontSize: "0.75rem", fontWeight: 900,
                }}>J</span>
                <span style={{ fontSize: "1.25rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.045em" }}>
                  Jesup
                </span>
              </div>

              {/* Address block */}
              <div style={{ marginBottom: "1.25rem" }}>
                <p style={{
                  fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
                  marginBottom: 8,
                }}>
                  Nashville Distribution Center
                </p>
                {[
                  "1301 Cannon, Nashville, TN 37207",
                  "615-462-7199",
                  "info@jesupwireless.com",
                ].map((line) => (
                  <p key={line} style={{
                    fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)",
                    letterSpacing: "-0.005em", lineHeight: 1.8,
                  }}>{line}</p>
                ))}
              </div>

              {/* Description */}
              <p style={{
                fontSize: "0.8125rem", color: "rgba(255,255,255,0.32)",
                letterSpacing: "-0.008em", lineHeight: 1.7,
                marginBottom: "1.5rem", maxWidth: 280,
              }}>
                Your trusted B2B distributor for premium mobile accessories across the United States.
              </p>

              {/* Trust badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {BADGES.map((b) => (
                  <span
                    key={b.text}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      fontSize: "0.6875rem", fontWeight: 500,
                      color: "rgba(255,255,255,0.45)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 40, padding: "5px 12px",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {b.icon}
                    {b.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 style={{
                  fontSize: "0.5625rem", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)", marginBottom: "1.25rem",
                }}>
                  {title}
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        style={{
                          fontSize: "0.875rem", color: "rgba(255,255,255,0.38)",
                          letterSpacing: "-0.01em", textDecoration: "none",
                          transition: "color 0.15s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social + contact column */}
            <div>
              <h4 style={{
                fontSize: "0.5625rem", fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)", marginBottom: "1.25rem",
              }}>
                Follow Us
              </h4>

              {/* Social icons */}
              <div style={{ display: "flex", gap: 8, marginBottom: "1.5rem" }}>
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    style={{
                      width: 36, height: 36, borderRadius: 10,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      backgroundColor: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      transition: "background-color 0.15s, color 0.15s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.14)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    {s.isInstagram ? (
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path d={s.path!} />
                      </svg>
                    )}
                  </a>
                ))}
              </div>

              <p style={{
                fontSize: "0.75rem", color: "rgba(255,255,255,0.28)",
                letterSpacing: "-0.005em", lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}>
                Follow us for product launches, restocks, and industry updates.
              </p>

              {/* Contact pill */}
              <a
                href="tel:6154627199"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 16px", borderRadius: 12,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  textDecoration: "none",
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)")}
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "var(--accent)", flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", letterSpacing: "-0.01em" }}>
                  615-462-7199
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "1.25rem 0" }}>
        <div className="container-xl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.22)", letterSpacing: "-0.005em" }}>
            &copy; {new Date().getFullYear()} Jesup Wireless Inc. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Shipping & Returns"].map((t) => (
              <a
                key={t}
                href="#"
                style={{
                  fontSize: "0.75rem", color: "rgba(255,255,255,0.22)",
                  letterSpacing: "-0.005em", textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.22)")}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
