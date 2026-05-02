"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

const PRIMARY = "#6C63FF";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: Props) {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const cartTotal = useCartStore((s) => s.cartTotal());
  const cartCount = useCartStore((s) => s.cartCount());

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes fadeInBg {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .cart-drawer {
          position: fixed; top: 0; right: 0;
          height: 100dvh; width: 420px; max-width: 100vw;
          background: #fff; z-index: 60;
          display: flex; flex-direction: column;
          animation: slideInRight 0.28s cubic-bezier(0.22,1,0.36,1);
          box-shadow: -4px 0 40px rgba(0,0,0,0.12);
        }
        @media (max-width: 480px) { .cart-drawer { width: 100vw; } }
        .cart-item-remove {
          width: 28px; height: 28px; border-radius: 50%;
          border: 1px solid #e5e7eb; background: #f9fafb; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s, border-color 0.15s; flex-shrink: 0;
        }
        .cart-item-remove:hover { background: #fee2e2; border-color: #fca5a5; }
        .cart-qty-btn {
          width: 28px; height: 28px; border-radius: 8px; border: 1px solid #e5e7eb;
          background: #f9fafb; cursor: pointer; font-size: 16px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s; font-family: inherit; color: #374151;
        }
        .cart-qty-btn:hover { background: #f3f4f6; }
        .cart-checkout-btn {
          width: 100%; padding: 14px 0; border-radius: 12px;
          background: ${PRIMARY}; color: #fff; border: none;
          font-weight: 700; font-size: 0.9375rem; font-family: inherit; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background 0.15s;
        }
        .cart-checkout-btn:hover { background: #5a52d5; }
        .cart-view-btn {
          width: 100%; padding: 11px 0; border-radius: 12px;
          background: #f5f3ff; color: ${PRIMARY}; border: 2px solid #ede9fe;
          font-weight: 700; font-size: 0.875rem; font-family: inherit; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background 0.15s;
          text-decoration: none;
        }
        .cart-view-btn:hover { background: #ede9fe; }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.45)", zIndex: 55, animation: "fadeInBg 0.22s ease" }}
      />

      {/* Drawer */}
      <div className="cart-drawer">

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #f0f0f4", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <p style={{ fontWeight: 800, fontSize: "1rem", color: "#111", letterSpacing: "-0.03em" }}>Your Cart</p>
              <p style={{ fontSize: "0.7rem", color: "#9ca3af", fontWeight: 500 }}>{cartCount} {cartCount === 1 ? "item" : "items"}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid #e8e8f0", backgroundColor: "#f8f8fb", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#eeeef4")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f8f8fb")}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#555" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        {cartCount === 0 ? (
          /* Empty state */
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", gap: 14 }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", backgroundColor: "#f0eeff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="34" height="34" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={1.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontWeight: 800, fontSize: "1.1rem", color: "#111", marginBottom: 6, letterSpacing: "-0.03em" }}>Your cart is empty</p>
              <p style={{ fontSize: "0.8125rem", color: "#9ca3af", lineHeight: 1.7, maxWidth: 220, margin: "0 auto" }}>Add some products to get started!</p>
            </div>
            <Link href="/shop" onClick={onClose}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", borderRadius: 999, background: PRIMARY, color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.875rem", marginTop: 4 }}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              Shop Now
            </Link>
          </div>
        ) : (
          /* Items list */
          <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "12px 0" }}>
            {items.map((item) => (
              <div key={item.id} style={{ display: "flex", gap: 12, padding: "12px 20px", borderBottom: "1px solid #f9fafb", alignItems: "flex-start" }}>
                {/* Image */}
                <div style={{ width: 68, height: 68, borderRadius: 10, border: "1px solid #e5e7eb", background: "#f9fafb", flexShrink: 0, position: "relative", overflow: "hidden" }}>
                  <Image src={item.img} alt={item.name} fill style={{ objectFit: "contain", padding: 6 }} sizes="68px" />
                </div>
                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#111827", lineHeight: 1.3, marginBottom: 3 }}>{item.name}</p>
                  <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 6 }}>
                    {item.storage} · {item.color}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    {/* Qty stepper */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <button className="cart-qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#111827", minWidth: 20, textAlign: "center" }}>{item.quantity}</span>
                      <button className="cart-qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 800, color: "#111827" }}>${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
                {/* Remove */}
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)} title="Remove">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer (only when items exist) */}
        {cartCount > 0 && (
          <div style={{ padding: "16px 20px 20px", borderTop: "1px solid #f0f0f4", flexShrink: 0, background: "#fafafa" }}>
            {/* Totals */}
            <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #f0f0f4", padding: "12px 16px", marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: "#6b7280" }}>Subtotal ({cartCount} items)</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>${cartTotal.toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, color: "#6b7280" }}>Shipping</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#10b981" }}>{cartTotal >= 100 ? "Free" : "$9.99"}</span>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/cart" onClick={onClose} className="cart-view-btn">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                View Cart
              </Link>
              <button className="cart-checkout-btn">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
