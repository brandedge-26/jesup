"use client";

import Image from "next/image";

const CATEGORIES = [
  {
    label: "PHONE CASES",
    sublabel: "Protection",
    img: "/categories/phone-case.jpg",
    bg: "#eef2ff",
    textColor: "#1e1b4b",
    span: 2,
    showButton: true,
  },
  {
    label: "EARBUDS",
    sublabel: "Audio",
    img: "/categories/earbud.jpg",
    bg: "#e0faf7",
    textColor: "#0d3330",
    span: 1,
  },
  {
    label: "SPEAKERS",
    sublabel: "Audio",
    img: "/categories/speakers.jpg",
    bg: "#fefce8",
    textColor: "#2d2000",
    span: 1,
  },
  {
    label: "POWER BANKS",
    sublabel: "Charging",
    img: "/categories/powerbank.jpg",
    bg: "#fff1f0",
    textColor: "#2d0a00",
    span: 1,
  },
  {
    label: "WEARABLES",
    sublabel: "Smart Devices",
    img: "/categories/wearable.jpg",
    bg: "#f0fdf4",
    textColor: "#052e16",
    span: 1,
  },
  {
    label: "MOUNTS",
    sublabel: "Car & Desk",
    img: "/categories/mounts.jpg",
    bg: "#fdf4ff",
    textColor: "#2d0050",
    span: 2,
    showButton: true,
  },
];

export default function ShopByCategory() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "4rem 0 5rem" }}>
      <div className="container-xl">

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

        {/* Bento grid */}
        <div className="category-bento-grid b">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.label}
              href="#"
              className={`border border-gray-200 category-card${cat.span === 2 ? " category-card--large" : ""}`}
              style={{
                gridColumn: `span ${cat.span}`,
                backgroundColor: cat.bg,
              }}
            // onMouseEnter={e => {
            //   (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            // }}
            // onMouseLeave={e => {
            //   (e.currentTarget as HTMLElement).style.transform = "";
            // }}
            >
              {/* Text */}
              <div className="category-card__text">
                <div>
                  <p style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    color: cat.textColor,
                    opacity: 0.5,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}>
                    {cat.sublabel}
                  </p>
                  <h3 style={{
                    fontSize: cat.span === 2 ? "clamp(1.125rem, 2.2vw, 1.75rem)" : "1rem",
                    fontWeight: 800,
                    color: cat.textColor,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    margin: 0,
                  }}>
                    {cat.label}
                  </h3>
                </div>

                {cat.showButton && (
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: "1.25rem",
                    padding: "8px 16px",
                    borderRadius: 8,
                    backgroundColor: cat.textColor,
                    color: "#fff",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                  }}>
                    Shop now →
                  </span>
                )}
              </div>

              {/* Image */}
              <div className="category-card__img">
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "bottom right",
                    transition: "transform 0.35s ease",
                    mixBlendMode: "multiply",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "")}
                />
              </div>
            </a>
          ))}
        </div>

      </div>

      <style>{`
        .category-bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .category-card {
          border-radius: 20px;
          display: flex;
          align-items: stretch;
          overflow: hidden;
          text-decoration: none;
          min-height: 200px;
          position: relative;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .category-card__text {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 0 0 58%;
          z-index: 1;
        }
        .category-card--large .category-card__text {
          padding: 1.75rem;
          flex: 0 0 55%;
        }
        .category-card__img {
          flex: 1;
          position: relative;
          overflow: hidden;
        }
        .category-card__img img {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 115%;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .category-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .category-card {
            grid-column: span 1 !important;
            min-height: 160px;
          }
        }

        /* Mobile */
        @media (max-width: 540px) {
          .category-bento-grid {
            grid-template-columns: 1fr;
          }
          .category-card {
            min-height: 140px;
          }
        }
      `}</style>
    </section>
  );
}
