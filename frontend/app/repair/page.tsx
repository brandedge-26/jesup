"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySidebar from "@/components/CategorySidebar";

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

// Brand logo SVGs — simplified iconic marks
const BRAND_LOGOS: Record<string, JSX.Element> = {
  Apple: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  ),
  Samsung: (
    <svg viewBox="0 0 80 20" fill="currentColor" width="80" height="20">
      <text x="0" y="16" fontSize="16" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1">SAMSUNG</text>
    </svg>
  ),
  OnePlus: (
    <svg viewBox="0 0 60 24" fill="currentColor" width="60" height="24">
      <text x="0" y="19" fontSize="18" fontWeight="900" fontFamily="Arial, sans-serif">1+</text>
      <text x="28" y="19" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">OnePlus</text>
    </svg>
  ),
  Oppo: (
    <svg viewBox="0 0 60 24" fill="currentColor" width="60" height="24">
      <text x="0" y="19" fontSize="18" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1">OPPO</text>
    </svg>
  ),
  Realme: (
    <svg viewBox="0 0 72 24" fill="currentColor" width="72" height="24">
      <text x="0" y="19" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif">realme</text>
    </svg>
  ),
  Vivo: (
    <svg viewBox="0 0 48 24" fill="currentColor" width="48" height="24">
      <text x="0" y="19" fontSize="18" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1">vivo</text>
    </svg>
  ),
  Xiaomi: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <rect x="2" y="6" width="8" height="12" rx="4"/>
      <rect x="14" y="6" width="8" height="12" rx="4"/>
      <rect x="7" y="6" width="10" height="12" rx="0"/>
    </svg>
  ),
  Huawei: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M12 2l2.4 4.8L12 12 9.6 6.8 12 2zm0 20l-2.4-4.8L12 12l2.4 5.2L12 22zm10-10l-4.8 2.4L12 12l5.2-2.4L22 12zm-20 0l4.8-2.4L12 12l-5.2 2.4L2 12zm17.07-7.07l-4.24 3.3L12 12l2.83-5.19 4.24-1.88zm-14.14 0l4.24 1.88L12 12 9.17 6.81 4.93 4.93zm14.14 14.14l-4.24-1.88L12 12l2.83 5.19 4.24 1.88zm-14.14 0l4.24-3.3L12 12l-2.83 5.19-4.24 1.88z"/>
    </svg>
  ),
  Motorola: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
    </svg>
  ),
  Nokia: (
    <svg viewBox="0 0 60 24" fill="currentColor" width="60" height="24">
      <text x="0" y="19" fontSize="17" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="2">NOKIA</text>
    </svg>
  ),
  Tecno: (
    <svg viewBox="0 0 66 24" fill="currentColor" width="66" height="24">
      <text x="0" y="19" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1">TECNO</text>
    </svg>
  ),
  Infinix: (
    <svg viewBox="0 0 70 24" fill="currentColor" width="70" height="24">
      <text x="0" y="19" fontSize="15" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="1">INFINIX</text>
    </svg>
  ),
};

