"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySidebar from "@/components/CategorySidebar";

const PRIMARY = "#6C63FF";
const PRIMARY_LIGHT = "#f0eeff";

const CONTACT_METHODS = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Call Us",
    value: "+1 (912) 427-0000",
    sub: "Mon–Fri 9 AM–6 PM · Sat 10 AM–4 PM",
    href: "tel:9124270000",
    color: PRIMARY,
    bg: PRIMARY_LIGHT,
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    sub: "Quick responses during business hours",
    href: "https://wa.me/19124270000",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email Us",
    value: "support@jesupwireless.com",
    sub: "We respond within 1 business day",
    href: "mailto:support@jesupwireless.com",
    color: "#0284c7",
    bg: "#f0f9ff",
  },
];

const SUBJECTS = [
  "General Inquiry",
  "Wholesale / Bulk Order",
  "Order Support",
  "Returns & Refunds",
  "Product Information",
  "Other",
];


export default function ContactPage() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  };

  const inputCls: React.CSSProperties = {
    width: "100%", boxSizing: "border-box",
    padding: "11px 14px", fontSize: "0.875rem", fontFamily: "inherit",
    color: "#111", backgroundColor: "#fafafa",
    borderWidth: "1.5px", borderStyle: "solid", borderColor: "#e5e7eb",
    borderRadius: 10, outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
  };

  const focusCls = (name: string): React.CSSProperties =>
    focused === name
      ? { ...inputCls, borderColor: PRIMARY, boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${PRIMARY}` }
      : inputCls;

  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .cct-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; }
        .cct-layout { display: grid; grid-template-columns: 1fr 380px; gap: 2rem; align-items: start; }
        .cct-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .cct-method-card { display: flex; align-items: flex-start; gap: 14px; background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 18px; text-decoration: none; transition: border-color 0.15s, box-shadow 0.15s; }
        .cct-method-card:hover { border-color: ${PRIMARY}; box-shadow: 0 4px 18px rgba(108,99,255,0.12); }
        @media (max-width: 860px) {
          .cct-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .cct-cards { grid-template-columns: 1fr; }
          .cct-form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <CategorySidebar externalOpen={categoryOpen} onRequestClose={() => setCategoryOpen(false)} />

      <div className="sidebar-offset" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "var(--background)" }}>
        <Navbar onCategoryToggle={() => setCategoryOpen(v => !v)} />

        <main className="pb-16 lg:pb-0" style={{ flex: 1 }}>

          {/* ── Hero ── */}
          <section style={{ position: "relative", overflow: "hidden", backgroundColor: "#0a0a0f", padding: "4.5rem 0 3.5rem" }}>
            {/* Grid texture */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
            {/* Purple glow */}
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 240, pointerEvents: "none", background: "radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.2) 0%, transparent 70%)" }} />
            <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PRIMARY, backgroundColor: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)", padding: "5px 14px", borderRadius: 20, marginBottom: "1.25rem" }}>
                Contact Us
              </span>
              <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.08, marginBottom: "1rem" }}>
                We&apos;d Love to <span style={{ color: PRIMARY }}>Hear From You</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
                Reach out by phone, WhatsApp, or email — or fill in the form below. Our team typically responds within one business day.
              </p>
            </div>
          </section>

          {/* ── Contact method cards ── */}
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
            <div className="cct-cards" style={{ marginTop: "-1px", paddingTop: "2.5rem" }}>
              {CONTACT_METHODS.map(m => (
                <a key={m.label} href={m.href} className="cct-method-card" target={m.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: m.bg, color: m.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {m.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 3 }}>{m.label}</p>
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111", lineHeight: 1.4, marginBottom: 3 }}>{m.value}</p>
                    <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>{m.sub}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── Form + Info ── */}
          <div style={{ backgroundColor: "#f8fafc", marginTop: "2.5rem", padding: "3rem 0 4rem" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
              <div className="cct-layout">

                {/* Form */}
                <div style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderTop: `3px solid ${PRIMARY}`, borderRadius: 20, padding: "2.25rem 2.25rem 2.5rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                  {submitted ? (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 380, textAlign: "center", gap: 16 }}>
                      <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={2.2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>Message Sent!</h3>
                      <p style={{ fontSize: "0.875rem", color: "#6b7280", maxWidth: 300, lineHeight: 1.7 }}>
                        Thanks for reaching out. Our team will get back to you within 1 business day.
                      </p>
                      <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                        style={{ fontSize: "0.875rem", fontWeight: 600, color: PRIMARY, background: "none", border: "none", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 4 }}>
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em", marginBottom: 4 }}>Send Us a Message</h2>
                      <p style={{ fontSize: "0.8rem", color: "#9ca3af", marginBottom: "1.75rem" }}>Fill in the form and we&apos;ll get back to you shortly.</p>

                      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div className="cct-form-row">
                          <div>
                            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Full Name <span style={{ color: "#ef4444" }}>*</span></label>
                            <input required type="text" placeholder="John Smith" value={form.name}
                              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                              onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                              style={focusCls("name")} />
                          </div>
                          <div>
                            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Phone Number</label>
                            <input type="tel" placeholder="+1 (912) 000-0000" value={form.phone}
                              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                              onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                              style={focusCls("phone")} />
                          </div>
                        </div>

                        <div>
                          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email Address <span style={{ color: "#ef4444" }}>*</span></label>
                          <input required type="email" placeholder="john@example.com" value={form.email}
                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                            onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                            style={focusCls("email")} />
                        </div>

                        <div>
                          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Subject <span style={{ color: "#ef4444" }}>*</span></label>
                          <select required value={form.subject}
                            onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                            onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)}
                            style={{ ...focusCls("subject"), appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 38, cursor: "pointer" }}>
                            <option value="" disabled>Select a subject…</option>
                            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>

                        <div>
                          <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Message <span style={{ color: "#ef4444" }}>*</span></label>
                          <textarea required rows={5} placeholder="Tell us about your inquiry, wholesale needs, or how we can help…"
                            value={form.message}
                            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                            onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                            style={{ ...focusCls("message"), resize: "vertical", minHeight: 120 }} />
                        </div>

                        <button type="submit" disabled={loading}
                          style={{ padding: "13px", borderRadius: 11, border: "none", backgroundColor: loading ? "#a5a0f0" : PRIMARY, color: "#fff", fontSize: "0.9375rem", fontWeight: 700, fontFamily: "inherit", cursor: loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "background-color 0.15s" }}
                          onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"; }}
                          onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLElement).style.backgroundColor = PRIMARY; }}>
                          {loading ? (
                            <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{ animation: "spin 0.8s linear infinite" }}><circle cx="12" cy="12" r="9" strokeOpacity={0.2} /><path d="M21 12c0-4.97-4.03-9-9-9" /></svg>Sending…</>
                          ) : (
                            <>Send Message<svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>

                {/* Right info column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                  {/* Trust stats */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    {[
                      { value: "< 1 day", label: "Response Time", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                      { value: "10+ yrs", label: "In Business", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
                      { value: "5,000+", label: "Happy Clients", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
                      { value: "24/7", label: "Online Orders", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
                    ].map(s => (
                      <div key={s.label} style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "1.1rem 1rem", display: "flex", flexDirection: "column", gap: 6 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
                        </div>
                        <p style={{ fontSize: "1.125rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>{s.value}</p>
                        <p style={{ fontSize: "0.75rem", color: "#9ca3af", fontWeight: 500 }}>{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Preferred contact */}
                  <div style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 20, padding: "1.75rem" }}>
                    <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#111", marginBottom: "1.25rem" }}>Preferred Contact</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                      {[
                        { label: "Phone", value: "+1 (912) 427-0000", href: "tel:9124270000", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                        { label: "Email", value: "support@jesupwireless.com", href: "mailto:support@jesupwireless.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                        { label: "WhatsApp", value: "Chat instantly", href: "https://wa.me/19124270000", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
                      ].map(c => (
                        <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                          style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 11, border: "1px solid #f0f0f4", textDecoration: "none", transition: "border-color 0.15s, background 0.15s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = PRIMARY; (e.currentTarget as HTMLElement).style.background = PRIMARY_LIGHT; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#f0f0f4"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                        >
                          <div style={{ width: 34, height: 34, borderRadius: 9, backgroundColor: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={c.icon} /></svg>
                          </div>
                          <div>
                            <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.label}</p>
                            <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#111" }}>{c.value}</p>
                          </div>
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth={2} style={{ marginLeft: "auto" }}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Wholesale CTA */}
                  <a href="#"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px", borderRadius: 14, backgroundColor: PRIMARY, color: "#fff", fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none", transition: "background-color 0.15s", boxShadow: "0 4px 18px rgba(108,99,255,0.3)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = PRIMARY}>
                    Request Wholesale Pricing
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Google Map ── */}
          <div style={{ backgroundColor: "#f8fafc", padding: "0 0 4rem" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
              <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #e5e7eb", height: 340, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <iframe
                  title="Jesup Wireless Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.0!2d-81.8835!3d31.6065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f03c2d5d5d5d5d%3A0x0!2sJesup%2C+GA+31545!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
}
