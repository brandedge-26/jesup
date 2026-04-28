"use client";
const PHONE_MODELS = [
  { id: 1,  name: "Galaxy S24 FE",      brand: "Samsung",  highlight: false },
  { id: 2,  name: "Boost Summit 5G",    brand: "Boost",    highlight: false },
  { id: 3,  name: "Boost ColorOS 5G",   brand: "Boost",    highlight: false },
  { id: 4,  name: "iPad 10.2",          brand: "Apple",    highlight: false },
  { id: 5,  name: "iPad 42.9",          brand: "Apple",    highlight: false },
  { id: 6,  name: "iPad Pro 11",        brand: "Apple",    highlight: false },
  { id: 7,  name: "iPad Air 11",        brand: "Apple",    highlight: false },
  { id: 8,  name: "Galaxy A16 5G",      brand: "Samsung",  highlight: false },
  { id: 9,  name: "Galaxy S25 Plus",    brand: "Samsung",  highlight: false },
  { id: 10, name: "Galaxy S25 Ultra",   brand: "Samsung",  highlight: false },
  { id: 11, name: "Galaxy S25",         brand: "Samsung",  highlight: false },
  { id: 12, name: "iPhone 16e",         brand: "Apple",    highlight: false },
  { id: 13, name: "moto g power",       brand: "Motorola", highlight: false },
  { id: 14, name: "moto g (2025)",      brand: "Motorola", highlight: false },
  { id: 15, name: "TCL 50 XE 5G",      brand: "TCL",      highlight: false },
  { id: 16, name: "motorola edge 2024", brand: "Motorola", highlight: true  },
  { id: 17, name: "Galaxy A36 5G",      brand: "Samsung",  highlight: false },
  { id: 18, name: "iPhone 16",          brand: "Apple",    highlight: false },
  { id: 19, name: "iPhone 16 Pro",      brand: "Apple",    highlight: false },
  { id: 20, name: "iPhone 16 Pro Max",  brand: "Apple",    highlight: false },
  { id: 21, name: "iPhone 16 Plus",     brand: "Apple",    highlight: false },
];

const PAL: Record<string, { bg: string; border: string; dot: string }> = {
  Apple:    { bg: "#f5f5f7", border: "#d0d0d5", dot: "#555" },
  Samsung:  { bg: "#eef2fc", border: "#c0cef5", dot: "#1428a0" },
  Motorola: { bg: "#fff0ee", border: "#f0c8c0", dot: "#9e0000" },
  TCL:      { bg: "#fff9ec", border: "#f0dfa0", dot: "#b85c00" },
  Boost:    { bg: "#f0fff6", border: "#a8e6c0", dot: "#15803d" },
};

function PhoneCard({ m }: { m: typeof PHONE_MODELS[0] }) {
  const p = PAL[m.brand] ?? { bg: "#f4f4f4", border: "#ddd", dot: "#555" };
  return (
    <a
      href="#"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textDecoration: "none", cursor: "pointer" }}
    >
      <div
        style={{
          width: 58, height: 108,
          borderRadius: 15,
          backgroundColor: m.highlight ? "#fff5f5" : p.bg,
          border: m.highlight ? "2px solid #ef4444" : `1.5px solid ${p.border}`,
          boxShadow: m.highlight ? "0 2px 14px rgba(239,68,68,0.14)" : "0 2px 10px rgba(0,0,0,0.06)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "space-between",
          padding: "9px 0 9px",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLElement).style.boxShadow = m.highlight ? "0 8px 20px rgba(239,68,68,0.2)" : "0 8px 20px rgba(0,0,0,0.10)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "";
          (e.currentTarget as HTMLElement).style.boxShadow = m.highlight ? "0 2px 14px rgba(239,68,68,0.14)" : "0 2px 10px rgba(0,0,0,0.06)";
        }}
      >
        <div style={{ width: 20, height: 4, borderRadius: 2, backgroundColor: m.highlight ? "#ef444430" : `${p.dot}20` }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: m.highlight ? "#ef4444" : p.dot, opacity: 0.2 }} />
        <div style={{ width: 26, height: 3, borderRadius: 2, backgroundColor: m.highlight ? "#ef4444" : p.dot, opacity: m.highlight ? 0.45 : 0.18 }} />
      </div>
      <p style={{
        color: m.highlight ? "#ef4444" : "var(--foreground)",
        fontSize: "0.6875rem", fontWeight: 600,
        letterSpacing: "-0.015em", textAlign: "center",
        lineHeight: 1.35, maxWidth: 76,
      }}>
        {m.name}
      </p>
    </a>
  );
}

export default function ShopByPhoneModel() {
  return (
    <section id="phone-model" style={{ backgroundColor: "var(--secondary)", padding: "5rem 0" }}>
      <div className="container-xl">

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>Find Your Fit</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--foreground)", lineHeight: 1.1, marginBottom: "0.5rem" }}>
              Shop by Phone Model
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.9375rem", letterSpacing: "-0.01em" }}>
              Find the perfect case for your exact device.
            </p>
          </div>
          <button style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "10px 18px", borderRadius: 12,
            border: "1.5px solid var(--border)", backgroundColor: "#fff",
            fontSize: "0.875rem", fontWeight: 600, letterSpacing: "-0.01em",
            color: "var(--foreground)", cursor: "pointer",
            boxShadow: "var(--shadow-xs)",
          }}>
            All Phones
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" style={{ color: "#9ca3af" }}>
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7" style={{ gap: "1rem 1.25rem", rowGap: "2.5rem" }}>
          {PHONE_MODELS.map(m => <PhoneCard key={m.id} m={m} />)}
        </div>
      </div>
    </section>
  );
}