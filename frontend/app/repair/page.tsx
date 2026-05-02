"use client";
import { useState, type JSX } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySidebar from "@/components/CategorySidebar";
import Image from "next/image";

const PRIMARY = "#6C63FF";
const PRIMARY_LIGHT = "#f0eeff";

const SERVICES = [
  {
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Screen Replacement",
    desc: "Cracked, shattered, or unresponsive display? We replace LCD panels and OLED screens using genuine parts with full touch sensitivity restored.",
    color: "#6C63FF", bg: "#f0eeff",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Battery Replacement",
    desc: "Fast battery drain, unexpected shutdowns, or won't charge? We swap worn batteries and restore your phone to full all-day performance.",
    color: "#d97706", bg: "#fef3c7",
  },
  {
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Charging Port Repair",
    desc: "Loose connection, bent pins, or phone not charging? We clean, repair, or fully replace the charging port to get you powered up again.",
    color: "#0284c7", bg: "#e0f2fe",
  },
  {
    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Camera Repair",
    desc: "Blurry photos, cracked lens, or camera not opening? We repair front and rear cameras so you can shoot crystal-clear photos again.",
    color: "#16a34a", bg: "#f0fdf4",
  },
  {
    icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
    title: "Water Damage Recovery",
    desc: "Dropped your phone in water? Don't panic. Our technicians use ultrasonic cleaning and professional drying techniques to save water-damaged devices.",
    color: "#7c3aed", bg: "#f5f3ff",
  },
  {
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "Software & OS Issues",
    desc: "Stuck on boot loop, frozen screen, or software glitches? We diagnose and fix OS problems, restoring your phone to smooth working order.",
    color: "#dc2626", bg: "#fff1f2",
  },
  {
    icon: "M15.536 8.464a5 5 0 010 7.072M12 9.5l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Speaker & Mic Repair",
    desc: "Muffled sound, no audio during calls, or microphone not picking up voice? We fix speaker grills and microphone modules precisely.",
    color: "#0891b2", bg: "#ecfeff",
  },
  {
    icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
    title: "Touch Glass Replacement",
    desc: "Glass shattered but display is fine? We replace just the outer touch glass — a more affordable alternative to a full screen replacement.",
    color: "#b45309", bg: "#fffbeb",
  },
];

// Brand logo images — using downloaded SVG files + inline text SVGs for brands not in Simple Icons
const BRAND_LOGOS: Record<string, JSX.Element> = {
  Apple: <Image src="/brands/apple.svg" alt="Apple" width={28} height={28} style={{ objectFit: "contain" }} />,
  Samsung: <Image src="/brands/samsung.svg" alt="Samsung" width={80} height={24} style={{ objectFit: "contain" }} />,
  OnePlus: <Image src="/brands/oneplus.svg" alt="OnePlus" width={36} height={36} style={{ objectFit: "contain" }} />,
  Oppo: <Image src="/brands/oppo.svg" alt="Oppo" width={60} height={28} style={{ objectFit: "contain" }} />,
  Vivo: <Image src="/brands/vivo.svg" alt="Vivo" width={52} height={24} style={{ objectFit: "contain" }} />,
  Xiaomi: <Image src="/brands/xiaomi.svg" alt="Xiaomi" width={32} height={32} style={{ objectFit: "contain" }} />,
  Huawei: <Image src="/brands/huawei.svg" alt="Huawei" width={32} height={32} style={{ objectFit: "contain" }} />,
  Motorola: <Image src="/brands/motorola.svg" alt="Motorola" width={32} height={32} style={{ objectFit: "contain" }} />,
  Nokia: <Image src="/brands/nokia.svg" alt="Nokia" width={60} height={24} style={{ objectFit: "contain" }} />,
};

const MARQUEE_BRANDS = [
  { name: "Apple", color: "#111111" },
  { name: "Samsung", color: "#1428A0" },
  { name: "OnePlus", color: "#F5010C" },
  { name: "Oppo", color: "#1D5E2A" },
  { name: "Vivo", color: "#415FFF" },
  { name: "Xiaomi", color: "#FF6900" },
  { name: "Huawei", color: "#CF0A2C" },
  { name: "Motorola", color: "#0000E6" },
  { name: "Nokia", color: "#124191" },
];

