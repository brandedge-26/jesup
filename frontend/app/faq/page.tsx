"use client";
import { useState, useMemo, useRef, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySidebar from "@/components/CategorySidebar";

const PRIMARY = "#6C63FF";
const PRIMARY_LIGHT = "#f0eeff";

const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions", icon: "M4 6h16M4 12h16M4 18h16" },
  { id: "orders", label: "Orders & Shipping", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { id: "returns", label: "Returns & Refunds", icon: "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" },
  { id: "warranty", label: "Warranty & Repairs", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { id: "products", label: "Products & Compatibility", icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" },
  { id: "payments", label: "Payments & Billing", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { id: "wholesale", label: "Wholesale", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { id: "account", label: "Account & Privacy", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
];

const FAQS = [
  // Orders & Shipping
  { id: 1, cat: "orders", q: "How do I track my order?", a: "Once your order ships, you'll receive a confirmation email with a tracking number. Visit our Track Order page or the carrier's website and enter your tracking number to follow your package in real time. Tracking updates every 4–6 hours." },
  { id: 2, cat: "orders", q: "How long does standard shipping take?", a: "Standard shipping takes 3–7 business days within the US. Expedited (1–2 business days) and overnight options are available at checkout. International orders may take 10–21 business days depending on destination and customs." },
  { id: 3, cat: "orders", q: "Do you offer free shipping?", a: "Yes! Orders over $75 qualify for free standard shipping within the continental US. Wholesale orders of 100+ units also qualify for free freight shipping. Promotional free shipping codes are sent to newsletter subscribers." },
  { id: 4, cat: "orders", q: "Can I change or cancel my order after placing it?", a: "Orders can be modified or cancelled within 2 hours of placement before they enter our fulfilment pipeline. After that window, we're unable to make changes. Contact us immediately via phone or WhatsApp — our team will do their best to assist you." },
  { id: 5, cat: "orders", q: "My order says delivered but I didn't receive it. What do I do?", a: "First, check around your delivery area and with neighbours. If the package is still missing after 24 hours, contact us with your order number. We'll file a carrier claim and either re-ship or refund your order. Most cases are resolved within 3–5 business days." },
  { id: 6, cat: "orders", q: "Do you ship internationally?", a: "Yes, we ship to over 40 countries. International shipping rates and delivery times vary by destination. Import duties and taxes are the responsibility of the recipient. Use the shipping calculator at checkout for an accurate estimate." },
  { id: 7, cat: "orders", q: "What happens if my package is damaged during shipping?", a: "If your package arrives damaged, take photos of the outer packaging and the damaged item immediately. Email us at support@jesupwireless.com within 48 hours of delivery with your order number and photos. We'll arrange a replacement or refund promptly." },

  // Returns & Refunds
  { id: 8, cat: "returns", q: "What is your return policy?", a: "We offer a 30-day hassle-free return policy on all unused, unopened items in their original packaging. Simply contact our support team, and we'll send you a prepaid return label. Refunds are processed within 5–7 business days of receiving the returned item." },
  { id: 9, cat: "returns", q: "How do I start a return?", a: "To initiate a return, email support@jesupwireless.com with your order number and reason for return. We'll respond within one business day with a prepaid return shipping label and instructions. Once we receive and inspect the item, your refund will be processed." },
  { id: 10, cat: "returns", q: "Can I exchange an item instead of returning it?", a: "Absolutely. We offer direct exchanges within 30 days of purchase. Contact us with your order number and the item you'd like to exchange for. If the new item costs more, we'll invoice you for the difference; if less, we'll refund the amount." },
  { id: 11, cat: "returns", q: "Are there any items that cannot be returned?", a: "Items that have been opened, used, or damaged by the customer cannot be returned. Customized or special-order items, clearance/final-sale products, and items returned after 30 days are also non-returnable. Gift cards are non-refundable." },
  { id: 12, cat: "returns", q: "How long do refunds take to appear?", a: "Once we process your refund, it typically appears on your statement within 5–10 business days depending on your bank. Credit card refunds may take up to 2 billing cycles. PayPal refunds are usually immediate. We'll email you when the refund is issued." },
  { id: 13, cat: "returns", q: "I received the wrong item. What should I do?", a: "We sincerely apologize for the mix-up! Email us at support@jesupwireless.com with your order number and a photo of the item you received. We'll ship the correct item at no extra charge and provide a prepaid label for the wrong item — at our expense." },

  // Warranty & Repairs
  { id: 14, cat: "warranty", q: "What warranty do your products come with?", a: "All products carry a minimum 90-day manufacturer warranty against defects in materials and workmanship. Select brands offer extended coverage: ZIZO cases come with a 1-year warranty, and certain charging products carry an 18-month warranty. Details are listed on each product page." },
  { id: 15, cat: "warranty", q: "How do I file a warranty claim?", a: "Email support@jesupwireless.com with your order number, a description of the defect, and clear photos or a short video showing the issue. Our warranty team reviews claims within 2 business days. Approved claims result in a replacement being shipped at no cost to you." },
  { id: 16, cat: "warranty", q: "Does the warranty cover accidental damage?", a: "Standard warranties cover manufacturing defects only — not accidental damage, water damage, or normal wear and tear. If your device was damaged accidentally, contact us anyway; we often offer a discounted replacement option for loyal customers." },
  { id: 17, cat: "warranty", q: "Do you offer repair services?", a: "Yes! We offer professional repair services for smartphones, tablets, and select accessories at our Jesup, GA location. Services include screen replacements, battery swaps, charging port repairs, and more. Contact us for a free repair quote." },
  { id: 18, cat: "warranty", q: "Can I get my phone repaired by mail?", a: "Yes, we offer mail-in repair services. Ship your device to us with a description of the issue, and we'll diagnose and repair it, then ship it back. Turnaround time is typically 3–5 business days from receipt. We provide a repair estimate before proceeding." },
  { id: 19, cat: "warranty", q: "Is my warranty transferable if I sell my device?", a: "Manufacturer warranties are generally tied to the original purchase and are not transferable. However, our in-store service warranty (covering repairs done by our technicians) follows the device for 90 days regardless of ownership." },

  // Products & Compatibility
  { id: 20, cat: "products", q: "How do I know if a product is compatible with my device?", a: "Each product page lists compatible devices in the 'Compatibility' section. You can also use our compatibility checker tool — just enter your device model and it will filter products that fit. If you're still unsure, chat with us on WhatsApp for instant guidance." },
  { id: 21, cat: "products", q: "What brands do you carry?", a: "We carry ZIZO, Nimbuzz, CLICK, and a curated selection of other premium mobile accessory brands. We specialize in cases, screen protectors, chargers, cables, earbuds, mounts, and repair parts for all major smartphone and tablet brands." },
  { id: 22, cat: "products", q: "Are your screen protectors easy to apply?", a: "Yes! All our screen protectors come with an alignment tray or guide frame for bubble-free installation. We recommend cleaning your screen with the included alcohol wipe and dust sticker before applying. Installation takes under 2 minutes." },
  { id: 23, cat: "products", q: "Do your chargers support fast charging?", a: "Many of our chargers support fast charging protocols including USB Power Delivery (USB-PD), Quick Charge 3.0/4.0, and 65W GaN charging. The supported protocol is clearly listed on each product page. Always use a compatible cable for best results." },
  { id: 24, cat: "products", q: "Are your products MFi certified for Apple devices?", a: "Our Apple-compatible products are MFi (Made for iPhone/iPad/iPod) certified where applicable. Look for the MFi badge on the product page. Using non-certified accessories with Apple devices can cause compatibility warnings — all our certified products will work without issues." },
  { id: 25, cat: "products", q: "Can I request a product that's not listed on your website?", a: "Yes! If you're looking for a specific product or brand we don't currently carry, reach out via email or phone. We source products regularly and can often accommodate special requests, especially for wholesale buyers ordering in volume." },

  // Payments & Billing
  { id: 26, cat: "payments", q: "What payment methods do you accept?", a: "We accept all major credit and debit cards (Visa, Mastercard, Amex, Discover), PayPal, Apple Pay, Google Pay, and bank transfers for wholesale accounts. All transactions are encrypted with SSL and processed through PCI-compliant payment gateways." },
  { id: 27, cat: "payments", q: "Is it safe to enter my card details on your website?", a: "Absolutely. Our website uses 256-bit SSL encryption and we are PCI DSS compliant. We never store your full card details on our servers — all payment data is handled by our certified payment processor. You can also pay via PayPal for an extra layer of security." },
  { id: 28, cat: "payments", q: "Will I be charged sales tax?", a: "Sales tax is applied based on your shipping address in accordance with local tax laws. The tax amount will be clearly shown at checkout before you confirm your order. Wholesale accounts with a valid resale certificate can apply for tax-exempt status." },
  { id: 29, cat: "payments", q: "Can I get an invoice for my order?", a: "Yes. A digital invoice is automatically emailed to you after every purchase. You can also download invoices from your account dashboard under 'Order History'. For wholesale accounts, we can issue custom invoices with your business details upon request." },
  { id: 30, cat: "payments", q: "Why was my payment declined?", a: "Payments can be declined for several reasons: insufficient funds, incorrect card details, billing address mismatch, or your bank flagging the transaction. Try re-entering your details, check that your billing address matches your card, or contact your bank. You can also try PayPal as an alternative." },
  { id: 31, cat: "payments", q: "Do you offer payment plans or buy now, pay later?", a: "We are currently working on integrating buy-now-pay-later options. For wholesale accounts placing large orders, we offer net-30 payment terms after a credit review. Contact our sales team to discuss payment arrangement options for bulk orders." },

  // Wholesale
  { id: 32, cat: "wholesale", q: "How do I apply for a wholesale account?", a: "Fill out the Wholesale Inquiry form on our Contact page or email wholesale@jesupwireless.com with your business name, tax ID, estimated monthly volume, and product categories of interest. Our sales team will respond within 1 business day with pricing and next steps." },
  { id: 33, cat: "wholesale", q: "What is the minimum order quantity for wholesale?", a: "Our minimum order is 50 units per SKU for wholesale pricing. Mixed orders of 100+ total units also qualify. There is no minimum for re-orders once your account is established. Volume discounts increase at 250, 500, and 1,000+ unit tiers." },
  { id: 34, cat: "wholesale", q: "Can I get product samples before placing a large order?", a: "Yes, we offer a sample program for qualified wholesale applicants. A sample kit (up to 5 items) is available at cost price plus shipping. The sample cost is fully credited toward your first bulk order of 100+ units." },
  { id: 35, cat: "wholesale", q: "Do you offer drop shipping?", a: "We do not currently offer a public dropshipping program. However, established wholesale partners with a proven order history may discuss custom fulfilment arrangements with our sales team on a case-by-case basis." },
  { id: 36, cat: "wholesale", q: "Can I private label your products?", a: "Yes, private labeling is available for select product categories at minimum order quantities of 500+ units. We can customize packaging, add your logo, and create branded inserts. Lead times for private label orders are typically 4–6 weeks. Contact us for a custom quote." },

  // Account & Privacy
  { id: 37, cat: "account", q: "How do I create an account?", a: "Click 'Sign Up' in the top right corner of the website. Enter your name, email, and a strong password. You'll receive a verification email — click the link to activate your account. An account lets you track orders, save addresses, and access your order history." },
  { id: 38, cat: "account", q: "I forgot my password. How do I reset it?", a: "Click 'Sign In', then 'Forgot Password'. Enter your registered email address and we'll send you a reset link valid for 30 minutes. If you don't see the email, check your spam folder. For account lockouts after multiple failed attempts, contact support." },
  { id: 39, cat: "account", q: "How is my personal data used?", a: "We collect only the data necessary to process your orders and provide support. We do not sell your data to third parties. Your information is protected under our Privacy Policy and stored securely in compliance with applicable data protection regulations." },
  { id: 40, cat: "account", q: "How do I delete my account?", a: "To delete your account, email support@jesupwireless.com from your registered email address with the subject 'Account Deletion Request'. We'll process your request within 5 business days. Note that deletion is permanent and your order history will be removed." },
];

function FaqItem({ item, isOpen, onToggle }: { item: typeof FAQS[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      id={`faq-${item.id}`}
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 14,
        overflow: "hidden",
        backgroundColor: "#fff",
        transition: "border-color 0.15s, box-shadow 0.15s",
        boxShadow: isOpen ? "0 4px 20px rgba(108,99,255,0.08)" : "none",
        borderColor: isOpen ? PRIMARY : "#e5e7eb",
        scrollMarginTop: 120,
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%", textAlign: "left",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 16, padding: "16px 18px",
          background: "none", border: "none", cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#111", lineHeight: 1.45 }}>{item.q}</span>
        <div style={{
          width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
          backgroundColor: isOpen ? PRIMARY : "#f4f4f7",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background-color 0.2s, transform 0.25s",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
        }}>
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke={isOpen ? "#fff" : "#555"} strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div style={{ padding: "0 18px 18px" }}>
          <div style={{ width: 36, height: 2.5, backgroundColor: PRIMARY, borderRadius: 2, marginBottom: 12 }} />
          <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.8 }}>{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dropdownResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return FAQS.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)).slice(0, 8);
  }, [search]);

  const filtered = useMemo(() => {
    return FAQS.filter(f => {
      const matchCat = activeTab === "all" || f.cat === activeTab;
      const q = search.toLowerCase();
      const matchSearch = !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeTab, search]);

  const groupedByCategory = useMemo(() => {
    if (activeTab !== "all" || search) return null;
    const map: Record<string, typeof FAQS> = {};
    FAQS.forEach(f => { if (!map[f.cat]) map[f.cat] = []; map[f.cat].push(f); });
    return map;
  }, [activeTab, search]);

  const getCatLabel = (catId: string) => FAQ_CATEGORIES.find(c => c.id === catId)?.label ?? catId;

  const handleDropdownClick = useCallback((item: typeof FAQS[0]) => {
    setShowDropdown(false);
    setSearch("");
    setActiveTab("all");
    setOpenId(item.id);
    setTimeout(() => {
      const el = document.getElementById(`faq-${item.id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 60);
  }, []);

  const handleSearchFocus = () => {
    if (blurTimer.current) clearTimeout(blurTimer.current);
    setSearchFocused(true);
    if (search.trim()) setShowDropdown(true);
  };

  const handleSearchBlur = () => {
    blurTimer.current = setTimeout(() => {
      setSearchFocused(false);
      setShowDropdown(false);
    }, 180);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    setActiveTab("all");
    setShowDropdown(val.trim().length > 0);
  };

  return (
    <>
      <style>{`
        .faq-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
        .faq-tab  { display: inline-flex; align-items: center; gap: 7px; padding: 8px 14px; border-radius: 999px; border: 1.5px solid #e5e7eb; background: #fff; cursor: pointer; font-size: 0.8rem; font-weight: 600; color: #555; font-family: inherit; transition: all 0.15s; white-space: nowrap; }
        .faq-tab:hover  { border-color: ${PRIMARY}; color: ${PRIMARY}; background: ${PRIMARY_LIGHT}; }
        .faq-tab.active { border-color: ${PRIMARY}; color: #fff; background: ${PRIMARY}; }

        /* Layout: sidebar + content */
        .faq-layout { display: grid; grid-template-columns: 240px 1fr; gap: 2rem; align-items: start; }

        /* Mobile tabs: visible only below 860px */
        .faq-mobile-tabs { display: flex; }
        @media (min-width: 860px) { .faq-mobile-tabs { display: none !important; } }
        @media (max-width: 860px) { .faq-layout { grid-template-columns: 1fr; } .faq-sidebar { display: none !important; } }

        /* Hero stat pills: hide on small mobile */
        @media (max-width: 520px) { .faq-hero-pills { display: none !important; } }

        /* Dropdown scrollbar */
        .faq-dropdown::-webkit-scrollbar { width: 4px; }
        .faq-dropdown::-webkit-scrollbar-track { background: transparent; }
        .faq-dropdown::-webkit-scrollbar-thumb { background: rgba(108,99,255,0.3); border-radius: 4px; }

        /* Dropdown item hover */
        .faq-drop-item { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; cursor: pointer; transition: background 0.12s; border-radius: 10px; }
        .faq-drop-item:hover { background: rgba(255,255,255,0.06); }

        /* Responsive hero padding */
        @media (max-width: 640px) {
          .faq-hero-inner { padding: 3rem 1.25rem 2.5rem !important; }
          .faq-hero-title { font-size: 1.75rem !important; }
        }
      `}</style>

      <CategorySidebar externalOpen={categoryOpen} onRequestClose={() => setCategoryOpen(false)} />

      <div className="sidebar-offset" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "var(--background)" }}>
        <Navbar onCategoryToggle={() => setCategoryOpen(v => !v)} />

        <main className="pb-16 lg:pb-0" style={{ flex: 1 }}>

          {/* ── Hero ── */}
          <div style={{ padding: "1.5rem 1.5rem 0" }}>
            {/* overflow:hidden is on the inner clip-wrapper only so the dropdown can escape */}
            <section style={{ position: "relative", backgroundColor: "#0a0a0f", borderRadius: 24 }}>
              {/* Decorative clip wrapper — clips grid + glow to rounded corners without clipping dropdown */}
              <div style={{ position: "absolute", inset: 0, borderRadius: 24, overflow: "hidden", pointerEvents: "none" }}>
                {/* Grid pattern */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
                {/* Glow */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 700, height: 260, background: "radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.28) 0%, transparent 68%)" }} />
              </div>

              {/* Stat pills */}
              {/* <div className="faq-hero-pills" style={{ position: "absolute", top: 20, right: 24, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
                {[{ n: FAQS.length + "+", l: "Questions" }, { n: (FAQ_CATEGORIES.length - 1) + "", l: "Topics" }].map(s => (
                  <div key={s.l} style={{ padding: "6px 14px", borderRadius: 999, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
                    <span style={{ fontSize: "0.875rem", fontWeight: 800, color: "#fff" }}>{s.n} </span>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>{s.l}</span>
                  </div>
                ))}
              </div> */}
              a
              <div className="faq-hero-inner" style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", padding: "4rem 1.5rem 3.5rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PRIMARY, backgroundColor: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.25)", padding: "5px 14px", borderRadius: 20, marginBottom: "1.25rem" }}>
                  FAQ
                </span>
                <h1 className="faq-hero-title" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.08, marginBottom: "1rem" }}>
                  Frequently Asked <span style={{ color: PRIMARY }}>Questions</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                  Everything you need to know about our products, services, and policies.
                </p>

                {/* ── Search with dropdown ── */}
                <div style={{ position: "relative", maxWidth: 520, margin: "0 auto" }}>
                  {/* Search bar */}
                  <div style={{
                    display: "flex", alignItems: "center",
                    background: "rgba(255,255,255,0.10)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: `1px solid ${searchFocused ? "rgba(108,99,255,0.6)" : "rgba(255,255,255,0.18)"}`,
                    borderRadius: 999,
                    padding: "7px 7px 7px 20px",
                    boxShadow: searchFocused ? "0 0 0 3px rgba(108,99,255,0.18), 0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.3)",
                    transition: "border-color 0.2s, box-shadow 0.2s, border-radius 0.15s",
                    position: "relative", zIndex: 2,
                  }}>
                    <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.5)" strokeWidth={2.2} style={{ flexShrink: 0, marginRight: 10 }}>
                      <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search questions…"
                      value={search}
                      onChange={handleSearchChange}
                      onFocus={handleSearchFocus}
                      onBlur={handleSearchBlur}
                      style={{ flex: 1, border: "none", outline: "none", fontSize: "0.9375rem", color: "#fff", backgroundColor: "transparent", fontFamily: "inherit" }}
                    />
                    {search && (
                      <button
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => { setSearch(""); setShowDropdown(false); }}
                        style={{ background: "none", border: "none", cursor: "pointer", padding: "0 8px", color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center" }}
                      >
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    )}
                    <button style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", backgroundColor: PRIMARY, border: "none", cursor: "pointer", flexShrink: 0 }}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>

                  {/* ── Dropdown ── */}
                  {showDropdown && dropdownResults.length > 0 && (
                    <div
                      className="faq-dropdown"
                      style={{
                        position: "absolute",
                        top: "calc(100% + 10px)",
                        left: 0, right: 0,
                        background: "rgba(18,16,32,0.96)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 14,
                        overflow: "hidden",
                        zIndex: 50,
                        maxHeight: 320,
                        overflowY: "auto",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                      }}
                    >
                      <div style={{ padding: "6px 8px 6px" }}>
                        {dropdownResults.map(item => (
                          <div
                            key={item.id}
                            className="faq-drop-item"
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => handleDropdownClick(item)}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
                              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.55)" strokeWidth={2} style={{ flexShrink: 0 }}>
                                <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                              </svg>
                              <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {item.q}
                              </span>
                            </div>
                            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.3)" strokeWidth={2} style={{ flexShrink: 0 }}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* No results hint */}
                  {showDropdown && search.trim() && dropdownResults.length === 0 && (
                    <div style={{
                      position: "absolute", top: "calc(100% + 10px)", left: 0, right: 0,
                      background: "rgba(18,16,32,0.96)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "16px 18px",
                      textAlign: "center", zIndex: 50,
                      boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                    }}>
                      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)" }}>No questions matched &quot;{search}&quot;</p>
                    </div>
                  )}
                </div>

                {/* Result count below hero */}
                {search && !showDropdown && (
                  <p style={{ marginTop: 14, fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>
                    {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &quot;{search}&quot;
                  </p>
                )}
              </div>
            </section>
          </div>

          {/* ── Main content ── */}
          <div style={{ backgroundColor: "#f8fafc", padding: "2.5rem 0 5rem" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>

              {/* Mobile category tabs */}
              <div className="faq-tabs faq-mobile-tabs" style={{ marginBottom: "1.5rem" }}>
                {FAQ_CATEGORIES.map(tab => (
                  <button key={tab.id} className={`faq-tab${activeTab === tab.id ? " active" : ""}`} onClick={() => { setActiveTab(tab.id); setSearch(""); setOpenId(null); }}>
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                    </svg>
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="faq-layout">

                {/* Left sidebar — desktop only */}
                <div className="faq-sidebar" style={{ display: "flex", flexDirection: "column", gap: 3, position: "sticky", top: 100 }}>
                  <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, paddingLeft: 12 }}>Topics</p>
                  {FAQ_CATEGORIES.map(tab => {
                    const isActive = activeTab === tab.id;
                    const count = tab.id === "all" ? FAQS.length : FAQS.filter(f => f.cat === tab.id).length;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => { setActiveTab(tab.id); setSearch(""); setOpenId(null); }}
                        style={{
                          display: "flex", alignItems: "center", gap: 10,
                          padding: "10px 12px", borderRadius: 12,
                          border: "none", cursor: "pointer", fontFamily: "inherit",
                          backgroundColor: isActive ? PRIMARY_LIGHT : "transparent",
                          color: isActive ? PRIMARY : "#555",
                          fontWeight: isActive ? 700 : 500,
                          fontSize: "0.85rem", textAlign: "left",
                          transition: "background-color 0.15s, color 0.15s",
                        }}
                        onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = "#f4f4f7"; }}
                        onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                      >
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} style={{ flexShrink: 0 }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                        </svg>
                        <span style={{ flex: 1 }}>{tab.label}</span>
                        <span style={{ fontSize: "0.7rem", fontWeight: 700, color: isActive ? PRIMARY : "#c4c4cc", backgroundColor: isActive ? "#fff" : "#f0f0f4", padding: "2px 7px", borderRadius: 999 }}>{count}</span>
                      </button>
                    );
                  })}

                  {/* Still need help */}
                  <div style={{ marginTop: 20, padding: "16px", backgroundColor: "#0a0a0f", borderRadius: 16, position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(108,99,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                    <div style={{ position: "relative" }}>
                      <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", marginBottom: 6 }}>Still need help?</p>
                      <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginBottom: 14 }}>Can&apos;t find what you&apos;re looking for? Our team is ready to help.</p>
                      <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 999, backgroundColor: PRIMARY, color: "#fff", fontSize: "0.8125rem", fontWeight: 700, textDecoration: "none" }}>
                        Contact Us
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right — FAQ list */}
                <div>
                  {/* Search results */}
                  {search && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                      {filtered.length > 0 ? filtered.map(f => (
                        <FaqItem key={f.id} item={f} isOpen={openId === f.id} onToggle={() => setOpenId(openId === f.id ? null : f.id)} />
                      )) : (
                        <div style={{ textAlign: "center", padding: "4rem 1rem", backgroundColor: "#fff", borderRadius: 20, border: "1px solid #e5e7eb" }}>
                          <svg width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="#d1d5db" strokeWidth={1.5} style={{ marginBottom: 16 }}>
                            <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                          </svg>
                          <p style={{ fontWeight: 700, color: "#374151", marginBottom: 6, fontSize: "1rem" }}>No results found</p>
                          <p style={{ fontSize: "0.875rem", color: "#9ca3af" }}>Try different keywords or <a href="/contact" style={{ color: PRIMARY, fontWeight: 600 }}>contact our team</a>.</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Category filter */}
                  {!search && activeTab !== "all" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                      {filtered.map(f => (
                        <FaqItem key={f.id} item={f} isOpen={openId === f.id} onToggle={() => setOpenId(openId === f.id ? null : f.id)} />
                      ))}
                    </div>
                  )}

                  {/* All grouped by category */}
                  {!search && activeTab === "all" && groupedByCategory && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                      {FAQ_CATEGORIES.filter(t => t.id !== "all").map(tab => {
                        const items = groupedByCategory[tab.id] || [];
                        if (!items.length) return null;
                        return (
                          <div key={tab.id}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.875rem" }}>
                              <div style={{ width: 32, height: 32, borderRadius: 10, backgroundColor: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth={1.8}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                                </svg>
                              </div>
                              <h2 style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#111", letterSpacing: "-0.02em" }}>{tab.label}</h2>
                              <span style={{ fontSize: "0.7rem", fontWeight: 700, color: PRIMARY, backgroundColor: PRIMARY_LIGHT, padding: "2px 9px", borderRadius: 999 }}>{items.length}</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                              {items.map(f => (
                                <FaqItem key={f.id} item={f} isOpen={openId === f.id} onToggle={() => setOpenId(openId === f.id ? null : f.id)} />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
}
