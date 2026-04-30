"use client";
import { useState } from "react";
import {
  Eye, EyeOff, ArrowRight, Loader2, Check,
  BadgePercent, LayoutDashboard, Gift,
} from "lucide-react";

const PRIMARY = "#6C63FF";
const PRIMARY_GLOW = "rgba(108,99,255,0.18)";

const PERKS = [
  { icon: BadgePercent,    title: "Wholesale Pricing",  desc: "Get B2B rates on all products" },
  { icon: LayoutDashboard, title: "Order Dashboard",    desc: "Track every shipment in real time" },
  { icon: Gift,            title: "Member Exclusives",  desc: "Early access to new arrivals" },
];

function InputField({
  label, type = "text", placeholder, value, onChange, id,
}: {
  label: string; type?: string; placeholder: string;
  value: string; onChange: (v: string) => void; id: string;
}) {
  const [showPwd, setShowPwd] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPwd ? "text" : "password") : type;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <label htmlFor={id} style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#374151", letterSpacing: "-0.01em" }}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          style={{
            width: "100%", boxSizing: "border-box",
            padding: isPassword ? "13px 48px 13px 16px" : "13px 16px",
            borderRadius: 12,
            border: "1.5px solid #d1d5db",
            backgroundColor: "#fff",
            color: "#111",
            fontSize: "0.9375rem", fontFamily: "inherit",
            outline: "none",
            transition: "box-shadow 0.18s",
          }}
          onFocus={e => { e.currentTarget.style.boxShadow = `0 0 0 2px #fff, 0 0 0 4px ${PRIMARY}`; }}
          onBlur={e => { e.currentTarget.style.boxShadow = "none"; }}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPwd(v => !v)}
            style={{
              position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", cursor: "pointer", padding: 0,
              color: "#9ca3af", display: "flex", alignItems: "center",
              transition: "color 0.15s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#374151")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#9ca3af")}
          >
            {showPwd ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        )}
      </div>
    </div>
  );
}

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
    { color: PRIMARY, label: "Very strong" },
  ];

  if (!password) return null;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: -2 }}>
      <div style={{ flex: 1, display: "flex", gap: 4 }}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 2,
            backgroundColor: i <= score ? meta[score].color : "#e5e7eb",
            transition: "background-color 0.2s",
          }} />
        ))}
      </div>
      <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: meta[score].color, whiteSpace: "nowrap" }}>
        {meta[score].label}
      </span>
    </div>
  );
}

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
      style={{ minHeight: "100vh", fontFamily: "var(--font-work-sans), 'Helvetica Neue', Arial, sans-serif" }}
    >

      {/* ── LEFT PANEL ── */}
      <div
        className="hidden lg:flex"
        style={{
          position: "relative",
          background: "linear-gradient(150deg, #f0eeff 0%, #faf9ff 50%, #fff 100%)",
          flexDirection: "column", justifyContent: "space-between",
          padding: "2.5rem", overflow: "hidden",
          borderRight: "1px solid #ede9fe",
        }}
      >
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `radial-gradient(${PRIMARY}18 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }} />
        <div style={{
          position: "absolute", top: "15%", right: "-10%",
          width: 360, height: 360, borderRadius: "50%",
          background: `radial-gradient(circle, ${PRIMARY}10 0%, transparent 65%)`,
          filter: "blur(60px)", pointerEvents: "none",
        }} />

        {/* Logo */}
        <a href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, position: "relative", zIndex: 1 }}>
          <span style={{ fontSize: "1.5rem", fontWeight: 900, letterSpacing: "-0.045em" }}>
            <span style={{ color: "#111" }}>Jes</span>
            <span style={{ color: PRIMARY }}>up</span>
          </span>
        </a>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px", borderRadius: 40,
            backgroundColor: `${PRIMARY}12`,
            border: `1px solid ${PRIMARY}30`,
            marginBottom: "1.5rem",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: PRIMARY, display: "block" }} />
            <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: PRIMARY, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Join Jesup Wireless
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800,
            letterSpacing: "-0.045em", lineHeight: 1.05, color: "#111", marginBottom: "1rem",
          }}>
            Start selling<br />
            <span style={{ color: PRIMARY }}>smarter today</span>
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "#6b7280", letterSpacing: "-0.01em", lineHeight: 1.7, maxWidth: 320, marginBottom: "2.5rem" }}>
            Join thousands of retailers who trust Jesup Wireless for their mobile accessories supply chain.
          </p>

          {/* Perk cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PERKS.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: "14px 16px", borderRadius: 14,
                backgroundColor: "#fff",
                border: "1px solid #ede9fe",
                boxShadow: "0 1px 4px rgba(108,99,255,0.06)",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  backgroundColor: `${PRIMARY}10`,
                  border: `1px solid ${PRIMARY}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: PRIMARY,
                }}>
                  <Icon size={16} strokeWidth={2} />
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111", letterSpacing: "-0.02em", marginBottom: 2 }}>{title}</p>
                  <p style={{ fontSize: "0.8125rem", color: "#6b7280" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ position: "relative", zIndex: 1, fontSize: "0.75rem", color: "#9ca3af" }}>
          © {new Date().getFullYear()} Jesup Wireless Inc. All rights reserved.
        </p>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div style={{
        backgroundColor: "#ffffff",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "3rem 2rem", overflowY: "auto",
      }}>
        <div style={{ width: "100%", maxWidth: 440 }}>

          {/* Mobile logo */}
          <a href="/" className="lg:hidden" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginBottom: "2rem" }}>
            <span style={{ fontSize: "1.375rem", fontWeight: 900, letterSpacing: "-0.045em" }}>
              <span style={{ color: "#111" }}>Jes</span>
              <span style={{ color: PRIMARY }}>up</span>
            </span>
          </a>

          <div style={{ marginBottom: "2.25rem" }}>
            <h2 style={{ fontSize: "1.875rem", fontWeight: 800, color: "#111", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 8 }}>
              Create your account
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "#6b7280" }}>
              Already have an account?{" "}
              <a href="/login" style={{ color: PRIMARY, fontWeight: 600, textDecoration: "none" }}>Sign in</a>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>

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
                border: `1.5px solid ${agreed ? PRIMARY : "#d1d5db"}`,
                backgroundColor: agreed ? PRIMARY : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.15s",
              }}>
                {agreed && <Check size={11} color="white" strokeWidth={3} />}
              </div>
              <span style={{ fontSize: "0.8125rem", color: "#6b7280", lineHeight: 1.55 }}>
                I agree to the{" "}
                <a href="#" style={{ color: PRIMARY, fontWeight: 600, textDecoration: "none" }}>Terms of Service</a>
                {" "}and{" "}
                <a href="#" style={{ color: PRIMARY, fontWeight: 600, textDecoration: "none" }}>Privacy Policy</a>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !agreed}
              style={{
                marginTop: 6, padding: "14px 24px", borderRadius: 13,
                backgroundColor: !agreed ? `${PRIMARY}40` : loading ? `${PRIMARY}80` : PRIMARY,
                border: "none", color: "#fff",
                fontSize: "0.9375rem", fontWeight: 700, fontFamily: "inherit",
                cursor: !agreed || loading ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                boxShadow: agreed && !loading ? `0 4px 24px ${PRIMARY}40` : "none",
                transition: "opacity 0.2s, background-color 0.2s",
              }}
              onMouseEnter={e => { if (agreed && !loading) (e.currentTarget as HTMLElement).style.opacity = "0.9"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              {loading
                ? <><Loader2 size={16} style={{ animation: "spin 0.8s linear infinite" }} /> Creating account…</>
                : <>Create Account <ArrowRight size={16} strokeWidth={2.5} /></>
              }
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "1.75rem 0" }}>
            <div style={{ flex: 1, height: 1, backgroundColor: "#e5e7eb" }} />
            <span style={{ fontSize: "0.75rem", color: "#9ca3af", letterSpacing: "0.04em", fontWeight: 500 }}>OR SIGN UP WITH</span>
            <div style={{ flex: 1, height: 1, backgroundColor: "#e5e7eb" }} />
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
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#111">
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
                  backgroundColor: "#f9fafb", border: "1.5px solid #e5e7eb",
                  color: "#374151", fontSize: "0.875rem", fontWeight: 600, fontFamily: "inherit",
                  cursor: "pointer", transition: "background-color 0.14s, border-color 0.14s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#f3f4f6";
                  (e.currentTarget as HTMLElement).style.borderColor = "#d1d5db";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#f9fafb";
                  (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb";
                }}
              >
                {s.icon} {s.label}
              </button>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: "1.75rem", fontSize: "0.8125rem", color: "#9ca3af" }}>
            Already a member?{" "}
            <a href="/login" style={{ color: PRIMARY, fontWeight: 600, textDecoration: "none" }}>Sign in →</a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: #9ca3af; }
      `}</style>
    </div>
  );
}
