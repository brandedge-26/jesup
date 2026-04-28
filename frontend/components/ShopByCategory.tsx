"use client";
const CATEGORIES = [
  {
    label: "Phone Cases",
    accent: "#00c2b0",
    bg: "#e6faf8",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 34, height: 34 }}>
        <rect x="8" y="2" width="24" height="36" rx="5" stroke="currentColor" strokeWidth="2.2" />
        <rect x="14" y="6" width="12" height="3.5" rx="1.75" fill="currentColor" opacity=".35" />
        <circle cx="20" cy="33" r="2" fill="currentColor" opacity=".3" />
      </svg>
    ),
  },
  {
    label: "Earbuds",
    accent: "#8b5cf6",
    bg: "#f3f0ff",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 34, height: 34 }}>
        <ellipse cx="11" cy="23" rx="7" ry="9" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="11" cy="23" r="3" fill="currentColor" opacity=".3" />
        <ellipse cx="29" cy="23" rx="7" ry="9" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="29" cy="23" r="3" fill="currentColor" opacity=".3" />
        <path d="M11 14 Q20 4 29 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    label: "Speakers",
    accent: "#f59e0b",
    bg: "#fffbeb",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 34, height: 34 }}>
        <rect x="3" y="10" width="34" height="20" rx="6" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" opacity=".4" />
        <circle cx="8" cy="15" r="1.75" fill="currentColor" opacity=".3" />
        <circle cx="8" cy="25" r="1.75" fill="currentColor" opacity=".3" />
      </svg>
    ),
  },
  {
    label: "Power",
    accent: "#ef4444",
    bg: "#fff1f0",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 34, height: 34 }}>
        <path d="M22 3L9 23h11l-2 14 16-22H22L22 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" opacity=".18" />
      </svg>
    ),
  },
  {
    label: "Wearables",
    accent: "#06b6d4",
    bg: "#ecfeff",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 34, height: 34 }}>
        <rect x="10" y="11" width="20" height="18" rx="5" stroke="currentColor" strokeWidth="2.2" />
        <path d="M16 11V8M24 11V8M16 29v3M24 29v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 20h12M20 16v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Mounts",
    accent: "#22c55e",
    bg: "#f0fdf4",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 34, height: 34 }}>
        <circle cx="20" cy="13" r="9" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="20" cy="13" r="4" fill="currentColor" opacity=".3" />
        <path d="M20 22v14M12 36h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ShopByCategory() {
  return (
    <section style={{ backgroundColor: "var(--background)", padding: "5rem 0" }}>
      <div className="container-xl">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "0.75rem",
            }}
          >
            Browse
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--foreground)",
              lineHeight: 1.1,
              marginBottom: "0.75rem",
            }}
          >
            Shop by Category
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.9375rem",
              letterSpacing: "-0.01em",
              maxWidth: 380,
              margin: "0 auto",
            }}
          >
            Everything you need for your device, in one place.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.label}
              href="#"
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textDecoration: "none", cursor: "pointer" }}
            >
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: cat.bg,
                  color: cat.accent,
                  boxShadow: `0 2px 16px ${cat.accent}20`,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${cat.accent}30`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = `0 2px 16px ${cat.accent}20`; }}
              >
                {cat.icon}
              </div>
              <span
                style={{
                  color: "var(--foreground)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  textAlign: "center",
                  lineHeight: 1.35,
                }}
              >
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}