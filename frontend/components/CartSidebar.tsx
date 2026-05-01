"use client";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: Props) {
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
          position: fixed;
          top: 0; right: 0;
          height: 100dvh;
          width: 420px;
          max-width: 100vw;
          background: #fff;
          z-index: 60;
          display: flex;
          flex-direction: column;
          animation: slideInRight 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        @media (max-width: 480px) {
          .cart-drawer {
            width: 100vw;
            border-radius: 0;
          }
        }
        .cart-shop-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 24px;
          border-radius: 999px;
          background: #f0f2f8;
          color: #111;
          border: 1px solid #e2e5f0;
          cursor: pointer;
          font-weight: 700;
          font-size: 0.875rem;
          font-family: inherit;
          transition: background 0.15s, border-color 0.15s;
        }
        .cart-shop-btn:hover {
          background: #e6e9f5;
          border-color: #c7cde8;
        }
        .cart-checkout-btn {
          width: 100%;
          padding: 14px 0;
          border-radius: 999px;
          background: #d1d5db;
          color: #9ca3af;
          border: none;
          font-weight: 700;
          font-size: 0.9375rem;
          font-family: inherit;
          cursor: not-allowed;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          backgroundColor: "rgba(0,0,0,0.45)",
          zIndex: 55,
          animation: "fadeInBg 0.22s ease",
        }}
      />

      {/* Drawer */}
      <div className="cart-drawer">

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 24px 18px",
          borderBottom: "1px solid #f0f0f4",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Purple circle icon — same as All Categories style */}
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              backgroundColor: "#6C63FF",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <p style={{ fontWeight: 800, fontSize: "1rem", color: "#111", letterSpacing: "-0.03em" }}>Your Cart</p>
              <p style={{ fontSize: "0.7rem", color: "#9ca3af", fontWeight: 500 }}>0 items</p>
            </div>
          </div>

          {/* Close btn */}
          <button
            onClick={onClose}
            style={{
              width: 36, height: 36, borderRadius: "50%",
              border: "1px solid #e8e8f0", backgroundColor: "#f8f8fb",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#eeeef4"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#f8f8fb"}
          >
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#555" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Empty state body */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "32px 28px", gap: 16,
          overflowY: "auto",
          minHeight: 0,
        }}>
          {/* Illustration */}
          <div style={{ position: "relative" }}>
            <div style={{
              width: 84, height: 84, borderRadius: "50%",
              backgroundColor: "#f0eeff",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#6C63FF" strokeWidth={1.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            {/* Small badge */}
            <div style={{
              position: "absolute", bottom: 4, right: 4,
              width: 24, height: 24, borderRadius: "50%",
              backgroundColor: "#e5e7eb",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "2px solid #fff",
            }}>
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ fontWeight: 800, fontSize: "1.125rem", color: "#111", marginBottom: 8, letterSpacing: "-0.03em" }}>
              Your cart is empty
            </p>
            <p style={{ fontSize: "0.8125rem", color: "#9ca3af", lineHeight: 1.7, maxWidth: 240, margin: "0 auto" }}>
              Looks like you haven&apos;t added anything yet. Start shopping to fill it up!
            </p>
          </div>

          {/* Suggestions chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 4 }}>
            {["Cases", "Chargers", "Earbuds", "Mounts"].map(tag => (
              <span key={tag} style={{
                padding: "6px 14px", borderRadius: 999,
                border: "1px solid #e5e7eb", backgroundColor: "#fafafa",
                fontSize: "0.75rem", fontWeight: 600, color: "#555", cursor: "pointer",
              }}>{tag}</span>
            ))}
          </div>

          <button onClick={onClose} className="cart-shop-btn" style={{ marginTop: 4 }}>
            <div style={{ width: 26, height: 26, borderRadius: "50%", backgroundColor: "#6C63FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
            Continue Shopping
          </button>
        </div>

        {/* Footer */}
        <div style={{
          padding: "18px 24px 24px",
          borderTop: "1px solid #f0f0f4",
          flexShrink: 0,
          backgroundColor: "#fafafa",
        }}>
          {/* Subtotal row */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: 14, padding: "12px 16px",
            backgroundColor: "#fff", borderRadius: 12, border: "1px solid #f0f0f4",
          }}>
            <div>
              <p style={{ fontSize: "0.7rem", color: "#9ca3af", fontWeight: 500, marginBottom: 2 }}>Subtotal</p>
              <p style={{ fontSize: "1.125rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>$0.00</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "0.7rem", color: "#9ca3af", fontWeight: 500, marginBottom: 2 }}>Items</p>
              <p style={{ fontSize: "1.125rem", fontWeight: 800, color: "#111", letterSpacing: "-0.03em" }}>0</p>
            </div>
          </div>

          <button disabled className="cart-checkout-btn">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