const MARQUEE_BRANDS = [
  { name: "Apple",   color: "#111111" },
  { name: "Samsung", color: "#1428A0" },
  { name: "OnePlus", color: "#F5010C" },
  { name: "Oppo",    color: "#1D5E2A" },
  { name: "Realme",  color: "#F5A623" },
  { name: "Vivo",    color: "#415FFF" },
  { name: "Xiaomi",  color: "#FF6900" },
  { name: "Huawei",  color: "#CF0A2C" },
  { name: "Motorola",color: "#0000E6" },
  { name: "Nokia",   color: "#124191" },
  { name: "Tecno",   color: "#0080FF" },
  { name: "Infinix", color: "#111111" },
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

  const field = (label: string, key: keyof FormData, type = "text", placeholder = "") => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#374151" }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[key]}
        required
        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
        style={{
          padding: "11px 14px", borderRadius: 10, fontSize: "0.9rem", color: "#111",
          border: "1.5px solid #e5e7eb", outline: "none", fontFamily: "inherit",
          transition: "border-color 0.15s",
        }}
        onFocus={e => (e.currentTarget.style.borderColor = PRIMARY)}
        onBlur={e => (e.currentTarget.style.borderColor = "#e5e7eb")}
      />
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
                    display: "flex", alignItems: "center", gap: 10, flexShrink: 0,
                    padding: "12px 32px",
                    borderRight: "1px solid #f0f0f4",
                    color: b.color,
                  }}>
                    {BRAND_LOGOS[b.name]}
                    {/* Separator dot after last item before repeat */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Why Choose Us ── */}
          <div style={{ backgroundColor: "#f8fafc", padding: "3.5rem 0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PRIMARY, marginBottom: "0.5rem" }}>Why Jesup Wireless</p>
                <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "#111", letterSpacing: "-0.04em" }}>The Repair Shop That Puts You First</h2>
              </div>
              <div className="repair-why">
                {WHY_US.map(w => (
                  <div key={w.title} style={{ padding: "24px", backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 18 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 13, backgroundColor: w.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={w.color} strokeWidth={1.7}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={w.icon} />
                      </svg>
                    </div>
                    <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#111", marginBottom: 8 }}>{w.title}</p>
                    <p style={{ fontSize: "0.8125rem", color: "#6b7280", lineHeight: 1.7 }}>{w.desc}</p>
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
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.55)", zIndex: 100, backdropFilter: "blur(4px)" }}
          />

          {/* Modal */}
          <div style={{ position: "fixed", inset: 0, zIndex: 101, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
            <div className="modal-box" style={{
              width: "100%", maxWidth: 500, maxHeight: "90dvh",
              backgroundColor: "#fff", borderRadius: 24,
              overflow: "hidden", display: "flex", flexDirection: "column",
              boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
            }}>
              {/* Modal header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px 18px", borderBottom: "1px solid #f0f0f4", flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", backgroundColor: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: "1rem", color: "#111", letterSpacing: "-0.03em" }}>Book a Repair</p>
                    <p style={{ fontSize: "0.7rem", color: "#9ca3af", fontWeight: 500 }}>We&apos;ll contact you on WhatsApp to confirm</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid #e8e8f0", backgroundColor: "#f8f8fb", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#eeeef4"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#f8f8fb"}
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#555" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              {/* Modal body */}
              <div style={{ overflowY: "auto", flex: 1, padding: "24px" }}>
                {submitted ? (
                  /* Success state */
                  <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="#16a34a" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#111", marginBottom: 8, letterSpacing: "-0.03em" }}>Booking Received!</h3>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                      Thanks, <strong>{form.name}</strong>! Our team will reach out on WhatsApp at <strong>{form.whatsapp}</strong> shortly to confirm your repair booking.
                    </p>
                    <button
                      onClick={closeModal}
                      style={{ padding: "11px 28px", borderRadius: 999, backgroundColor: PRIMARY, color: "#fff", border: "none", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", fontFamily: "inherit" }}
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {field("Full Name", "name", "text", "e.g. John Smith")}
                    {field("WhatsApp Number", "whatsapp", "tel", "e.g. +1 912 427 0000")}
                    {field("Email Address", "email", "email", "e.g. john@email.com")}
                    {field("Phone Model", "model", "text", "e.g. iPhone 14 Pro, Samsung S23 Ultra")}

                    {/* Message textarea */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#374151" }}>Describe the Issue</label>
                      <textarea
                        placeholder="e.g. Screen is cracked on the top right corner, touch still works but display has lines..."
                        value={form.message}
                        required
                        rows={4}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        style={{
                          padding: "11px 14px", borderRadius: 10, fontSize: "0.9rem", color: "#111",
                          border: "1.5px solid #e5e7eb", outline: "none", fontFamily: "inherit",
                          resize: "vertical", transition: "border-color 0.15s",
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = PRIMARY)}
                        onBlur={e => (e.currentTarget.style.borderColor = "#e5e7eb")}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        marginTop: 4, padding: "13px 0", borderRadius: 999,
                        backgroundColor: PRIMARY, color: "#fff", border: "none",
                        fontWeight: 700, fontSize: "0.9375rem", cursor: "pointer",
                        fontFamily: "inherit", display: "flex", alignItems: "center",
                        justifyContent: "center", gap: 8, transition: "background 0.15s",
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = PRIMARY}
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
