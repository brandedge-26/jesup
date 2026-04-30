"use client";
import Image from "next/image";
import { useState } from "react";

const PRODUCTS = [
  {
    id: 1, brand: "Apple", name: "iPhone 15 Pro",
    desc: "Titanium design, A17 Pro chip",
    price: "$29.99",
    tag: "Best Seller", tagColor: "#fff", tagBg: "#111", tagTextColor: "#fff",
    accent: "#6C63FF",
    cardBg: "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)",
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=500&fit=crop&q=85",
  },
  {
    id: 2, brand: "Google", name: "Pixel 9 Pro",
    desc: "Google AI camera, pure Android",
    price: "$24.99",
    tag: "New", tagColor: "#fff", tagBg: "#6C63FF", tagTextColor: "#fff",
    accent: "#6C63FF",
    cardBg: "linear-gradient(145deg, #0f2027 0%, #203a43 100%)",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=500&fit=crop&q=85",
  },
  {
    id: 3, brand: "Samsung", name: "Galaxy S25 Ultra",
    desc: "S Pen, 200MP camera system",
    price: "$19.99",
    tag: "Best Seller", tagColor: "#fff", tagBg: "#111", tagTextColor: "#fff",
    accent: "#2563eb",
    cardBg: "linear-gradient(145deg, #0a0a1a 0%, #1a1a3e 100%)",
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=500&fit=crop&q=85",
  },
  {
    id: 4, brand: "Apple", name: "iPhone 14 Pro",
    desc: "Dynamic Island, 48MP camera",
    price: "$34.99",
    tag: "Hot Deal", tagColor: "#fff", tagBg: "#ef4444", tagTextColor: "#fff",
    accent: "#6b7280",
    cardBg: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)",
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=500&fit=crop&q=85",
  },
];

function ProductCard({ p }: { p: typeof PRODUCTS[0] }) {
  const [liked, setLiked] = useState(false);

  return (
    <div style={{
      flexShrink: 0,
      width: 260,
      borderRadius: 22,
      overflow: "hidden",
      backgroundColor: "#fff",
      border: "1px solid #ebebeb",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      cursor: "pointer",
      transition: "transform 0.22s ease, box-shadow 0.22s ease",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.14)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)";
      }}
    >

      {/* ── Visual area ── */}
      <div style={{
        position: "relative",
        height: 220,
        background: p.cardBg,
        overflow: "hidden",
      }}>
        {/* Subtle radial glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(ellipse at 60% 50%, ${p.accent}25 0%, transparent 65%)`,
        }} />

        {/* Tag */}
        <span style={{
          position: "absolute", top: 14, left: 14, zIndex: 2,
          backgroundColor: p.tagBg,
          color: p.tagTextColor,
          fontSize: "0.5625rem", fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          padding: "5px 11px", borderRadius: 20,
        }}>
          {p.tag}
        </span>

        {/* Heart */}
        <button
          onClick={e => { e.stopPropagation(); setLiked(v => !v); }}
          style={{
            position: "absolute", top: 12, right: 14, zIndex: 2,
            width: 32, height: 32, borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.18)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24"
            fill={liked ? "#ef4444" : "none"}
            stroke={liked ? "#ef4444" : "rgba(255,255,255,0.7)"}
            strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>

        {/* Phone image */}
        <Image
          src={p.img}
          alt={p.name}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.88,
          }}
        />
      </div>

      {/* ── Info area ── */}
      <div style={{
        padding: "18px 20px 20px",
        borderTop: "1px solid #f0f0f0",
      }}>
        <p style={{
          fontSize: "0.625rem", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: p.accent, marginBottom: 5,
        }}>
          {p.brand}
        </p>
        <h3 style={{
          fontSize: "1rem", fontWeight: 800,
          color: "#111", letterSpacing: "-0.03em",
          lineHeight: 1.25, marginBottom: 4,
        }}>
          {p.name}
        </h3>
        <p style={{
          fontSize: "0.75rem", color: "#9ca3af",
          marginBottom: 14, lineHeight: 1.5,
        }}>
          {p.desc}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: "0.6rem", color: "#bbb", fontWeight: 500, marginBottom: 2 }}>Price</p>
            <p style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>
              {p.price}
            </p>
          </div>
          <button style={{
            padding: "10px 20px",
            borderRadius: 12,
            backgroundColor: "#111",
            border: "none", color: "#fff",
            fontSize: "0.8125rem", fontWeight: 700,
            fontFamily: "inherit", cursor: "pointer",
            transition: "background-color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#333"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#111"}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NewArrivals() {
  return (
    <section id="new-arrivals" style={{ backgroundColor: "var(--secondary)", padding: "5rem 0" }}>
      <div className="container-xl">

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "3rem", flexWrap: "wrap", gap: "1rem",
        }}>
          <div>
            <p style={{
              fontSize: "0.6875rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--accent)", marginBottom: "0.75rem",
            }}>
              Fresh Drops
            </p>
            <h2 style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800,
              letterSpacing: "-0.04em", color: "var(--foreground)",
              lineHeight: 1.1, marginBottom: "0.5rem",
            }}>
              See What&apos;s New
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.9375rem" }}>
              Latest arrivals from our top brands
            </p>
          </div>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: "0.875rem", fontWeight: 600,
            color: "var(--accent)", textDecoration: "none", flexShrink: 0,
          }}>
            View All
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Cards row */}
        <div className="scrollbar-hide" style={{ display: "flex", gap: "1.25rem", overflowX: "auto", paddingBottom: 8 }}>
          {PRODUCTS.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
