"use client";
import { useState } from "react";
import {
  Eye, EyeOff, ArrowRight, Loader2, Check,
  BadgePercent, LayoutDashboard, Gift,
} from "lucide-react";

const PERKS = [
  { icon: BadgePercent,    title: "Wholesale Pricing",  desc: "Get B2B rates on all products" },
  { icon: LayoutDashboard, title: "Order Dashboard",    desc: "Track every shipment in real time" },
  { icon: Gift,            title: "Member Exclusives",  desc: "Early access to new arrivals" },
];

/* ── Reusable Input ── */
function InputField({
  label, type = "text", placeholder, value, onChange, id, hint,
}: {
  label: string; type?: string; placeholder: string;
  value: string; onChange: (v: string) => void; id: string; hint?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const isPassword = type === "password";
  const inputType  = isPassword ? (showPwd ? "text" : "password") : type;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: "0.8125rem", fontWeight: 600, color: "rgba(255,255,255,0.65)", letterSpacing: "-0.01em" }}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <input
          id={id} type={inputType} placeholder={placeholder}
          value={value} onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%", boxSizing: "border-box",
            padding: isPassword ? "13px 48px 13px 16px" : "13px 16px",
            borderRadius: 12,
            border: `1.5px solid ${focused ? "var(--accent)" : "rgba(255,255,255,0.10)"}`,
            backgroundColor: focused ? "rgba(0,194,176,0.04)" : "rgba(255,255,255,0.04)",
            color: "#fff", fontSize: "0.9375rem", fontFamily: "inherit",
            letterSpacing: "-0.01em", outline: "none",
            transition: "border-color 0.2s, background-color 0.2s",
          }}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPwd(v => !v)}
            style={{
              position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", cursor: "pointer", padding: 0,
              color: "rgba(255,255,255,0.30)", display: "flex", alignItems: "center",
              transition: "color 0.15s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.70)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.30)")}
          >
            {showPwd ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        )}
      </div>
      {hint && (
        <p style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.28)", letterSpacing: "-0.005em", marginTop: 2 }}>
          {hint}
        </p>
      )}
    </div>
  );
}

/* ── Password Strength Bar ── */
function StrengthBar({ password }: { password: string }) {
  const score = !password ? 0
    : password.length < 6 ? 1
    : password.length < 10 ? 2
    : /[A-Z]/.test(password) && /[0-9!@#$%]/.test(password) ? 4 : 3;

  const meta = [
    { color: "", label: "" },
    { color: "#ef4444", label: "Weak" },
    { color: "#f59e0b", label: "Fair" },
    { color: "#22c55e", label: "Strong" },
    { color: "#00c2b0", label: "Very strong" },
  ];

  if (!password) return null;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: -2 }}>
      <div style={{ flex: 1, display: "flex", gap: 4 }}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 2,
            backgroundColor: i <= score ? meta[score].color : "rgba(255,255,255,0.10)",
            transition: "background-color 0.2s",
          }} />
        ))}
      </div>
      <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: meta[score].color, letterSpacing: "-0.005em", whiteSpace: "nowrap" }}>
        {meta[score].label}
      </span>
    </div>
  );
}

