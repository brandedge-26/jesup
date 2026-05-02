"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/products";
import { useCartStore } from "@/store/cartStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySidebar from "@/components/CategorySidebar";

const PRIMARY = "#6C63FF";
const PRIMARY_DARK = "#5a52d5";
const PRIMARY_LIGHT = "#f0eeff";

interface Props { product: Product; }

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span style={{ display: "inline-flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 24 24"
          fill={s <= Math.round(rating) ? "#FBBF24" : "#e5e7eb"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

/* ── SVG icon atoms ── */
function IconTruck() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x={1} y={3} width={15} height={13} rx={1} />
      <path d="M16 8h4l3 4v5h-7V8z" />
      <circle cx={5.5} cy={18.5} r={2.5} /><circle cx={18.5} cy={18.5} r={2.5} />
    </svg>
  );
}
function IconRefresh() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" />
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconCart() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
function IconBolt() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconVerified() {
  return (
    <svg width={12} height={12} viewBox="0 0 24 24" fill="#10b981">
      <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.2L12 14l-4.8 2.5.9-5.2L4.3 7.6l5.3-.8L12 2z"/>
    </svg>
  );
}

export default function ProductDetail({ product }: Props) {
  const router = useRouter();
  const addToCart = useCartStore((s) => s.addToCart);

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(product.storage[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [addedMsg, setAddedMsg] = useState(false);
  const [tab, setTab] = useState<"desc" | "specs" | "reviews">("desc");

  const currentPrice = selectedStorage.price;
  const currentOriginal = selectedStorage.originalPrice;
  const discount = Math.round(((currentOriginal - currentPrice) / currentOriginal) * 100);
  const avgRating = product.reviewsList.reduce((s, r) => s + r.rating, 0) / product.reviewsList.length;

  const handleAddToCart = useCallback(() => {
    addToCart({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      img: product.img,
      brand: product.brand,
      color: selectedColor.name,
      colorHex: selectedColor.hex,
      storage: selectedStorage.label,
      price: currentPrice,
      originalPrice: currentOriginal,
      quantity,
    });
    setAddedMsg(true);
    setTimeout(() => {
      setAddedMsg(false);
      router.push("/cart");
    }, 800);
  }, [addToCart, product, selectedColor, selectedStorage, currentPrice, currentOriginal, quantity, router]);

  const handleBuyNow = useCallback(() => {
    addToCart({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      img: product.img,
      brand: product.brand,
      color: selectedColor.name,
      colorHex: selectedColor.hex,
      storage: selectedStorage.label,
      price: currentPrice,
      originalPrice: currentOriginal,
      quantity,
    });
    router.push("/checkout");
  }, [addToCart, product, selectedColor, selectedStorage, currentPrice, currentOriginal, quantity, router]);

  return (
    <>
      <style>{`
        .pd-main { flex: 1; background: #f9fafb; }
        .pd-container { max-width: 1200px; margin: 0 auto; padding: 32px 24px 64px; }
        .pd-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        .pd-thumbs { display: flex; gap: 10px; }
        .pd-trust { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .pd-tabs-body { padding: 32px 36px; }
        .pd-specs { display: grid; grid-template-columns: 1fr 1fr; gap: 0 40px; }
        .pd-spec-row { display: flex; justify-content: space-between; align-items: center; padding: 13px 0; border-bottom: 1px solid #f3f4f6; }
        .pd-cta { display: flex; gap: 12px; }
        .pd-btn-cart {
          flex: 1; padding: 14px 20px; border-radius: 12px; font-size: 15px; font-weight: 700;
          cursor: pointer; border: 2px solid ${PRIMARY};
          background: ${PRIMARY_LIGHT}; color: ${PRIMARY};
          transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: inherit;
        }
        .pd-btn-cart:hover { background: ${PRIMARY}; color: #fff; }
        .pd-btn-cart.added { background: #10b981; border-color: #10b981; color: #fff; }
        .pd-btn-buy {
          flex: 1; padding: 14px 20px; border-radius: 12px; font-size: 15px; font-weight: 700;
          cursor: pointer; border: none; background: ${PRIMARY}; color: #fff;
          transition: background 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: inherit;
        }
        .pd-btn-buy:hover { background: ${PRIMARY_DARK}; }
        @media (max-width: 900px) {
          .pd-grid { grid-template-columns: 1fr; gap: 28px; }
          .pd-container { padding: 20px 16px 64px; }
          .pd-tabs-body { padding: 20px 16px; }
          .pd-specs { grid-template-columns: 1fr; }
          .pd-trust { grid-template-columns: repeat(3, 1fr); gap: 8px; }
        }
        @media (max-width: 560px) {
          .pd-trust { grid-template-columns: 1fr; }
          .pd-cta { flex-direction: column; }
          .pd-thumbs { gap: 8px; }
        }
      `}</style>

      <CategorySidebar externalOpen={categoryOpen} onRequestClose={() => setCategoryOpen(false)} />

      <div className="sidebar-offset" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar onCategoryToggle={() => setCategoryOpen(v => !v)} />

        <main className="pd-main pb-16 lg:pb-0">

          {/* ── Breadcrumb ── */}
          <div style={{ backgroundColor: "#fff", borderBottom: "1px solid #e5e7eb" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "11px 24px", display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6b7280", flexWrap: "wrap" }}>
              <Link href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "#d1d5db" }}>›</span>
              <Link href="/shop" style={{ color: "#6b7280", textDecoration: "none" }}>Shop</Link>
              <span style={{ color: "#d1d5db" }}>›</span>
              <Link href={`/shop`} style={{ color: "#6b7280", textDecoration: "none" }}>{product.brand}</Link>
              <span style={{ color: "#d1d5db" }}>›</span>
              <span style={{ color: "#111827", fontWeight: 600 }}>{product.name}</span>
            </div>
          </div>

          <div className="pd-container">

            {/* ── Top Section: Gallery + Info ── */}
            <div className="pd-grid">

              {/* LEFT: Image Gallery */}
              <div>
                {/* Main image */}
                <div style={{ position: "relative", backgroundColor: "#fff", borderRadius: 20, border: "1px solid #e5e7eb", overflow: "hidden", aspectRatio: "1/1", marginBottom: 12 }}>
                  <Image
                    src={product.images[activeImage] ?? product.img}
                    alt={product.name}
                    fill
                    style={{ objectFit: "contain", padding: 24 }}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    priority
                  />
                  {discount > 0 && (
                    <div style={{ position: "absolute", top: 14, left: 14, backgroundColor: "#EF4444", color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>
                      -{discount}%
                    </div>
                  )}
                  {product.tag && (
                    <div style={{ position: "absolute", top: 14, right: 14, backgroundColor: product.tagBg, color: product.tagColor, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>
                      {product.tag}
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                <div className="pd-thumbs">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      style={{
                        flex: 1, aspectRatio: "1/1", borderRadius: 10, cursor: "pointer", padding: 4,
                        position: "relative", background: "#fff", overflow: "hidden",
                        border: activeImage === i ? `2px solid ${PRIMARY}` : "2px solid #e5e7eb",
                        boxShadow: activeImage === i ? `0 0 0 3px ${PRIMARY_LIGHT}` : "none",
                        transition: "all 0.15s",
                      }}
                    >
                      <Image src={img} alt={`view ${i + 1}`} fill style={{ objectFit: "contain", padding: 4 }} sizes="80px" />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT: Product Info */}
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
                  {product.brand} · {product.category}
                </p>
                <h1 style={{ fontSize: "clamp(22px, 2.8vw, 30px)", fontWeight: 800, color: "#111827", lineHeight: 1.2, marginBottom: 10, letterSpacing: "-0.03em" }}>
                  {product.name}
                </h1>

                {/* Rating */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
                  <StarRating rating={avgRating} size={16} />
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{avgRating.toFixed(1)}</span>
                  <span style={{ fontSize: 13, color: "#9ca3af" }}>({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 32, fontWeight: 900, color: "#111827", letterSpacing: "-0.04em" }}>${currentPrice.toLocaleString()}</span>
                  {currentOriginal > currentPrice && (
                    <span style={{ fontSize: 18, color: "#9ca3af", textDecoration: "line-through" }}>${currentOriginal.toLocaleString()}</span>
                  )}
                </div>
                {currentOriginal > currentPrice && (
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "#fef2f2", color: "#EF4444", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20, marginBottom: 18 }}>
                    <svg width={12} height={12} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/></svg>
                    Save ${(currentOriginal - currentPrice).toLocaleString()}
                  </div>
                )}

                <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.65, marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid #f3f4f6" }}>
                  {product.desc}
                </p>

                {/* Storage */}
                <div style={{ marginBottom: 22 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                    Storage — <span style={{ color: PRIMARY }}>{selectedStorage.label}</span>
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {product.storage.map((sv) => (
                      <button
                        key={sv.label}
                        onClick={() => setSelectedStorage(sv)}
                        style={{
                          padding: "8px 16px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer",
                          transition: "all 0.15s", fontFamily: "inherit",
                          border: selectedStorage.label === sv.label ? `2px solid ${PRIMARY}` : "2px solid #e5e7eb",
                          background: selectedStorage.label === sv.label ? PRIMARY_LIGHT : "#fff",
                          color: selectedStorage.label === sv.label ? PRIMARY : "#374151",
                          boxShadow: selectedStorage.label === sv.label ? `0 0 0 3px ${PRIMARY_LIGHT}` : "none",
                        }}
                      >
                        {sv.label}
                        {sv.price !== product.storage[0].price && (
                          <span style={{ fontSize: 11, marginLeft: 4, opacity: 0.7 }}>+${(sv.price - product.storage[0].price).toLocaleString()}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div style={{ marginBottom: 22 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                    Color — <span style={{ color: PRIMARY }}>{selectedColor.name}</span>
                  </p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {product.colors.map((cv) => (
                      <button
                        key={cv.name}
                        title={cv.name}
                        onClick={() => setSelectedColor(cv)}
                        style={{
                          width: 34, height: 34, borderRadius: "50%", background: cv.hex, cursor: "pointer",
                          border: selectedColor.name === cv.name ? `3px solid ${PRIMARY}` : "3px solid transparent",
                          boxShadow: selectedColor.name === cv.name ? `0 0 0 2px #fff, 0 0 0 4px ${PRIMARY}` : "0 0 0 2px #e5e7eb",
                          transition: "all 0.15s",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div style={{ marginBottom: 24 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.07em" }}>Quantity</p>
                  <div style={{ display: "inline-flex", alignItems: "center", border: "2px solid #e5e7eb", borderRadius: 12, background: "#fff", overflow: "hidden" }}>
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      style={{ width: 42, height: 42, fontSize: 22, fontWeight: 700, color: "#374151", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#f3f4f6")}
                      onMouseLeave={e => (e.currentTarget.style.background = "none")}
                    >−</button>
                    <span style={{ minWidth: 44, textAlign: "center", fontSize: 16, fontWeight: 800, color: "#111827", borderLeft: "1px solid #f3f4f6", borderRight: "1px solid #f3f4f6", padding: "0 4px" }}>{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      style={{ width: 42, height: 42, fontSize: 22, fontWeight: 700, color: "#374151", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#f3f4f6")}
                      onMouseLeave={e => (e.currentTarget.style.background = "none")}
                    >+</button>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pd-cta" style={{ marginBottom: 20 }}>
                  <button
                    onClick={handleAddToCart}
                    disabled={addedMsg}
                    className={`pd-btn-cart${addedMsg ? " added" : ""}`}
                  >
                    {addedMsg ? <><IconCheck /> Added!</> : <><IconCart /> Add to Cart</>}
                  </button>
                  <button onClick={handleBuyNow} className="pd-btn-buy">
                    <IconBolt /> Buy Now
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="pd-trust">
                  {[
                    { icon: <IconTruck />, label: "Free Shipping", sub: "Orders over $100" },
                    { icon: <IconRefresh />, label: "Easy Returns", sub: "30-day policy" },
                    { icon: <IconShield />, label: "1-Year Warranty", sub: "Manufacturer" },
                  ].map((b) => (
                    <div key={b.label} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "12px 8px", textAlign: "center" }}>
                      <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>{b.icon}</div>
                      <p style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 2 }}>{b.label}</p>
                      <p style={{ fontSize: 11, color: "#6b7280" }}>{b.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Tabs ── */}
            <div style={{ marginTop: 52 }}>
              <div style={{ display: "flex", borderBottom: "2px solid #e5e7eb", overflowX: "auto" }}>
                {(["desc", "specs", "reviews"] as const).map((t) => {
                  const labels = { desc: "Description", specs: "Specifications", reviews: `Reviews (${product.reviewsList.length})` };
                  const active = tab === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      style={{
                        padding: "13px 26px", fontSize: 14, fontWeight: 700, cursor: "pointer",
                        background: "none", border: "none", fontFamily: "inherit", whiteSpace: "nowrap",
                        borderBottom: active ? `3px solid ${PRIMARY}` : "3px solid transparent",
                        color: active ? PRIMARY : "#6b7280",
                        marginBottom: -2, transition: "all 0.15s",
                      }}
                    >
                      {labels[t]}
                    </button>
                  );
                })}
              </div>

              <div className="pd-tabs-body" style={{ background: "#fff", border: "1px solid #e5e7eb", borderTop: "none", borderRadius: "0 0 16px 16px" }}>

                {/* Description */}
                {tab === "desc" && (
                  <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.85, maxWidth: 800 }}>
                    {product.description}
                  </p>
                )}

                {/* Specs */}
                {tab === "specs" && (
                  <div className="pd-specs">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="pd-spec-row">
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#6b7280", minWidth: 110 }}>{key}</span>
                        <span style={{ fontSize: 13, color: "#111827", fontWeight: 500, textAlign: "right", flex: 1, paddingLeft: 12 }}>{val}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reviews */}
                {tab === "reviews" && (
                  <div>
                    {/* Summary banner */}
                    <div style={{ display: "flex", alignItems: "center", gap: 28, marginBottom: 28, padding: "22px 24px", background: "#faf5ff", borderRadius: 14, border: "1px solid #ede9fe" }}>
                      <div style={{ textAlign: "center", flexShrink: 0 }}>
                        <p style={{ fontSize: 52, fontWeight: 900, color: "#111827", lineHeight: 1, letterSpacing: "-0.05em" }}>{avgRating.toFixed(1)}</p>
                        <StarRating rating={avgRating} size={20} />
                        <p style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>{product.reviews} reviews</p>
                      </div>
                      <div style={{ flex: 1 }}>
                        {[5, 4, 3, 2, 1].map((star) => {
                          const count = product.reviewsList.filter((r) => r.rating === star).length;
                          const pct = product.reviewsList.length > 0 ? (count / product.reviewsList.length) * 100 : 0;
                          return (
                            <div key={star} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                              <span style={{ fontSize: 12, color: "#6b7280", minWidth: 10 }}>{star}</span>
                              <svg width={12} height={12} viewBox="0 0 24 24" fill="#FBBF24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                              <div style={{ flex: 1, height: 7, background: "#e5e7eb", borderRadius: 4, overflow: "hidden" }}>
                                <div style={{ width: `${pct}%`, height: "100%", background: "#FBBF24", borderRadius: 4 }} />
                              </div>
                              <span style={{ fontSize: 11, color: "#9ca3af", minWidth: 16 }}>{count}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Review cards */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {product.reviewsList.map((r) => (
                        <div key={r.id} style={{ padding: "18px 20px", background: "#fafafa", borderRadius: 12, border: "1px solid #f3f4f6" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <div style={{ width: 38, height: 38, borderRadius: "50%", background: PRIMARY, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>
                                {r.avatar}
                              </div>
                              <div>
                                <p style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{r.author}</p>
                                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                                  <StarRating rating={r.rating} size={12} />
                                  {r.verified && (
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 11, color: "#10b981", fontWeight: 600, background: "#ecfdf5", padding: "2px 7px", borderRadius: 10 }}>
                                      <IconVerified /> Verified
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <span style={{ fontSize: 12, color: "#9ca3af", flexShrink: 0 }}>{r.date}</span>
                          </div>
                          <p style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 5 }}>{r.title}</p>
                          <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.65 }}>{r.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
