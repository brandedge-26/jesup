"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySidebar from "@/components/CategorySidebar";

const PRIMARY = "#6C63FF";

const SECTIONS = [
  {
    id: "consent",
    title: "Consent",
    content: `By using our website, you hereby consent to our Privacy Policy and agree to its terms.`,
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: `The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.\n\nIf you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.\n\nWhen you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.`,
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    bullets: [
      "Provide, operate, and maintain our website",
      "Improve, personalize, and expand our website",
      "Understand and analyze how you use our website",
      "Develop new products, services, features, and functionality",
      "Communicate with you, including for customer service, updates, and marketing purposes",
      "Send you emails",
      "Find and prevent fraud",
    ],
  },
  {
    id: "log-files",
    title: "Log Files",
    content: `jesupwireless.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.`,
  },
  {
    id: "cookies",
    title: "Cookies and Web Beacons",
    content: `Like any other website, jesupwireless.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.`,
  },
  {
    id: "third-party",
    title: "Third Party Privacy Policies",
    content: `jesupwireless.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.\n\nYou can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.`,
  },
  {
    id: "ccpa",
    title: "CCPA Privacy Rights",
    subtitle: "Do Not Sell My Personal Information",
    content: `Under the CCPA, among other rights, California consumers have the right to:`,
    bullets: [
      "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
      "Request that a business delete any personal data about the consumer that a business has collected.",
      "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.",
    ],
    footer: "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
  },
  {
    id: "gdpr",
    title: "GDPR Data Protection Rights",
    content: `We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:`,
    rights: [
      { name: "The right to access", desc: "You have the right to request copies of your personal data. We may charge you a small fee for this service." },
      { name: "The right to rectification", desc: "You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete." },
      { name: "The right to erasure", desc: "You have the right to request that we erase your personal data, under certain conditions." },
      { name: "The right to restrict processing", desc: "You have the right to request that we restrict the processing of your personal data, under certain conditions." },
      { name: "The right to object to processing", desc: "You have the right to object to our processing of your personal data, under certain conditions." },
      { name: "The right to data portability", desc: "You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions." },
    ],
    footer: "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
  },
  {
    id: "children",
    title: "Children's Information",
    content: `Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.\n\njesupwireless.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.`,
  },
];

export default function PrivacyPage() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [activeId, setActiveId] = useState("consent");

  const scrollTo = (id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        .privacy-layout { display: grid; grid-template-columns: 240px 1fr; gap: 2.5rem; align-items: start; }
        .privacy-sidebar { position: sticky; top: 88px; }
        @media (max-width: 900px) { .privacy-layout { grid-template-columns: 1fr; } .privacy-sidebar { display: none; } }
        .prose-section + .prose-section { border-top: 1px solid #f0f0f6; padding-top: 2rem; margin-top: 2rem; }
        .right-item { display: flex; align-items: baseline; gap: 10px; margin-bottom: 10px; }
        .right-dot { width: 6px; height: 6px; border-radius: 50%; background: ${PRIMARY}; flex-shrink: 0; margin-top: 7px; }
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
                  Privacy Policy
                </h1>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9375rem", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 1.5rem" }}>
                  At <strong style={{ color: "rgba(255,255,255,0.7)" }}>jesupwireless.com</strong>, one of our main priorities is the privacy of our visitors. This document explains what we collect and how we use it.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.4)" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>Last updated: May 2, 2026</span>
                </div>
              </div>
            </section>
          </div>

          {/* ── Content ── */}
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>
            <div className="privacy-layout">

              {/* Sidebar nav */}
              <aside className="privacy-sidebar">
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
                <div style={{ marginTop: 24, padding: "16px", backgroundColor: "#f8fafc", borderRadius: 12, border: "1px solid #e5e7eb" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Questions?</p>
                  <p style={{ fontSize: "0.75rem", color: "#9ca3af", lineHeight: 1.6, marginBottom: 10 }}>Contact us anytime if you have concerns about your data.</p>
                  <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.75rem", fontWeight: 600, color: PRIMARY, textDecoration: "none" }}>
                    Contact Us
                    <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </a>
                </div>
              </aside>

              {/* Main content */}
              <article>
                {/* Intro box */}
                <div style={{ padding: "18px 22px", backgroundColor: "#f0eeff", border: "1px solid #ddd6fe", borderRadius: 14, marginBottom: "2.5rem", display: "flex", gap: 14 }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p style={{ fontSize: "0.875rem", color: "#4c1d95", lineHeight: 1.7, margin: 0 }}>
                    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect on jesupwireless.com. This policy is not applicable to any information collected offline or via channels other than this website.
                  </p>
                </div>

                {SECTIONS.map((s) => (
                  <div key={s.id} id={s.id} className="prose-section" style={{ scrollMarginTop: 100 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                      <div style={{ width: 6, height: 28, borderRadius: 3, backgroundColor: PRIMARY, flexShrink: 0 }} />
                      <div>
                        <h2 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em", margin: 0 }}>{s.title}</h2>
                        {"subtitle" in s && s.subtitle && <p style={{ fontSize: "0.75rem", color: "#9ca3af", margin: "2px 0 0", fontWeight: 500 }}>{s.subtitle}</p>}
                      </div>
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

                    {"rights" in s && s.rights && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "16px 0" }}>
                        {s.rights.map((r, i) => (
                          <div key={i} style={{ padding: "14px 18px", backgroundColor: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 12 }}>
                            <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111", marginBottom: 4 }}>{r.name}</p>
                            <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{r.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {"footer" in s && s.footer && (
                      <p style={{ fontSize: "0.9375rem", color: "#4b5563", lineHeight: 1.8, marginTop: 10 }}>{s.footer}</p>
                    )}
                  </div>
                ))}

                {/* Bottom CTA */}
                <div style={{ marginTop: "2.5rem", padding: "24px", backgroundColor: "#0a0a0f", borderRadius: 18, textAlign: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
                  <div style={{ position: "relative" }}>
                    <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#fff", marginBottom: 6 }}>Still have questions?</p>
                    <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>Reach out and we'll respond within 1 business day.</p>
                    <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", borderRadius: 999, backgroundColor: PRIMARY, color: "#fff", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}>
                      Contact Us
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </a>
                  </div>
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
