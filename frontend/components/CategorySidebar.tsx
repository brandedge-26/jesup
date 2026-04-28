"use client";
import { useState } from "react";

/* ── All categories with nested sub-menus ── */
const CATEGORIES = [
  {
    label: "Mobile Parts",
    icon: "chip",
    sub: {
      title: "Trusted Mobile Parts – Reliable & Durable",
      sections: [
        { heading: "AUDIO COMPONENTS", emoji: "🔊", items: ["Earpieces Ear Speaker", "Loudspeakers Buzzer", "Handsfree Connector Jack"] },
        { heading: "CAMERA COMPONENTS", emoji: "📷", items: ["Camera Lens Glass", "Cameras Modules", "Camera Lift Motor"] },
        { heading: "OUTER PARTS", emoji: "📱", items: ["Back Glass (Covers)", "Full Body Frame Housing", "Side Keys Button", "Sim Tray Jacket"] },
        { heading: "CONNECTORS", emoji: "🔌", items: ["Battery Connector", "Charging Connector", "Display Connector", "SIM Card Reader Socket"] },
        { heading: "FLEX CABLE STRIPS", emoji: "〰️", items: ["Ear Speaker Flex (iPhone)", "LCD Display Flex Cable", "Motherboard Flex Cable", "Power & Volume Button Flex"] },
        { heading: "POWER & CHARGING", emoji: "⚡", items: ["Charging Port", "Mobile Batteries"] },
        { heading: "OTHER COMPONENTS", emoji: "🔧", items: ["Motherboard", "Stylus Pen"] },
        { heading: "FINGERPRINT", emoji: "👆", items: ["Fingerprint Sensor Flex Cable", "Under-Display Sensor"] },
      ],
    },
  },
  {
    label: "Mobile LCD/LED Panel",
    icon: "screen",
    sub: {
      title: "Mobile LCD & LED Panels – All Brands",
      sections: [
        { heading: "APPLE iPHONE LCD", emoji: "🍎", items: ["iPhone 16 Series", "iPhone 15 Series", "iPhone 14 Series", "iPhone 13 Series", "Older Models"] },
        { heading: "SAMSUNG LCD", emoji: "📺", items: ["Galaxy S Series", "Galaxy A Series", "Galaxy M Series", "Galaxy Note Series"] },
        { heading: "XIAOMI LCD", emoji: "📺", items: ["Redmi Note Series", "Mi Series", "Poco Series"] },
        { heading: "OPPO / VIVO", emoji: "📺", items: ["Oppo A/Reno Series", "Vivo V/Y Series", "OnePlus Series"] },
        { heading: "HUAWEI LCD", emoji: "📺", items: ["P Series", "Mate Series", "Nova Series"] },
        { heading: "OTHERS", emoji: "📺", items: ["Infinix LCD", "Tecno LCD", "Realme LCD", "Nokia LCD"] },
      ],
    },
  },
  {
    label: "Mobile Touch Glass",
    icon: "touch",
    sub: {
      title: "Mobile Touch Glass – Premium Quality",
      sections: [
        { heading: "APPLE iPHONE TOUCH", emoji: "🍎", items: ["iPhone 16 Touch Glass", "iPhone 15 Touch Glass", "iPhone 14 Touch Glass", "iPhone 13 Touch Glass"] },
        { heading: "SAMSUNG TOUCH", emoji: "📱", items: ["Galaxy S Series Touch", "Galaxy A Series Touch", "Galaxy Note Touch"] },
        { heading: "CHINESE BRANDS", emoji: "📱", items: ["Xiaomi Touch Glass", "Oppo Touch Glass", "Vivo Touch Glass", "Huawei Touch Glass"] },
        { heading: "OTHERS", emoji: "📱", items: ["Infinix Touch Glass", "Tecno Touch Glass", "Realme Touch Glass"] },
      ],
    },
  },
  {
    label: "Tablet Parts",
    icon: "tablet",
    sub: {
      title: "Tablet Spare Parts – All Brands",
      sections: [
        { heading: "iPAD PARTS", emoji: "🍎", items: ["iPad Pro Parts", "iPad Air Parts", "iPad Mini Parts", "iPad (Standard) Parts"] },
        { heading: "SAMSUNG TAB", emoji: "📱", items: ["Galaxy Tab S Series", "Galaxy Tab A Series", "Galaxy Tab E Series"] },
        { heading: "HUAWEI TABLET", emoji: "📱", items: ["MatePad Parts", "MediaPad Parts"] },
        { heading: "OTHERS", emoji: "📱", items: ["Lenovo Tab Parts", "Amazon Fire Parts", "Other Brand Tablets"] },
      ],
    },
  },
  {
    label: "Smart Watch Parts",
    icon: "watch",
    sub: {
      title: "Smart Watch Parts & Accessories",
      sections: [
        { heading: "APPLE WATCH", emoji: "⌚", items: ["Apple Watch Screen", "Apple Watch Battery", "Apple Watch Band", "Apple Watch Crown / Button"] },
        { heading: "SAMSUNG WATCH", emoji: "⌚", items: ["Galaxy Watch Screen", "Galaxy Watch Battery", "Galaxy Watch Band"] },
        { heading: "HUAWEI WATCH", emoji: "⌚", items: ["GT Series Parts", "Watch Fit Parts", "Watch GT Bands"] },
        { heading: "OTHERS", emoji: "⌚", items: ["Xiaomi Mi Band Parts", "Fitbit Parts", "Generic Watch Parts", "Watch Straps (Universal)"] },
      ],
    },
  },
  {
    label: "Laptop Parts",
    icon: "laptop",
    sub: {
      title: "Laptop Spare Parts – All Brands",
      sections: [
        { heading: "DISPLAY PARTS", emoji: "🖥️", items: ["Laptop LCD Screens", "Laptop Hinges", "Display Bezels / Frames", "Webcam Modules"] },
        { heading: "INPUT DEVICES", emoji: "⌨️", items: ["Laptop Keyboards", "Touchpad / Trackpad", "Individual Key Replacements"] },
        { heading: "POWER & BATTERY", emoji: "🔋", items: ["Laptop Batteries", "Power Adapters / Chargers", "DC Jack Connectors"] },
        { heading: "INTERNALS", emoji: "🔩", items: ["RAM Modules", "SSD / Storage", "Cooling Fan", "Thermal Paste", "Motherboard"] },
        { heading: "BY BRAND", emoji: "💻", items: ["HP Parts", "Dell Parts", "Lenovo Parts", "Asus Parts", "MacBook Parts"] },
      ],
    },
  },
  {
    label: "Used Mobile Phones",
    icon: "phone",
    sub: {
      title: "Used Mobile Phones – Quality Assured",
      sections: [
        { heading: "APPLE iPHONE", emoji: "🍎", items: ["iPhone 16 Series", "iPhone 15 Series", "iPhone 14 Series", "iPhone 13 Series", "Older iPhones"] },
        { heading: "SAMSUNG", emoji: "📱", items: ["Galaxy S Series (Used)", "Galaxy A Series (Used)", "Galaxy Note Series (Used)"] },
        { heading: "XIAOMI / POCO", emoji: "📱", items: ["Xiaomi 14 Series", "Redmi Note Series", "Poco Series"] },
        { heading: "OTHERS", emoji: "📱", items: ["Huawei Phones", "Oppo Phones", "Vivo Phones", "OnePlus Phones"] },
      ],
    },
  },
];

