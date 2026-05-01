"use client";
import { useState, useRef } from "react";
import {
  Smartphone, Package, Tablet, LayoutGrid,
  Laptop, Gamepad2, Wrench, ChevronRight,
  AlignJustify, X, ArrowLeft,
} from "lucide-react";

const PRIMARY = "#6C63FF";

/* ── Category data ── */
const CATEGORIES = [
  {
    label: "Mobile Phones",
    Icon: Smartphone,
    sub: {
      title: "Mobile Phones",
      sections: [
        {
          heading: "Samsung",
          items: ["Galaxy A37 5G", "Galaxy S26 Ultra", "Galaxy S26 Plus", "Galaxy S26", "Galaxy A17 5G", "Galaxy A26", "Galaxy Z Fold 7", "Galaxy Z Flip 7", "Galaxy S25 FE", "Galaxy Tab A9 Plus", "See All Samsung…"],
        },
        {
          heading: "Cricket",
          items: ["Cricket Icon Pro 2026", "Cricket Icon 2026", "Cricket Icon Plus 2026", "Cricket Magic 2 5G", "Cricket Icon 6", "Cricket Outlast 5G", "Cricket Debut S3", "Cricket Magic 5G", "Cricket Debut Smart", "Cricket Outlast", "See All Cricket…"],
        },
        {
          heading: "Apple",
          items: ["iPhone 17e", "iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone Air", "iPhone 17", "iPhone 16e", "iPhone 16 Pro Max", "iPhone 16 Plus", "iPhone 16", "iPhone 16 Pro", "See All Apple…"],
        },
        {
          heading: "Motorola",
          items: ["Moto G 5G 2026", "Moto G Play 2026", "Moto G Stylus 2026", "Motorola Edge 2025", "Motorola Razr 2025/2026", "Moto G Stylus (2025)", "Moto G Power 2025/2026", "Moto G (2025)", "Moto G Play (2024)", "Moto G Power 5G (2024)", "See All Motorola…"],
        },
        {
          heading: "TCL",
          items: ["TCL 50 XE 5G", "TCL 30 Z", "TCL ION Z", "TCL K33 5G"],
        },
        {
          heading: "More",
          items: ["Boost", "Google", "OnePlus", "Sony Xperia", "See All Brands…"],
        },
      ],
    },
  },
  {
    label: "Accessories",
    Icon: Package,
    sub: {
      title: "Accessories",
      sections: [
        {
          heading: "Cases & Protection",
          items: ["Screen Protection", "Phone Cases", "Ready-To-Customize", "Kiosks"],
        },
        {
          heading: "Charging & Power",
          items: ["Chargers", "Cables & Adapters", "Power Banks", "Wireless Chargers"],
        },
        {
          heading: "Audio",
          items: ["Speakers", "Earbuds & Headphones"],
        },
        {
          heading: "Mounts & Holders",
          items: ["Phone Grips", "Car Mounts", "Desk Mounts"],
        },
        {
          heading: "Wearables",
          items: ["Smartwatches", "Watch Bands", "Fitness Trackers"],
        },
        {
          heading: "More",
          items: ["Screen Cleaners", "Storage & Memory", "Camera Accessories"],
        },
      ],
    },
  },
  {
    label: "iPads",
    Icon: Tablet,
    sub: {
      title: "iPads",
      sections: [
        {
          heading: "iPad Pro",
          items: ["iPad Pro 13-inch (M4)", "iPad Pro 11-inch (M4)", "iPad Pro 12.9-inch (M2)", "iPad Pro 11-inch (M2)"],
        },
        {
          heading: "iPad Air",
          items: ["iPad Air 13-inch (M3)", "iPad Air 11-inch (M3)", "iPad Air 5th Gen", "iPad Air 4th Gen"],
        },
        {
          heading: "iPad mini",
          items: ["iPad mini 7 (A17 Pro)", "iPad mini 6th Gen", "iPad mini 5th Gen"],
        },
        {
          heading: "iPad Standard",
          items: ["iPad 10th Generation", "iPad 9th Generation", "iPad 8th Generation"],
        },
        {
          heading: "Cases & Accessories",
          items: ["iPad Cases", "Apple Pencil", "Smart Folio", "Magic Keyboard", "Screen Protectors"],
        },
      ],
    },
  },
  {
    label: "Android Tablets",
    Icon: LayoutGrid,
    sub: {
      title: "Android Tablets",
      sections: [
        {
          heading: "Samsung Galaxy Tab",
          items: ["Galaxy Tab S10 Ultra", "Galaxy Tab S10+", "Galaxy Tab S10", "Galaxy Tab S10 FE", "Galaxy Tab A9+", "Galaxy Tab A9"],
        },
        {
          heading: "Amazon Fire",
          items: ["Fire HD 10 (2023)", "Fire HD 8 (2022)", "Fire 7 (2022)", "Fire HD 10 Kids", "Fire HD 8 Kids"],
        },
        {
          heading: "Lenovo",
          items: ["Tab P12 Pro", "Tab P11 Gen 2", "Tab M10 Plus", "Tab M9", "Tab M8"],
        },
        {
          heading: "Google & Others",
          items: ["Pixel Tablet", "ASUS ROG Flow Z13", "TCL Tab 10 Gen 2", "OnePlus Pad 2", "Motorola Tab G62"],
        },
        {
          heading: "Accessories",
          items: ["Tablet Cases", "Stylus Pens", "Keyboard Cases", "Screen Protectors", "Stands & Mounts"],
        },
      ],
    },
  },
  {
    label: "Laptops",
    Icon: Laptop,
    sub: {
      title: "Laptops",
      sections: [
        {
          heading: "Apple MacBook",
          items: ["MacBook Pro 16-inch (M4)", "MacBook Pro 14-inch (M4)", "MacBook Air 15-inch (M3)", "MacBook Air 13-inch (M3)"],
        },
        {
          heading: "Dell",
          items: ["XPS 13", "XPS 15", "Inspiron 15", "Latitude Series", "Alienware m18"],
        },
        {
          heading: "HP",
          items: ["Spectre x360 14", "Envy x360 15", "Pavilion 15", "HP OMEN 16", "EliteBook 840"],
        },
        {
          heading: "Lenovo",
          items: ["ThinkPad X1 Carbon", "IdeaPad 5 Pro", "Yoga 9i", "Legion 5 Pro", "Slim 5i"],
        },
        {
          heading: "ASUS & Microsoft",
          items: ["ZenBook 14", "ROG Zephyrus G14", "VivoBook 15", "Surface Laptop 5", "Surface Pro 10"],
        },
        {
          heading: "Accessories",
          items: ["Laptop Bags & Sleeves", "Docking Stations", "Laptop Stands", "External Storage", "Cooling Pads"],
        },
      ],
    },
  },
  {
    label: "Gaming Consoles",
    Icon: Gamepad2,
    sub: {
      title: "Gaming Consoles",
      sections: [
        {
          heading: "PlayStation",
          items: ["PS5 Console", "PS5 Slim", "PS5 Digital Edition", "DualSense Controller", "PlayStation VR2"],
        },
        {
          heading: "Xbox",
          items: ["Xbox Series X", "Xbox Series S", "Xbox Elite Controller", "Xbox Game Pass", "Xbox Accessories"],
        },
        {
          heading: "Nintendo",
          items: ["Nintendo Switch 2", "Nintendo Switch OLED", "Nintendo Switch Lite", "Joy-Con Controllers", "Nintendo Pro Controller"],
        },
        {
          heading: "Gaming Accessories",
          items: ["Gaming Headsets", "Extra Controllers", "Charging Stations", "Memory Cards & SSD", "Gaming Chairs"],
        },
      ],
    },
  },
  {
    label: "Repair Services",
    Icon: Wrench,
    sub: {
      title: "Repair Services",
      sections: [
        {
          heading: "Screen Repair",
          items: ["iPhone Screen Repair", "Samsung Screen Repair", "Google Pixel Screen", "iPad Screen Repair", "Tablet Screen Repair"],
        },
        {
          heading: "Battery Replacement",
          items: ["iPhone Battery", "Samsung Battery", "Google Pixel Battery", "iPad Battery", "Laptop Battery"],
        },
        {
          heading: "Water Damage",
          items: ["Water Damage Diagnostic", "Component Cleaning", "Corrosion Treatment", "Board-Level Repair"],
        },
        {
          heading: "Other Repairs",
          items: ["Charging Port Repair", "Speaker & Mic Repair", "Camera Repair", "Back Glass Repair", "Software & Unlock"],
        },
      ],
    },
  },
];

