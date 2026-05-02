// "use client";
// import { useState, useRef, useEffect } from "react";
// // useRef retained for transitioning ref below
// import CartSidebar from "./CartSidebar";

// const NAV_LINKS = [
//   { label: "Home",            href: "/" },
//   { label: "Store",           href: "#" },
//   { label: "Support Centre",  href: "#" },
//   { label: "Contact Us",      href: "/contact" },
//   { label: "Repair Services", href: "#" },
// ];

// const SEARCH_CATEGORIES = [
//   "All", "Mobile Parts", "LCD Panels", "Touch Glass",
//   "Tablet Parts", "Used Phones", "Laptops",
// ];

// interface Props {
//   onCategoryToggle?: () => void;
// }

// export default function Navbar({ onCategoryToggle }: Props) {
//   const [cartOpen,      setCartOpen]      = useState(false);
//   const [searchFocused, setSearchFocused] = useState(false);
//   const [headerState, setHeaderState] = useState<"full" | "compact" | "hidden">("full");
//   const lastScrollY    = useRef(0);
//   const transitioning  = useRef(false);

//   useEffect(() => {
//     const onScroll = () => {
//       // Ignore scroll events caused by our own layout shifts
//       if (transitioning.current) {
//         lastScrollY.current = window.scrollY;
//         return;
//       }
//       const y = window.scrollY;
//       const goingDown = y > lastScrollY.current;
//       lastScrollY.current = y;

//       setHeaderState(prev => {
//         let next = prev;
//         if (y <= 16) {
//           next = "full";
//         } else if (goingDown) {
//           if (y > 80  && prev === "full")    next = "compact";
//           if (y > 400 && prev !== "hidden")  next = "hidden";
//         } else {
//           if (prev === "hidden")             next = "compact";
//           else if (y < 70 && prev === "compact") next = "full";
//         }
//         if (next !== prev) {
//           transitioning.current = true;
//           setTimeout(() => { transitioning.current = false; }, 380);
//         }
//         return next;
//       });
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   /* ── Search bar ── */
//   const SearchBar = ({ slim }: { slim?: boolean }) => (
//     <div style={{
//       display: "flex", alignItems: "center",
//       height: slim ? 42 : 50,
//       border: `1.5px solid ${searchFocused ? "#6C63FF" : "#e0e7ef"}`,
//       borderRadius: 10,
//       overflow: "hidden",
//       backgroundColor: "#fff",
//       boxShadow: searchFocused ? "0 0 0 3px rgba(108,99,255,0.12)" : "none",
//       transition: "border-color 0.18s, box-shadow 0.18s",
//     }}>
//       {/* Input */}
//       <input
//         type="text"
//         placeholder="Search products…"
//         onFocus={() => setSearchFocused(true)}
//         onBlur={() => setSearchFocused(false)}
//         style={{
//           flex: 1, border: "none", outline: "none",
//           padding: "0 18px",
//           fontSize: "0.9rem", color: "#222",
//           backgroundColor: "transparent", fontFamily: "inherit",
//         }}
//       />

//       {/* Purple search button — right */}
//       <button
//         style={{
//           display: "flex", alignItems: "center", justifyContent: "center",
//           height: "100%", padding: "0 20px", flexShrink: 0,
//           backgroundColor: "#6C63FF", border: "none", cursor: "pointer",
//           transition: "background-color 0.14s",
//         }}
//         onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"; }}
//         onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#6C63FF"; }}
//       >
//         <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
//           <circle cx="11" cy="11" r="8"/>
//           <path strokeLinecap="round" d="M21 21l-4.35-4.35"/>
//         </svg>
//       </button>
//     </div>
//   );

//   return (
//     <>
//       {/* ══════════════════════════════════════════
//           MOBILE HEADER  (< 1024px)
//           Row 1: hamburger | Jesup | Cart
//           Row 2: Search bar
//       ══════════════════════════════════════════ */}
//       <header className="mobile-only" style={{
//         backgroundColor: "#fff",
//         borderBottom: "1px solid #ebebeb",
//         position: "sticky", top: 0, zIndex: 40,
//         flexDirection: "column",
//       }}>
//         {/* Row 1 */}
//         <div style={{
//           display: "flex", alignItems: "center", justifyContent: "space-between",
//           padding: "0 14px", height: 56, position: "relative",
//         }}>
//           {/* Hamburger */}
//           <button
//             onClick={onCategoryToggle}
//             style={{
//               width: 36, height: 36, borderRadius: 8,
//               border: "1px solid #e8e8e8", backgroundColor: "#fff",
//               cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
//               flexShrink: 0,
//             }}
//           >
//             <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="#444" strokeWidth={2.2}>
//               <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
//             </svg>
//           </button>

