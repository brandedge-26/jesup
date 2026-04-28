"use client";

const CATEGORIES = [
  { label: "Phone Cases", img: "/categories/phone-case.jpg" },
  { label: "Earbuds", img: "/categories/earbud.jpg" },
  { label: "Speakers", img: "/categories/speakers.jpg" },
  { label: "Power", img: "/categories/powerbank.jpg" },
  { label: "Wearables", img: "/categories/wearable.jpg" },
  { label: "Mounts", img: "/categories/mounts.jpg" },
];

export default function ShopByCategory() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "4rem 0 5rem" }}>
      <div className="container-xl">

        {/* Heading */}
        <h2 style={{
          fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: "#0a0a0a",
          textAlign: "center",
          marginBottom: "2.5rem",
        }}>
          Shop by Category
        </h2>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "1.25rem",
        }}>
          {CATEGORIES.map((cat) => (
            <a
              key={cat.label}
              href="#"
              style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}
            >
              {/* White card — image contained with padding */}
              <div
                style={{
                  borderRadius: 22,
                  backgroundColor: "#fff",
                  border: "1.5px solid #e8e8e8",
                  // boxShadow: "0 2px 14px rgba(0,0,0,0.06)",
                  aspectRatio: "1 / 1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "18px",
                  overflow: "hidden",
                  transition: "transform 0.22s ease 0.22s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow = "0 2px 14px rgba(0,0,0,0.06)";
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"}
                  onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = ""}
                />
              </div>

              {/* Category name */}
              <p style={{
                textAlign: "center",
                fontSize: "0.9375rem",
                fontWeight: 700,
                color: "#111",
                letterSpacing: "-0.01em",
                margin: 0,
              }}>
                {cat.label}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
