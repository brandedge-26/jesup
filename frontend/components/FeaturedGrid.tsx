"use client";
const ITEMS = [
  {
    id: 1, label: "Shop Chargers", sub: "Fast charge. Everywhere.",
    bg: "linear-gradient(145deg, #0d1117 0%, #1c1c2e 100%)", accent: "#00c2b0",
    icon: <svg viewBox="0 0 48 48" fill="none" style={{ width: 36, height: 36 }}>
      <path d="M26 5L11 26h10l-2 17 18-23H26L26 5z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </svg>,
  },
  {
    id: 2, label: "Explore Nimbuzz", sub: "Premium cases, refined.",
    bg: "linear-gradient(145deg, #5c0808 0%, #991b1b 100%)", accent: "#fca5a5",
    icon: <svg viewBox="0 0 48 48" fill="none" style={{ width: 36, height: 36 }}>
      <rect x="13" y="3" width="22" height="42" rx="6" fill="currentColor" opacity=".85" />
      <rect x="19" y="8" width="10" height="3.5" rx="1.75" fill="#fff" opacity=".35" />
      <circle cx="24" cy="40" r="2.5" fill="#fff" opacity=".35" />
    </svg>,
  },
  {
    id: 3, label: "Wireless Charging", sub: "Cut the cord.",
    bg: "linear-gradient(145deg, #042010 0%, #15622f 100%)", accent: "#4ade80",
    icon: <svg viewBox="0 0 48 48" fill="none" style={{ width: 36, height: 36 }}>
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 9V5M24 43v-4M9 24H5M43 24h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>,
  },
  {
    id: 4, label: "Shop Mounts", sub: "Hands-free. Always ready.",
    bg: "linear-gradient(145deg, #1a1640 0%, #3730a3 100%)", accent: "#a5b4fc",
    icon: <svg viewBox="0 0 48 48" fill="none" style={{ width: 36, height: 36 }}>
      <circle cx="24" cy="16" r="11" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="16" r="5" fill="currentColor" opacity=".4" />
      <path d="M24 27v16M14 43h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>,
  },
];

export default function FeaturedGrid() {
  return (
    <section style={{ backgroundColor: "var(--background)", padding: "2rem 0 3rem" }}>
      <div className="container-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ITEMS.map(item => (
            <a
              key={item.id}
              href="#"
              className="group"
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 230,
                background: item.bg,
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                textDecoration: "none",
                cursor: "pointer",
                transition: "transform 0.22s ease",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = ""}
            >
              {/* Dot texture */}
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }} />

              {/* Glow */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: 140, height: 140, borderRadius: "50%",
                backgroundColor: item.accent, opacity: 0.18, filter: "blur(48px)",
                pointerEvents: "none",
              }} />

              {/* Icon */}
              <div style={{ padding: "24px 24px 0", color: item.accent, position: "relative", zIndex: 1 }}>
                {item.icon}
              </div>

              {/* Text */}
              <div style={{ padding: "0 24px 24px", position: "relative", zIndex: 1 }}>
                <p style={{ color: item.accent, fontSize: "0.75rem", fontWeight: 500, letterSpacing: "-0.005em", marginBottom: 6, opacity: 0.85 }}>{item.sub}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <h3 style={{ color: "#fff", fontSize: "1.0625rem", fontWeight: 700, letterSpacing: "-0.03em" }}>{item.label}</h3>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5} style={{ opacity: 0.45 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}