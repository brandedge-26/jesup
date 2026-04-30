"use client";
import { useState, useRef } from "react";

/* ── Category data ── */
const CATEGORIES = [
  {
    label: "Mobile Parts", icon: "chip", color: "#6C63FF",
    sub: {
      title: "Trusted Mobile Parts",
      sections: [
        { heading: "AUDIO COMPONENTS",  emoji: "🔊", items: ["Earpieces Ear Speaker", "Loudspeakers Buzzer", "Handsfree Connector Jack"] },
        { heading: "CAMERA COMPONENTS", emoji: "📷", items: ["Camera Lens Glass", "Cameras Modules", "Camera Lift Motor"] },
        { heading: "OUTER PARTS",       emoji: "📱", items: ["Back Glass (Covers)", "Full Body Frame Housing", "Side Keys Button", "Sim Tray Jacket"] },
        { heading: "CONNECTORS",        emoji: "🔌", items: ["Battery Connector", "Charging Connector", "Display Connector", "SIM Card Reader Socket"] },
        { heading: "FLEX CABLE STRIPS", emoji: "〰️", items: ["Ear Speaker Flex (iPhone)", "LCD Display Flex Cable", "Motherboard Flex Cable", "Power & Volume Button Flex"] },
        { heading: "POWER & CHARGING",  emoji: "⚡", items: ["Charging Port", "Mobile Batteries"] },
        { heading: "OTHER COMPONENTS",  emoji: "🔧", items: ["Motherboard", "Stylus Pen"] },
        { heading: "FINGERPRINT",       emoji: "👆", items: ["Fingerprint Sensor Flex Cable", "Under-Display Sensor"] },
      ],
    },
  },
  {
    label: "Mobile LCD/LED Panel", icon: "screen", color: "#3b82f6",
    sub: {
      title: "LCD & LED Panels – All Brands",
      sections: [
        { heading: "APPLE iPHONE", emoji: "🍎", items: ["iPhone 16 Series", "iPhone 15 Series", "iPhone 14 Series", "iPhone 13 Series", "Older Models"] },
        { heading: "SAMSUNG",      emoji: "📺", items: ["Galaxy S Series", "Galaxy A Series", "Galaxy M Series", "Galaxy Note"] },
        { heading: "XIAOMI",       emoji: "📺", items: ["Redmi Note Series", "Mi Series", "Poco Series"] },
        { heading: "OPPO / VIVO",  emoji: "📺", items: ["Oppo A/Reno Series", "Vivo V/Y Series", "OnePlus Series"] },
        { heading: "HUAWEI",       emoji: "📺", items: ["P Series", "Mate Series", "Nova Series"] },
        { heading: "OTHERS",       emoji: "📺", items: ["Infinix LCD", "Tecno LCD", "Realme LCD", "Nokia LCD"] },
      ],
    },
  },
  {
    label: "Mobile Touch Glass", icon: "touch", color: "#8b5cf6",
    sub: {
      title: "Touch Glass – Premium Quality",
      sections: [
        { heading: "APPLE iPHONE",   emoji: "🍎", items: ["iPhone 16 Touch", "iPhone 15 Touch", "iPhone 14 Touch", "iPhone 13 Touch"] },
        { heading: "SAMSUNG",        emoji: "📱", items: ["Galaxy S Series Touch", "Galaxy A Series Touch", "Galaxy Note Touch"] },
        { heading: "CHINESE BRANDS", emoji: "📱", items: ["Xiaomi Touch Glass", "Oppo Touch Glass", "Vivo Touch Glass"] },
        { heading: "OTHERS",         emoji: "📱", items: ["Infinix Touch Glass", "Tecno Touch Glass", "Realme Touch Glass"] },
      ],
    },
  },
  {
    label: "Tablet Parts", icon: "tablet", color: "#0891b2",
    sub: {
      title: "Tablet Parts – All Brands",
      sections: [
        { heading: "iPAD PARTS",    emoji: "🍎", items: ["iPad Pro Parts", "iPad Air Parts", "iPad Mini Parts", "iPad Standard"] },
        { heading: "SAMSUNG TAB",   emoji: "📱", items: ["Galaxy Tab S Series", "Galaxy Tab A Series", "Galaxy Tab E Series"] },
        { heading: "HUAWEI TABLET", emoji: "📱", items: ["MatePad Parts", "MediaPad Parts"] },
        { heading: "OTHERS",        emoji: "📱", items: ["Lenovo Tab Parts", "Amazon Fire Parts", "Other Tablets"] },
      ],
    },
  },
  {
    label: "Smart Watch Parts", icon: "watch", color: "#059669",
    sub: {
      title: "Smart Watch Parts",
      sections: [
        { heading: "APPLE WATCH",   emoji: "⌚", items: ["Apple Watch Screen", "Apple Watch Battery", "Apple Watch Band", "Apple Watch Crown"] },
        { heading: "SAMSUNG WATCH", emoji: "⌚", items: ["Galaxy Watch Screen", "Galaxy Watch Battery", "Galaxy Watch Band"] },
        { heading: "HUAWEI WATCH",  emoji: "⌚", items: ["GT Series Parts", "Watch Fit Parts"] },
        { heading: "OTHERS",        emoji: "⌚", items: ["Xiaomi Mi Band Parts", "Fitbit Parts", "Generic Watch Parts"] },
      ],
    },
  },
  {
    label: "Laptop Parts", icon: "laptop", color: "#dc2626",
    sub: {
      title: "Laptop Spare Parts",
      sections: [
        { heading: "DISPLAY",       emoji: "🖥️", items: ["Laptop LCD Screens", "Laptop Hinges", "Display Bezels", "Webcam Modules"] },
        { heading: "INPUT DEVICES", emoji: "⌨️", items: ["Laptop Keyboards", "Touchpad / Trackpad", "Key Replacements"] },
        { heading: "POWER",         emoji: "🔋", items: ["Laptop Batteries", "Power Adapters", "DC Jack Connectors"] },
        { heading: "INTERNALS",     emoji: "🔩", items: ["RAM Modules", "SSD / Storage", "Cooling Fan", "Motherboard"] },
        { heading: "BY BRAND",      emoji: "💻", items: ["HP Parts", "Dell Parts", "Lenovo Parts", "Asus Parts", "MacBook Parts"] },
      ],
    },
  },
  {
    label: "Used Mobile Phones", icon: "phone", color: "#d97706",
    sub: {
      title: "Used Phones – Quality Assured",
      sections: [
        { heading: "APPLE iPHONE",  emoji: "🍎", items: ["iPhone 16 Series", "iPhone 15 Series", "iPhone 14 Series", "iPhone 13 Series", "Older iPhones"] },
        { heading: "SAMSUNG",       emoji: "📱", items: ["Galaxy S Series", "Galaxy A Series", "Galaxy Note Series"] },
        { heading: "XIAOMI / POCO", emoji: "📱", items: ["Xiaomi 14 Series", "Redmi Note Series", "Poco Series"] },
        { heading: "OTHERS",        emoji: "📱", items: ["Huawei Phones", "Oppo Phones", "Vivo Phones", "OnePlus Phones"] },
      ],
    },
  },
];

