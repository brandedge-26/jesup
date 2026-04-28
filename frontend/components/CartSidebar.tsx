"use client";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.40)",
          zIndex: 55,
          animation: "fadeIn 0.22s ease",
        }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "min(400px, 100vw)",
          backgroundColor: "#fff",
          zIndex: 60,
          display: "flex",
          flexDirection: "column",
          boxShadow: "-8px 0 48px rgba(0,0,0,0.18)",
          animation: "slideInRight 0.28s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 22px",
            borderBottom: "1px solid #f0f0f0",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#f97316"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span style={{ fontWeight: 700, fontSize: "1rem", color: "#111" }}>
              Your Cart
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "#fff",
                backgroundColor: "#f97316",
                borderRadius: 20,
                padding: "1px 8px",
                fontWeight: 700,
              }}
            >
              0
            </span>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              border: "1px solid #e8e8e8",
              backgroundColor: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#555",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#f5f5f5")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#fff")
            }
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body — empty state */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 24px",
            gap: 16,
          }}
        >
          {/* Cart illustration */}
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              backgroundColor: "#fff7ed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#f97316" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ fontWeight: 700, fontSize: "1rem", color: "#111", marginBottom: 6 }}>
              Your cart is empty
            </p>
            <p style={{ fontSize: "0.8125rem", color: "#888", lineHeight: 1.6 }}>
              Looks like you haven&apos;t added<br />anything yet.
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: "11px 28px",
              borderRadius: 8,
              backgroundColor: "#f97316",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.875rem",
              marginTop: 8,
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#ea6c0a")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#f97316")
            }
          >
            Continue Shopping
          </button>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "16px 22px",
            borderTop: "1px solid #f0f0f0",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <span style={{ fontSize: "0.875rem", color: "#666", fontWeight: 500 }}>
              Subtotal
            </span>
            <span style={{ fontSize: "1rem", fontWeight: 700, color: "#111" }}>
              Rs 0
            </span>
          </div>
          <button
            disabled
            style={{
              width: "100%",
              padding: "13px 0",
              borderRadius: 8,
              backgroundColor: "#d1d5db",
              color: "#9ca3af",
              border: "none",
              fontWeight: 700,
              fontSize: "0.9375rem",
              cursor: "not-allowed",
            }}
          >
            Checkout
          </button>
          <p style={{ fontSize: "0.6875rem", color: "#aaa", textAlign: "center", marginTop: 10 }}>
            Free delivery on orders above Rs 2,999
          </p>
        </div>
      </div>
    </>
  );
}
