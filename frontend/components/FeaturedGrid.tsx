"use client";
import Image from "next/image";

const ITEMS = [
  {
    id: 1,
    label: "Shop Chargers",
    sub: "Fast charge. Everywhere.",
    bg: "#eef2ff",
    border: "#c7d2fe",
    accentText: "#4f46e5",
    img: "/category-banner/chargers.jpg",
    rotate: "rotate(12deg)",
  },
  {
    id: 2,
    label: "Explore Nimbuzz",
    sub: "Premium cases, refined.",
    bg: "#fff1f2",
    border: "#fecdd3",
    accentText: "#e11d48",
    img: "/category-banner/mobile-case.jpg",
    rotate: "rotate(-10deg)",
  },
  {
    id: 3,
    label: "Wireless Charging",
    sub: "Cut the cord.",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    accentText: "#16a34a",
    img: "/category-banner/wireless_chargers_banner.jpg",
    rotate: "rotate(10deg)",
  },
  {
    id: 4,
    label: "Shop Mounts",
    sub: "Hands-free. Always ready.",
    bg: "#faf5ff",
    border: "#e9d5ff",
    accentText: "#7c3aed",
    img: "/category-banner/mounts_banner.jpg",
    rotate: "rotate(-12deg)",
  },
];

export default function FeaturedGrid() {
  return (
    <section style={{ backgroundColor: "var(--background)", padding: "2rem 0 3rem" }}>
      <div style={{ padding: "0 20px" }}>

        {/* Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem" }}>
            Explore Collections
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--foreground)", lineHeight: 1.1 }}>
            Shop by Collection
          </h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 14,
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
                alignItems: "flex-end",
                minHeight: 220,
                backgroundColor: item.bg,
                border: `1.5px solid ${item.border}`,
                textDecoration: "none",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              {/* Product image — rotated, floating right */}
              <div style={{
                position: "absolute",
                top: "50%", right: -10,
                transform: `translateY(-50%) ${item.rotate}`,
                width: 200, height: 180,
                pointerEvents: "none",
              }}>
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: 16,
                    mixBlendMode: "multiply",
                  }}
                />
              </div>

              {/* Fade gradient so text is always readable */}
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(to right, ${item.bg} 38%, transparent 75%)`,
                pointerEvents: "none",
              }} />

              {/* Text */}
              <div style={{ padding: "24px 28px", position: "relative", zIndex: 2, maxWidth: "56%" }}>
                <p style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: item.accentText,
                  letterSpacing: "0.01em",
                  marginBottom: 8,
                  opacity: 0.85,
                }}>
                  {item.sub}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <h3 style={{
                    color: "#111",
                    fontSize: "1.125rem",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.2,
                  }}>
                    {item.label}
                  </h3>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24"
                    stroke={item.accentText} strokeWidth={2.5} style={{ flexShrink: 0, opacity: 0.7 }}>
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