/* ── Icons ── */
function CatIcon({ name, color }: { name: string; color: string }) {
  const icons: Record<string, React.ReactNode> = {
    chip:   <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.8}><rect x="7" y="7" width="10" height="10" rx="1"/><path strokeLinecap="round" d="M9 7V4m6 3V4M9 20v-3m6 3v-3M4 9h3m-3 6h3m11-6h-3m3 6h-3"/></svg>,
    screen: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.8}><rect x="2" y="4" width="20" height="14" rx="2"/><path strokeLinecap="round" d="M8 20h8m-4-2v2"/></svg>,
    touch:  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.8}><rect x="5" y="2" width="14" height="20" rx="3"/><circle cx="12" cy="17" r="1" fill={color}/></svg>,
    tablet: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.8}><rect x="3" y="2" width="18" height="20" rx="2"/><path strokeLinecap="round" d="M9 19h6"/></svg>,
    watch:  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.8}><rect x="7" y="6" width="10" height="12" rx="3"/><path strokeLinecap="round" d="M10 6V4h4v2M10 18v2h4v-2M12 9v3l2 1"/></svg>,
    laptop: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a1 1 0 011-1h14a1 1 0 011 1v9H4V6zM2 19h20"/></svg>,
    phone:  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.8}><rect x="6" y="2" width="12" height="20" rx="3"/><circle cx="12" cy="18" r="0.8" fill={color}/></svg>,
  };
  return <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>{icons[name]}</span>;
}