/* ── Icon per category ── */
function CatIcon({ name, active }: { name: string; active: boolean }) {
  const c = active ? "#f97316" : "#666";
  const map: Record<string, React.ReactNode> = {
    chip: (
      <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke={c} strokeWidth={1.8}>
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path strokeLinecap="round" d="M9 7V4m6 3V4M9 20v-3m6 3v-3M4 9h3m-3 6h3m11-6h-3m3 6h-3" />
      </svg>
    ),
    screen: (
      <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke={c} strokeWidth={1.8}>
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path strokeLinecap="round" d="M8 20h8m-4-2v2" />
      </svg>
    ),
    touch: (
      <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke={c} strokeWidth={1.8}>
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <circle cx="12" cy="17" r="1" fill={c} />
      </svg>
    ),
    tablet: (
      <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke={c} strokeWidth={1.8}>
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <path strokeLinecap="round" d="M9 19h6" />
      </svg>
    ),
    watch: (
      <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke={c} strokeWidth={1.8}>
        <rect x="7" y="6" width="10" height="12" rx="3" />
        <path strokeLinecap="round" d="M10 6V4h4v2M10 18v2h4v-2M12 9v3l2 1" />
      </svg>
    ),
    laptop: (
      <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke={c} strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a1 1 0 011-1h14a1 1 0 011 1v9H4V6zM2 19h20" />
      </svg>
    ),
    phone: (
      <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke={c} strokeWidth={1.8}>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <circle cx="12" cy="18" r="0.8" fill={c} />
      </svg>
    ),
  };
  return <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>{map[name]}</span>;
}

