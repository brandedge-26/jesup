"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySidebar from "@/components/CategorySidebar";

const PRIMARY = "#6C63FF";

const SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing and using the Jesup Wireless website (jesupwireless.com) and any services offered therein, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    id: "services",
    title: "Our Services",
    content: `Jesup Wireless provides mobile device repair services including but not limited to screen replacement, battery replacement, charging port repair, camera repair, water damage recovery, and software issue resolution. Service availability, pricing, and turnaround times are subject to change without prior notice.`,
    bullets: [
      "All repair services are performed by certified technicians using manufacturer-grade or OEM parts.",
      "Turnaround times are estimates only; actual repair time may vary based on parts availability and device condition.",
      "We reserve the right to refuse service for devices that are beyond reasonable repair or pose a safety risk.",
      "Prices quoted are estimates and may change after our technicians have assessed your device.",
    ],
  },
  {
    id: "warranty",
    title: "Warranty & Liability",
    content: `We stand behind our work. All repairs carried out by Jesup Wireless come with a limited warranty covering parts and labor for defects arising from our repair.`,
    bullets: [
      "Our warranty does not cover physical damage, water damage, or issues unrelated to the original repair performed.",
      "Pre-existing conditions on the device at the time of repair are not covered under warranty.",
      "Warranty claims must be made within the warranty period with proof of service.",
      "Jesup Wireless is not liable for data loss during repair. We strongly recommend backing up your device before bringing it in.",
      "Our liability is limited to the cost of the repair service provided.",
    ],
  },
  {
    id: "data-privacy",
    title: "Data & Privacy During Repair",
    content: `We respect your privacy. Our technicians will only access the functions of your device necessary to complete the requested repair. We will not access, copy, transmit, or store any personal data, files, photos, messages, or accounts on your device.\n\nWe strongly recommend that you back up your data before handing your device to us. Jesup Wireless is not responsible for any data loss that may occur during the repair process.`,
  },
  {
    id: "user-conduct",
    title: "User Conduct",
    content: `When using our website or interacting with our services, you agree not to:`,
    bullets: [
      "Provide false or misleading information when booking a repair or contacting us.",
      "Use our website for any unlawful purpose or in violation of any regulations.",
      "Attempt to gain unauthorized access to any part of our website or systems.",
      "Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.",
      "Submit devices that contain illegal content, stolen property, or any material that violates applicable law.",
    ],
  },
  {
    id: "payments",
    title: "Payments & Refunds",
    content: `Payment is due upon completion of the repair service. We accept cash and major credit/debit cards. Diagnostic fees may apply if a repair cannot be completed.\n\nRefund requests will be handled on a case-by-case basis. If a repair fails to resolve the stated issue, we will re-evaluate and re-repair at no additional charge within the warranty period. Refunds are issued at our discretion.`,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: `All content on jesupwireless.com — including text, graphics, logos, icons, images, and software — is the property of Jesup Wireless Inc. and is protected by applicable copyright and intellectual property laws.\n\nYou may not reproduce, duplicate, copy, sell, or exploit any portion of our website without our express written permission.`,
  },
  {
    id: "third-party",
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites. These links are provided for your convenience only. Jesup Wireless has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them. When you access a third-party website from our site, please understand that we have no control over that website's content or privacy practices.`,
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    content: `Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. Jesup Wireless does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.\n\nTo the fullest extent permitted by law, Jesup Wireless disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.`,
  },
  {
    id: "changes",
    title: "Changes to Terms",
    content: `Jesup Wireless reserves the right to update or modify these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting to the website. Your continued use of the website following any changes constitutes your acceptance of the new terms. We encourage you to review these Terms periodically.`,
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Georgia, United States, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Wayne County, Georgia.`,
  },
  {
    id: "contact",
    title: "Contact Information",
    content: `If you have any questions about these Terms and Conditions, please contact us:\n\nJesup Wireless Inc.\nJesup, GA, United States\nEmail: support@jesupwireless.com\nPhone: +1 (912) 427-0000\nWebsite: www.jesupwireless.com`,
  },
];

export default function TermsPage() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [activeId, setActiveId] = useState("acceptance");

  const scrollTo = (id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        .terms-layout { display: grid; grid-template-columns: 240px 1fr; gap: 2.5rem; align-items: start; }
        .terms-sidebar { position: sticky; top: 88px; }
        @media (max-width: 900px) { .terms-layout { grid-template-columns: 1fr; } .terms-sidebar { display: none; } }
        .terms-section + .terms-section { border-top: 1px solid #f0f0f6; padding-top: 2rem; margin-top: 2rem; }
      `}</style>

      <CategorySidebar externalOpen={categoryOpen} onRequestClose={() => setCategoryOpen(false)} />

      <div className="sidebar-offset" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "var(--background)" }}>
        <Navbar onCategoryToggle={() => setCategoryOpen(v => !v)} />

        <main className="pb-16 lg:pb-0" style={{ flex: 1 }}>

          {/* ── Hero ── */}
          <div style={{ padding: "1.5rem 1.5rem 0" }}>
            <section style={{ position: "relative", backgroundColor: "#0a0a0f", borderRadius: 24, overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 700, height: 280, background: "radial-gradient(ellipse at 50% 0%,rgba(108,99,255,0.28) 0%,transparent 68%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", maxWidth: 600, margin: "0 auto", textAlign: "center", padding: "4rem 1.5rem 3.5rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PRIMARY, backgroundColor: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)", padding: "5px 14px", borderRadius: 20, marginBottom: "1.25rem" }}>
                  Legal
                </span>
                <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "1rem" }}>
                  Terms & Conditions
                </h1>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9375rem", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 1.5rem" }}>
                  Please read these terms carefully before using our website or repair services. By using <strong style={{ color: "rgba(255,255,255,0.7)" }}>jesupwireless.com</strong>, you agree to these terms.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.4)" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>Last updated: May 2, 2026</span>
                </div>
              </div>
            </section>
          </div>

          {/* ── Quick nav pills (mobile-friendly) ── */}
          <div style={{ padding: "1.5rem 1.5rem 0", display: "none" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {SECTIONS.slice(0, 6).map(s => (
                <button key={s.id} onClick={() => scrollTo(s.id)} style={{ padding: "6px 14px", borderRadius: 999, fontSize: "0.75rem", fontWeight: 600, border: `1px solid #e5e7eb`, backgroundColor: "#f8fafc", color: "#374151", cursor: "pointer", fontFamily: "inherit" }}>
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* ── Content ── */}
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>
            <div className="terms-layout">

              {/* Sidebar nav */}
              <aside className="terms-sidebar">
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 12 }}>On this page</p>
                <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {SECTIONS.map(s => (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      style={{
                        textAlign: "left", padding: "7px 12px", borderRadius: 8, border: "none",
                        backgroundColor: activeId === s.id ? "#f0eeff" : "transparent",
                        color: activeId === s.id ? PRIMARY : "#6b7280",
                        fontSize: "0.8125rem", fontWeight: activeId === s.id ? 600 : 400,
                        cursor: "pointer", fontFamily: "inherit",
                        borderLeft: `2px solid ${activeId === s.id ? PRIMARY : "transparent"}`,
                        transition: "all 0.15s",
                      }}
                    >
                      {s.title}
                    </button>
                  ))}
                </nav>

                <div style={{ marginTop: 24, padding: "16px", backgroundColor: "#fff8ed", border: "1px solid #fde68a", borderRadius: 12 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#d97706" strokeWidth={2} style={{ flexShrink: 0, marginTop: 1 }}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#92400e" }}>Important Notice</p>
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "#a16207", lineHeight: 1.6 }}>These terms are legally binding. Please read them carefully before using our services.</p>
                </div>

                <div style={{ marginTop: 12, padding: "16px", backgroundColor: "#f8fafc", borderRadius: 12, border: "1px solid #e5e7eb" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Also read</p>
                  <a href="/privacy" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", fontWeight: 500, color: PRIMARY, textDecoration: "none" }}>
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    Privacy Policy
                  </a>
                </div>
              </aside>

              {/* Main content */}
              <article>
                {/* Intro box */}
                <div style={{ padding: "18px 22px", backgroundColor: "#f0eeff", border: "1px solid #ddd6fe", borderRadius: 14, marginBottom: "2.5rem", display: "flex", gap: 14 }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <p style={{ fontSize: "0.875rem", color: "#4c1d95", lineHeight: 1.7, margin: 0 }}>
                    These Terms and Conditions govern your use of the Jesup Wireless website and repair services. By accessing our website or booking a repair, you agree to these terms in full. These terms were last updated on <strong>May 2, 2026</strong>.
                  </p>
                </div>

                {SECTIONS.map((s) => (
                  <div key={s.id} id={s.id} className="terms-section" style={{ scrollMarginTop: 100 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                      <div style={{ width: 6, height: 28, borderRadius: 3, backgroundColor: PRIMARY, flexShrink: 0 }} />
                      <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em", margin: 0 }}>{s.title}</h2>
                    </div>

                    {"content" in s && s.content && s.content.split("\n\n").map((para, i) => (
                      <p key={i} style={{ fontSize: "0.9375rem", color: "#4b5563", lineHeight: 1.8, marginBottom: 14 }}>{para}</p>
                    ))}

                    {"bullets" in s && s.bullets && (
                      <ul style={{ listStyle: "none", padding: 0, margin: "12px 0", display: "flex", flexDirection: "column", gap: 8 }}>
                        {s.bullets.map((b, i) => (
                          <li key={i} style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: PRIMARY, flexShrink: 0, marginTop: 8 }} />
                            <span style={{ fontSize: "0.9375rem", color: "#4b5563", lineHeight: 1.8 }}>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Bottom links */}
                <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <a href="/privacy" style={{
                    display: "flex", alignItems: "center", gap: 12, padding: "18px 20px",
                    backgroundColor: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 14,
                    textDecoration: "none", transition: "border-color 0.15s",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = PRIMARY + "66"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb"}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: "#f0eeff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111", margin: 0 }}>Privacy Policy</p>
                      <p style={{ fontSize: "0.75rem", color: "#9ca3af", margin: "2px 0 0" }}>How we handle your data</p>
                    </div>
                  </a>
                  <a href="/contact" style={{
                    display: "flex", alignItems: "center", gap: 12, padding: "18px 20px",
                    backgroundColor: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 14,
                    textDecoration: "none", transition: "border-color 0.15s",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = PRIMARY + "66"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb"}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#16a34a" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111", margin: 0 }}>Contact Us</p>
                      <p style={{ fontSize: "0.75rem", color: "#9ca3af", margin: "2px 0 0" }}>Questions about these terms?</p>
                    </div>
                  </a>
                </div>
              </article>
            </div>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
}
