"use client";
const PRODUCTS = [
  {
    id: 1, brand: "ZIZO", name: "PowerVault Fold",
    desc: "Compact fold case with MagSafe support",
    tag: "New", tagBg: "#00c2b0", cardBg: "#0b1a19", accent: "#00c2b0",
    colors: ["#00c2b0", "#1a1a1a", "#f0f0f0"],
  },
  {
    id: 2, brand: "PIXEL", name: "Pixel 10 Case",
    desc: "Slim-fit, drop-tested for Pixel 10 & Pro",
    tag: "New", tagBg: "#ff4d6d", cardBg: "#190b10", accent: "#ff4d6d",
    colors: ["#ff4d6d", "#ff8fa3", "#1a0a0a"],
  },
  {
    id: 3, brand: "SAMSUNG", name: "Galaxy S25 FE",
    desc: "Durable protection for Galaxy S25 FE",
    tag: "New", tagBg: "#4488ff", cardBg: "#0a1220", accent: "#4488ff",
    colors: ["#4488ff", "#1e3a8a", "#adc8ff"],
  },
  {
    id: 4, brand: "RHINOSHIELD", name: "RETRO Collection",
    desc: "Vintage design meets modern protection",
    tag: "New", tagBg: "#f59e0b", cardBg: "#1a1205", accent: "#f59e0b",
    colors: ["#f59e0b", "#d97706", "#fde68a"],
  },
  {
    id: 5, brand: "ZIZO", name: "Bolt Series V2",
    desc: "Rugged case with built-in kickstand",
    tag: "New", tagBg: "#22c55e", cardBg: "#061209", accent: "#22c55e",
    colors: ["#22c55e", "#15803d", "#bbf7d0"],
  },
  {
    id: 6, brand: "CLICK", name: "Slim Pro 5G",
    desc: "Ultra-thin case for everyday carry",
    tag: "Sale", tagBg: "#a855f7", cardBg: "#120a1a", accent: "#a855f7",
    colors: ["#a855f7", "#7c3aed", "#e9d5ff"],
  },
];

function ProductCard({ p }: { p: typeof PRODUCTS[0] }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 216,
        borderRadius: 18,
        overflow: "hidden",
        backgroundColor: p.cardBg,
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        cursor: "pointer",
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
      }}
    >
      {/* Visual */}
      <div style={{ position: "relative", height: 190, padding: "22px 22px 14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 95%, ${p.accent}28 0%, transparent 60%)` }} />

        {/* Tag */}
        <span style={{
          position: "absolute", top: 14, left: 14,
          backgroundColor: p.tagBg, color: "#fff",
          fontSize: "0.5625rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase",
          padding: "4px 10px", borderRadius: 8,
        }}>{p.tag}</span>

        {/* Phone */}
        <div style={{
          width: 82, height: 154,
          borderRadius: 22,
          background: `linear-gradient(170deg, ${p.accent}16 0%, ${p.accent}35 100%)`,
          border: `1.5px solid ${p.accent}30`,
          boxShadow: `0 0 36px ${p.accent}22`,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "space-between",
          padding: "12px 0 13px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ width: 28, height: 4.5, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.18)" }} />
          <span style={{ color: p.accent, opacity: 0.35, fontSize: "0.45rem", fontWeight: 900, letterSpacing: "0.25em", textTransform: "uppercase" }}>{p.brand.slice(0, 4)}</span>
          <div style={{ width: 34, height: 3.5, borderRadius: 2, backgroundColor: p.accent, opacity: 0.35 }} />
        </div>
      </div>

      {/* Info */}
      <div style={{ backgroundColor: "#fff", borderTop: "1px solid var(--border)", padding: "16px 18px 18px" }}>
        <p style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 4 }}>{p.brand}</p>
        <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--foreground)", lineHeight: 1.25, marginBottom: 4 }}>{p.name}</h3>
        <p style={{ fontSize: "0.78125rem", letterSpacing: "-0.005em", color: "var(--muted)", lineHeight: 1.5, marginBottom: 12 }}>{p.desc}</p>

        {/* Swatches */}
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 12 }}>
          {p.colors.map(c => (
            <div key={c} style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: c, border: "1.5px solid rgba(0,0,0,0.08)", flexShrink: 0 }} />
          ))}
        </div>

        <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.78125rem", fontWeight: 600, color: p.accent, letterSpacing: "-0.01em", textDecoration: "none" }}>
          Shop Now
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function NewArrivals() {
  return (
    <section id="new-arrivals" style={{ backgroundColor: "var(--secondary)", padding: "5rem 0" }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>Fresh Drops</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--foreground)", lineHeight: 1.1, marginBottom: "0.5rem" }}>
              See What&apos;s New
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.9375rem", letterSpacing: "-0.01em" }}>Latest arrivals from our top brands</p>
          </div>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.875rem", fontWeight: 600, color: "var(--accent)", letterSpacing: "-0.01em", textDecoration: "none", flexShrink: 0 }}>
            View All
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Scroll row */}
        <div className="scrollbar-hide" style={{ display: "flex", gap: "1.25rem", overflowX: "auto", paddingBottom: 4 }}>
          {PRODUCTS.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}