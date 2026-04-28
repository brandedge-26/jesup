"use client";
import { useState, useRef, useEffect } from "react";
import CartSidebar from "./CartSidebar";

const NAV_LINKS = [
  { label: "Home",            href: "/" },
  { label: "Store",           href: "#" },
  { label: "Support Centre",  href: "#" },
  { label: "Contact Us",      href: "#" },
  { label: "Repair Services", href: "#" },
];

const SEARCH_CATEGORIES = [
  "All", "Mobile Parts", "LCD Panels", "Touch Glass",
  "Tablet Parts", "Used Phones", "Laptops",
];

interface Props {
  onCategoryToggle?: () => void;
}

export default function Navbar({ onCategoryToggle }: Props) {
  const [cartOpen,       setCartOpen]       = useState(false);
  const [searchCat,      setSearchCat]      = useState("All");
  const [catDropOpen,    setCatDropOpen]    = useState(false);
  const [searchFocused,  setSearchFocused]  = useState(false);
  const catDropRef = useRef<HTMLDivElement>(null);
  const [headerState, setHeaderState] = useState<"full" | "compact" | "hidden">("full");
  const lastScrollY    = useRef(0);
  const transitioning  = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      // Ignore scroll events caused by our own layout shifts
      if (transitioning.current) {
        lastScrollY.current = window.scrollY;
        return;
      }
      const y = window.scrollY;
      const goingDown = y > lastScrollY.current;
      lastScrollY.current = y;

      setHeaderState(prev => {
        let next = prev;
        if (y <= 16) {
          next = "full";
        } else if (goingDown) {
          if (y > 80  && prev === "full")    next = "compact";
          if (y > 400 && prev !== "hidden")  next = "hidden";
        } else {
          if (prev === "hidden")             next = "compact";
          else if (y < 70 && prev === "compact") next = "full";
        }
        if (next !== prev) {
          transitioning.current = true;
          setTimeout(() => { transitioning.current = false; }, 380);
        }
        return next;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── shared search bar (used in both mobile row and desktop header) ── */
  const SearchBar = ({ slim, hideCatDrop }: { slim?: boolean; hideCatDrop?: boolean }) => (
    <div style={{ position: "relative", width: "100%" }}>
      <div style={{
        display: "flex", alignItems: "center",
        height: slim ? 40 : 44,
        border: `1.5px solid ${searchFocused ? "#f97316" : "#ddd"}`,
        borderRadius: 9, backgroundColor: "#fff",
        boxShadow: searchFocused ? "0 0 0 3px rgba(249,115,22,0.10)" : "0 1px 3px rgba(0,0,0,0.05)",
        transition: "border-color 0.18s, box-shadow 0.18s",
        overflow: "visible", position: "relative",
      }}>
        {/* Category drop — desktop only */}
        {!hideCatDrop && (
        <div ref={catDropRef} style={{ position: "relative", flexShrink: 0 }}>
          <button
            onClick={() => setCatDropOpen(v => !v)}
            style={{
              display: "flex", alignItems: "center", gap: 4,
              padding: "0 10px 0 12px", height: slim ? 40 : 44,
              border: "none", borderRight: "1.5px solid #eee",
              backgroundColor: "transparent", cursor: "pointer",
              fontSize: "0.8rem", fontWeight: 600, color: "#333",
              whiteSpace: "nowrap", fontFamily: "inherit",
            }}
          >
            {searchCat}
            <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}
              style={{ opacity: 0.45, transition: "transform 0.18s", transform: catDropOpen ? "rotate(180deg)" : "none" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          {catDropOpen && (
            <div style={{
              position: "absolute", top: "calc(100% + 6px)", left: 0,
              backgroundColor: "#fff", border: "1px solid #e8e8e8",
              borderRadius: 10, padding: "5px", minWidth: 155,
              boxShadow: "0 10px 28px rgba(0,0,0,0.11)", zIndex: 200,
              animation: "flyoutIn 0.14s ease",
            }}>
              {SEARCH_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setSearchCat(cat); setCatDropOpen(false); }}
                  style={{
                    display: "block", width: "100%", textAlign: "left",
                    padding: "7px 12px", border: "none",
                    backgroundColor: searchCat === cat ? "#fff7ed" : "transparent",
                    color: searchCat === cat ? "#f97316" : "#444",
                    fontWeight: searchCat === cat ? 600 : 400,
                    fontSize: "0.8125rem", borderRadius: 6, cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={e => { if (searchCat !== cat) (e.currentTarget as HTMLElement).style.backgroundColor = "#f5f5f5"; }}
                  onMouseLeave={e => { if (searchCat !== cat) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
        )}

        {/* Input */}
        <input
          type="text"
          placeholder={`Search in ${searchCat === "All" ? "all products" : searchCat}…`}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => { setSearchFocused(false); setCatDropOpen(false); }}
          style={{
            flex: 1, border: "none", outline: "none",
            padding: "0 12px", fontSize: "0.875rem",
            color: "#222", backgroundColor: "transparent", fontFamily: "inherit",
          }}
        />

        {/* Search btn */}
        <button
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 44, height: "100%", flexShrink: 0,
            backgroundColor: "#f97316", border: "none",
            borderRadius: "0 7px 7px 0", cursor: "pointer",
            transition: "background-color 0.14s",
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#ea6a08"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#f97316"}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.4}>
            <circle cx="11" cy="11" r="8"/>
            <path strokeLinecap="round" d="M21 21l-4.35-4.35"/>
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* ══════════════════════════════════════════
          MOBILE HEADER  (< 1024px)
          Row 1: hamburger | Jesup | Cart
          Row 2: Search bar
      ══════════════════════════════════════════ */}
      <header className="mobile-only" style={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #ebebeb",
        position: "sticky", top: 0, zIndex: 40,
        flexDirection: "column",
      }}>
        {/* Row 1 */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 14px", height: 56, position: "relative",
        }}>
          {/* Hamburger */}
          <button
            onClick={onCategoryToggle}
            style={{
              width: 36, height: 36, borderRadius: 8,
              border: "1px solid #e8e8e8", backgroundColor: "#fff",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="#444" strokeWidth={2.2}>
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          {/* Logo — absolutely centered */}
          <a
            href="/"
            style={{
              position: "absolute", left: "50%", transform: "translateX(-50%)",
              textDecoration: "none", userSelect: "none",
            }}
          >
            <span style={{ fontSize: "1.375rem", fontWeight: 900, letterSpacing: "-0.045em" }}>
              <span style={{ color: "#111" }}>Jes</span>
              <span style={{ color: "#f97316" }}>up</span>
            </span>
          </a>

          {/* Cart */}
          <button
            onClick={() => setCartOpen(true)}
            style={{
              position: "relative", width: 36, height: 36, borderRadius: 10,
              backgroundColor: "#f97316", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <span style={{
              position: "absolute", top: -4, right: -4,
              width: 16, height: 16, borderRadius: "50%",
              backgroundColor: "#fff", color: "#f97316",
              fontSize: "0.5rem", fontWeight: 900,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1.5px solid #f97316",
            }}>0</span>
          </button>
        </div>

        {/* Row 2 — Search */}
        <div style={{ padding: "0 14px 10px" }}>
          <SearchBar slim hideCatDrop />
        </div>
      </header>

      {/* ══════════════════════════════════════════
          DESKTOP HEADER  (≥ 1024px) — FIXED
          Row 1: Logo | Search (flex-1) | Contact
          Row 2: All Categories | Nav links | Cart
      ══════════════════════════════════════════ */}
      <header className="desktop-only" style={{
        position: "fixed", top: 0, left: 52, right: 0, zIndex: 40,
        flexDirection: "column",
        backgroundColor: "#fff",
        borderBottom: "1px solid #ebebeb",
        transform: headerState === "hidden" ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1)",
      }}>
        {/* Row 1 — collapses on scroll */}
        <div style={{
          overflow: "hidden",
          maxHeight: headerState === "full" ? "80px" : "0px",
          transition: "max-height 0.32s cubic-bezier(0.4,0,0.2,1)",
        }}>
        <div className="container-xl" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          gap: 16, height: 68,
        }}>
          {/* Logo — text only */}
          <a href="/" style={{ textDecoration: "none", flexShrink: 0, userSelect: "none" }}>
            <span style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.045em" }}>
              <span style={{ color: "#111" }}>Jes</span>
              <span style={{ color: "#f97316" }}>up</span>
            </span>
          </a>

          {/* Search — grows to fill space */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <SearchBar />
          </div>

          {/* Contact info */}
          <div style={{ display: "flex", alignItems: "center", gap: 11, flexShrink: 0 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 8,
              border: "1.5px solid #ffe4cc", backgroundColor: "#fff7ed",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#f97316" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5zm16 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: "0.7rem", color: "#777", fontWeight: 500, lineHeight: 1.35, whiteSpace: "nowrap" }}>
                Mon – Sat: 12:00 PM – 08:00 PM
              </p>
              <p style={{ fontSize: "0.8125rem", color: "#f97316", fontWeight: 700, lineHeight: 1.35, whiteSpace: "nowrap" }}>
                Call Now: (021) 32239001
              </p>
            </div>
          </div>
        </div>
        </div>{/* end collapsible Row 1 */}

        {/* Row 2 — nav strip (always visible when header is visible) */}
        <div style={{ backgroundColor: "#fafafa", borderTop: "1px solid #eeeeee" }}>
          <div className="container-xl" style={{ display: "flex", alignItems: "center", height: 56, gap: 4, width: "100%" }}>

            {/* All Categories */}
            <button
              onClick={onCategoryToggle}
              style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "0 16px", height: 30, borderRadius: 18,
                backgroundColor: "#f97316", color: "#fff",
                border: "none", cursor: "pointer",
                fontSize: "0.8125rem", fontWeight: 600, flexShrink: 0,
                transition: "background-color 0.14s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#ea6a08"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#f97316"}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              All Categories
            </button>

            {/* Nav links */}
            <ul style={{ display: "flex", alignItems: "center", listStyle: "none", gap: 1, flex: 1, marginLeft: 4 }}>
              {NAV_LINKS.map((link, i) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      display: "block", padding: "4px 11px", borderRadius: 16,
                      fontSize: "0.8125rem",
                      fontWeight: i === 0 ? 700 : 500,
                      color: i === 0 ? "#f97316" : "#444",
                      backgroundColor: i === 0 ? "rgba(249,115,22,0.09)" : "transparent",
                      textDecoration: "none",
                      transition: "background-color 0.14s, color 0.14s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={e => { if (i !== 0) { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(249,115,22,0.07)"; (e.currentTarget as HTMLElement).style.color = "#f97316"; } }}
                    onMouseLeave={e => { if (i !== 0) { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "#444"; } }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              style={{
                position: "relative", display: "flex", alignItems: "center", gap: 6,
                padding: "0 16px", height: 30, borderRadius: 18,
                backgroundColor: "#f97316", color: "#fff",
                border: "none", cursor: "pointer",
                fontSize: "0.8125rem", fontWeight: 700, flexShrink: 0,
                transition: "background-color 0.14s, transform 0.14s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#ea6a08"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f97316"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              Cart
              <span style={{
                position: "absolute", top: -5, right: -5,
                width: 17, height: 17, borderRadius: "50%",
                backgroundColor: "#fff", color: "#f97316",
                fontSize: "0.5rem", fontWeight: 900,
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "2px solid #f97316",
              }}>0</span>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer — pushes page content below the fixed desktop header (no transition to avoid scroll feedback) */}
      <div className="desktop-only" style={{
        flexShrink: 0,
        height: headerState === "full" ? 126 : headerState === "compact" ? 58 : 0,
      }}/>

      {/* Cart drawer */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* ══════════════════════════════════════════
          MOBILE BOTTOM NAV
      ══════════════════════════════════════════ */}
      <nav className="mobile-only" style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: "#fff", borderTop: "1px solid #e8e8e8",
        height: 56, flexDirection: "row",
        boxShadow: "0 -2px 14px rgba(0,0,0,0.07)",
        alignItems: "stretch",
      }}>
        {[
          { label: "Home",    href: "/",  active: true,  icon: <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"/></svg> },
          { label: "Shop",    href: "#",  active: false, icon: <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg> },
          { label: "Support", href: "#",  active: false, icon: <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 8v4M12 16h.01"/></svg> },
          { label: "Contact", href: "#",  active: false, icon: <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> },
        ].map(item => (
          <a
            key={item.label}
            href={item.href}
            style={{
              flex: 1, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 2, textDecoration: "none",
              color: item.active ? "#f97316" : "#888",
              fontSize: "0.5625rem", fontWeight: item.active ? 700 : 500,
              letterSpacing: "0.02em",
            }}
          >
            {item.icon}
            {item.label}
          </a>
        ))}

        {/* Menu → sidebar */}
        <button
          onClick={onCategoryToggle}
          style={{
            flex: 1, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 2, border: "none", backgroundColor: "transparent",
            cursor: "pointer", color: "#888",
            fontSize: "0.5625rem", fontWeight: 500,
            letterSpacing: "0.02em", fontFamily: "inherit",
          }}
        >
          <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          Menu
        </button>
      </nav>
    </>
  );
}
