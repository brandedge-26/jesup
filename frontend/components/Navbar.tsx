"use client";
import { useState, useRef } from "react";
import CartSidebar from "./CartSidebar";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Store", href: "#" },
  { label: "Support Centre", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Repair Services", href: "#" },
];

const SEARCH_CATEGORIES = [
  "All",
  "Mobile Parts",
  "LCD Panels",
  "Touch Glass",
  "Tablet Parts",
  "Used Phones",
  "Laptops",
];

const MOBILE_NAV = [
  { label: "Home", href: "/", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg> },
  { label: "Shop", href: "#", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> },
  { label: "Support", href: "#", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 8v4M12 16h.01" /></svg> },
  { label: "Contact", href: "#", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
  { label: "Menu", href: "#", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" /></svg> },
];

interface Props {
  onCategoryToggle?: () => void;
}

export default function Navbar({ onCategoryToggle }: Props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchCat, setSearchCat] = useState("All");
  const [catDropOpen, setCatDropOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const catDropRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* ─── Top Header ─── */}
      <header
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #e8edf3",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div
          className="container-xl"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            height: 70,
          }}
        >
          {/* Mobile hamburger */}
          <button
            className="flex lg:hidden"
            onClick={onCategoryToggle}
            style={{
              width: 38,
              height: 38,
              borderRadius: 8,
              border: "1px solid #e0e0e0",
              backgroundColor: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#444" strokeWidth={2.2}>
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 14px rgba(249,115,22,0.35)",
                flexShrink: 0,
              }}
            >
              <svg width="19" height="19" viewBox="0 0 20 22" fill="none">
                <path
                  d="M14 2H16V14C16 18 13 20 9 20C5 20 2 18 2 14"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div style={{ lineHeight: 1 }}>
              <span
                style={{
                  display: "block",
                  fontSize: "1.25rem",
                  fontWeight: 900,
                  color: "#0a0a0a",
                  letterSpacing: "-0.04em",
                }}
              >
                Jesup
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "0.5625rem",
                  color: "#aaa",
                  letterSpacing: "0.03em",
                  marginTop: 2,
                  fontStyle: "italic",
                }}
              >
                We Deliver, What We Commit!
              </span>
            </div>
          </a>

          {/* ── Search Bar ── */}
          <div
            style={{
              flex: 1,
              maxWidth: 600,
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: `1.5px solid ${searchFocused ? "#f97316" : "#d8d8d8"}`,
                borderRadius: 10,
                overflow: "visible",
                height: 44,
                backgroundColor: "#fff",
                boxShadow: searchFocused
                  ? "0 0 0 3px rgba(249,115,22,0.12)"
                  : "0 1px 4px rgba(0,0,0,0.06)",
                transition: "border-color 0.2s, box-shadow 0.2s",
                position: "relative",
              }}
            >
              {/* Category dropdown trigger */}
              <div
                ref={catDropRef}
                style={{ position: "relative", flexShrink: 0 }}
              >
                <button
                  onClick={() => setCatDropOpen((v) => !v)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "0 12px 0 14px",
                    height: 44,
                    border: "none",
                    borderRight: "1.5px solid #eee",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#444",
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {searchCat}
                  <svg
                    width="11"
                    height="11"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    style={{
                      transition: "transform 0.18s",
                      transform: catDropOpen ? "rotate(180deg)" : "rotate(0deg)",
                      opacity: 0.5,
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Category dropdown */}
                {catDropOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: 0,
                      backgroundColor: "#fff",
                      border: "1px solid #e8e8e8",
                      borderRadius: 10,
                      padding: "6px",
                      boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                      zIndex: 100,
                      minWidth: 160,
                      animation: "flyoutIn 0.15s ease",
                    }}
                  >
                    {SEARCH_CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSearchCat(cat);
                          setCatDropOpen(false);
                        }}
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "left",
                          padding: "8px 12px",
                          border: "none",
                          backgroundColor:
                            searchCat === cat ? "#fff7ed" : "transparent",
                          color: searchCat === cat ? "#f97316" : "#444",
                          fontWeight: searchCat === cat ? 600 : 400,
                          fontSize: "0.8125rem",
                          borderRadius: 7,
                          cursor: "pointer",
                          transition: "background-color 0.12s",
                        }}
                        onMouseEnter={(e) => {
                          if (searchCat !== cat)
                            (e.currentTarget as HTMLElement).style.backgroundColor = "#f5f5f5";
                        }}
                        onMouseLeave={(e) => {
                          if (searchCat !== cat)
                            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                        }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Input */}
              <input
                type="text"
                placeholder={`Search in ${searchCat === "All" ? "all products" : searchCat}…`}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => { setSearchFocused(false); setCatDropOpen(false); }}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "0 14px",
                  fontSize: "0.875rem",
                  color: "#222",
                  backgroundColor: "transparent",
                  fontFamily: "inherit",
                }}
              />

              {/* Search button */}
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 46,
                  height: "100%",
                  backgroundColor: "#f97316",
                  border: "none",
                  borderRadius: "0 8px 8px 0",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "#ea6c0a")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "#f97316")
                }
              >
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.4}>
                  <circle cx="11" cy="11" r="8" />
                  <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                </svg>
              </button>
            </div>
          </div>

          {/* Contact info — desktop only */}
          <div
            className="hidden xl:flex"
            style={{ alignItems: "center", gap: 12, flexShrink: 0 }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 8,
                border: "1.5px solid #ffe4cc",
                backgroundColor: "#fff7ed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke="#f97316" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5zm16 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: "0.72rem", color: "#666", fontWeight: 500, lineHeight: 1.35 }}>
                Mon – Sat: 12:00 PM – 08:00 PM
              </p>
              <p style={{ fontSize: "0.8125rem", color: "#f97316", fontWeight: 700, lineHeight: 1.35 }}>
                Call Now: (021) 32239001
              </p>
            </div>
          </div>

          {/* ── Cart button ── */}
          <button
            onClick={() => setCartOpen(true)}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "0 16px",
              height: 40,
              borderRadius: 10,
              backgroundColor: "#f97316",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: 700,
              flexShrink: 0,
              transition: "background-color 0.15s, transform 0.15s",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#ea6c0a";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#f97316";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
            {/* Badge */}
            <span
              style={{
                position: "absolute",
                top: -5,
                right: -5,
                width: 18,
                height: 18,
                borderRadius: "50%",
                backgroundColor: "#fff",
                color: "#f97316",
                fontSize: "0.5rem",
                fontWeight: 900,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #f97316",
              }}
            >
              0
            </span>
          </button>
        </div>
      </header>

      {/* ─── Bottom Nav — Desktop ─── */}
      <div
        className="hidden lg:block"
        style={{
          backgroundColor: "#fafafa",
          borderBottom: "1px solid #eeeeee",
        }}
      >
        <div
          className="container-xl"
          style={{
            display: "flex",
            alignItems: "center",
            height: 44,
            gap: 4,
          }}
        >
          {/* All Categories trigger */}
          <button
            onClick={onCategoryToggle}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "0 16px",
              height: 32,
              borderRadius: 20,
              backgroundColor: "#f97316",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "0.8125rem",
              fontWeight: 600,
              flexShrink: 0,
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#ea6c0a")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#f97316")
            }
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            All Categories
          </button>

          {/* Nav links */}
          <ul
            style={{ display: "flex", alignItems: "center", listStyle: "none", gap: 2, flex: 1, marginLeft: 6 }}
          >
            {NAV_LINKS.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "5px 12px",
                    borderRadius: 18,
                    fontSize: "0.8125rem",
                    fontWeight: i === 0 ? 700 : 500,
                    color: i === 0 ? "#f97316" : "#444",
                    backgroundColor: i === 0 ? "rgba(249,115,22,0.08)" : "transparent",
                    textDecoration: "none",
                    transition: "background-color 0.15s, color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (i !== 0) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(249,115,22,0.07)";
                      (e.currentTarget as HTMLElement).style.color = "#f97316";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (i !== 0) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#444";
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ─── Cart Drawer ─── */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* ─── Mobile Bottom Nav ─── */}
      <nav
        className="flex lg:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "#fff",
          borderTop: "1px solid #e8e8e8",
          height: 58,
          display: "flex",
          alignItems: "center",
        }}
      >
        {MOBILE_NAV.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              textDecoration: "none",
              color: i === 0 ? "#f97316" : "#888",
              fontSize: "0.5625rem",
              fontWeight: i === 0 ? 700 : 500,
              letterSpacing: "0.03em",
              padding: "6px 0",
            }}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
