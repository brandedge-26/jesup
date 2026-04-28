"use client";
import { useState, useEffect, useRef } from "react";

const SLIDES = [
  {
    id: 1,
    badge: "REPAIR SERVICES",
    title: "Professional Repair Service\nIn Pakistan",
    subtitle: "Get expert repairs for your mobile, tablet, laptop, and more.",
    cta: "Book A Repair",
    ctaHref: "#",
    bg: "linear-gradient(150deg, #0d1b3e 0%, #0a1628 60%, #081420 100%)",
    accent: "#f97316",
    devices: ["default"],
  },
  {
    id: 2,
    badge: "USED MOBILES",
    title: "Affordable Used Phones\nfor Every Budget",
    subtitle: "Quality You Can Trust, Prices You'll Love!",
    cta: "Shop Now",
    ctaHref: "#",
    bg: "linear-gradient(150deg, #0e1b3d 0%, #0b1729 60%, #091422 100%)",
    accent: "#f97316",
    devices: ["multi-phones"],
  },
  {
    id: 3,
    badge: "TABLETS & iPADS",
    title: "Deals on Tablets\n& iPads",
    subtitle: "Experience Seamless Performance at Unbeatable Prices.",
    cta: "Explore",
    ctaHref: "#",
    bg: "linear-gradient(150deg, #0f1d42 0%, #0c1833 60%, #091422 100%)",
    accent: "#f97316",
    devices: ["tablet-center"],
  },
];

function DeviceMockup({ type, accent }: { type: string[]; accent: string }) {
  if (type.includes("multi-phones")) {
    return (
      <div style={{ position: "relative", width: 320, height: 360 }}>
        <div style={{ position: "absolute", left: 10, top: "55%", transform: "translateY(-60%) rotate(-14deg)", width: 80, height: 160, borderRadius: 20, background: "linear-gradient(170deg, #1e2a48 0%, #111 100%)", boxShadow: "0 20px 40px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.09)", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 35% 25%, rgba(255,255,255,0.12) 0%, transparent 60%)" }} />
        </div>
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 120, height: 240, borderRadius: 30, background: "linear-gradient(170deg, #1e2a48 0%, #0d1220 100%)", boxShadow: `0 40px 80px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.1)`, zIndex: 10, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 30%, ${accent}33 0%, transparent 60%)` }} />
          <div style={{ width: 36, height: 7, borderRadius: 4, backgroundColor: "#000", margin: "14px auto 0", zIndex: 2, position: "relative" }} />
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
            <span style={{ color: "rgba(255,255,255,0.08)", fontSize: "0.45rem", fontWeight: 900, letterSpacing: "0.3em" }}>JESUP</span>
          </div>
          <div style={{ width: 44, height: 4, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.15)", marginBottom: 14, zIndex: 2 }} />
        </div>
        <div style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-48%) rotate(14deg)", width: 80, height: 160, borderRadius: 20, background: "linear-gradient(170deg, #1e3a8a 0%, #1e1b4b 100%)", boxShadow: "0 20px 40px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.09)", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 65% 25%, rgba(255,255,255,0.12) 0%, transparent 60%)" }} />
        </div>
        <div style={{ position: "absolute", right: -10, top: "48%", transform: "translateY(-30%) rotate(22deg)", width: 60, height: 120, borderRadius: 14, background: "linear-gradient(170deg, #3b1f5e 0%, #1a0d2e 100%)", boxShadow: "0 12px 24px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.07)", zIndex: 1 }} />
      </div>
    );
  }

  if (type.includes("tablet-center")) {
    return (
      <div style={{ position: "relative", width: 320, height: 360 }}>
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%) rotate(-4deg)", width: 200, height: 270, borderRadius: 22, background: "linear-gradient(170deg, #1e2a48 0%, #0d1220 100%)", boxShadow: "0 40px 80px rgba(0,0,0,0.65), inset 0 0 0 1px rgba(255,255,255,0.09)", overflow: "hidden", zIndex: 10 }}>
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 35%, ${accent}33 0%, transparent 65%)` }} />
          <div style={{ width: 24, height: 6, borderRadius: 3, backgroundColor: "#000", margin: "12px auto 0", position: "relative", zIndex: 2 }} />
        </div>
        <div style={{ position: "absolute", right: 20, top: "60%", transform: "translateY(-50%) rotate(10deg)", width: 72, height: 144, borderRadius: 18, background: "linear-gradient(170deg, #374151 0%, #1f2937 100%)", boxShadow: "0 16px 32px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.07)", zIndex: 5 }} />
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: 340, height: 400 }}>
      <div style={{ position: "absolute", left: 0, top: "52%", transform: "translateY(-58%) rotate(-12deg)", width: 96, height: 130, borderRadius: 16, background: "linear-gradient(170deg, #1e3a8a 0%, #1e1b4b 100%)", boxShadow: "0 24px 48px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.09)", overflow: "hidden", zIndex: 5 }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 35% 25%, rgba(255,255,255,0.15) 0%, transparent 55%)" }} />
      </div>
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 128, height: 260, borderRadius: 32, background: "linear-gradient(170deg, #1c2840 0%, #0d1525 100%)", boxShadow: `0 48px 96px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.1)`, zIndex: 10, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 30%, ${accent}2a 0%, transparent 60%)` }} />
        <div style={{ width: 38, height: 8, borderRadius: 4, backgroundColor: "#000", margin: "14px auto 0", zIndex: 2, position: "relative" }} />
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
          <span style={{ color: "rgba(255,255,255,0.07)", fontSize: "0.45rem", fontWeight: 900, letterSpacing: "0.3em" }}>JESUP</span>
        </div>
        <div style={{ width: 46, height: 4, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.14)", marginBottom: 16, zIndex: 2 }} />
      </div>
      <div style={{ position: "absolute", right: 14, top: "52%", transform: "translateY(-44%) rotate(10deg)", width: 72, height: 86, borderRadius: 18, background: "linear-gradient(170deg, #374151 0%, #1f2937 100%)", boxShadow: "0 16px 32px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.08)", zIndex: 5 }}>
        <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", width: 20, height: 16, backgroundColor: "#2d3748", borderRadius: 4 }} />
        <div style={{ position: "absolute", bottom: -14, left: "50%", transform: "translateX(-50%)", width: 20, height: 16, backgroundColor: "#2d3748", borderRadius: 4 }} />
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 35%, ${accent}22 0%, transparent 60%)` }} />
      </div>
      <div style={{ position: "absolute", top: 24, right: 0, zIndex: 20, padding: "8px 12px", borderRadius: 12, backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", gap: 7 }}>
        <span style={{ fontSize: 14 }}>⭐</span>
        <div>
          <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.6875rem", lineHeight: 1.2 }}>Top Rated</p>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.5625rem" }}>Jesup Repair</p>
        </div>
      </div>
    </div>
  );
}