interface Props {
  externalOpen?: boolean;
  onRequestClose?: () => void;
}

/* ════════════════════════════
   DESKTOP — icon rail + hover expand + flyout
════════════════════════════ */
function DesktopSidebar({ externalOpen, onRequestClose }: Props) {
  const [hovered,  setHovered]  = useState(false);
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (hideTimer.current) { clearTimeout(hideTimer.current); hideTimer.current = null; }
  };
  const startTimer = () => {
    clearTimer();
    hideTimer.current = setTimeout(() => {
      setHovered(false);
      setActiveCat(null);
    }, 150);
  };

  const isExpanded = hovered || !!externalOpen;
  const current    = CATEGORIES.find(c => c.label === activeCat);

  return (
    <>
      {/* Backdrop */}
      {isExpanded && (
        <div
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.30)", zIndex: 45, animation: "fadeIn 0.2s ease" }}
          onClick={() => { setHovered(false); setActiveCat(null); onRequestClose?.(); }}
        />
      )}

      {/* Rail / expanded panel */}
      <div
        style={{
          position: "fixed", left: 0, top: 0, height: "100vh",
          width: isExpanded ? 268 : 52,
          backgroundColor: "#fff", zIndex: 50,
          boxShadow: isExpanded ? "6px 0 40px rgba(0,0,0,0.13)" : "1px 0 0 #ebebeb",
          transition: "width 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s",
          overflow: "hidden", display: "flex", flexDirection: "column",
        }}
        onMouseEnter={() => { clearTimer(); setHovered(true); }}
        onMouseLeave={startTimer}
      >
        {/* Header */}
        <div style={{
          height: 52, display: "flex", alignItems: "center", padding: "0 13px",
          flexShrink: 0, gap: 12,
          background: isExpanded ? "linear-gradient(135deg,#6C63FF,#5a52d5)" : "#fff",
          borderBottom: isExpanded ? "none" : "1px solid #f0f0f0",
          transition: "background 0.25s",
        }}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={isExpanded ? "#fff" : "#888"} strokeWidth={2.2} style={{ flexShrink: 0 }}>
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.875rem", whiteSpace: "nowrap", opacity: isExpanded ? 1 : 0, transition: "opacity 0.15s" }}>
            All Categories
          </span>
        </div>

        {/* List */}
        <ul style={{ listStyle: "none", flex: 1, overflowY: "auto", overflowX: "hidden" }}>
          {CATEGORIES.map(cat => {
            const isActive = activeCat === cat.label;
            return (
              <li key={cat.label}>
                <a
                  href="#" onClick={e => e.preventDefault()}
                  style={{
                    display: "flex", alignItems: "center", gap: 11,
                    padding: "10px 9px", textDecoration: "none",
                    borderLeft: `3px solid ${isActive ? cat.color : "transparent"}`,
                    backgroundColor: isActive ? `${cat.color}10` : "transparent",
                    borderBottom: "1px solid #f5f5f5",
                    transition: "all 0.12s",
                    whiteSpace: "nowrap", minWidth: 268,
                    color: isActive ? cat.color : "#333",
                    fontWeight: isActive ? 600 : 500, fontSize: "0.875rem",
                  }}
                  onMouseEnter={() => { clearTimer(); setActiveCat(cat.label); }}
                >
                  <div style={{
                    width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                    backgroundColor: isActive ? `${cat.color}18` : "#f5f5f5",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background-color 0.12s",
                  }}>
                    <CatIcon name={cat.icon} color={isActive ? cat.color : "#777"}/>
                  </div>
                  <span style={{ flex: 1, opacity: isExpanded ? 1 : 0, transition: "opacity 0.12s" }}>{cat.label}</span>
                  {isExpanded && (
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke={isActive ? cat.color : "#ccc"} strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Flyout */}
      {isExpanded && current?.sub && (
        <div
          style={{
            position: "fixed", top: 0, left: 268, height: "100vh",
            width: "min(720px, calc(100vw - 268px))",
            backgroundColor: "#fff", zIndex: 50,
            boxShadow: "6px 0 28px rgba(0,0,0,0.08)",
            overflowY: "auto", padding: "26px 34px",
            animation: "flyoutIn 0.18s ease",
          }}
          onMouseEnter={clearTimer}
          onMouseLeave={startTimer}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, paddingBottom: 14, borderBottom: `2px solid ${current.color}` }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, backgroundColor: `${current.color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CatIcon name={current.icon} color={current.color}/>
            </div>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111" }}>{current.sub.title}</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px 36px" }}>
            {current.sub.sections.map(sec => (
              <div key={sec.heading}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 8, paddingBottom: 5, borderBottom: "1px solid #f0f0f0" }}>
                  <span style={{ fontSize: "0.8rem" }}>{sec.emoji}</span>
                  <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#555", letterSpacing: "0.07em" }}>{sec.heading}</span>
                </div>
                <ul style={{ listStyle: "none" }}>
                  {sec.items.map(item => (
                    <li key={item}>
                      <a href="#"
                        style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", fontSize: "0.8125rem", color: "#555", textDecoration: "none", transition: "color 0.12s, padding-left 0.12s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = current.color; (e.currentTarget as HTMLElement).style.paddingLeft = "5px"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#555"; (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}
                      >
                        <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: `${current.color}55`, flexShrink: 0, display: "inline-block" }}/>
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

/* ════════════════════════════
   MOBILE — full drawer with drill-down panels (fixed sliding bug)
════════════════════════════ */
function MobileSidebar({ externalOpen, onRequestClose }: Props) {
  const [step, setStep]             = useState<"main" | "sub">("main");
  const [activeCatLabel, setLabel]  = useState<string | null>(null);

  if (!externalOpen) return null;

  const activeCat = CATEGORIES.find(c => c.label === activeCatLabel);

  const openSub = (label: string) => {
    const cat = CATEGORIES.find(c => c.label === label);
    if (cat?.sub) { setLabel(label); setStep("sub"); }
  };

  const goBack = () => { setStep("main"); setLabel(null); };

  const close = () => { setStep("main"); setLabel(null); onRequestClose?.(); };

  return (
    <>
      {/* Backdrop */}
      <div
        style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.48)", zIndex: 55, animation: "fadeIn 0.22s ease" }}
        onClick={close}
      />

      {/* Drawer shell */}
      <div style={{
        position: "fixed", top: 0, left: 0, height: "100vh",
        width: "min(85vw, 340px)",
        zIndex: 60, display: "flex", flexDirection: "column",
        overflow: "hidden",
        boxShadow: "6px 0 40px rgba(0,0,0,0.24)",
        animation: "slideInLeft 0.28s cubic-bezier(0.4,0,0.2,1)",
        backgroundColor: "#fff",
      }}>

        {/* ── Panels use absolute positioning so translateX is relative to OWN width ── */}
        <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>

          {/* Panel 1 — Category list */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            transform: step === "sub" ? "translateX(-100%)" : "translateX(0)",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
            backgroundColor: "#fff",
          }}>
            {/* Header */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "0 16px", height: 54, flexShrink: 0,
              background: "linear-gradient(135deg,#6C63FF,#5a52d5)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.3}>
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9375rem" }}>All Categories</span>
              </div>
              <button onClick={close} style={{ width: 30, height: 30, borderRadius: 7, border: "1px solid rgba(255,255,255,0.35)", backgroundColor: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Category items */}
            <ul style={{ listStyle: "none", flex: 1, overflowY: "auto" }}>
              {CATEGORIES.map(cat => (
                <li key={cat.label}>
                  <button
                    onClick={() => openSub(cat.label)}
                    style={{
                      display: "flex", alignItems: "center", gap: 12, width: "100%",
                      padding: "13px 16px", border: "none", borderBottom: "1px solid #f3f3f3",
                      backgroundColor: "transparent", cursor: "pointer",
                      fontFamily: "inherit", textAlign: "left",
                      transition: "background-color 0.12s",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = `${cat.color}09`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 9, backgroundColor: `${cat.color}14`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CatIcon name={cat.icon} color={cat.color}/>
                    </div>
                    <span style={{ flex: 1, fontWeight: 600, fontSize: "0.875rem", color: "#222" }}>{cat.label}</span>
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#ccc" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Panel 2 — Sub-category list */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            transform: step === "sub" ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
            backgroundColor: "#fff",
          }}>
            {/* Sub-panel header */}
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "0 14px", height: 54, flexShrink: 0,
              borderBottom: `2px solid ${activeCat?.color ?? "#6C63FF"}`,
            }}>
              <button onClick={goBack} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid #eee", backgroundColor: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#555" strokeWidth={2.3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>

              {activeCat && (
                <>
                  <div style={{ width: 30, height: 30, borderRadius: 8, backgroundColor: `${activeCat.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CatIcon name={activeCat.icon} color={activeCat.color}/>
                  </div>
                  <span style={{ flex: 1, fontWeight: 700, fontSize: "0.9rem", color: "#111", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {activeCat.label}
                  </span>
                </>
              )}

              <button onClick={close} style={{ width: 30, height: 30, borderRadius: 8, border: "1px solid #eee", backgroundColor: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#555" strokeWidth={2.3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Sub items */}
            <div style={{ flex: 1, overflowY: "auto", padding: "14px 14px" }}>
              {activeCat?.sub?.sections.map(sec => (
                <div key={sec.heading} style={{ marginBottom: 18 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                    <span style={{ fontSize: "0.8rem" }}>{sec.emoji}</span>
                    <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#666", letterSpacing: "0.07em" }}>{sec.heading}</span>
                    <div style={{ flex: 1, height: 1, backgroundColor: "#f0f0f0", marginLeft: 4 }}/>
                  </div>
                  {sec.items.map(item => (
                    <a
                      key={item}
                      href="#"
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "9px 10px", marginBottom: 1, borderRadius: 7,
                        textDecoration: "none", fontSize: "0.875rem", color: "#333",
                        fontWeight: 500, transition: "background-color 0.12s, color 0.12s",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = `${activeCat?.color ?? "#6C63FF"}10`; (e.currentTarget as HTMLElement).style.color = activeCat?.color ?? "#6C63FF"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "#333"; }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: `${activeCat?.color ?? "#6C63FF"}60`, flexShrink: 0, display: "inline-block" }}/>
                        {item}
                      </span>
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#ddd" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Main export ── */
export default function CategorySidebar({ externalOpen, onRequestClose }: Props) {
  return (
    <>
      <div className="sidebar-desktop">
        <DesktopSidebar externalOpen={externalOpen} onRequestClose={onRequestClose}/>
      </div>
      <div className="sidebar-mobile">
        <MobileSidebar externalOpen={externalOpen} onRequestClose={onRequestClose}/>
      </div>
    </>
  );
}