const WHY_US = [
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title: "Genuine Parts Only",
    desc: "We use manufacturer-grade and OEM parts so your repaired device performs exactly as it should — no cheap substitutes.",
    color: "#16a34a", bg: "#f0fdf4",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Fast 24–48 Hour Turnaround",
    desc: "Most repairs are completed same-day or within 48 hours. We respect your time and keep you updated throughout the process.",
    color: "#6C63FF", bg: "#f0eeff",
  },
  {
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Data Privacy Guaranteed",
    desc: "Your personal data stays safe. We never access your files, photos, or accounts — we only fix the hardware you bring to us.",
    color: "#0284c7", bg: "#e0f2fe",
  },
  {
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    title: "10+ Years of Experience",
    desc: "Our certified technicians have repaired thousands of devices across all major brands. You're in expert hands every time.",
    color: "#d97706", bg: "#fef3c7",
  },
];

const STEPS = [
  { n: "01", title: "Book Your Repair", desc: "Fill out our quick booking form with your name, contact details, device model, and a brief description of the issue." },
  { n: "02", title: "Drop Off or Mail In", desc: "Bring your device to our Jesup, GA location or ship it to us. We'll confirm receipt and begin diagnostics immediately." },
  { n: "03", title: "Repair & Return", desc: "Once repaired and tested, we notify you for pickup or ship it back. Pay only after you're fully satisfied with the result." },
];

interface FormData {
  name: string;
  whatsapp: string;
  email: string;
  model: string;
  message: string;
}

