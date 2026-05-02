"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySidebar from "@/components/CategorySidebar";
import { ALL_PRODUCTS, type Product } from "@/lib/products";

const PRIMARY = "#6C63FF";

const BRANDS    = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"];
const CATEGORIES = ["iPhone", "iPad", "Android", "Tablet"];
const SORT_OPTIONS = [
  { value: "featured",   label: "Featured" },
  { value: "price-asc",  label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "rating",     label: "Top Rated" },
  { value: "name",       label: "Name A–Z" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {[1, 2, 3, 4, 5].map(s => (
        <svg key={s} width="11" height="11" viewBox="0 0 24 24"
          fill={s <= Math.round(rating) ? "#f59e0b" : "none"}
          stroke="#f59e0b" strokeWidth={2}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  const [hovered, setHovered] = useState(false);
  const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);

  return (
    <Link
      href={`/product/${p.slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20, backgroundColor: "#fff",
        border: "1px solid #e5e7eb", cursor: "pointer",
        display: "flex", flexDirection: "column",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
        transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", margin: "10px 10px 0", height: 200, borderRadius: 14, backgroundColor: "#f8f8fb", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 60%,${p.tagColor}18 0%,transparent 70%)`, pointerEvents: "none" }} />

        <span style={{ position: "absolute", top: 10, left: 10, zIndex: 2, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: p.tagColor, backgroundColor: p.tagBg, padding: "3px 9px", borderRadius: 999 }}>
          {p.tag}
        </span>

        {discount > 0 && (
          <span style={{ position: "absolute", top: 10, right: 10, zIndex: 2, fontSize: "0.6rem", fontWeight: 700, color: "#fff", backgroundColor: "#dc2626", padding: "3px 8px", borderRadius: 999 }}>
            -{discount}%
          </span>
        )}

        <Image src={p.img} alt={p.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
      </div>

      {/* Content */}
      <div style={{ padding: "14px 16px 0", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", color: p.tagColor }}>{p.brand} · {p.category}</span>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <StarRating rating={p.rating} />
            <span style={{ fontSize: "0.625rem", color: "#9ca3af" }}>({p.reviews})</span>
          </div>
        </div>

        <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 6 }}>{p.name}</h3>
        <p style={{ fontSize: "0.75rem", color: "#9ca3af", lineHeight: 1.6, flex: 1, marginBottom: 14 }}>{p.desc}</p>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px 14px", borderTop: "1px solid #f4f4f7" }}>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
            <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>${p.price}</span>
            <span style={{ fontSize: "0.7rem", color: "#c4c4cc", textDecoration: "line-through" }}>${p.originalPrice}</span>
          </div>
          <span style={{ fontSize: "0.625rem", color: "#16a34a", fontWeight: 600 }}>Free shipping</span>
        </div>
        <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 6px", borderRadius: 999, backgroundColor: "#f0f2f8", color: "#111", border: "1px solid #e2e5f0", cursor: "pointer", fontSize: "0.78rem", fontWeight: 700, fontFamily: "inherit", whiteSpace: "nowrap" }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", backgroundColor: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </div>
          <span style={{ paddingRight: 8 }}>Buy Now</span>
        </button>
      </div>
    </div>
    </Link>
  );
}

function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer", userSelect: "none" }}>
      <div
        onClick={onChange}
        style={{
          width: 18, height: 18, borderRadius: 5, flexShrink: 0,
          border: checked ? `2px solid ${PRIMARY}` : "1.5px solid #d1d5db",
          backgroundColor: checked ? PRIMARY : "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.15s",
        }}
      >
        {checked && <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
      </div>
      <span style={{ fontSize: "0.8125rem", color: "#374151" }}>{label}</span>
    </label>
  );
}

export default function ShopPage() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [filterOpen, setFilterOpen]     = useState(false);

  const [selectedBrands,     setSelectedBrands]     = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange,         setPriceRange]         = useState<[number, number]>([0, 1400]);
  const [sortBy,             setSortBy]             = useState("featured");
  const [search,             setSearch]             = useState("");

  const toggleBrand = (b: string) =>
    setSelectedBrands(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);

  const toggleCategory = (c: string) =>
    setSelectedCategories(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);

  const clearAll = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setPriceRange([0, 1400]);
    setSearch("");
    setSortBy("featured");
  };

  const filtered = useMemo(() => {
    let list = ALL_PRODUCTS.filter(p => {
      if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.brand.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

    switch (sortBy) {
      case "price-asc":  list = [...list].sort((a, b) => a.price - b.price); break;
      case "price-desc": list = [...list].sort((a, b) => b.price - a.price); break;
      case "rating":     list = [...list].sort((a, b) => b.rating - a.rating); break;
      case "name":       list = [...list].sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return list;
  }, [selectedBrands, selectedCategories, priceRange, sortBy, search]);

  const activeFilterCount = selectedBrands.length + selectedCategories.length + (priceRange[0] > 0 || priceRange[1] < 1400 ? 1 : 0);

  const FilterPanel = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

      {/* Search */}
      <div style={{ position: "relative" }}>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth={2} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px 10px 36px", borderRadius: 10, fontSize: "0.8125rem", color: "#111", backgroundColor: "#f9fafb", border: "1.5px solid #e5e7eb", outline: "none", fontFamily: "inherit" }}
        />
      </div>

      {/* Price Range */}
      <div>
        <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 14 }}>Price Range</p>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: PRIMARY }}>${priceRange[0]}</span>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: PRIMARY }}>${priceRange[1]}</span>
        </div>
        <div style={{ position: "relative", height: 6, backgroundColor: "#e5e7eb", borderRadius: 3, marginBottom: 8 }}>
          <div style={{ position: "absolute", left: `${(priceRange[0] / 1400) * 100}%`, right: `${100 - (priceRange[1] / 1400) * 100}%`, top: 0, bottom: 0, backgroundColor: PRIMARY, borderRadius: 3 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <label style={{ fontSize: "0.75rem", color: "#6b7280", minWidth: 28 }}>Min</label>
            <input type="range" min={0} max={1400} step={50} value={priceRange[0]}
              onChange={e => setPriceRange([Math.min(Number(e.target.value), priceRange[1] - 50), priceRange[1]])}
              style={{ flex: 1, accentColor: PRIMARY }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <label style={{ fontSize: "0.75rem", color: "#6b7280", minWidth: 28 }}>Max</label>
            <input type="range" min={0} max={1400} step={50} value={priceRange[1]}
              onChange={e => setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0] + 50)])}
              style={{ flex: 1, accentColor: PRIMARY }} />
          </div>
        </div>
        {/* Quick price presets */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 12 }}>
          {[[0, 499], [500, 799], [800, 1099], [1100, 1400]].map(([lo, hi]) => {
            const active = priceRange[0] === lo && priceRange[1] === hi;
            return (
              <button key={`${lo}-${hi}`} onClick={() => setPriceRange([lo, hi])}
                style={{ padding: "4px 10px", borderRadius: 999, fontSize: "0.7rem", fontWeight: 600, fontFamily: "inherit", cursor: "pointer", border: `1px solid ${active ? PRIMARY : "#e5e7eb"}`, backgroundColor: active ? "#f0eeff" : "#fff", color: active ? PRIMARY : "#6b7280", transition: "all 0.15s" }}>
                ${lo}–${hi === 1400 ? "1400+" : hi}
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand */}
      <div>
        <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 12 }}>Brand</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {BRANDS.map(b => (
            <Checkbox key={b} checked={selectedBrands.includes(b)} onChange={() => toggleBrand(b)} label={b} />
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 12 }}>Category</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {CATEGORIES.map(c => (
            <Checkbox key={c} checked={selectedCategories.includes(c)} onChange={() => toggleCategory(c)} label={c} />
          ))}
        </div>
      </div>

      {/* Clear */}
      {activeFilterCount > 0 && (
        <button onClick={clearAll} style={{ padding: "10px", borderRadius: 10, border: "1.5px dashed #e5e7eb", backgroundColor: "transparent", color: "#6b7280", fontSize: "0.8125rem", fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#dc2626"; (e.currentTarget as HTMLElement).style.color = "#dc2626"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb"; (e.currentTarget as HTMLElement).style.color = "#6b7280"; }}
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <>
      <style>{`
        .shop-layout { display: grid; grid-template-columns: 260px 1fr; gap: 2rem; align-items: start; }
        .shop-sidebar { position: sticky; top: 80px; background: #fff; border: 1px solid #e5e7eb; border-radius: 18px; padding: 24px; }
        .shop-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.125rem; }
        .mobile-filter-btn { display: none; }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @media (max-width: 1100px) { .shop-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 900px) { .shop-layout { grid-template-columns: 1fr; } .shop-sidebar { display: none; } .shop-grid { grid-template-columns: repeat(2, 1fr); } .mobile-filter-btn { display: flex !important; } }
        @media (max-width: 560px) { .shop-grid { grid-template-columns: 1fr; } }
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
              <div style={{ position: "relative", maxWidth: 600, margin: "0 auto", textAlign: "center", padding: "3.5rem 1.5rem 3rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PRIMARY, backgroundColor: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)", padding: "5px 14px", borderRadius: 20, marginBottom: "1.25rem" }}>
                  Shop All Devices
                </span>
                <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: "0.9rem" }}>
                  iPhones, iPads &amp; <span style={{ color: PRIMARY }}>Android Phones</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: 440, margin: "0 auto" }}>
                  {ALL_PRODUCTS.length} devices from top brands. Filter by brand, category, and price.
                </p>
              </div>
            </section>
          </div>

          {/* ── Shop Body ── */}
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "2rem 1.5rem 4rem" }}>

            {/* Top bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                  Showing <strong style={{ color: "#111" }}>{filtered.length}</strong> of {ALL_PRODUCTS.length} products
                </p>
                {activeFilterCount > 0 && (
                  <span style={{ padding: "3px 10px", borderRadius: 999, backgroundColor: "#f0eeff", color: PRIMARY, fontSize: "0.75rem", fontWeight: 700 }}>
                    {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""} active
                  </span>
                )}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setFilterOpen(v => !v)}
                  className="mobile-filter-btn"
                  style={{ alignItems: "center", gap: 8, padding: "9px 16px", borderRadius: 10, border: "1.5px solid #e5e7eb", backgroundColor: "#fff", fontSize: "0.8125rem", fontWeight: 600, color: "#374151", cursor: "pointer", fontFamily: "inherit" }}
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" /></svg>
                  Filters {activeFilterCount > 0 ? `(${activeFilterCount})` : ""}
                </button>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  style={{ padding: "9px 14px", borderRadius: 10, border: "1.5px solid #e5e7eb", backgroundColor: "#fff", fontSize: "0.8125rem", fontWeight: 600, color: "#374151", cursor: "pointer", fontFamily: "inherit", outline: "none" }}
                >
                  {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
            </div>


            <div className="shop-layout">
              {/* Sidebar */}
              <aside className="shop-sidebar">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <p style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#111", letterSpacing: "-0.02em" }}>Filters</p>
                  {activeFilterCount > 0 && (
                    <button onClick={clearAll} style={{ fontSize: "0.75rem", fontWeight: 600, color: "#dc2626", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>Clear all</button>
                  )}
                </div>
                <FilterPanel />
              </aside>

              {/* Grid */}
              <div>
                {filtered.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: "#f0eeff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111", marginBottom: 8 }}>No products found</h3>
                    <p style={{ fontSize: "0.875rem", color: "#9ca3af", marginBottom: 16 }}>Try adjusting your filters or search term.</p>
                    <button onClick={clearAll} style={{ padding: "10px 24px", borderRadius: 999, backgroundColor: PRIMARY, color: "#fff", fontWeight: 700, fontSize: "0.875rem", border: "none", cursor: "pointer", fontFamily: "inherit" }}>Clear filters</button>
                  </div>
                ) : (
                  <div className="shop-grid">
                    {filtered.map(p => <ProductCard key={p.id} p={p} />)}
                  </div>
                )}
              </div>
            </div>
          </div>

        </main>
        <Footer />
      </div>

      {/* ── Bottom Sheet Filter Modal (mobile) ── */}
      {filterOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setFilterOpen(false)}
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.45)", zIndex: 200, backdropFilter: "blur(3px)", animation: "fadeIn 0.2s ease" }}
          />

          {/* Sheet */}
          <div style={{
            position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 201,
            backgroundColor: "#fff",
            borderRadius: "24px 24px 0 0",
            maxHeight: "88dvh",
            display: "flex", flexDirection: "column",
            boxShadow: "0 -8px 40px rgba(0,0,0,0.15)",
            animation: "slideUp 0.32s cubic-bezier(0.22,1,0.36,1)",
          }}>
            {/* Handle + header */}
            <div style={{ padding: "12px 20px 0", flexShrink: 0 }}>
              {/* Drag handle */}
              <div style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: "#e5e7eb", margin: "0 auto 16px" }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 16, borderBottom: "1px solid #f3f4f6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, backgroundColor: "#f0eeff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: "1rem", color: "#111", letterSpacing: "-0.02em" }}>Filters</p>
                    {activeFilterCount > 0 && <p style={{ fontSize: "0.7rem", color: PRIMARY, fontWeight: 600 }}>{activeFilterCount} active</p>}
                  </div>
                </div>
                <button
                  onClick={() => setFilterOpen(false)}
                  style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid #e5e7eb", backgroundColor: "#f9fafb", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#555" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>

            {/* Scrollable filter content */}
            <div style={{ overflowY: "auto", flex: 1, padding: "20px 20px 8px" }}>
              <FilterPanel />
            </div>

            {/* Apply button */}
            <div style={{ padding: "12px 20px 20px", flexShrink: 0, borderTop: "1px solid #f3f4f6" }}>
              <button
                onClick={() => setFilterOpen(false)}
                style={{ width: "100%", padding: "14px", borderRadius: 14, border: "none", backgroundColor: PRIMARY, color: "#fff", fontWeight: 700, fontSize: "0.9375rem", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 16px rgba(108,99,255,0.35)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#5a52d5"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = PRIMARY}
              >
                Show {filtered.length} Result{filtered.length !== 1 ? "s" : ""}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