/* ── Main Page ── */
export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [password,  setPassword]  = useState("");
  const [agreed,    setAgreed]    = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  return (
    <div
      className="grid lg:grid-cols-2"
      style={{
        minHeight: "100vh",
        fontFamily: "var(--font-work-sans), 'Helvetica Neue', Arial, sans-serif",
      }}
    >

      {/* ── LEFT PANEL ── */}
      <div
        className="hidden lg:flex"
        style={{
          position: "relative",
          background: "linear-gradient(150deg, #060c0b 0%, #0a1f1c 50%, #071410 100%)",
          flexDirection: "column", justifyContent: "space-between",
          padding: "2.5rem", overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(0,194,176,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div style={{
          position: "absolute", top: "15%", right: "-10%",
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,194,176,0.10) 0%, transparent 65%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />

        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", position: "relative", zIndex: 1 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 11,
            background: "linear-gradient(135deg, var(--accent) 0%, #00a899 100%)",
            boxShadow: "0 4px 16px rgba(0,194,176,0.35)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="18" height="18" viewBox="0 0 20 22" fill="none">
              <path d="M14 2H16V14C16 18 13 20 9 20C5 20 2 18 2 14" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em" }}>Jesup</span>
        </a>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px", borderRadius: 40,
            backgroundColor: "rgba(0,194,176,0.10)",
            border: "1px solid rgba(0,194,176,0.22)",
            marginBottom: "1.5rem",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--accent)", display: "block" }} />
            <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Join Jesup Wireless
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800,
            letterSpacing: "-0.045em", lineHeight: 1.05, color: "#fff", marginBottom: "1rem",
          }}>
            Start selling<br />
            <span style={{
              background: "linear-gradient(90deg, #00c2b0 0%, #00e5d3 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              smarter today
            </span>
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.42)", letterSpacing: "-0.01em", lineHeight: 1.7, maxWidth: 320, marginBottom: "2.5rem" }}>
            Join thousands of retailers who trust Jesup Wireless for their mobile accessories supply chain.
          </p>

          {/* Perk cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PERKS.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: "14px 16px", borderRadius: 14,
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  backgroundColor: "rgba(0,194,176,0.10)",
                  border: "1px solid rgba(0,194,176,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--accent)",
                }}>
                  <Icon size={16} strokeWidth={2} />
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", marginBottom: 2 }}>{title}</p>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.38)", letterSpacing: "-0.008em" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ position: "relative", zIndex: 1, fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", letterSpacing: "-0.005em" }}>
          © {new Date().getFullYear()} Jesup Wireless Inc. All rights reserved.
        </p>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div style={{
        backgroundColor: "#0a0a0a",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "3rem 2rem", overflowY: "auto",
      }}>
        <div style={{ width: "100%", maxWidth: 440 }}>

          {/* Mobile-only logo */}
          <a href="/" className="lg:hidden" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: "2rem" }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg, var(--accent) 0%, #00a899 100%)", boxShadow: "0 2px 12px rgba(0,194,176,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="17" height="17" viewBox="0 0 20 22" fill="none">
                <path d="M14 2H16V14C16 18 13 20 9 20C5 20 2 18 2 14" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ fontSize: "1.1875rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em" }}>Jesup</span>
          </a>

          {/* Header */}
          <div style={{ marginBottom: "2.25rem" }}>
            <h2 style={{ fontSize: "1.875rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 8 }}>
              Create your account
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.38)", letterSpacing: "-0.01em" }}>
              Already have an account?{" "}
              <a href="/login" style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>Sign in</a>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>

            {/* Name row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <InputField id="first-name" label="First name" placeholder="John"  value={firstName} onChange={setFirstName} />
              <InputField id="last-name"  label="Last name"  placeholder="Smith" value={lastName}  onChange={setLastName} />
            </div>

            <InputField id="email" label="Email address" type="email" placeholder="you@company.com" value={email} onChange={setEmail} />

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <InputField id="password" label="Password" type="password" placeholder="Min. 8 characters" value={password} onChange={setPassword} />
              <StrengthBar password={password} />
            </div>

            {/* Terms */}
            <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", marginTop: 4 }}>
              <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} style={{ display: "none" }} />
              <div style={{
                width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 2,
                border: `1.5px solid ${agreed ? "var(--accent)" : "rgba(255,255,255,0.18)"}`,
                backgroundColor: agreed ? "var(--accent)" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.15s",
              }}>
                {agreed && <Check size={11} color="white" strokeWidth={3} />}
              </div>
              <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.40)", letterSpacing: "-0.01em", lineHeight: 1.55 }}>
                I agree to the{" "}
                <a href="#" style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>Terms of Service</a>
                {" "}and{" "}
                <a href="#" style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>Privacy Policy</a>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !agreed}
              style={{
                marginTop: 6, padding: "14px 24px", borderRadius: 13,
                backgroundColor: !agreed ? "rgba(0,194,176,0.25)" : loading ? "rgba(0,194,176,0.5)" : "var(--accent)",
                border: "none", color: "#fff",
                fontSize: "0.9375rem", fontWeight: 700, fontFamily: "inherit",
                letterSpacing: "-0.02em",
                cursor: !agreed || loading ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                boxShadow: agreed && !loading ? "0 4px 24px rgba(0,194,176,0.28)" : "none",
                transition: "opacity 0.2s, box-shadow 0.2s, background-color 0.2s",
              }}
            >
              {loading ? (
                <><Loader2 size={16} style={{ animation: "spin 0.8s linear infinite" }} /> Creating account…</>
              ) : (
                <>Create Account <ArrowRight size={16} strokeWidth={2.5} /></>
              )}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "1.75rem 0" }}>
            <div style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.28)", letterSpacing: "0.04em", fontWeight: 500 }}>OR SIGN UP WITH</span>
            <div style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Social */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              {
                label: "Google",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                ),
              },
              {
                label: "Apple",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                ),
              },
            ].map(s => (
              <button
                key={s.label}
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "11px 16px", borderRadius: 12,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1.5px solid rgba(255,255,255,0.09)",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.875rem", fontWeight: 600, fontFamily: "inherit",
                  cursor: "pointer", letterSpacing: "-0.01em",
                  transition: "background-color 0.15s, border-color 0.15s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.09)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
                }}
              >
                {s.icon} {s.label}
              </button>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: "1.75rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)", letterSpacing: "-0.005em" }}>
            Already a member?{" "}
            <a href="/login" style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>
              Sign in →
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: rgba(255,255,255,0.22); }
      `}</style>
    </div>
  );
}