export default function RepairPage() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({ name: "", whatsapp: "", email: "", model: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => { setSubmitted(false); setForm({ name: "", whatsapp: "", email: "", model: "", message: "" }); }, 300);
  };

  const field = (label: string, key: keyof FormData, type = "text", placeholder = "", icon?: string) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.07em" }}>{label}</label>
      <div style={{ position: "relative" }}>
        {icon && (
          <div style={{ pointerEvents: "none", position: "absolute", top: 0, bottom: 0, left: 13, display: "flex", alignItems: "center" }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#b0b7c3" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
            </svg>
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={form[key]}
          required
          onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
          className="outline-none ring-offset-2 focus:ring-2 focus:ring-violet-500 transition-shadow"
          style={{
            width: "100%", boxSizing: "border-box",
            paddingTop: 11, paddingBottom: 11,
            paddingLeft: icon ? 38 : 14, paddingRight: 14,
            borderRadius: 10, fontSize: "0.875rem",
            color: "#111", backgroundColor: "#f9fafb",
            border: "1.5px solid #e5e7eb",
            fontFamily: "inherit",
          }}
          onFocus={e => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.borderColor = "#a5b4fc"; }}
          onBlur={e => { e.currentTarget.style.backgroundColor = "#f9fafb"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
        />
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        .repair-services { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .repair-why { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
        .repair-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .repair-service-card { position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; padding: 22px; border-radius: 18px; border: 1px solid #e5e7eb; background: #fff; cursor: pointer; transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; min-height: 180px; }
        .repair-service-card:hover { }
        @keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { display: flex; width: max-content; animation: marqueeScroll 24s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes modalIn { from { opacity: 0; transform: scale(0.95) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .modal-box { animation: modalIn 0.22s cubic-bezier(0.22,1,0.36,1); }
        @media (max-width: 1024px) { .repair-services { grid-template-columns: repeat(3, 1fr); } .repair-why { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .repair-services { grid-template-columns: repeat(2, 1fr); } .repair-steps { grid-template-columns: 1fr; } }
        @media (max-width: 480px) { .repair-services { grid-template-columns: 1fr; } .repair-why { grid-template-columns: 1fr; } }
      `}</style>

      <CategorySidebar externalOpen={categoryOpen} onRequestClose={() => setCategoryOpen(false)} />

      <div className="sidebar-offset" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "var(--background)" }}>
        <Navbar onCategoryToggle={() => setCategoryOpen(v => !v)} />

        <main className="pb-16 lg:pb-0" style={{ flex: 1 }}>

          {/* ── Hero ── */}
          <div style={{ padding: "1.5rem 1.5rem 0" }}>
            <section style={{ position: "relative", backgroundColor: "#0a0a0f", borderRadius: 24 }}>
              {/* Decorative clip wrapper */}
              <div style={{ position: "absolute", inset: 0, borderRadius: 24, overflow: "hidden", pointerEvents: "none" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 800, height: 300, background: "radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.3) 0%, transparent 68%)" }} />
                <div style={{ position: "absolute", bottom: 0, right: 0, width: 400, height: 300, background: "radial-gradient(ellipse at 100% 100%, rgba(108,99,255,0.12) 0%, transparent 65%)" }} />
              </div>

              {/* Badge */}
              <div style={{ position: "absolute", top: 22, right: 28, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
                {[{ n: "24–48h", l: "Turnaround" }, { n: "10+", l: "Years Exp." }].map(s => (
                  <div key={s.l} style={{ padding: "6px 14px", borderRadius: 999, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
                    <span style={{ fontSize: "0.875rem", fontWeight: 800, color: "#fff" }}>{s.n} </span>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>{s.l}</span>
                  </div>
                ))}
              </div>

              <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", padding: "4.5rem 1.5rem 4rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PRIMARY, backgroundColor: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)", padding: "5px 14px", borderRadius: 20, marginBottom: "1.25rem" }}>
                  Repair Services
                </span>
                <h1 style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.06, marginBottom: "1.1rem" }}>
                  Professional <span style={{ color: PRIMARY }}>Phone Repair</span><br />You Can Trust
                </h1>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "2.25rem", maxWidth: 500, margin: "0 auto 2.25rem" }}>
                  Genuine parts. Expert technicians. Fast turnaround. We fix iPhones, Androids, tablets, and more — right here in Jesup, GA.
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                  <button
                    onClick={() => setModalOpen(true)}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      padding: "13px 28px", borderRadius: 999,
                      backgroundColor: PRIMARY, color: "#fff", border: "none",
                      fontSize: "0.9375rem", fontWeight: 700, cursor: "pointer",
                      boxShadow: "0 4px 24px rgba(108,99,255,0.45)",
                      transition: "background 0.15s, transform 0.15s",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = PRIMARY; (e.currentTarget as HTMLElement).style.transform = "none"; }}
                  >
                    <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book a Repair
                  </button>
                  <a href="/contact" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "13px 24px", borderRadius: 999,
                    background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(255,255,255,0.15)", fontSize: "0.9375rem",
                    fontWeight: 600, textDecoration: "none",
                    transition: "background 0.15s",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.14)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"}
                  >
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* ── Services ── */}
          <div style={{ backgroundColor: "#f8fafc", padding: "3.5rem 0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PRIMARY, marginBottom: "0.5rem" }}>What We Fix</p>
                <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "#111", letterSpacing: "-0.04em" }}>Repair Services We Offer</h2>
              </div>
              <div className="repair-services">
                {SERVICES.map(s => (
                  <div key={s.title} className="repair-service-card" style={{ backgroundColor: s.bg, borderColor: s.color + "22" }}>

                    {/* Watermark icon — large, faded, bottom-right */}
                    <div style={{
                      position: "absolute", bottom: -14, right: -14,
                      width: 120, height: 120,
                      opacity: 0.13,
                      pointerEvents: "none",
                    }}>
                      <svg width="120" height="120" fill="none" viewBox="0 0 24 24" stroke={s.color} strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                      </svg>
                    </div>

                    {/* Small colored dot accent top-right */}
                    <div style={{
                      position: "absolute", top: 18, right: 18,
                      width: 8, height: 8, borderRadius: "50%",
                      backgroundColor: s.color, opacity: 0.5,
                    }} />

                    {/* Content */}
                    <div style={{ position: "relative", zIndex: 1 }}>
                      {/* Small icon badge */}
                      <div style={{
                        width: 40, height: 40, borderRadius: 11,
                        backgroundColor: "#fff",
                        boxShadow: `0 2px 12px ${s.color}22`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginBottom: 14,
                      }}>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={s.color} strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                        </svg>
                      </div>
                      <p style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#111", marginBottom: 6, letterSpacing: "-0.02em" }}>{s.title}</p>
                      <p style={{ fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.7 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Supported Brands — Marquee ── */}
          <div style={{ backgroundColor: "#fff", padding: "3rem 0", borderTop: "1px solid #f0f0f4", borderBottom: "1px solid #f0f0f4", overflow: "hidden" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PRIMARY, marginBottom: "0.4rem" }}>Devices We Repair</p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "#111", letterSpacing: "-0.04em" }}>All Major Brands Covered</h2>
            </div>

            {/* Marquee track */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              {/* Left fade */}
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to right, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />
              {/* Right fade */}
              <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to left, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />

              <div className="marquee-track">
                {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((b, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexShrink: 0,
                    padding: "14px 36px",
                    borderRight: "1px solid #f0f0f4",
                    color: b.color,
                    minWidth: 120,
                  }}>
                    {BRAND_LOGOS[b.name]}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Why Choose Us ── */}
          <div style={{ backgroundColor: "#0a0a0f", padding: "3.5rem 0", position: "relative", overflow: "hidden" }}>
            {/* Grid overlay */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
            {/* Purple glow top-center */}
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 900, height: 320, background: "radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.22) 0%, transparent 68%)", pointerEvents: "none" }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", position: "relative" }}>
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PRIMARY, marginBottom: "0.5rem" }}>Why Jesup Wireless</p>
                <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em" }}>The Repair Shop That Puts You First</h2>
              </div>
              <div className="repair-why">
                {WHY_US.map(w => (
                  <div key={w.title} style={{
                    padding: "26px",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 18,
                    backdropFilter: "blur(8px)",
                    transition: "border-color 0.2s, background 0.2s",
                  }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 13,
                      backgroundColor: w.color + "1a",
                      border: `1px solid ${w.color}44`,
                      display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                    }}>
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={w.color} strokeWidth={1.7}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={w.icon} />
                      </svg>
                    </div>
                    <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#fff", marginBottom: 8 }}>{w.title}</p>
                    <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── How It Works ── */}
          <div style={{ backgroundColor: "#fff", padding: "3.5rem 0" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PRIMARY, marginBottom: "0.5rem" }}>Simple Process</p>
                <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "#111", letterSpacing: "-0.04em" }}>How It Works</h2>
              </div>
              <div className="repair-steps">
                {STEPS.map((step, i) => (
                  <div key={step.n} style={{ position: "relative", padding: "28px 24px", backgroundColor: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 20 }}>
                    {/* Connector line */}
                    {i < STEPS.length - 1 && (
                      <div className="desktop-only" style={{ position: "absolute", top: 44, right: -24, width: 48, height: 2, backgroundColor: "#e5e7eb", zIndex: 1 }} />
                    )}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: PRIMARY_LIGHT, border: `2px solid ${PRIMARY}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontSize: "0.8125rem", fontWeight: 900, color: PRIMARY }}>{step.n}</span>
                      </div>
                      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111", letterSpacing: "-0.02em" }}>{step.title}</h3>
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.75 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div style={{ padding: "0 1.5rem 3rem" }}>
            <div style={{ backgroundColor: "#0a0a0f", borderRadius: 24, padding: "3.5rem 2rem", position: "relative", overflow: "hidden", textAlign: "center" }}>
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 700, height: 280, pointerEvents: "none", background: "radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.25) 0%, transparent 68%)" }} />
              <div style={{ position: "relative" }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PRIMARY, marginBottom: "0.75rem" }}>Ready to fix your device?</p>
                <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", marginBottom: "1rem" }}>
                  Book Your Repair in <span style={{ color: PRIMARY }}>Under 2 Minutes</span>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: 480, margin: "0 auto 2rem" }}>
                  Fill out our quick form and our team will reach out on WhatsApp to confirm your booking and answer any questions.
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "14px 32px", borderRadius: 999,
                    backgroundColor: PRIMARY, color: "#fff", border: "none",
                    fontSize: "1rem", fontWeight: 700, cursor: "pointer",
                    boxShadow: "0 4px 24px rgba(108,99,255,0.5)",
                    fontFamily: "inherit",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = PRIMARY}
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Repair Now
                </button>
              </div>
            </div>
          </div>

        </main>
        <Footer />
      </div>

      {/* ── Book Repair Modal ── */}
      {modalOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={closeModal}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <div className="modal-box w-full max-w-lg max-h-[92dvh] bg-white rounded-3xl overflow-hidden flex flex-col shadow-2xl">

              {/* ── Modal header (dark) ── */}
              <div className="relative flex-shrink-0 overflow-hidden" style={{ background: "#0a0a0f", padding: "28px 28px 24px" }}>
                {/* subtle grid */}
                <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
                {/* glow */}
                <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-40 rounded-full" style={{ background: "radial-gradient(ellipse,rgba(108,99,255,0.35) 0%,transparent 70%)" }} />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: PRIMARY, boxShadow: "0 4px 20px rgba(108,99,255,0.5)" }}>
                      <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-white" style={{ fontSize: "1.0625rem", letterSpacing: "-0.03em" }}>Book a Repair</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>We&apos;ll confirm via WhatsApp</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.16)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"}
                  >
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.7)" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>


              </div>

              {/* ── Modal body ── */}
              <div style={{ overflowY: "auto", flex: 1, padding: "24px 28px", backgroundColor: "#fff" }}>
                {submitted ? (
                  /* Success state */
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2rem 1rem" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="#16a34a" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#111", marginBottom: 8, letterSpacing: "-0.03em" }}>Booking Received!</h3>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                      Thanks, <strong style={{ color: "#374151" }}>{form.name}</strong>! Our team will reach out on WhatsApp at <strong style={{ color: "#374151" }}>{form.whatsapp}</strong> shortly to confirm your repair.
                    </p>
                    <button
                      onClick={closeModal}
                      style={{ padding: "10px 28px", borderRadius: 999, backgroundColor: PRIMARY, color: "#fff", border: "none", fontWeight: 700, fontSize: "0.875rem", cursor: "pointer", fontFamily: "inherit" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = PRIMARY}
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>

                    {/* Row 1: Name + WhatsApp */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      {field("Full Name", "name", "text", "John Smith", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z")}
                      {field("WhatsApp", "whatsapp", "tel", "+1 912 000 0000", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z")}
                    </div>

                    {/* Row 2: Email + Phone Model */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      {field("Email", "email", "email", "john@email.com", "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207")}
                      {field("Phone Model", "model", "text", "iPhone 14 Pro", "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z")}
                    </div>

                    {/* Issue description */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.07em" }}>Describe the Issue</label>
                      <textarea
                        placeholder="e.g. Screen is cracked, touch still works but display has lines..."
                        value={form.message}
                        required
                        rows={3}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="outline-none ring-offset-2 focus:ring-2 focus:ring-violet-500 transition-shadow"
                        style={{
                          width: "100%", boxSizing: "border-box",
                          padding: "11px 14px", borderRadius: 10,
                          fontSize: "0.875rem", color: "#111",
                          backgroundColor: "#f9fafb", border: "1.5px solid #e5e7eb",
                          fontFamily: "inherit", resize: "none",
                        }}
                        onFocus={e => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.borderColor = "#a5b4fc"; }}
                        onBlur={e => { e.currentTarget.style.backgroundColor = "#f9fafb"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
                      />
                    </div>



                    {/* Submit */}
                    <button
                      type="submit"
                      style={{
                        width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
                        gap: 10, padding: "14px 0", borderRadius: 14, border: "none",
                        backgroundColor: PRIMARY, color: "#fff", fontSize: "0.9375rem", fontWeight: 700,
                        cursor: "pointer", fontFamily: "inherit",
                        boxShadow: "0 4px 20px rgba(108,99,255,0.35)",
                        transition: "background 0.15s, transform 0.15s",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = PRIMARY; (e.currentTarget as HTMLElement).style.transform = "none"; }}
                    >
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      Submit Booking
                    </button>

                  </form>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
