"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySidebar from "@/components/CategorySidebar";

const PRIMARY = "#6C63FF";
const PRIMARY_LIGHT = "#f0eeff";


const CATEGORIES = [
  {
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    title: "Orders & Shipping",
    desc: "Track orders, shipping times, delivery issues",
    count: 12,
    color: "#6C63FF",
    bg: "#f0eeff",
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=200&fit=crop&q=80",
    rotate: "rotate(8deg)",
  },
  {
    icon: "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6",
    title: "Returns & Refunds",
    desc: "Return policy, refund status, exchanges",
    count: 8,
    color: "#0284c7",
    bg: "#e0f2fe",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=300&h=200&fit=crop&q=80",
    rotate: "rotate(-6deg)",
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title: "Warranty & Repairs",
    desc: "Product warranty, repair services, replacements",
    count: 6,
    color: "#16a34a",
    bg: "#f0fdf4",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop&q=80",
    rotate: "rotate(10deg)",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Wholesale Accounts",
    desc: "Bulk pricing, account setup, invoices",
    count: 5,
    color: "#d97706",
    bg: "#fef3c7",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop&q=80",
    rotate: "rotate(-8deg)",
  },
  {
    icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    title: "Product Information",
    desc: "Compatibility, specs, product guides",
    count: 15,
    color: "#7c3aed",
    bg: "#f5f3ff",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop&q=80",
    rotate: "rotate(7deg)",
  },
  {
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    title: "Payments & Billing",
    desc: "Payment methods, invoices, billing issues",
    count: 7,
    color: "#dc2626",
    bg: "#fff1f2",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop&q=80",
    rotate: "rotate(-9deg)",
  },
];

const CONTACT_OPTIONS = [
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    label: "Call Us",
    value: "+1 (912) 427-0000",
    sub: "Mon–Fri 9 AM–6 PM",
    href: "tel:9124270000",
    color: PRIMARY,
    bg: PRIMARY_LIGHT,
  },
  {
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
    label: "WhatsApp",
    value: "Chat instantly",
    sub: "Quick responses",
    href: "https://wa.me/19124270000",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "Email",
    value: "support@jesupwireless.com",
    sub: "Reply within 1 business day",
    href: "mailto:support@jesupwireless.com",
    color: "#0284c7",
    bg: "#e0f2fe",
  },
];