interface Props {
  externalOpen?: boolean;
  onRequestClose?: () => void;
}

/* ════════════════════════════
   DESKTOP — icon rail + hover expand + flyout
════════════════════════════ */
function DesktopSidebar({ externalOpen, onRequestClose }: Props) {
  const [hovered,   setHovered]   = useState(false);
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => { if (hideTimer.current) { clearTimeout(hideTimer.current); hideTimer.current = null; } };
  const startTimer = () => {
    clearTimer();
    hideTimer.current = setTimeout(() => { setHovered(false); setActiveCat(null); }, 150);
  };

  const isExpanded = hovered || !!externalOpen;
  const current    = CATEGORIES.find(c => c.label === activeCat);

  return (
    <>
      {isExpanded && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.28)", zIndex: 45, animation: "fadeIn 0.2s ease" }}
          onClick={() => { setHovered(false); setActiveCat(null); onRequestClose?.(); }} />
      )}

      {/* Rail */}
      <div
        style={{ position: "fixed", left: 0, top: 0, height: "100vh", width: isExpanded ? 260 : 52, backgroundColor: "#fff", zIndex: 50, boxShadow: isExpanded ? "6px 0 40px rgba(0,0,0,0.12)" : "1px 0 0 #ebebeb", transition: "width 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s", overflow: "hidden", display: "flex", flexDirection: "column" }}
        onMouseEnter={() => { clearTimer(); setHovered(true); }}
        onMouseLeave={startTimer}
      >
        {/* Header */}
        <div style={{ height: 52, display: "flex", alignItems: "center", padding: "0 13px", flexShrink: 0, gap: 12, background: isExpanded ? `linear-gradient(135deg, ${PRIMARY}, #5a52d5)` : "#fff", borderBottom: isExpanded ? "none" : "1px solid #f0f0f0", transition: "background 0.25s" }}>
          <AlignJustify size={19} color={isExpanded ? "#fff" : "#888"} strokeWidth={2} style={{ flexShrink: 0 }} />
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.875rem", whiteSpace: "nowrap", opacity: isExpanded ? 1 : 0, transition: "opacity 0.15s" }}>All Categories</span>
        </div>

        {/* List */}
        <ul style={{ listStyle: "none", flex: 1, overflowY: "auto", overflowX: "hidden" }}>
          {CATEGORIES.map(cat => {
            const isActive = activeCat === cat.label;
            return (
              <li key={cat.label}>
                <a href="#" onClick={e => e.preventDefault()}
                  style={{ display: "flex", alignItems: "center", gap: 11, padding: "10px 9px", textDecoration: "none", borderLeft: `3px solid ${isActive ? PRIMARY : "transparent"}`, backgroundColor: isActive ? `${PRIMARY}0f` : "transparent", borderBottom: "1px solid #f5f5f5", transition: "all 0.12s", whiteSpace: "nowrap", minWidth: 260, color: isActive ? PRIMARY : "#333", fontWeight: isActive ? 600 : 500, fontSize: "0.875rem" }}
                  onMouseEnter={() => { clearTimer(); setActiveCat(cat.label); }}
                >
                  <div style={{ width: 30, height: 30, borderRadius: 8, flexShrink: 0, backgroundColor: isActive ? `${PRIMARY}15` : "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.12s" }}>
                    <cat.Icon size={16} color={isActive ? PRIMARY : "#777"} strokeWidth={1.8} />
                  </div>
                  <span style={{ flex: 1, opacity: isExpanded ? 1 : 0, transition: "opacity 0.12s" }}>{cat.label}</span>
                  {isExpanded && <ChevronRight size={12} color={isActive ? PRIMARY : "#ccc"} strokeWidth={2.2} />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Flyout */}
      {isExpanded && current?.sub && (
        <div
          style={{ position: "fixed", top: 0, left: 260, height: "100vh", width: "min(820px, calc(100vw - 260px))", backgroundColor: "#fff", zIndex: 50, boxShadow: "6px 0 28px rgba(0,0,0,0.08)", overflowY: "auto", padding: "24px 30px", animation: "flyoutIn 0.18s ease" }}
          onMouseEnter={clearTimer}
          onMouseLeave={startTimer}
        >
          {/* Flyout header */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, paddingBottom: 14, borderBottom: `2px solid ${PRIMARY}` }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: `${PRIMARY}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <current.Icon size={16} color={PRIMARY} strokeWidth={1.8} />
            </div>
            <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#111" }}>{current.sub.title}</h3>
          </div>

          {/* Sections grid — auto columns */}
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(current.sub.sections.length, 5)}, 1fr)`, gap: "20px 24px" }}>
            {current.sub.sections.map(sec => (
              <div key={sec.heading}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#111", letterSpacing: "-0.01em", marginBottom: 10, paddingBottom: 6, borderBottom: "1px solid #f0f0f0" }}>
                  {sec.heading}
                </p>
                <ul style={{ listStyle: "none" }}>
                  {sec.items.map(item => {
                    const isSeeAll = item.startsWith("See All");
                    return (
                      <li key={item}>
                        <a href="#"
                          style={{ display: "block", padding: "3.5px 0", fontSize: isSeeAll ? "0.8rem" : "0.8125rem", color: isSeeAll ? PRIMARY : "#555", fontWeight: isSeeAll ? 600 : 400, textDecoration: "none", transition: "color 0.12s, padding-left 0.12s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = PRIMARY; (e.currentTarget as HTMLElement).style.paddingLeft = "5px"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = isSeeAll ? PRIMARY : "#555"; (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/* ════════════════════════════
   MOBILE — drawer with drill-down
════════════════════════════ */
function MobileSidebar({ externalOpen, onRequestClose }: Props) {
  const [step, setStep]            = useState<"main" | "sub">("main");
  const [activeCatLabel, setLabel] = useState<string | null>(null);

  if (!externalOpen) return null;

  const activeCat = CATEGORIES.find(c => c.label === activeCatLabel);
  const openSub   = (label: string) => { setLabel(label); setStep("sub"); };
  const goBack    = () => { setStep("main"); setLabel(null); };
  const close     = () => { setStep("main"); setLabel(null); onRequestClose?.(); };

  return (
    <>
      <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.48)", zIndex: 55, animation: "fadeIn 0.22s ease" }} onClick={close} />

      <div style={{ position: "fixed", top: 0, left: 0, height: "100vh", width: "min(85vw, 340px)", zIndex: 60, display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "6px 0 40px rgba(0,0,0,0.24)", animation: "slideInLeft 0.28s cubic-bezier(0.4,0,0.2,1)", backgroundColor: "#fff" }}>
        <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>

          {/* Panel 1 — Category list */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", transform: step === "sub" ? "translateX(-100%)" : "translateX(0)", transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)", backgroundColor: "#fff" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", height: 54, flexShrink: 0, background: `linear-gradient(135deg, ${PRIMARY}, #5a52d5)` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <AlignJustify size={17} color="#fff" strokeWidth={2.2} />
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9375rem" }}>All Categories</span>
              </div>
              <button onClick={close} style={{ width: 30, height: 30, borderRadius: 7, border: "1px solid rgba(255,255,255,0.35)", backgroundColor: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <X size={14} color="#fff" strokeWidth={2.4} />
              </button>
            </div>

            <ul style={{ listStyle: "none", flex: 1, overflowY: "auto" }}>
              {CATEGORIES.map(cat => (
                <li key={cat.label}>
                  <button
                    onClick={() => openSub(cat.label)}
                    style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "13px 16px", border: "none", borderBottom: "1px solid #f3f3f3", backgroundColor: "transparent", cursor: "pointer", fontFamily: "inherit", textAlign: "left", transition: "background-color 0.12s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = `${PRIMARY}09`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 9, backgroundColor: `${PRIMARY}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <cat.Icon size={17} color={PRIMARY} strokeWidth={1.8} />
                    </div>
                    <span style={{ flex: 1, fontWeight: 600, fontSize: "0.875rem", color: "#222" }}>{cat.label}</span>
                    <ChevronRight size={13} color="#ccc" strokeWidth={2.2} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Panel 2 — Sub-category */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", transform: step === "sub" ? "translateX(0)" : "translateX(100%)", transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)", backgroundColor: "#fff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 14px", height: 54, flexShrink: 0, borderBottom: `2px solid ${PRIMARY}` }}>
              <button onClick={goBack} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid #eee", backgroundColor: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <ArrowLeft size={14} color="#555" strokeWidth={2.3} />
              </button>
              {activeCat && (
                <>
                  <div style={{ width: 30, height: 30, borderRadius: 8, backgroundColor: `${PRIMARY}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <activeCat.Icon size={15} color={PRIMARY} strokeWidth={1.8} />
                  </div>
                  <span style={{ flex: 1, fontWeight: 700, fontSize: "0.9rem", color: "#111", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{activeCat.label}</span>
                </>
              )}
              <button onClick={close} style={{ width: 30, height: 30, borderRadius: 8, border: "1px solid #eee", backgroundColor: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <X size={14} color="#555" strokeWidth={2.3} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "14px 14px" }}>
              {activeCat?.sub?.sections.map(sec => (
                <div key={sec.heading} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                    <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: PRIMARY, letterSpacing: "0.05em", textTransform: "uppercase" }}>{sec.heading}</span>
                    <div style={{ flex: 1, height: 1, backgroundColor: "#f0f0f0", marginLeft: 4 }} />
                  </div>
                  {sec.items.map(item => {
                    const isSeeAll = item.startsWith("See All");
                    return (
                      <a key={item} href="#"
                        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", marginBottom: 1, borderRadius: 7, textDecoration: "none", fontSize: "0.875rem", color: isSeeAll ? PRIMARY : "#333", fontWeight: isSeeAll ? 600 : 500, transition: "background-color 0.12s, color 0.12s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = `${PRIMARY}0f`; (e.currentTarget as HTMLElement).style.color = PRIMARY; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = isSeeAll ? PRIMARY : "#333"; }}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: `${PRIMARY}55`, flexShrink: 0, display: "inline-block" }} />
                          {item}
                        </span>
                        <ChevronRight size={12} color="#ddd" strokeWidth={2.2} />
                      </a>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CategorySidebar({ externalOpen, onRequestClose }: Props) {
  return (
    <>
      <div className="sidebar-desktop">
        <DesktopSidebar externalOpen={externalOpen} onRequestClose={onRequestClose} />
      </div>
      <div className="sidebar-mobile">
        <MobileSidebar externalOpen={externalOpen} onRequestClose={onRequestClose} />
      </div>
    </>
  );
}
