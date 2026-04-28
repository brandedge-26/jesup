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
        background: "linear-gradient(135deg, #009e8e 0%, #00c2b0 45%, #00b09f 100%)",
        padding: "5rem 0",
      }}
    >
      {/* Dot texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1.5px, transparent 1.5px)",
        backgroundSize: "26px 26px",
      }} />

      {/* Decorative rings */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.10)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: -30, right: -30, width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", pointerEvents: "none" }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "1rem" }}>About Us</p>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.05, marginBottom: "1.25rem" }}>
              Welcome to<br />Jesup Wireless
            </h2>
            <div style={{ width: 40, height: 2, backgroundColor: "rgba(255,255,255,0.35)", borderRadius: 2, marginBottom: "1.25rem" }} />
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem", lineHeight: 1.75, letterSpacing: "-0.01em", maxWidth: 440 }}>
              At Jesup Wireless, we pride ourselves on being the go-to distributor for premium mobile accessories. We partner with industry-leading names like{" "}
              <strong style={{ color: "#fff", fontWeight: 600 }}>Nimbuzz</strong>,{" "}
              <strong style={{ color: "#fff", fontWeight: 600 }}>ZIZO</strong>, and{" "}
              <strong style={{ color: "#fff", fontWeight: 600 }}>CLICK</strong> — offering a wide selection of cases, chargers, audio products, and items all crafted with quality, style, and performance in mind.
            </p>
            <a
              href="#"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                marginTop: "2rem", padding: "12px 24px", borderRadius: 12,
                backgroundColor: "rgba(255,255,255,0.15)", color: "#fff",
                border: "1px solid rgba(255,255,255,0.22)",
                fontSize: "0.875rem", fontWeight: 600, letterSpacing: "-0.01em",
                textDecoration: "none", backdropFilter: "blur(4px)",
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
                  padding: "1.5rem",
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span style={{ display: "block", fontSize: "2.25rem", fontWeight: 800, letterSpacing: "-0.05em", color: "#fff", lineHeight: 1, marginBottom: 6 }}>
                  {item.value}
                </span>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", fontWeight: 500, letterSpacing: "-0.005em" }}>
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