//           {/* Logo — absolutely centered */}
//           <a
//             href="/"
//             style={{
//               position: "absolute", left: "50%", transform: "translateX(-50%)",
//               textDecoration: "none", userSelect: "none",
//             }}
//           >
//             <span style={{ fontSize: "1.375rem", fontWeight: 900, letterSpacing: "-0.045em" }}>
//               <span style={{ color: "#111" }}>Jes</span>
//               <span style={{ color: "#6C63FF" }}>up</span>
//             </span>
//           </a>

//           {/* Cart */}
//           <button
//             onClick={() => setCartOpen(true)}
//             style={{
//               position: "relative", width: 36, height: 36, borderRadius: 10,
//               backgroundColor: "#6C63FF", border: "none", cursor: "pointer",
//               display: "flex", alignItems: "center", justifyContent: "center",
//               flexShrink: 0,
//             }}
//           >
//             <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
//             </svg>
//             <span style={{
//               position: "absolute", top: -4, right: -4,
//               width: 16, height: 16, borderRadius: "50%",
//               backgroundColor: "#fff", color: "#6C63FF",
//               fontSize: "0.5rem", fontWeight: 900,
//               display: "flex", alignItems: "center", justifyContent: "center",
//               border: "1.5px solid #6C63FF",
//             }}>0</span>
//           </button>
//         </div>

//         {/* Row 2 — Search */}
//         <div style={{ padding: "0 14px 10px" }}>
//           <SearchBar slim />
//         </div>
//       </header>

//       {/* ══════════════════════════════════════════
//           DESKTOP ROW 1 — Logo | Search | Contact
//           z-index 42 → always above search overlay
//       ══════════════════════════════════════════ */}
//       <div className="desktop-only" style={{
//         position: "fixed", top: 0, left: 52, right: 0, zIndex: 42,
//         backgroundColor: "#fff",
//         borderBottom: "1px solid #ebebeb",
//         overflow: "hidden",
//         maxHeight: headerState === "full" ? "80px" : "0px",
//         transform: headerState === "hidden" ? "translateY(-100%)" : "translateY(0)",
//         transition: "max-height 0.32s cubic-bezier(0.4,0,0.2,1), transform 0.32s cubic-bezier(0.4,0,0.2,1)",
//       }}>
//         <div style={{
//           display: "flex", alignItems: "center",
//           padding: "0 28px", gap: 24, height: 76,
//         }}>
//           {/* Logo */}
//           <a href="/" style={{ textDecoration: "none", flexShrink: 0, userSelect: "none" }}>
//             <span style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.045em" }}>
//               <span style={{ color: "#111" }}>Jes</span>
//               <span style={{ color: "#6C63FF" }}>up</span>
//             </span>
//           </a>

//           {/* Search — fills ALL remaining center space */}
//           <div style={{ flex: 1, minWidth: 0 }}>
//             <SearchBar />
//           </div>

//           {/* Contact info */}
//           <div style={{ display: "flex", alignItems: "center", gap: 11, flexShrink: 0 }}>
//             <div style={{ width: 40, height: 40, borderRadius: 8, border: "1.5px solid #ede9fe", backgroundColor: "#f0eeff", display: "flex", alignItems: "center", justifyContent: "center" }}>
//               <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#6C63FF" strokeWidth={1.7}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5zm16 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z"/>
//               </svg>
//             </div>
//             <div>
//               <p style={{ fontSize: "0.7rem", color: "#777", fontWeight: 500, lineHeight: 1.35, whiteSpace: "nowrap" }}>Mon – Sat: 9:00 AM – 06:00 PM ET</p>
//               <p style={{ fontSize: "0.8125rem", color: "#6C63FF", fontWeight: 700, lineHeight: 1.35, whiteSpace: "nowrap" }}>Call: +1 (912) 427-0000</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ══════════════════════════════════════════
//           SEARCH OVERLAY — z-index 41  (desktop only)
//           sits above Row 2 & page, below Row 1
//       ══════════════════════════════════════════ */}
//       {searchFocused && (
//         <div
//           className="desktop-only"
//           onClick={() => setSearchFocused(false)}
//           style={{
//             position: "fixed", inset: 0,
//             backgroundColor: "rgba(0,0,0,0.48)",
//             zIndex: 41,
//             animation: "fadeIn 0.18s ease",
//           }}
//         />
//       )}

