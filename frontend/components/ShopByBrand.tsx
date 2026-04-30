"use client";
import Image from "next/image";

const BRANDS = [
  {
    id: 1, name: "ZIZO",
    tagline: "Built for adventure. Built for your journey.",
    desc: "Rugged cases, wireless chargers, and screen protectors engineered for everyday use.",
    isDark: true, cardBg: "#0d0d0d", accent: "#6C63FF",
    colors: ["#6C63FF", "#c0392b", "#1e3a8a", "#1a1a1a"],
    img: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=440&fit=crop&q=85",
  },
  {
    id: 2, name: "Nimbuzz",
    tagline: "Refined protection. Designed to impress.",
    desc: "Sleek, slim-profile cases and accessories designed for the style-conscious user.",
    isDark: false, cardBg: "#ffffff", accent: "#111111",
    colors: ["#1a1a1a", "#d1d5db", "#6b7280", "#e5e7eb"],
    img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&h=440&fit=crop&q=85",
  },
  {
    id: 3, name: "CLICK",
    tagline: "Trend-forward. Wallet-friendly.",
    desc: "On-trend designs and everyday accessories at prices everyone can enjoy.",
    isDark: false, cardBg: "#f0faf9", accent: "#5a52d5",
    colors: ["#6C63FF", "#e0f7f5", "#5a52d5", "#b2f0ea"],
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=440&fit=crop&q=85",
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
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                boxShadow: "var(--shadow-xs)",
                display: "flex", flexDirection: "column",
                cursor: "pointer",
              }}
            >
              {/* Visual area */}
              <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                <Image
                  src={brand.img}
                  alt={brand.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center", mixBlendMode: brand.isDark ? "luminosity" : "multiply", opacity: brand.isDark ? 0.55 : 0.75 }}
                />
                {/* Gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: brand.isDark ? "linear-gradient(to bottom, transparent 30%, #0d0d0d 100%)" : `linear-gradient(to bottom, transparent 40%, ${brand.cardBg} 100%)` }} />
                {/* Watermark */}
                <span style={{
                  position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
                  fontSize: "3.5rem", fontWeight: 900, letterSpacing: "-0.06em",
                  whiteSpace: "nowrap", lineHeight: 1, userSelect: "none", zIndex: 1,
                  color: brand.isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                }}>
                  {brand.name}
                </span>
              </div>

              {/* Info */}
              <div style={{
                flex: 1, display: "flex", flexDirection: "column",
                padding: "20px 22px 22px",
                backgroundColor: "#fff",
                borderTop: "1px solid #e5e7eb",
              }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}>Brand</p>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.04em", color: "var(--foreground)", lineHeight: 1.1, marginBottom: 4 }}>{brand.name}</h3>
                <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: brand.accent, letterSpacing: "-0.01em", marginBottom: 8 }}>{brand.tagline}</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--muted)", letterSpacing: "-0.005em", lineHeight: 1.6, flex: 1, marginBottom: 16 }}>{brand.desc}</p>

                {/* Swatches */}
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 16 }}>
                  {brand.colors.map(c => (
                    <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: c, border: "1.5px solid rgba(0,0,0,0.08)", flexShrink: 0 }} />
                  ))}
                  <span style={{ marginLeft: 4, fontSize: "0.65rem", color: "var(--muted)", fontWeight: 500 }}>+12 colors</span>
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