export default function SupportPage() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredCats = CATEGORIES.filter(c =>
    search === "" || c.title.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase())
  );

  const showDropdown = dropdownOpen && searchFocused;

  return (
    <>
      <style>{`
        .sup-cats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        .sup-contact { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .sup-cat-card { position: relative; display: flex; align-items: flex-start; gap: 14px; padding: 18px; border-radius: 16px; text-decoration: none; cursor: pointer; transition: border-color 0.15s, transform 0.18s; overflow: hidden; min-height: 100px; }
        .sup-cat-card:hover { transform: translateY(-2px); }
        .sup-contact-card { display: flex; align-items: center; gap: 14px; padding: 18px; background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; text-decoration: none; transition: border-color 0.15s; }
        .sup-contact-card:hover { border-color: ${PRIMARY}; }
        @media (max-width: 900px) {
          .sup-layout { grid-template-columns: 1fr; }
          .sup-contact { grid-template-columns: 1fr; }
        }
        @media (max-width: 580px) {
          .sup-cats { grid-template-columns: 1fr; }
        }
      `}</style>

      <CategorySidebar externalOpen={categoryOpen} onRequestClose={() => setCategoryOpen(false)} />

      <div className="sidebar-offset" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "var(--background)" }}>
        <Navbar onCategoryToggle={() => setCategoryOpen(v => !v)} />

        <main className="pb-16 lg:pb-0" style={{ flex: 1 }}>

          {/* ── Hero ── */}
          <div style={{ padding: "1.5rem 1.5rem 0" }}>
            <section style={{
              position: "relative", overflow: "visible",
              backgroundColor: "#0a0a0f",
              borderRadius: 24,
              padding: "4.5rem 1.5rem 3.5rem",
            }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: 24, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px", overflow: "hidden" }} />
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 260, pointerEvents: "none", background: "radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.28) 0%, transparent 70%)" }} />

              <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center", position: "relative" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PRIMARY, backgroundColor: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)", padding: "5px 14px", borderRadius: 20, marginBottom: "1.25rem" }}>
                  Support Centre
                </span>
                <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.08, marginBottom: "1rem" }}>
                  How can we <span style={{ color: PRIMARY }}>help you?</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                  Search our knowledge base or browse topics below.
                </p>

                {/* Glassmorphism search wrapper */}
                <div style={{ position: "relative", maxWidth: 540, margin: "0 auto" }}>
                  {/* Search bar — always pill shaped */}
                  <div style={{
                    display: "flex", alignItems: "center",
                    background: "rgba(255,255,255,0.10)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: `1px solid ${searchFocused ? "rgba(108,99,255,0.6)" : "rgba(255,255,255,0.18)"}`,
                    borderRadius: 999,
                    padding: "7px 7px 7px 20px",
                    boxShadow: searchFocused ? "0 0 0 3px rgba(108,99,255,0.18), 0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.3)",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}>
                    <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.5)" strokeWidth={2.2} style={{ flexShrink: 0, marginRight: 10 }}>
                      <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search for answers…"
                      value={search}
                      onChange={e => { setSearch(e.target.value); setDropdownOpen(e.target.value.trim().length > 0); }}
                      onFocus={() => { setSearchFocused(true); setDropdownOpen(true); }}
                      onBlur={() => { setSearchFocused(false); setTimeout(() => setDropdownOpen(false), 180); }}
                      style={{ flex: 1, border: "none", outline: "none", fontSize: "0.9375rem", color: "#fff", backgroundColor: "transparent", fontFamily: "inherit" }}
                    />
                    {search && (
                      <button
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => { setSearch(""); setDropdownOpen(false); }}
                        style={{ background: "none", border: "none", cursor: "pointer", padding: "0 8px", color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center" }}
                      >
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    )}
                    <button style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", backgroundColor: PRIMARY, border: "none", cursor: "pointer", flexShrink: 0 }}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Dropdown — 10px gap, 6 category titles only */}
                  {showDropdown && filteredCats.length > 0 && (
                    <div style={{
                      position: "absolute", top: "calc(100% + 10px)", left: 0, right: 0, zIndex: 50,
                      background: "rgba(18,16,32,0.96)",
                      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 14, overflow: "hidden",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                    }}>
                      <div style={{ padding: "6px 8px" }}>
                        {filteredCats.map(c => (
                          <a
                            key={c.title}
                            href="/faq"
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setDropdownOpen(false)}
                            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderRadius: 10, textDecoration: "none", cursor: "pointer", transition: "background 0.12s" }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.55)" strokeWidth={2} style={{ flexShrink: 0 }}>
                                <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                              </svg>
                              <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>{c.title}</span>
                            </div>
                            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.3)" strokeWidth={2} style={{ flexShrink: 0 }}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* No match hint */}
                  {showDropdown && search.trim() && filteredCats.length === 0 && (
                    <div style={{
                      position: "absolute", top: "calc(100% + 10px)", left: 0, right: 0, zIndex: 50,
                      background: "rgba(18,16,32,0.96)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "16px 18px",
                      textAlign: "center", boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                    }}>
                      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)" }}>No topics matched &quot;{search}&quot;</p>
                    </div>
                  )}
                </div>

                {/* Quick links */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: "1.75rem" }}>
                  {["Track Order", "Return Request", "Warranty Claim", "Wholesale"].map(tag => (
                    <a key={tag} href="#" style={{
                      padding: "6px 14px", borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.07)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      fontSize: "0.8125rem", fontWeight: 500, color: "rgba(255,255,255,0.65)",
                      textDecoration: "none", transition: "background 0.15s, border-color 0.15s",
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(108,99,255,0.2)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(108,99,255,0.4)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* ── Browse Categories ── */}
          <div style={{ backgroundColor: "#f8fafc", padding: "3rem 0" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
              <div style={{ marginBottom: "1.75rem" }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PRIMARY, marginBottom: "0.5rem" }}>Browse Topics</p>
                <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)", fontWeight: 800, color: "#111", letterSpacing: "-0.04em" }}>What do you need help with?</h2>
              </div>
              <div className="sup-cats">
                {CATEGORIES.map(c => (
                  <a key={c.title} href="#faq" className="sup-cat-card" style={{ backgroundColor: c.bg, border: `1px solid ${c.color}30` }}>
                    {/* Floating image — right side like FeaturedGrid */}
                    <div style={{
                      position: "absolute",
                      top: "50%", right: -8,
                      transform: `translateY(-50%) ${c.rotate}`,
                      width: 110, height: 90,
                      pointerEvents: "none", borderRadius: 12, overflow: "hidden",
                      opacity: 0.85,
                    }}>
                      <Image src={c.img} alt={c.title} fill style={{ objectFit: "cover" }} />
                    </div>
                    {/* Gradient fade so text stays readable — uses card bg color */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `linear-gradient(to right, ${c.bg} 55%, transparent 90%)`,
                      pointerEvents: "none", zIndex: 1,
                    }} />

                    {/* Content */}
                    <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: c.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative", zIndex: 2 }}>
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={c.color} strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                      </svg>
                    </div>
                    <div style={{ flex: 1, position: "relative", zIndex: 2 }}>
                      <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111", marginBottom: 3 }}>{c.title}</p>
                      <p style={{ fontSize: "0.75rem", color: "#9ca3af", lineHeight: 1.5 }}>{c.desc}</p>
                    </div>
                    <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: c.color, backgroundColor: c.bg, padding: "3px 9px", borderRadius: 999, flexShrink: 0, position: "relative", zIndex: 2 }}>
                      {c.count}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── View all FAQs banner ── */}
          <div style={{ backgroundColor: "#f8fafc", padding: "3rem 1.5rem" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: 24,
                backgroundColor: "#fff", border: "1px solid #e5e7eb",
                borderRadius: 20, padding: "2rem 2.5rem",
              }}>
                {/* Left */}
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, backgroundColor: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PRIMARY, marginBottom: 4 }}>Knowledge Base</p>
                    <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em", marginBottom: 4 }}>Have more questions?</h2>
                    <p style={{ fontSize: "0.875rem", color: "#9ca3af" }}>Browse our full FAQ with 40+ answers across 7 categories.</p>
                  </div>
                </div>
                {/* Right */}
                <a
                  href="/faq"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "12px 24px", borderRadius: 999,
                    backgroundColor: PRIMARY, color: "#fff",
                    fontSize: "0.9375rem", fontWeight: 700, textDecoration: "none",
                    flexShrink: 0, transition: "background 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = PRIMARY}
                >
                  View all FAQs
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Contact options ── */}
          <div style={{ padding: "0 1.5rem 3rem" }}>
          <div style={{ backgroundColor: "#0a0a0f", borderRadius: 24, padding: "3rem 2rem 3.5rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", borderRadius: 24, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 400, height: 300, pointerEvents: "none", background: "radial-gradient(ellipse at 100% 100%, rgba(108,99,255,0.18) 0%, transparent 65%)" }} />
            <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative" }}>
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PRIMARY, marginBottom: "0.5rem" }}>Get in Touch</p>
                <h2 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em" }}>Prefer to talk to someone?</h2>
              </div>
              <div className="sup-contact">
                {CONTACT_OPTIONS.map(c => (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, textDecoration: "none", transition: "border-color 0.15s, background 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(108,99,255,0.5)"; (e.currentTarget as HTMLElement).style.background = "rgba(108,99,255,0.1)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: c.bg + "22", border: `1px solid ${c.color}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={c.color} strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 3 }}>{c.label}</p>
                      <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#fff", marginBottom: 2 }}>{c.value}</p>
                      <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{c.sub}</p>
                    </div>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.2)" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
}