//       {/* ══════════════════════════════════════════
//           DESKTOP ROW 2 — Nav strip
//           z-index 38 → goes under search overlay
//       ══════════════════════════════════════════ */}
//       <div className="desktop-only" style={{
//         position: "fixed",
//         top: headerState === "full" ? 76 : 0,
//         left: 52, right: 0, zIndex: 38,
//         backgroundColor: "#fafafa",
//         borderBottom: "1px solid #ebebeb",
//         borderTop: headerState === "full" ? "1px solid #eeeeee" : "none",
//         transform: headerState === "hidden" ? "translateY(-100%)" : "translateY(0)",
//         transition: "top 0.32s cubic-bezier(0.4,0,0.2,1), transform 0.32s cubic-bezier(0.4,0,0.2,1)",
//       }}>
//         <div style={{ display: "flex", alignItems: "center", height: 56, gap: 4, padding: "0 28px" }}>

//           {/* All Categories */}
//           <button onClick={onCategoryToggle}
//             style={{ display: "flex", alignItems: "center", gap: 7, padding: "0 16px", height: 30, borderRadius: 18, backgroundColor: "#6C63FF", color: "#fff", border: "none", cursor: "pointer", fontSize: "0.8125rem", fontWeight: 600, flexShrink: 0, transition: "background-color 0.14s" }}
//             onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"}
//             onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#6C63FF"}
//           >
//             <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
//             All Categories
//           </button>

//           {/* Nav links */}
//           <ul style={{ display: "flex", alignItems: "center", listStyle: "none", gap: 1, marginLeft: 4 }}>
//             {NAV_LINKS.map((link, i) => (
//               <li key={link.label}>
//                 <a href={link.href}
//                   style={{ display: "block", padding: "4px 11px", borderRadius: 16, fontSize: "0.8125rem", fontWeight: i === 0 ? 700 : 500, color: i === 0 ? "#6C63FF" : "#444", backgroundColor: i === 0 ? "rgba(108,99,255,0.09)" : "transparent", textDecoration: "none", transition: "background-color 0.14s, color 0.14s", whiteSpace: "nowrap" }}
//                   onMouseEnter={e => { if (i !== 0) { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(108,99,255,0.07)"; (e.currentTarget as HTMLElement).style.color = "#6C63FF"; } }}
//                   onMouseLeave={e => { if (i !== 0) { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "#444"; } }}
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Cart — pushed to far right */}
//           <button onClick={() => setCartOpen(true)}
//             style={{ position: "relative", display: "flex", alignItems: "center", gap: 6, padding: "0 16px", height: 30, borderRadius: 18, backgroundColor: "#6C63FF", color: "#fff", border: "none", cursor: "pointer", fontSize: "0.8125rem", fontWeight: 700, flexShrink: 0, marginLeft: "auto", transition: "background-color 0.14s, transform 0.14s" }}
//             onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
//             onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#6C63FF"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
//           >
//             <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
//             Cart
//             <span style={{ position: "absolute", top: -5, right: -5, width: 17, height: 17, borderRadius: "50%", backgroundColor: "#fff", color: "#6C63FF", fontSize: "0.5rem", fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #6C63FF" }}>0</span>
//           </button>
//         </div>
//       </div>

//       {/* Spacer — pushes page content below the fixed desktop header (no transition to avoid scroll feedback) */}
//       <div className="desktop-only" style={{
//         flexShrink: 0,
//         height: headerState === "full" ? 134 : headerState === "compact" ? 58 : 0,
//       }}/>

