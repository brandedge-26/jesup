"use client";
import Image from "next/image";
import { useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    category: "Smartphone",
    name: "iPhone 15 Pro",
    desc: "Titanium design with A17 Pro chip and Action Button for ultimate control.",
    price: "$29.99",
    originalPrice: "$39.99",
    tag: "Best Seller",
    tagColor: "#6C63FF",
    tagBg: "#f0eeff",
    rating: 4.9,
    reviews: "2.4k",
    accent: "#6C63FF",
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop&q=85",
  },
  {
    id: 2,
    category: "Smartphone",
    name: "Pixel 9 Pro",
    desc: "Google AI camera system, pure Android experience and Tensor G4 chip.",
    price: "$24.99",
    originalPrice: "$34.99",
    tag: "New",
    tagColor: "#0284c7",
    tagBg: "#e0f2fe",
    rating: 4.7,
    reviews: "1.1k",
    accent: "#0284c7",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop&q=85",
  },
  {
    id: 3,
    category: "Smartphone",
    name: "Galaxy S25 Ultra",
    desc: "Built-in S Pen, 200MP camera system, and titanium frame design.",
    price: "$19.99",
    originalPrice: "$29.99",
    tag: "Trending",
    tagColor: "#d97706",
    tagBg: "#fef3c7",
    rating: 4.8,
    reviews: "3.2k",
    accent: "#d97706",
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&q=85",
  },
  {
    id: 4,
    category: "Smartphone",
    name: "iPhone 14 Pro",
    desc: "Dynamic Island, Always-On display and a 48MP main camera system.",
    price: "$34.99",
    originalPrice: "$49.99",
    tag: "Hot Deal",
    tagColor: "#dc2626",
    tagBg: "#fee2e2",
    rating: 4.8,
    reviews: "5.6k",
    accent: "#dc2626",
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop&q=85",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {[1, 2, 3, 4, 5].map(s => (
        <svg key={s} width="11" height="11" viewBox="0 0 24 24"
          fill={s <= Math.round(rating) ? "#f59e0b" : "none"}
          stroke="#f59e0b" strokeWidth={2}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ p }: { p: typeof PRODUCTS[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        width: 272,
        borderRadius: 20,
        backgroundColor: "#fff",
        border: "1px solid #e5e7eb",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.28s cubic-bezier(0.22,1,0.36,1)",
        overflow: "hidden",
      }}
    >
      {/* Image area */}
      <div style={{
        position: "relative",
        margin: "12px 12px 0",
        height: 200,
        borderRadius: 14,
        backgroundColor: "#f8f8fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Subtle radial glow */}
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at 50% 60%, ${p.accent}18 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        {/* Tag badge */}
        <span style={{
          position: "absolute", top: 12, left: 12, zIndex: 2,
          fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.08em",
          textTransform: "uppercase", color: p.tagColor,
          backgroundColor: p.tagBg,
          padding: "4px 10px", borderRadius: 999,
        }}>
          {p.tag}
        </span>

        <Image
          src={p.img}
          alt={p.name}
          fill
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.9 }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "16px 18px 0", flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Category + rating row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{
            fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", color: p.accent,
          }}>
            {p.category}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <StarRating rating={p.rating} />
            <span style={{ fontSize: "0.6875rem", color: "#9ca3af", fontWeight: 500 }}>({p.reviews})</span>
          </div>
        </div>

        {/* Product name */}
        <h3 style={{
          fontSize: "1.1rem", fontWeight: 800,
          color: "#111", letterSpacing: "-0.03em",
          lineHeight: 1.2, marginBottom: 8,
        }}>
          {p.name}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: "0.78rem", color: "#9ca3af",
          lineHeight: 1.6, marginBottom: 16, flex: 1,
        }}>
          {p.desc}
        </p>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 18px 16px",
        borderTop: "1px solid #f4f4f7",
      }}>
        {/* Price */}
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontSize: "1.125rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>
              {p.price}
            </span>
            <span style={{ fontSize: "0.75rem", color: "#c4c4cc", textDecoration: "line-through", fontWeight: 500 }}>
              {p.originalPrice}
            </span>
          </div>
          <span style={{ fontSize: "0.6875rem", color: "#16a34a", fontWeight: 600 }}>
            Starting price
          </span>
        </div>

        {/* Shop now btn */}
        <button
          style={{
            display: "flex", alignItems: "center", gap: 7,
            padding: "7px 6px 7px 6px", borderRadius: 999,
            backgroundColor: "#f0f2f8",
            color: "#111", border: "1px solid #e2e5f0", cursor: "pointer",
            fontSize: "0.8rem", fontWeight: 700, fontFamily: "inherit",
            whiteSpace: "nowrap",
          }}
        >
          <div style={{ width: 26, height: 26, borderRadius: "50%", backgroundColor: "#6C63FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <span style={{ paddingRight: 8 }}>Shop Now</span>
        </button>
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
          marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.75rem" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#6C63FF" }} />
              <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6C63FF" }}>
                Fresh Drops
              </p>
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--foreground)", lineHeight: 1.1, marginBottom: "0.5rem" }}>
              See What&apos;s New
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.9375rem" }}>
              Latest arrivals from our top brands
            </p>
          </div>
          <a
            href="#"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: "0.875rem", fontWeight: 700, color: "#111",
              textDecoration: "none", flexShrink: 0,
              padding: "10px 20px", borderRadius: 999,
              border: "1.5px solid #e0e0e8",
              backgroundColor: "#fff",
              transition: "border-color 0.15s, color 0.15s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#6C63FF"; (e.currentTarget as HTMLElement).style.color = "#6C63FF"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e0e0e8"; (e.currentTarget as HTMLElement).style.color = "#111"; }}
          >
            View All
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div
          className="scrollbar-hide"
          style={{ display: "flex", gap: "1.125rem", overflowX: "auto", paddingBottom: 12, paddingTop: 6 }}
        >
          {PRODUCTS.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
