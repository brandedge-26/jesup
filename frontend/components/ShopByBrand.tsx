"use client";
const BRANDS = [
  {
    id: 1, name: "ZIZO",
    tagline: "Built for adventure. Built for your journey.",
    desc: "Rugged cases, wireless chargers, and screen protectors engineered for everyday use.",
    isDark: true, cardBg: "#0d0d0d", accent: "#00c2b0",
    colors: ["#00c2b0", "#c0392b", "#1e3a8a", "#1a1a1a"],
  },
  {
    id: 2, name: "Nimbuzz",
    tagline: "Refined protection. Designed to impress.",
    desc: "Sleek, slim-profile cases and accessories designed for the style-conscious user.",
    isDark: false, cardBg: "#ffffff", accent: "#111111",
    colors: ["#1a1a1a", "#d1d5db", "#6b7280", "#e5e7eb"],
  },
  {
    id: 3, name: "CLICK",
    tagline: "Trend-forward. Wallet-friendly.",
    desc: "On-trend designs and everyday accessories at prices everyone can enjoy.",
    isDark: false, cardBg: "#f0faf9", accent: "#00a899",
    colors: ["#00c2b0", "#e0f7f5", "#00a899", "#b2f0ea"],
  },
];

export default function ShopByBrand() {
  return (
    <section id="brands" style={{ backgroundColor: "var(--background)", padding: "5rem 0" }}>
      <div className="container-xl">

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>Featured Brands</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--foreground)", lineHeight: 1.1, marginBottom: "0.5rem" }}>
              Shop by Brand
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.9375rem", letterSpacing: "-0.01em" }}>
              Industry-leading names, trusted by thousands of retailers.
            </p>
          </div>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.875rem", fontWeight: 600, color: "var(--accent)", letterSpacing: "-0.01em", textDecoration: "none", flexShrink: 0 }}>
            All Brands
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRANDS.map(brand => (
            <div
              key={brand.id}
              style={{
                borderRadius: 20,
                overflow: "hidden",
                backgroundColor: brand.cardBg,
                border: brand.isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid var(--border)",
                boxShadow: "var(--shadow)",
                display: "flex", flexDirection: "column",
                cursor: "pointer",
                transition: "transform 0.22s ease, box-shadow 0.22s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)";
              }}
            >
              {/* Visual area */}
              <div style={{ position: "relative", height: 220, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 100%, ${brand.accent}20 0%, transparent 60%)` }} />
                {/* Watermark */}
                <span style={{
                  position: "absolute", fontSize: "5rem", fontWeight: 900, letterSpacing: "-0.06em", whiteSpace: "nowrap", lineHeight: 1, userSelect: "none",
                  color: brand.isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)",
                }}>
                  {brand.name}
                </span>
                {/* Phone trio */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 160 }}>
                  {[
                    { w: 50, h: 96,  rotate: -8, opacity: brand.isDark ? 0.08 : 0.06 },
                    { w: 62, h: 122, rotate: 0,  opacity: brand.isDark ? 0.0 : 0.0, isFocus: true },
                    { w: 50, h: 96,  rotate: 8,  opacity: brand.isDark ? 0.06 : 0.05 },
                  ].map((c, i) => (
                    <div
                      key={i}
                      style={{
                        width: c.w, height: c.h,
                        borderRadius: 17, flexShrink: 0,
                        background: c.isFocus
                          ? `linear-gradient(160deg, ${brand.accent}22 0%, ${brand.accent}40 100%)`
                          : brand.isDark ? `rgba(255,255,255,${c.opacity})` : `rgba(0,0,0,${c.opacity})`,
                        border: c.isFocus
                          ? `1.5px solid ${brand.accent}45`
                          : brand.isDark ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(0,0,0,0.08)",
                        transform: `rotate(${c.rotate}deg)`,
                        boxShadow: c.isFocus ? `0 12px 32px ${brand.accent}18` : "0 4px 14px rgba(0,0,0,0.12)",
                        alignSelf: "flex-end",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Info */}
              <div style={{
                flex: 1, display: "flex", flexDirection: "column",
                padding: "20px 22px 22px",
                backgroundColor: brand.isDark ? "#111" : "#fff",
                borderTop: brand.isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid var(--border)",
              }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: brand.isDark ? "rgba(255,255,255,0.28)" : "var(--muted)", marginBottom: 6 }}>Brand</p>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.04em", color: brand.isDark ? "#fff" : "var(--foreground)", lineHeight: 1.1, marginBottom: 4 }}>{brand.name}</h3>
                <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: brand.accent, letterSpacing: "-0.01em", marginBottom: 8 }}>{brand.tagline}</p>
                <p style={{ fontSize: "0.8125rem", color: brand.isDark ? "rgba(255,255,255,0.38)" : "var(--muted)", letterSpacing: "-0.005em", lineHeight: 1.6, flex: 1, marginBottom: 16 }}>{brand.desc}</p>

                {/* Swatches */}
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 16 }}>
                  {brand.colors.map(c => (
                    <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: c, border: brand.isDark ? "1.5px solid rgba(255,255,255,0.12)" : "1.5px solid rgba(0,0,0,0.08)", flexShrink: 0 }} />
                  ))}
                  <span style={{ marginLeft: 4, fontSize: "0.65rem", color: brand.isDark ? "rgba(255,255,255,0.28)" : "var(--muted)", fontWeight: 500 }}>+12 colors</span>
                </div>

                <a
                  href="#"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "12px 20px", borderRadius: 12,
                    backgroundColor: brand.accent, color: "#fff",
                    fontSize: "0.875rem", fontWeight: 600, letterSpacing: "-0.01em",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                >
                  Shop {brand.name}
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}