const INFO_ITEMS = [
  { icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>, label: "WhatsApp Support", color: "#25D366" },
  { icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>, label: "Free Delivery Rs: 2,999+", color: "#f97316" },
  { icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, label: "Damage Protection", color: "#6c63ff" },
  { icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, label: "Safe & Secure Payment", color: "#059669" },
  { icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: "Lahore · Karachi · Islamabad", color: "#d97706" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const next = () => goTo((current + 1) % SLIDES.length);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const slide = SLIDES[current];

  return (
    <>
      {/* ─── Banner ─── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: slide.bg,
          minHeight: "clamp(340px, 48vw, 500px)",
          display: "flex",
          alignItems: "center",
          transition: "background 0.6s ease",
        }}
      >
        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />
        {/* Ambient glow */}
        <div style={{ position: "absolute", right: "-8%", top: "50%", transform: "translateY(-50%)", width: 600, height: 600, background: `radial-gradient(circle, ${slide.accent}18 0%, transparent 60%)`, filter: "blur(60px)", pointerEvents: "none", transition: "background 0.6s ease" }} />

        <div className="container-xl" style={{ position: "relative", zIndex: 2, width: "100%", paddingTop: "clamp(2.5rem, 6vw, 4rem)", paddingBottom: "clamp(3rem, 7vw, 5rem)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          {/* Left text */}
          <div style={{ maxWidth: 520, flex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 20, border: `1px solid ${slide.accent}44`, backgroundColor: `${slide.accent}14`, marginBottom: "1.25rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: slide.accent, display: "inline-block", boxShadow: `0 0 8px ${slide.accent}` }} />
              <span style={{ color: slide.accent, fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.09em" }}>{slide.badge}</span>
            </div>

            <h1 style={{ color: "#fff", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.035em", marginBottom: "1.125rem", whiteSpace: "pre-line" }}>
              {slide.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.875rem, 1.8vw, 1rem)", lineHeight: 1.65, marginBottom: "2rem", maxWidth: 440 }}>
              {slide.subtitle}
            </p>

            <a
              href={slide.ctaHref}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 22px", backgroundColor: "#fff", color: "#111", borderRadius: 8, fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.25)", letterSpacing: "-0.01em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#f0f0f0")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#fff")}
            >
              {slide.cta}
              <span style={{ display: "flex", alignItems: "center" }}>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="#f97316" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" /></svg>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" style={{ marginLeft: -7, opacity: 0.45 }}><path d="M9 18l6-6-6-6" stroke="#f97316" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </a>
          </div>

          {/* Right device mockup */}
          <div className="hidden md:flex" style={{ alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <DeviceMockup type={slide.devices} accent={slide.accent} />
          </div>
        </div>

        {/* Left arrow */}
        <button onClick={() => { prev(); resetInterval(); }} aria-label="Previous slide" style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 38, height: 38, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.22)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.22)")} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.13)")}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Right arrow */}
        <button onClick={() => { next(); resetInterval(); }} aria-label="Next slide" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 38, height: 38, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.22)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.22)")} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.13)")}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Dots */}
        <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6, zIndex: 10 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => { goTo(i); resetInterval(); }} aria-label={`Slide ${i + 1}`} style={{ width: i === current ? 22 : 8, height: 8, borderRadius: 4, backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.38)", border: "none", cursor: "pointer", padding: 0, transition: "width 0.3s ease, background-color 0.3s ease" }} />
          ))}
        </div>
      </section>

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