//       {/* Cart drawer */}
//       <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />

//       {/* ══════════════════════════════════════════
//           MOBILE BOTTOM NAV
//       ══════════════════════════════════════════ */}
//       <nav className="mobile-only" style={{
//         position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50,
//         backgroundColor: "#fff", borderTop: "1px solid #e8e8e8",
//         height: 56, flexDirection: "row",
//         boxShadow: "0 -2px 14px rgba(0,0,0,0.07)",
//         alignItems: "stretch",
//       }}>
//         {[
//           { label: "Home",    href: "/",  active: true,  icon: <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"/></svg> },
//           { label: "Shop",    href: "#",  active: false, icon: <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg> },
//           { label: "Support", href: "#",  active: false, icon: <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 8v4M12 16h.01"/></svg> },
//           { label: "Contact", href: "#",  active: false, icon: <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> },
//         ].map(item => (
//           <a
//             key={item.label}
//             href={item.href}
//             style={{
//               flex: 1, display: "flex", flexDirection: "column",
//               alignItems: "center", justifyContent: "center",
//               gap: 2, textDecoration: "none",
//               color: item.active ? "#6C63FF" : "#888",
//               fontSize: "0.5625rem", fontWeight: item.active ? 700 : 500,
//               letterSpacing: "0.02em",
//             }}
//           >
//             {item.icon}
//             {item.label}
//           </a>
//         ))}

//         {/* Menu → sidebar */}
//         <button
//           onClick={onCategoryToggle}
//           style={{
//             flex: 1, display: "flex", flexDirection: "column",
//             alignItems: "center", justifyContent: "center",
//             gap: 2, border: "none", backgroundColor: "transparent",
//             cursor: "pointer", color: "#888",
//             fontSize: "0.5625rem", fontWeight: 500,
//             letterSpacing: "0.02em", fontFamily: "inherit",
//           }}
//         >
//           <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//             <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
//           </svg>
//           Menu
//         </button>
//       </nav>
//     </>
//   );
// }



"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import CartSidebar from "./CartSidebar";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Store", href: "/shop" },
  { label: "Support Centre", href: "/support" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Repair Services", href: "/repair" },
];

// const SEARCH_CATEGORIES = [
//   "All", "Mobile Parts", "LCD Panels", "Touch Glass",
//   "Tablet Parts", "Used Phones", "Laptops",
// ];

/* ── Search bar — defined OUTSIDE Navbar so React never remounts it on re-render ── */
interface SearchBarProps {
  slim?: boolean;
  searchFocused: boolean;
  searchValue: string;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (v: string) => void;
}

function SearchBar({ slim, searchFocused, searchValue, onFocus, onBlur, onChange }: SearchBarProps) {
  const id = slim ? "search-slim" : "search-main";
  return (
    <label
      htmlFor={id}
      style={{
        display: "flex", alignItems: "center",
        height: slim ? 42 : 50,
        backgroundColor: "#fff",
        border: "1.5px solid #e8e8f0",
        borderRadius: 10,
        margin: slim ? 0 : "0 50px",
        padding: "0 6px 0 18px",
        boxShadow: searchFocused ? "0 0 0 3px rgba(108,99,255,0.15)" : "none",
        transition: "box-shadow 0.18s",
        cursor: "text",
      }}
    >
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#999" strokeWidth={2.2} style={{ flexShrink: 0, marginRight: 10 }}>
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
      </svg>

      <input
        id={id}
        type="text"
        placeholder="Search products…"
        value={searchValue}
        onChange={e => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        style={{
          flex: 1, border: "none", outline: "none",
          fontSize: "0.875rem", color: "#333",
          backgroundColor: "transparent", fontFamily: "inherit",
          cursor: "text",
        }}
      />

      <button
        onClick={e => e.preventDefault()}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: slim ? 32 : 38, height: slim ? 32 : 38, flexShrink: 0,
          backgroundColor: "#6C63FF", border: "none",
          borderRadius: 8, cursor: "pointer",
          transition: "background-color 0.14s",
        }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#6C63FF"}
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </label>
  );
}

interface Props {
  onCategoryToggle?: () => void;
}