/* ── Props ── */
interface Props {
  externalOpen?: boolean;
  onRequestClose?: () => void;
}

export default function CategorySidebar({ externalOpen, onRequestClose }: Props) {
  const [hovered, setHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const isExpanded = hovered || !!externalOpen;

  const activeCat = CATEGORIES.find((c) => c.label === activeCategory);

  return (
    <>
      {/* ── Backdrop ── */}
      {isExpanded && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.38)",
            zIndex: 45,
            animation: "fadeIn 0.2s ease",
          }}
          onClick={() => {
            setHovered(false);
            setActiveCategory(null);
            onRequestClose?.();
          }}
        />
      )}

      {/* ── Main sidebar panel ── */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: isExpanded ? 264 : 52,
          backgroundColor: "#fff",
          zIndex: 50,
          boxShadow: isExpanded
            ? "4px 0 40px rgba(0,0,0,0.18)"
            : "1px 0 0 #ebebeb",
          transition: "width 0.26s cubic-bezier(0.4,0,0.2,1), box-shadow 0.26s",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setActiveCategory(null);
        }}
      >
        {/* Sidebar header */}
        <div
          style={{
            height: 56,
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            borderBottom: "1px solid #f0f0f0",
            flexShrink: 0,
            backgroundColor: isExpanded ? "#f97316" : "#fff",
            transition: "background-color 0.26s",
            gap: 12,
          }}
        >
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke={isExpanded ? "#fff" : "#555"}
            strokeWidth={2.4}
            style={{ flexShrink: 0 }}
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
              opacity: isExpanded ? 1 : 0,
              transition: "opacity 0.15s",
              letterSpacing: "0.01em",
            }}
          >
            All Categories
          </span>
        </div>

        {/* Category list */}
        <ul style={{ listStyle: "none", flex: 1, overflowY: "auto", overflowX: "hidden" }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <li key={cat.label}>
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 13,
                    padding: "12px 15px",
                    textDecoration: "none",
                    color: isActive ? "#f97316" : "#333",
                    backgroundColor: isActive ? "#fff7ed" : "transparent",
                    borderLeft: isActive ? "3px solid #f97316" : "3px solid transparent",
                    transition: "background-color 0.12s, color 0.12s, border-color 0.12s",
                    borderBottom: "1px solid #f5f5f5",
                    whiteSpace: "nowrap",
                    minWidth: 264,
                    fontWeight: isActive ? 600 : 500,
                    fontSize: "0.8625rem",
                  }}
                  onMouseEnter={() => setActiveCategory(cat.label)}
                  onMouseLeave={() => {
                    if (!activeCat?.sub) setActiveCategory(null);
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  <CatIcon name={cat.icon} active={isActive} />
                  <span
                    style={{
                      flex: 1,
                      opacity: isExpanded ? 1 : 0,
                      transition: "opacity 0.12s",
                    }}
                  >
                    {cat.label}
                  </span>
                  {isExpanded && (
                    <svg
                      width="13"
                      height="13"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke={isActive ? "#f97316" : "#ccc"}
                      strokeWidth={2.2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── Flyout mega-menu ── */}
      {isExpanded && activeCat && activeCat.sub && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 264,
            height: "100vh",
            width: "min(720px, calc(100vw - 264px))",
            backgroundColor: "#fff",
            zIndex: 50,
            boxShadow: "6px 0 32px rgba(0,0,0,0.10)",
            overflowY: "auto",
            padding: "28px 36px",
            animation: "flyoutIn 0.18s ease",
          }}
          onMouseEnter={() => setActiveCategory(activeCat.label)}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#111",
              marginBottom: 20,
              paddingBottom: 14,
              borderBottom: "2px solid #f97316",
              display: "inline-block",
            }}
          >
            {activeCat.sub.title}
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px 40px",
            }}
          >
            {activeCat.sub.sections.map((section) => (
              <div key={section.heading}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 10,
                    paddingBottom: 6,
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <span style={{ fontSize: "0.875rem" }}>{section.emoji}</span>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      color: "#555",
                      letterSpacing: "0.07em",
                    }}
                  >
                    {section.heading}
                  </span>
                </div>
                <ul style={{ listStyle: "none" }}>
                  {section.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        style={{
                          display: "block",
                          padding: "5px 0",
                          fontSize: "0.8125rem",
                          color: "#555",
                          textDecoration: "none",
                          lineHeight: 1.5,
                          transition: "color 0.12s, padding-left 0.12s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "#f97316";
                          (e.currentTarget as HTMLElement).style.paddingLeft = "6px";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "#555";
                          (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
