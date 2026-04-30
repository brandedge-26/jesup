"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  {
    id: 1,
    img: "/hero-banner/banner1.png",
    cta1: { label: "Explore Collection", href: "#" },
    cta2: { label: "Shop Now", href: "#" },
  },
  {
    id: 2,
    img: "/hero-banner/banner2.png",
    cta1: { label: "Explore Brands", href: "#brands" },
    cta2: { label: "Shop Now", href: "#" },
  },
];

const INFO_ITEMS = [
  { icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>, label: "WhatsApp Support", color: "#25D366" },
  { icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>, label: "Free Delivery Rs: 2,999+", color: "#6C63FF" },
  { icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, label: "Damage Protection", color: "#6C63FF" },
  { icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, label: "Safe & Secure Payment", color: "#059669" },
  { icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: "Lahore · Karachi · Islamabad", color: "#d97706" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    if (transitioning || index === current) return;
    setPrev(current);
    setTransitioning(true);
    setCurrent(index);
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 700);
  }, [current, transitioning]);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent(c => {
        const next = (c + 1) % SLIDES.length;
        setPrev(c);
        setTransitioning(true);
        setTimeout(() => { setPrev(null); setTransitioning(false); }, 700);
        return next;
      });
    }, 5000);
  }, []);

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startInterval]);

  const handleNav = (index: number) => {
    goTo(index);
    startInterval();
  };

  return (
    <>
      <style>{`
        @keyframes fadeZoomIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.97); }
        }
        .hero-slide-enter {
          animation: fadeZoomIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero-slide-exit {
          animation: fadeOut 0.5s ease forwards;
        }
        .hero-btn-primary:hover {
          background-color: rgba(255,255,255,0.95) !important;
          transform: translateY(-1px);
        }
        .hero-btn-secondary:hover {
          background-color: rgba(255,255,255,0.2) !important;
          transform: translateY(-1px);
        }
        .hero-arrow:hover {
          background-color: rgba(255,255,255,0.25) !important;
        }
      `}</style>

      {/* ─── Carousel wrapper with side spacing ─── */}
      <div style={{ backgroundColor: "var(--background)", padding: "16px 20px 0" }}>
        <div style={{
          position: "relative",
          borderRadius: 20,
          overflow: "hidden",
          aspectRatio: "16/6",
          minHeight: 220,
          maxHeight: 520,
          backgroundColor: "#111",
        }}>

          {/* Slides stack */}
          {SLIDES.map((slide, i) => {
            const isActive = i === current;
            const isExiting = i === prev;
            if (!isActive && !isExiting) return null;

            return (
              <div
                key={slide.id}
                className={isActive ? "hero-slide-enter" : "hero-slide-exit"}
                style={{
                  position: "absolute", inset: 0,
                  zIndex: isActive ? 2 : 1,
                }}
              >
                <Image
                  src={slide.img}
                  alt={`Banner ${slide.id}`}
                  fill
                  priority={i === 0}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                {/* Subtle dark gradient at bottom for button readability */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)",
                  pointerEvents: "none",
                }} />

                {/* Buttons — bottom center */}
                <div style={{
                  position: "absolute", bottom: 28, left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex", gap: 12,
                  zIndex: 10,
                }}>
                  <a
                    href={slide.cta1.href}
                    className="hero-btn-primary"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 7,
                      padding: "11px 22px", borderRadius: 10,
                      backgroundColor: "#fff", color: "#111",
                      fontSize: "0.875rem", fontWeight: 700,
                      letterSpacing: "-0.01em", textDecoration: "none",
                      boxShadow: "0 4px 18px rgba(0,0,0,0.22)",
                      transition: "background-color 0.15s, transform 0.15s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {slide.cta1.label}
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#6C63FF" strokeWidth={2.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                  <a
                    href={slide.cta2.href}
                    className="hero-btn-secondary"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 7,
                      padding: "11px 22px", borderRadius: 10,
                      backgroundColor: "rgba(255,255,255,0.13)",
                      border: "1.5px solid rgba(255,255,255,0.35)",
                      color: "#fff",
                      fontSize: "0.875rem", fontWeight: 700,
                      letterSpacing: "-0.01em", textDecoration: "none",
                      backdropFilter: "blur(6px)",
                      transition: "background-color 0.15s, transform 0.15s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {slide.cta2.label}
                  </a>
                </div>
              </div>
            );
          })}

          {/* Left arrow */}
          <button
            onClick={() => handleNav((current - 1 + SLIDES.length) % SLIDES.length)}
            aria-label="Previous"
            className="hero-arrow"
            style={{
              position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
              width: 40, height: 40, borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "1.5px solid rgba(255,255,255,0.28)",
              color: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 10, backdropFilter: "blur(6px)",
              transition: "background-color 0.15s",
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => handleNav((current + 1) % SLIDES.length)}
            aria-label="Next"
            className="hero-arrow"
            style={{
              position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
              width: 40, height: 40, borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "1.5px solid rgba(255,255,255,0.28)",
              color: "#fff", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 10, backdropFilter: "blur(6px)",
              transition: "background-color 0.15s",
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div style={{
            position: "absolute", bottom: 14, left: "50%",
            transform: "translateX(-50%) translateY(0)",
            display: "flex", gap: 6, zIndex: 10,
            // push dots above buttons on mobile
          }}>
            {/* dots hidden behind buttons on large screens — position them top-right instead */}
          </div>
        </div>

        {/* Dots below banner, centered */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, paddingTop: 10, paddingBottom: 4 }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => handleNav(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? 24 : 8,
                height: 8, borderRadius: 4, padding: 0, border: "none", cursor: "pointer",
                backgroundColor: i === current ? "#6C63FF" : "#d1d5db",
                transition: "width 0.35s cubic-bezier(0.22,1,0.36,1), background-color 0.25s",
              }}
            />
          ))}
        </div>
      </div>

      {/* ─── Info Strip ─── */}
      <div style={{ backgroundColor: "#fff", borderBottom: "1px solid #e8edf3", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <div style={{ display: "flex", alignItems: "center", height: 52, minWidth: "max-content", padding: "0 1.5rem" }}>
          {INFO_ITEMS.map((item, i) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 20px", borderRight: i < INFO_ITEMS.length - 1 ? "1px solid #eeeeee" : "none", flexShrink: 0 }}>
              <span style={{ color: item.color, display: "flex", flexShrink: 0 }}>{item.icon}</span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#333", whiteSpace: "nowrap" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