export default function Navbar({ onCategoryToggle }: Props) {

  const pathname = usePathname();
  const [cartOpen, setCartOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [headerState, setHeaderState] = useState<"full" | "compact" | "hidden">("full");
  const lastScrollY = useRef(0);
  const transitioning = useRef(false);
  const cartCount = useCartStore((s) => s.cartCount());

  useEffect(() => {
    const onScroll = () => {
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
          if (y > 80 && prev === "full") next = "compact";
          if (y > 400 && prev !== "hidden") next = "hidden";
        } else {
          if (prev === "hidden") next = "compact";
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

  return (
    <>
      {/* Desktop search overlay */}
      {searchFocused && (
        <div
          className="desktop-only"
          onClick={() => setSearchFocused(false)}
          style={{
            position: "fixed", inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
            zIndex: 39,
          }}
        />
      )}

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
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo — absolutely centered */}
          <Link
            href="/"
            style={{
              position: "absolute", left: "50%", transform: "translateX(-50%)",
              textDecoration: "none", userSelect: "none",
            }}
          >
            <span style={{ fontSize: "1.375rem", fontWeight: 900, letterSpacing: "-0.045em" }}>
              <span style={{ color: "#111" }}>Jes</span>
              <span style={{ color: "#6C63FF" }}>up</span>
            </span>
          </Link>


          {/* Cart and login btn */}
          <div className="flex items-center gap-2">
            {/* Cart Button */}
            <button
              onClick={() => setCartOpen(true)}
              style={{
                position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
                width: 36, height: 36, borderRadius: 999,
                backgroundColor: "#f0f2f8", color: "#111",
                border: "1px solid #e2e5f0", cursor: "pointer",
                transition: "background-color 0.14s, border-color 0.14s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#e6e9f5"; (e.currentTarget as HTMLElement).style.borderColor = "#c7cde8"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f0f2f8"; (e.currentTarget as HTMLElement).style.borderColor = "#e2e5f0"; }}
            >
              <div style={{ position: "relative" }}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#111" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span style={{
                  position: "absolute", top: -6, right: -6,
                  minWidth: 16, height: 16, borderRadius: "50%",
                  backgroundColor: "#6C63FF", color: "#fff",
                  fontSize: "0.55rem", fontWeight: 900,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "2px solid #fff", padding: "0 2px"
                }}>{cartCount > 99 ? "99+" : cartCount}</span>
              </div>
            </button>

            {/* Login Link with Person Icon */}
            <Link href="/login"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 36, height: 36, borderRadius: 999,
                backgroundColor: "#6C63FF", color: "#fff",
                cursor: "pointer", transition: "opacity 0.14s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              {/* Person/User Icon */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>


        </div>

        {/* Row 2 — Search */}
        <div style={{ padding: "0 14px 10px" }}>
          <SearchBar slim searchFocused={searchFocused} searchValue={searchValue} onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} onChange={setSearchValue} />
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
            gap: 24, height: 76,
          }}>
            {/* Logo — text only */}
            <Link href="/" style={{ textDecoration: "none", flexShrink: 0, userSelect: "none" }}>
              <span style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.045em" }}>
                <span style={{ color: "#111" }}>Jes</span>
                <span style={{ color: "#6C63FF" }}>up</span>
              </span>
            </Link>

            {/* Search — grows to fill space */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <SearchBar searchFocused={searchFocused} searchValue={searchValue} onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} onChange={setSearchValue} />
            </div>

            {/* Contact info */}
            <div style={{ display: "flex", alignItems: "center", gap: 11, flexShrink: 0 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 8,
                border: "1.5px solid #ede9fe", backgroundColor: "#f0eeff",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#6C63FF" strokeWidth={1.7}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5zm16 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "0.7rem", color: "#777", fontWeight: 500, lineHeight: 1.35, whiteSpace: "nowrap" }}>
                  Mon – Sat: 12:00 PM – 08:00 PM
                </p>
                <p style={{ fontSize: "0.8125rem", color: "#6C63FF", fontWeight: 700, lineHeight: 1.35, whiteSpace: "nowrap" }}>
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
                display: "flex", alignItems: "center", gap: 10,
                padding: "5px 16px 5px 5px", height: 42, borderRadius: 999,
                backgroundColor: "#f0f2f8", color: "#111",
                border: "1px solid #e2e5f0", cursor: "pointer",
                fontSize: "0.875rem", fontWeight: 600, flexShrink: 0,
                transition: "background-color 0.14s, border-color 0.14s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#e6e9f5"; (e.currentTarget as HTMLElement).style.borderColor = "#c7cde8"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f0f2f8"; (e.currentTarget as HTMLElement).style.borderColor = "#e2e5f0"; }}
            >
              <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#6C63FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              All Categories
            </button>

            {/* Nav links */}
            <ul style={{ display: "flex", alignItems: "center", listStyle: "none", gap: 1, flex: 1, marginLeft: 4 }}>
              {NAV_LINKS.map((link) => {
                const active = link.href !== "#" && pathname === link.href;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        display: "flex", alignItems: "center",
                        padding: "0 14px", height: 42, borderRadius: 999,
                        fontSize: "0.875rem",
                        fontWeight: active ? 700 : 500,
                        color: active ? "#6C63FF" : "#444",
                        backgroundColor: active ? "rgba(108,99,255,0.09)" : "transparent",
                        border: active ? "1px solid rgba(108,99,255,0.2)" : "1px solid transparent",
                        textDecoration: "none",
                        transition: "background-color 0.14s, color 0.14s, border-color 0.14s",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(108,99,255,0.07)"; (e.currentTarget as HTMLElement).style.color = "#6C63FF"; } }}
                      onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "#444"; } }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Cart + Login — pushed to far right */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" }}>
              <button
                onClick={() => setCartOpen(true)}
                style={{
                  position: "relative", display: "flex", alignItems: "center", gap: 10,
                  padding: "5px 16px 5px 5px", height: 42, borderRadius: 999,
                  backgroundColor: "#f0f2f8", color: "#111",
                  border: "1px solid #e2e5f0", cursor: "pointer",
                  fontSize: "0.875rem", fontWeight: 600, flexShrink: 0,
                  transition: "background-color 0.14s, border-color 0.14s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#e6e9f5"; (e.currentTarget as HTMLElement).style.borderColor = "#c7cde8"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f0f2f8"; (e.currentTarget as HTMLElement).style.borderColor = "#e2e5f0"; }}
              >
                <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#6C63FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span style={{
                    position: "absolute", top: -4, right: -4,
                    width: 15, height: 15, borderRadius: "50%",
                    backgroundColor: "#fff", color: "#6C63FF",
                    fontSize: "0.45rem", fontWeight: 900,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1.5px solid #6C63FF",
                  }}>0</span>
                </div>
                Cart
              </button>

              {/* Login */}
              <a
                href="/login"
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "5px 16px 5px 5px", height: 42, borderRadius: 999,
                  backgroundColor: "#f0f2f8", color: "#111",
                  border: "1px solid #e2e5f0",
                  fontSize: "0.875rem", fontWeight: 600, flexShrink: 0,
                  textDecoration: "none",
                  transition: "background-color 0.14s, border-color 0.14s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#e6e9f5"; (e.currentTarget as HTMLElement).style.borderColor = "#c7cde8"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#f0f2f8"; (e.currentTarget as HTMLElement).style.borderColor = "#e2e5f0"; }}
              >
                <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#6C63FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                Login
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer — pushes page content below the fixed desktop header (no transition to avoid scroll feedback) */}
      <div className="desktop-only" style={{
        flexShrink: 0,
        height: headerState === "full" ? 134 : headerState === "compact" ? 58 : 0,
      }} />

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
          { label: "Home", href: "/", active: true, icon: <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg> },
          { label: "Shop", href: "/shop", active: false, icon: <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> },
          { label: "Support", href: "/support", active: false, icon: <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 8v4M12 16h.01" /></svg> },
          { label: "Contact", href: "/contact", active: false, icon: <svg width="21" height="21" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.7₁6 ₂₁ ₃ ₁₄.₂₈₄ ₃ ₆V5z" /></svg> },
        ].map(item => (
          <a
            key={item.label}
            href={item.href}
            style={{
              flex: 1, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 2, textDecoration: "none",
              color: item.active ? "#6C63FF" : "#888",
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
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Menu
        </button>
      </nav>
    </>
  );
}