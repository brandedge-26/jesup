"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySidebar from "@/components/CategorySidebar";
import { useCartStore } from "@/store/cartStore";

const PRIMARY = "#6C63FF";
const PRIMARY_DARK = "#5a52d5";
const PRIMARY_LIGHT = "#f0eeff";
const SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 9.99;
const TAX_RATE = 0.08;

export default function CartPage() {
  const router = useRouter();
  const [categoryOpen, setCategoryOpen] = useState(false);

  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const clearCart = useCartStore((s) => s.clearCart);
  const cartCount = useCartStore((s) => s.cartCount());
  const cartTotal = useCartStore((s) => s.cartTotal());

  const shipping = cartTotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const tax = (cartTotal + shipping) * TAX_RATE;
  const total = cartTotal + shipping + tax;

  return (
    <>
      <style>{`
        .cart-page-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 28px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 24px 64px;
        }
        .cart-item-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 18px 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: box-shadow 0.2s;
        }
        .cart-item-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
        .cart-qty-btn {
          width: 34px; height: 34px; border-radius: 8px;
          border: 1.5px solid #e5e7eb; background: #f9fafb;
          cursor: pointer; font-size: 18px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.15s; font-family: inherit; color: #374151;
        }
        .cart-qty-btn:hover { background: #ede9fe; border-color: ${PRIMARY}; color: ${PRIMARY}; }
        .cart-remove-btn {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 600; color: #9ca3af;
          background: none; border: none; cursor: pointer;
          padding: 4px 0; font-family: inherit;
          transition: color 0.15s;
        }
        .cart-remove-btn:hover { color: #ef4444; }
        .order-summary-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 24px;
          position: sticky;
          top: 80px;
        }
        .checkout-btn {
          width: 100%; padding: 15px 0; border-radius: 13px;
          background: ${PRIMARY}; color: #fff; border: none;
          font-size: 15px; font-weight: 700; cursor: pointer;
          font-family: inherit;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background 0.15s;
        }
        .checkout-btn:hover { background: ${PRIMARY_DARK}; }
        .continue-btn {
          width: 100%; padding: 12px 0; border-radius: 13px;
          background: #f9fafb; color: #374151;
          border: 1.5px solid #e5e7eb;
          font-size: 14px; font-weight: 700; cursor: pointer;
          font-family: inherit; text-decoration: none;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background 0.15s;
        }
        .continue-btn:hover { background: #f3f4f6; }
        @media (max-width: 900px) {
          .cart-page-grid {
            grid-template-columns: 1fr;
            padding: 20px 16px 80px;
            gap: 20px;
          }
          .order-summary-card { position: static; }
        }
        @media (max-width: 560px) {
          .cart-item-card { flex-wrap: wrap; }
        }
      `}</style>

      <CategorySidebar externalOpen={categoryOpen} onRequestClose={() => setCategoryOpen(false)} />

      <div className="sidebar-offset" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar onCategoryToggle={() => setCategoryOpen(v => !v)} />

        <main style={{ flex: 1, background: "#f9fafb" }} className="pb-16 lg:pb-0">

          {/* ── Page Header ── */}
          <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6b7280" }}>
                <Link href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</Link>
                <span style={{ color: "#d1d5db" }}>›</span>
                <span style={{ color: "#111827", fontWeight: 600 }}>Shopping Cart</span>
              </div>
              {cartCount > 0 && (
                <button
                  onClick={clearCart}
                  style={{ fontSize: 12, fontWeight: 600, color: "#9ca3af", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 4 }}
                >
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  Clear all
                </button>
              )}
            </div>
          </div>

          {cartCount === 0 ? (
            /* ── Empty State ── */
            <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center", padding: "80px 24px" }}>
              <div style={{ width: 100, height: 100, borderRadius: "50%", background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <svg width="44" height="44" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={1.4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#111827", letterSpacing: "-0.04em", marginBottom: 10 }}>Your cart is empty</h2>
              <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, marginBottom: 28 }}>
                Looks like you haven&apos;t added anything yet. Browse our store and find something you love!
              </p>
              <Link href="/shop" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 999, background: PRIMARY, color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 15 }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="cart-page-grid">

              {/* ── Left: Items ── */}
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                  <h1 style={{ fontSize: 22, fontWeight: 800, color: "#111827", letterSpacing: "-0.04em" }}>
                    Shopping Cart
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#6b7280", marginLeft: 10 }}>({cartCount} {cartCount === 1 ? "item" : "items"})</span>
                  </h1>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {items.map((item) => {
                    const lineTotal = item.price * item.quantity;
                    const lineSaved = item.originalPrice > item.price ? (item.originalPrice - item.price) * item.quantity : 0;
                    return (
                      <div key={item.id} className="cart-item-card">
                        {/* Product Image */}
                        <Link href={`/product/${item.slug}`} style={{ flexShrink: 0 }}>
                          <div style={{ width: 90, height: 90, borderRadius: 12, border: "1px solid #e5e7eb", background: "#f9fafb", position: "relative", overflow: "hidden" }}>
                            <Image src={item.img} alt={item.name} fill style={{ objectFit: "contain", padding: 8 }} sizes="90px" />
                          </div>
                        </Link>

                        {/* Product Info */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 4 }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <p style={{ fontSize: 11, fontWeight: 700, color: PRIMARY, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
                                {item.brand}
                              </p>
                              <Link href={`/product/${item.slug}`} style={{ textDecoration: "none" }}>
                                <p style={{ fontSize: 15, fontWeight: 700, color: "#111827", lineHeight: 1.3 }}>{item.name}</p>
                              </Link>
                            </div>
                            <div style={{ textAlign: "right", flexShrink: 0 }}>
                              <p style={{ fontSize: 17, fontWeight: 900, color: "#111827", letterSpacing: "-0.03em" }}>${lineTotal.toLocaleString()}</p>
                              {lineSaved > 0 && (
                                <p style={{ fontSize: 11, color: "#10b981", fontWeight: 600 }}>-${lineSaved.toLocaleString()} saved</p>
                              )}
                            </div>
                          </div>

                          {/* Variant tags */}
                          <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
                            <span style={{ fontSize: 11, fontWeight: 600, color: "#6b7280", background: "#f3f4f6", padding: "3px 8px", borderRadius: 6 }}>
                              {item.storage}
                            </span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 600, color: "#6b7280", background: "#f3f4f6", padding: "3px 8px", borderRadius: 6 }}>
                              <span style={{ width: 8, height: 8, borderRadius: "50%", background: item.colorHex, border: "1px solid rgba(0,0,0,0.1)", display: "inline-block" }} />
                              {item.color}
                            </span>
                            <span style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af" }}>
                              ${item.price.toLocaleString()} each
                            </span>
                          </div>

                          {/* Qty stepper + Remove */}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <button className="cart-qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                              <span style={{ fontSize: 15, fontWeight: 800, color: "#111827", minWidth: 28, textAlign: "center" }}>{item.quantity}</span>
                              <button className="cart-qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>
                              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Continue shopping */}
                <Link href="/shop" className="continue-btn" style={{ marginTop: 16 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/></svg>
                  Continue Shopping
                </Link>
              </div>

              {/* ── Right: Order Summary ── */}
              <div>
                <div className="order-summary-card">
                  <h2 style={{ fontSize: 17, fontWeight: 800, color: "#111827", letterSpacing: "-0.03em", marginBottom: 20 }}>Order Summary</h2>

                  {/* Line items */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 0 }}>
                    {/* Subtotal */}
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                      <span style={{ fontSize: 14, color: "#6b7280" }}>Subtotal ({cartCount} items)</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>${cartTotal.toLocaleString()}</span>
                    </div>

                    {/* Shipping */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                      <div>
                        <span style={{ fontSize: 14, color: "#6b7280" }}>Shipping</span>
                        {cartTotal < SHIPPING_THRESHOLD && (
                          <p style={{ fontSize: 11, color: "#f59e0b", marginTop: 2 }}>
                            Add ${(SHIPPING_THRESHOLD - cartTotal).toFixed(0)} more for free shipping
                          </p>
                        )}
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 700, color: shipping === 0 ? "#10b981" : "#111827" }}>
                        {shipping === 0 ? "Free" : `$${SHIPPING_COST.toFixed(2)}`}
                      </span>
                    </div>

                    {/* Free shipping progress */}
                    {cartTotal < SHIPPING_THRESHOLD && (
                      <div style={{ padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                        <div style={{ height: 6, background: "#e5e7eb", borderRadius: 3, overflow: "hidden" }}>
                          <div style={{ width: `${Math.min((cartTotal / SHIPPING_THRESHOLD) * 100, 100)}%`, height: "100%", background: PRIMARY, borderRadius: 3, transition: "width 0.4s" }} />
                        </div>
                      </div>
                    )}

                    {/* Tax */}
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
                      <span style={{ fontSize: 14, color: "#6b7280" }}>Estimated Tax (8%)</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>${tax.toFixed(2)}</span>
                    </div>

                    {/* Total */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0" }}>
                      <span style={{ fontSize: 16, fontWeight: 800, color: "#111827" }}>Total</span>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontSize: 22, fontWeight: 900, color: "#111827", letterSpacing: "-0.04em" }}>${total.toFixed(2)}</span>
                        {items.some(i => i.originalPrice > i.price) && (
                          <p style={{ fontSize: 12, color: "#10b981", fontWeight: 600, marginTop: 2 }}>
                            You save ${items.reduce((s, i) => s + Math.max(0, i.originalPrice - i.price) * i.quantity, 0).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Checkout button */}
                  <button className="checkout-btn" onClick={() => router.push("/checkout")} style={{ marginBottom: 10 }}>
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    Proceed to Checkout
                  </button>

                  {/* Trust row */}
                  <div style={{ display: "flex", justifyContent: "center", gap: 16, paddingTop: 12, borderTop: "1px solid #f3f4f6" }}>
                    {[
                      { icon: <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#6b7280" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>, label: "Secure" },
                      { icon: <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#6b7280" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>, label: "Protected" },
                      { icon: <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#6b7280" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>, label: "Easy Pay" },
                    ].map(b => (
                      <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        {b.icon}
                        <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600 }}>{b.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Promo code box */}
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: "18px 20px", marginTop: 16 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 10 }}>Promo Code</p>
                  <div style={{ display: "flex", gap: 8 }}>
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      style={{ flex: 1, padding: "10px 14px", border: "1.5px solid #e5e7eb", borderRadius: 10, fontSize: 13, fontFamily: "inherit", color: "#111827", outline: "none" }}
                      onFocus={e => (e.target.style.borderColor = PRIMARY)}
                      onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                    />
                    <button style={{ padding: "10px 16px", borderRadius: 10, background: PRIMARY_LIGHT, color: PRIMARY, border: "none", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", transition: "background 0.15s", whiteSpace: "nowrap" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#ede9fe")}
                      onMouseLeave={e => (e.currentTarget.style.background = PRIMARY_LIGHT)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}
