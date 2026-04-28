"use client";

const ITEMS = [
  {
    id: 1, label: "Shop Chargers", sub: "Fast charge. Everywhere.",
    bg: "linear-gradient(145deg, #0d1117 0%, #1c2233 100%)", accent: "#00c2b0",
    img: "/category-banner/chargers.jpg",
    rotate: "rotate(12deg)",
  },
  {
    id: 2, label: "Explore Nimbuzz", sub: "Premium cases, refined.",
    bg: "linear-gradient(145deg, #5c0808 0%, #991b1b 100%)", accent: "#fca5a5",
    img: "/category-banner/mobile-case.jpg",
    rotate: "rotate(-10deg)",
  },
  {
    id: 3, label: "Wireless Charging", sub: "Cut the cord.",
    bg: "linear-gradient(145deg, #042010 0%, #15622f 100%)", accent: "#4ade80",
    img: "/category-banner/wireless_chargers_banner.jpg",
    rotate: "rotate(10deg)",
  },
  {
    id: 4, label: "Shop Mounts", sub: "Hands-free. Always ready.",
    bg: "linear-gradient(145deg, #1a1640 0%, #3730a3 100%)", accent: "#a5b4fc",
    img: "/category-banner/mounts_banner.jpg",
    rotate: "rotate(-12deg)",
  },
];

export default function FeaturedGrid() {
  return (
    <section style={{ backgroundColor: "var(--background)", padding: "2rem 0 3rem" }}>
      <div style={{ padding: "0 20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 18,
        }}>
          {ITEMS.map(item => (
            <a
              key={item.id}
              href="#"
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                minHeight: 230,
                background: item.bg,
                boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
                textDecoration: "none",
                cursor: "pointer",
                transition: "transform 0.22s ease, box-shadow 0.22s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.30)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.22)";
              }}
            >
              {/* Dot texture overlay */}
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)",
                backgroundSize: "20px 20px", zIndex: 1,
              }} />

              {/* Ambient glow */}
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 180, height: 180, borderRadius: "50%",
                backgroundColor: item.accent, opacity: 0.15, filter: "blur(55px)",
                pointerEvents: "none", zIndex: 1,
              }} />

              {/* Product image — rotated, floating top-right */}
              <div style={{
                position: "absolute",
                top: 10, right: -14,
                transform: item.rotate,
                width: 170, height: 165,
                zIndex: 2, pointerEvents: "none",
              }}>
                <img
                  src={item.img}
                  alt={item.label}
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    borderRadius: 18,
                    boxShadow: "0 12px 36px rgba(0,0,0,0.35)",
                    opacity: 0.92,
                  }}
                />
              </div>

              {/* Text content */}
              <div style={{ padding: "28px 28px 28px", position: "relative", zIndex: 3 }}>
                <p style={{
                  color: item.accent, fontSize: "0.75rem", fontWeight: 500,
                  letterSpacing: "0.02em", marginBottom: 8, opacity: 0.9,
                }}>
                  {item.sub}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <h3 style={{
                    color: "#fff", fontSize: "1.125rem", fontWeight: 700,
                    letterSpacing: "-0.03em",
                  }}>
                    {item.label}
                  </h3>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
                    stroke="white" strokeWidth={2.5} style={{ opacity: 0.5, flexShrink: 0 }}>
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
