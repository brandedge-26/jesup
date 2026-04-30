const TRUST = [
  { value: "500+",  label: "Products in catalog" },
  { value: "50+",   label: "Partner brands" },
  { value: "10K+",  label: "Retail stores served" },
  { value: "15+",   label: "Years of experience" },
];

export default function WelcomeBanner() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a0a0f",
        padding: "5.5rem 0",
      }}
    >
      {/* Subtle purple radial glow — top left */}
      <div style={{
        position: "absolute", top: -120, left: -120,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(108,99,255,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Subtle purple radial glow — bottom right */}
      <div style={{
        position: "absolute", bottom: -100, right: -100,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(108,99,255,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            {/* Label */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "1.5rem" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#6C63FF" }} />
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6C63FF", margin: 0 }}>
                About Us
              </p>
            </div>

            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800,
              letterSpacing: "-0.04em", color: "#ffffff",
              lineHeight: 1.05, marginBottom: "1.5rem",
            }}>
              Welcome to<br />
              <span style={{ color: "#6C63FF" }}>Jesup Wireless</span>
            </h2>

            <p style={{
              color: "rgba(255,255,255,0.55)", fontSize: "0.9375rem",
              lineHeight: 1.8, letterSpacing: "-0.01em", maxWidth: 460,
              marginBottom: "2rem",
            }}>
              At Jesup Wireless, we pride ourselves on being the go-to distributor for premium mobile accessories. We partner with industry-leading names like{" "}
              <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>Nimbuzz</strong>,{" "}
              <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>ZIZO</strong>, and{" "}
              <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>CLICK</strong> — offering a wide selection of cases, chargers, audio products, and accessories crafted with quality, style, and performance in mind.
            </p>

            <a
              href="#"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 26px", borderRadius: 12,
                backgroundColor: "#6C63FF", color: "#fff",
                fontSize: "0.875rem", fontWeight: 600, letterSpacing: "-0.01em",
                textDecoration: "none",
                transition: "background-color 0.15s",
              }}
            >
              Learn More About Us
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right: stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {TRUST.map((item, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 16,
                  padding: "1.75rem 1.5rem",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{
                  display: "block",
                  fontSize: "2.5rem", fontWeight: 800,
                  letterSpacing: "-0.05em", color: "#6C63FF",
                  lineHeight: 1, marginBottom: 8,
                }}>
                  {item.value}
                </span>
                <span style={{
                  fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)",
                  fontWeight: 500, letterSpacing: "-0.005em", lineHeight: 1.4,
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
