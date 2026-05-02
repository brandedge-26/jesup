export function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export interface ColorVariant {
  name: string;
  hex: string;
}

export interface StorageVariant {
  label: string;
  price: number;
  originalPrice: number;
}

export interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
}

export interface Product {
  id: number;
  brand: string;
  category: string;
  name: string;
  slug: string;
  desc: string;
  description: string;
  price: number;
  originalPrice: number;
  tag: string;
  tagColor: string;
  tagBg: string;
  rating: number;
  reviews: string;
  img: string;
  images: string[];
  colors: ColorVariant[];
  storage: StorageVariant[];
  specs: Record<string, string>;
  reviewsList: Review[];
}

const BASE_REVIEWS: Review[] = [
  { id: 1, author: "James K.", avatar: "JK", rating: 5, date: "Apr 28, 2026", title: "Absolutely love it!", body: "This device exceeded all my expectations. The performance is blazing fast and the display is stunning. Best purchase I've made this year.", verified: true },
  { id: 2, author: "Sarah M.", avatar: "SM", rating: 5, date: "Apr 20, 2026", title: "Premium quality", body: "Build quality is top notch. Camera takes incredible photos even in low light. Battery lasts all day easily.", verified: true },
  { id: 3, author: "Ravi P.", avatar: "RP", rating: 4, date: "Apr 12, 2026", title: "Great phone, minor niggles", body: "Very happy overall. Performance is smooth and camera is excellent. Took off one star as the box didn't include a charger.", verified: true },
  { id: 4, author: "Alicia T.", avatar: "AT", rating: 5, date: "Mar 30, 2026", title: "Worth every penny", body: "The screen is gorgeous and face unlock is instant. Highly recommend to anyone upgrading from an older device.", verified: false },
];

const ALL_PRODUCTS_RAW = [
  // ── iPhones ──
  {
    id: 1, brand: "Apple", category: "iPhone",
    name: "iPhone 15 Pro Max",
    desc: "Titanium build, A17 Pro chip, 48MP periscope camera.",
    description: "The iPhone 15 Pro Max features a aerospace-grade titanium design with the most advanced iPhone chip ever — A17 Pro. With a 48MP main camera, a 5x optical zoom periscope telephoto, and Action Button for ultimate control, this is the pinnacle of smartphone engineering. USB-C with USB 3 speeds means faster transfers than ever.",
    price: 1199, originalPrice: 1299, tag: "Best Seller", tagColor: "#6C63FF", tagBg: "#f0eeff", rating: 4.9, reviews: "3.1k",
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop&q=85",
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&h=800&fit=crop&q=85",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop&q=85",
      "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=800&h=800&fit=crop&q=85",
    ],
    colors: [{ name: "Black Titanium", hex: "#3a3a3c" }, { name: "White Titanium", hex: "#f5f5f0" }, { name: "Blue Titanium", hex: "#4a6fa5" }, { name: "Natural Titanium", hex: "#b5a99a" }],
    storage: [{ label: "256 GB", price: 1199, originalPrice: 1299 }, { label: "512 GB", price: 1399, originalPrice: 1499 }, { label: "1 TB", price: 1599, originalPrice: 1699 }],
    specs: { Display: "6.7\" Super Retina XDR OLED", Chip: "A17 Pro", Camera: "48MP Main + 12MP Ultra + 12MP 5x Tele", Battery: "Up to 29 hrs video", Storage: "256 GB / 512 GB / 1 TB", OS: "iOS 17", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", Weight: "221 g" },
  },
  {
    id: 2, brand: "Apple", category: "iPhone",
    name: "iPhone 15 Pro",
    desc: "Action Button, A17 Pro chip and titanium design.",
    description: "iPhone 15 Pro is the first iPhone to feature a titanium design, using the same alloy used by NASA for space missions. The new Action button lets you quickly launch your favorite feature. The 48MP main camera with a 3x optical zoom and A17 Pro chip delivers console-quality gaming and cinematic-quality filmmaking.",
    price: 999, originalPrice: 1099, tag: "New", tagColor: "#0284c7", tagBg: "#e0f2fe", rating: 4.8, reviews: "2.4k",
    img: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&h=600&fit=crop&q=85",
    images: [
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&h=800&fit=crop&q=85",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop&q=85",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop&q=85",
    ],
    colors: [{ name: "Black Titanium", hex: "#3a3a3c" }, { name: "White Titanium", hex: "#f5f5f0" }, { name: "Blue Titanium", hex: "#4a6fa5" }, { name: "Natural Titanium", hex: "#b5a99a" }],
    storage: [{ label: "128 GB", price: 999, originalPrice: 1099 }, { label: "256 GB", price: 1099, originalPrice: 1199 }, { label: "512 GB", price: 1299, originalPrice: 1399 }],
    specs: { Display: "6.1\" Super Retina XDR OLED", Chip: "A17 Pro", Camera: "48MP Main + 12MP Ultra + 12MP 3x Tele", Battery: "Up to 23 hrs video", Storage: "128 GB / 256 GB / 512 GB", OS: "iOS 17", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", Weight: "187 g" },
  },
  {
    id: 3, brand: "Apple", category: "iPhone",
    name: "iPhone 15",
    desc: "Dynamic Island, 48MP main camera, USB-C charging.",
    description: "iPhone 15 brings Dynamic Island and a 48MP Main camera to the mainstream lineup. USB‑C means you can charge with the same cable as your Mac or iPad. A15 Bionic handles everything you throw at it with ease — from editing 4K ProRes video to playing the latest games.",
    price: 799, originalPrice: 899, tag: "Popular", tagColor: "#16a34a", tagBg: "#f0fdf4", rating: 4.7, reviews: "1.9k",
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop&q=85", "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Pink", hex: "#f4a7b9" }, { name: "Yellow", hex: "#f5e642" }, { name: "Green", hex: "#aee2c0" }, { name: "Blue", hex: "#9abdd9" }, { name: "Black", hex: "#1c1c1e" }],
    storage: [{ label: "128 GB", price: 799, originalPrice: 899 }, { label: "256 GB", price: 899, originalPrice: 999 }, { label: "512 GB", price: 1099, originalPrice: 1199 }],
    specs: { Display: "6.1\" Super Retina XDR OLED", Chip: "A16 Bionic", Camera: "48MP Main + 12MP Ultra", Battery: "Up to 20 hrs video", Storage: "128 GB / 256 GB / 512 GB", OS: "iOS 17", Connectivity: "5G, Wi-Fi 6, Bluetooth 5.3", Weight: "171 g" },
  },
  {
    id: 4, brand: "Apple", category: "iPhone",
    name: "iPhone 14 Pro",
    desc: "Always-On display, Dynamic Island, 48MP camera.",
    description: "iPhone 14 Pro introduced Dynamic Island — a magical new way to experience iPhone. With the Always-On display, your wallpaper and important information are always visible at a glance. The 48MP Main camera captures every detail, and Emergency SOS via satellite keeps you connected even off the grid.",
    price: 699, originalPrice: 999, tag: "Hot Deal", tagColor: "#dc2626", tagBg: "#fee2e2", rating: 4.8, reviews: "5.6k",
    img: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=800&h=800&fit=crop&q=85", "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Deep Purple", hex: "#4b3a6e" }, { name: "Gold", hex: "#c8a96e" }, { name: "Silver", hex: "#e8e8e3" }, { name: "Space Black", hex: "#1c1c1e" }],
    storage: [{ label: "128 GB", price: 699, originalPrice: 999 }, { label: "256 GB", price: 799, originalPrice: 1099 }, { label: "512 GB", price: 999, originalPrice: 1299 }, { label: "1 TB", price: 1199, originalPrice: 1499 }],
    specs: { Display: "6.1\" Super Retina XDR OLED (Always-On)", Chip: "A16 Bionic", Camera: "48MP Main + 12MP Ultra + 12MP 3x Tele", Battery: "Up to 23 hrs video", Storage: "128 GB – 1 TB", OS: "iOS 16 (upgradeable)", Connectivity: "5G, Wi-Fi 6, Bluetooth 5.3", Weight: "206 g" },
  },
  {
    id: 5, brand: "Apple", category: "iPhone",
    name: "iPhone 14",
    desc: "Crash Detection, Emergency SOS via satellite.",
    description: "iPhone 14 features Crash Detection, a first for iPhone, which calls emergency services if you're in a severe car crash. Emergency SOS via satellite connects you to help even when there's no cell signal. The advanced dual-camera system with the A15 Bionic chip delivers brilliant photos and videos in any condition.",
    price: 599, originalPrice: 799, tag: "Sale", tagColor: "#d97706", tagBg: "#fef3c7", rating: 4.6, reviews: "4.2k",
    img: "https://images.unsplash.com/photo-1660232573070-9abd5c65e455?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1660232573070-9abd5c65e455?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Midnight", hex: "#1c1c1e" }, { name: "Starlight", hex: "#f0ece3" }, { name: "Blue", hex: "#9abdd9" }, { name: "Purple", hex: "#c6b8d8" }, { name: "Product Red", hex: "#bf0000" }],
    storage: [{ label: "128 GB", price: 599, originalPrice: 799 }, { label: "256 GB", price: 699, originalPrice: 899 }, { label: "512 GB", price: 899, originalPrice: 1099 }],
    specs: { Display: "6.1\" Super Retina XDR OLED", Chip: "A15 Bionic", Camera: "12MP Main + 12MP Ultra", Battery: "Up to 20 hrs video", Storage: "128 GB / 256 GB / 512 GB", OS: "iOS 16", Connectivity: "5G, Wi-Fi 6, Bluetooth 5.3", Weight: "172 g" },
  },
  {
    id: 6, brand: "Apple", category: "iPhone",
    name: "iPhone 13",
    desc: "Cinematic mode, A15 Bionic, all-day battery life.",
    description: "iPhone 13 features Cinematic mode, which lets you record videos with a shallow depth of field and automatically shift focus in a beautifully cinematic way. A15 Bionic powers all-new computational photography and delivers all-day battery life that goes even longer.",
    price: 499, originalPrice: 699, tag: "Deal", tagColor: "#7c3aed", tagBg: "#f5f3ff", rating: 4.6, reviews: "8.1k",
    img: "https://images.unsplash.com/photo-1632633173522-47456de71b76?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1632633173522-47456de71b76?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Midnight", hex: "#1c1c1e" }, { name: "Starlight", hex: "#f0ece3" }, { name: "Blue", hex: "#9abdd9" }, { name: "Pink", hex: "#f4a7b9" }, { name: "Product Red", hex: "#bf0000" }, { name: "Green", hex: "#4a7c59" }],
    storage: [{ label: "128 GB", price: 499, originalPrice: 699 }, { label: "256 GB", price: 599, originalPrice: 799 }, { label: "512 GB", price: 799, originalPrice: 999 }],
    specs: { Display: "6.1\" Super Retina XDR OLED", Chip: "A15 Bionic", Camera: "12MP Main + 12MP Ultra", Battery: "Up to 19 hrs video", Storage: "128 GB / 256 GB / 512 GB", OS: "iOS 15", Connectivity: "5G, Wi-Fi 6, Bluetooth 5.0", Weight: "174 g" },
  },
  {
    id: 7, brand: "Apple", category: "iPhone",
    name: "iPhone SE (3rd Gen)",
    desc: "A15 Bionic power in a compact 4.7\" form factor.",
    description: "The new iPhone SE packs the power of the A15 Bionic chip — the same chip in iPhone 14 — into the most affordable iPhone ever. With 5G connectivity and Touch ID, it's perfect for anyone who prefers a more compact size and a lower price.",
    price: 429, originalPrice: 499, tag: "Compact", tagColor: "#0891b2", tagBg: "#ecfeff", rating: 4.4, reviews: "1.3k",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Midnight", hex: "#1c1c1e" }, { name: "Starlight", hex: "#f0ece3" }, { name: "Product Red", hex: "#bf0000" }],
    storage: [{ label: "64 GB", price: 429, originalPrice: 499 }, { label: "128 GB", price: 479, originalPrice: 549 }, { label: "256 GB", price: 579, originalPrice: 649 }],
    specs: { Display: "4.7\" Retina HD IPS LCD", Chip: "A15 Bionic", Camera: "12MP Main", Battery: "Up to 15 hrs video", Storage: "64 GB / 128 GB / 256 GB", OS: "iOS 15", Connectivity: "5G, Wi-Fi 6, Bluetooth 5.0", Weight: "144 g" },
  },
  // ── iPads ──
  {
    id: 8, brand: "Apple", category: "iPad",
    name: "iPad Pro 12.9 M2",
    desc: "M2 chip, Liquid Retina XDR display, Thunderbolt.",
    description: "iPad Pro with M2 chip is the ultimate iPad experience. The Liquid Retina XDR display with ProMotion technology delivers jaw-dropping visuals. Thunderbolt / USB 4 connectivity makes it a powerhouse for professionals. Works with Apple Pencil (2nd gen) and Magic Keyboard.",
    price: 1099, originalPrice: 1199, tag: "Pro", tagColor: "#6C63FF", tagBg: "#f0eeff", rating: 4.9, reviews: "1.2k",
    img: "https://images.unsplash.com/photo-1544244015-0df4702503db?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1544244015-0df4702503db?w=800&h=800&fit=crop&q=85", "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Silver", hex: "#e8e8e3" }, { name: "Space Grey", hex: "#3a3a3c" }],
    storage: [{ label: "128 GB Wi-Fi", price: 1099, originalPrice: 1199 }, { label: "256 GB Wi-Fi", price: 1299, originalPrice: 1399 }, { label: "512 GB Wi-Fi", price: 1499, originalPrice: 1599 }, { label: "1 TB Wi-Fi", price: 1699, originalPrice: 1799 }],
    specs: { Display: "12.9\" Liquid Retina XDR mini-LED", Chip: "Apple M2", Camera: "12MP Wide + 10MP Ultra", Battery: "Up to 10 hrs", Storage: "128 GB – 2 TB", OS: "iPadOS 16", Connectivity: "Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4", Weight: "682 g" },
  },
  {
    id: 9, brand: "Apple", category: "iPad",
    name: "iPad Pro 11 M2",
    desc: "M2 chip, stunning Liquid Retina display, Face ID.",
    description: "iPad Pro 11-inch with M2 chip delivers desktop-class performance in a portable design. Face ID, Liquid Retina display, and Thunderbolt connectivity make it perfect for creative professionals and power users on the go.",
    price: 799, originalPrice: 899, tag: "Pro", tagColor: "#6C63FF", tagBg: "#f0eeff", rating: 4.8, reviews: "980",
    img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Silver", hex: "#e8e8e3" }, { name: "Space Grey", hex: "#3a3a3c" }],
    storage: [{ label: "128 GB Wi-Fi", price: 799, originalPrice: 899 }, { label: "256 GB Wi-Fi", price: 899, originalPrice: 999 }, { label: "512 GB Wi-Fi", price: 1099, originalPrice: 1199 }],
    specs: { Display: "11\" Liquid Retina IPS LCD", Chip: "Apple M2", Camera: "12MP Wide + 10MP Ultra", Battery: "Up to 10 hrs", Storage: "128 GB – 2 TB", OS: "iPadOS 16", Connectivity: "Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4", Weight: "466 g" },
  },
  {
    id: 10, brand: "Apple", category: "iPad",
    name: "iPad Air 5th Gen",
    desc: "M1 chip, 10.9\" Liquid Retina, USB-C, Touch ID.",
    description: "iPad Air with M1 chip brings powerful performance to the mid-range iPad lineup. The 10.9-inch Liquid Retina display with True Tone and P3 wide color makes content look stunning. USB-C enables fast charging and data transfer.",
    price: 599, originalPrice: 699, tag: "Popular", tagColor: "#16a34a", tagBg: "#f0fdf4", rating: 4.7, reviews: "2.1k",
    img: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Space Grey", hex: "#3a3a3c" }, { name: "Starlight", hex: "#f0ece3" }, { name: "Pink", hex: "#f4a7b9" }, { name: "Purple", hex: "#c6b8d8" }, { name: "Blue", hex: "#9abdd9" }],
    storage: [{ label: "64 GB Wi-Fi", price: 599, originalPrice: 699 }, { label: "256 GB Wi-Fi", price: 749, originalPrice: 849 }],
    specs: { Display: "10.9\" Liquid Retina IPS LCD", Chip: "Apple M1", Camera: "12MP Wide", Battery: "Up to 10 hrs", Storage: "64 GB / 256 GB", OS: "iPadOS 15", Connectivity: "Wi-Fi 6, Bluetooth 5.0, USB-C", Weight: "461 g" },
  },
  {
    id: 11, brand: "Apple", category: "iPad",
    name: "iPad mini 6th Gen",
    desc: "A15 Bionic, 8.3\" Liquid Retina, USB-C, 5G ready.",
    description: "iPad mini with A15 Bionic delivers PC-class performance in a tiny 8.3-inch form factor. The all-screen design with Touch ID built into the top button makes it the most versatile iPad for one-handed use, gaming on the go, or reading.",
    price: 499, originalPrice: 549, tag: "Compact", tagColor: "#0891b2", tagBg: "#ecfeff", rating: 4.6, reviews: "1.4k",
    img: "https://images.unsplash.com/photo-1589739900266-43b2843f4c12?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1589739900266-43b2843f4c12?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Space Grey", hex: "#3a3a3c" }, { name: "Starlight", hex: "#f0ece3" }, { name: "Pink", hex: "#f4a7b9" }, { name: "Purple", hex: "#c6b8d8" }],
    storage: [{ label: "64 GB Wi-Fi", price: 499, originalPrice: 549 }, { label: "256 GB Wi-Fi", price: 649, originalPrice: 699 }],
    specs: { Display: "8.3\" Liquid Retina IPS LCD", Chip: "A15 Bionic", Camera: "12MP Wide", Battery: "Up to 10 hrs", Storage: "64 GB / 256 GB", OS: "iPadOS 15", Connectivity: "Wi-Fi 6, Bluetooth 5.0, USB-C", Weight: "293 g" },
  },
  {
    id: 12, brand: "Apple", category: "iPad",
    name: "iPad 10th Gen",
    desc: "A14 Bionic, 10.9\" Liquid Retina, USB-C, Wi-Fi 6.",
    description: "The 10th generation iPad is the biggest redesign in iPad history with an all-screen design, vibrant new colors, and USB-C. A14 Bionic makes it the most powerful entry-level iPad ever, perfect for students, creators, and everyday users.",
    price: 449, originalPrice: 499, tag: "Value", tagColor: "#d97706", tagBg: "#fef3c7", rating: 4.5, reviews: "3.3k",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Blue", hex: "#9abdd9" }, { name: "Pink", hex: "#f4a7b9" }, { name: "Yellow", hex: "#f5e642" }, { name: "Silver", hex: "#e8e8e3" }],
    storage: [{ label: "64 GB Wi-Fi", price: 449, originalPrice: 499 }, { label: "256 GB Wi-Fi", price: 599, originalPrice: 649 }],
    specs: { Display: "10.9\" Liquid Retina IPS LCD", Chip: "A14 Bionic", Camera: "12MP Ultra Wide", Battery: "Up to 10 hrs", Storage: "64 GB / 256 GB", OS: "iPadOS 16", Connectivity: "Wi-Fi 6, Bluetooth 5.2, USB-C", Weight: "477 g" },
  },
  // ── Samsung ──
  {
    id: 13, brand: "Samsung", category: "Android",
    name: "Galaxy S25 Ultra",
    desc: "Built-in S Pen, 200MP camera, Snapdragon 8 Elite.",
    description: "The Galaxy S25 Ultra is Samsung's most powerful smartphone ever. With a built-in S Pen, a 200MP camera system, and Snapdragon 8 Elite for Galaxy, it sets a new standard for what a smartphone can do. The titanium frame and anti-reflective glass display make it as beautiful as it is powerful.",
    price: 1299, originalPrice: 1399, tag: "Trending", tagColor: "#d97706", tagBg: "#fef3c7", rating: 4.8, reviews: "3.2k",
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=800&fit=crop&q=85", "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Titanium Black", hex: "#1c1c1e" }, { name: "Titanium Silver", hex: "#c0c0c0" }, { name: "Titanium Gray", hex: "#6b6b6b" }, { name: "Titanium Jade Green", hex: "#5c7a6e" }],
    storage: [{ label: "256 GB", price: 1299, originalPrice: 1399 }, { label: "512 GB", price: 1419, originalPrice: 1519 }, { label: "1 TB", price: 1659, originalPrice: 1759 }],
    specs: { Display: "6.9\" Dynamic AMOLED 2X 120Hz", Chip: "Snapdragon 8 Elite", Camera: "200MP + 50MP + 10MP + 12MP", Battery: "5000 mAh, 45W charging", Storage: "256 GB – 1 TB", OS: "Android 15, One UI 7", Connectivity: "5G, Wi-Fi 7, Bluetooth 5.4", Weight: "218 g" },
  },
  {
    id: 14, brand: "Samsung", category: "Android",
    name: "Galaxy S25 Plus",
    desc: "6.7\" Dynamic AMOLED 2X, 50MP triple camera.",
    description: "Galaxy S25+ is the perfect balance of performance and portability. The 6.7-inch Dynamic AMOLED 2X display with 120Hz and Snapdragon 8 Elite delivers a premium experience, while the 50MP triple camera system captures life in stunning detail.",
    price: 999, originalPrice: 1099, tag: "New", tagColor: "#0284c7", tagBg: "#e0f2fe", rating: 4.7, reviews: "1.5k",
    img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Icy Blue", hex: "#a8ccd7" }, { name: "Mint", hex: "#b8d8b8" }, { name: "Coral Red", hex: "#c7504a" }, { name: "Silver Shadow", hex: "#c0c0c0" }],
    storage: [{ label: "256 GB", price: 999, originalPrice: 1099 }, { label: "512 GB", price: 1119, originalPrice: 1219 }],
    specs: { Display: "6.7\" Dynamic AMOLED 2X 120Hz", Chip: "Snapdragon 8 Elite", Camera: "50MP + 12MP + 10MP", Battery: "4900 mAh, 45W charging", Storage: "256 GB / 512 GB", OS: "Android 15, One UI 7", Connectivity: "5G, Wi-Fi 7, Bluetooth 5.4", Weight: "190 g" },
  },
  {
    id: 15, brand: "Samsung", category: "Android",
    name: "Galaxy S25",
    desc: "Compact flagship. Snapdragon 8 Elite, 50MP camera.",
    description: "Galaxy S25 is the compact flagship that packs Snapdragon 8 Elite performance into a sleek design. The 50MP camera with AI enhancements, combined with the vivid 6.2-inch display, makes it perfect for those who want flagship power in a manageable size.",
    price: 799, originalPrice: 899, tag: "Popular", tagColor: "#16a34a", tagBg: "#f0fdf4", rating: 4.7, reviews: "2.0k",
    img: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Icy Blue", hex: "#a8ccd7" }, { name: "Mint", hex: "#b8d8b8" }, { name: "Coral Red", hex: "#c7504a" }, { name: "Silver Shadow", hex: "#c0c0c0" }, { name: "Navy", hex: "#1a2b4a" }],
    storage: [{ label: "128 GB", price: 799, originalPrice: 899 }, { label: "256 GB", price: 859, originalPrice: 959 }],
    specs: { Display: "6.2\" Dynamic AMOLED 2X 120Hz", Chip: "Snapdragon 8 Elite", Camera: "50MP + 12MP + 10MP", Battery: "4000 mAh, 25W charging", Storage: "128 GB / 256 GB", OS: "Android 15, One UI 7", Connectivity: "5G, Wi-Fi 7, Bluetooth 5.4", Weight: "162 g" },
  },
  {
    id: 16, brand: "Samsung", category: "Android",
    name: "Galaxy A55 5G",
    desc: "50MP OIS camera, IP67, 5000mAh, Super AMOLED.",
    description: "Galaxy A55 5G brings flagship-inspired features to a more accessible price point. With a 50MP OIS camera, IP67 water resistance, and a stunning 6.6-inch Super AMOLED display at 120Hz, it's the premium mid-ranger to beat.",
    price: 449, originalPrice: 499, tag: "Value", tagColor: "#d97706", tagBg: "#fef3c7", rating: 4.5, reviews: "1.1k",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Awesome Navy", hex: "#1a2b4a" }, { name: "Awesome Iceblue", hex: "#a8ccd7" }, { name: "Awesome Lilac", hex: "#c6b8d8" }, { name: "Awesome Lemon", hex: "#f5e642" }],
    storage: [{ label: "128 GB", price: 449, originalPrice: 499 }, { label: "256 GB", price: 499, originalPrice: 549 }],
    specs: { Display: "6.6\" Super AMOLED 120Hz", Chip: "Exynos 1480", Camera: "50MP OIS + 12MP Ultra + 5MP Macro", Battery: "5000 mAh, 25W charging", Storage: "128 GB / 256 GB", OS: "Android 14, One UI 6.1", Connectivity: "5G, Wi-Fi 6, Bluetooth 5.3", Weight: "213 g" },
  },
  {
    id: 17, brand: "Samsung", category: "Tablet",
    name: "Galaxy Tab S9 Ultra",
    desc: "14.6\" Dynamic AMOLED 2X, S Pen included, 12GB RAM.",
    description: "Galaxy Tab S9 Ultra is the ultimate Android tablet. The massive 14.6-inch Dynamic AMOLED 2X display with 120Hz makes content creation and consumption a joy. S Pen is included in the box. IP68 water resistance and Snapdragon 8 Gen 2 for Galaxy make it a true productivity powerhouse.",
    price: 1199, originalPrice: 1299, tag: "Pro", tagColor: "#6C63FF", tagBg: "#f0eeff", rating: 4.8, reviews: "890",
    img: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1623126908029-58cb08a2b272?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Graphite", hex: "#3a3a3c" }, { name: "Beige", hex: "#e8d5b0" }],
    storage: [{ label: "256 GB Wi-Fi", price: 1199, originalPrice: 1299 }, { label: "512 GB Wi-Fi", price: 1399, originalPrice: 1499 }],
    specs: { Display: "14.6\" Dynamic AMOLED 2X 120Hz", Chip: "Snapdragon 8 Gen 2", Camera: "13MP + 8MP", Battery: "11200 mAh, 45W charging", Storage: "256 GB / 512 GB", OS: "Android 13, One UI 5.1", Connectivity: "Wi-Fi 6E, Bluetooth 5.3, USB-C 3.2", Weight: "732 g" },
  },
  {
    id: 18, brand: "Samsung", category: "Tablet",
    name: "Galaxy Tab S9 Plus",
    desc: "12.4\" Super AMOLED, DeX mode, S Pen included.",
    description: "Galaxy Tab S9+ pairs a stunning 12.4-inch Dynamic AMOLED 2X display with the Snapdragon 8 Gen 2 chip. DeX mode turns it into a desktop experience. IP68 protection and S Pen included make it the complete package for power users.",
    price: 899, originalPrice: 999, tag: "Popular", tagColor: "#16a34a", tagBg: "#f0fdf4", rating: 4.7, reviews: "670",
    img: "https://images.unsplash.com/photo-1544244015-0df4702503db?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1544244015-0df4702503db?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Graphite", hex: "#3a3a3c" }, { name: "Beige", hex: "#e8d5b0" }, { name: "Lavender", hex: "#c6b8d8" }],
    storage: [{ label: "256 GB Wi-Fi", price: 899, originalPrice: 999 }, { label: "512 GB Wi-Fi", price: 1059, originalPrice: 1159 }],
    specs: { Display: "12.4\" Dynamic AMOLED 2X 120Hz", Chip: "Snapdragon 8 Gen 2", Camera: "13MP + 8MP", Battery: "10090 mAh, 45W charging", Storage: "256 GB / 512 GB", OS: "Android 13, One UI 5.1", Connectivity: "Wi-Fi 6E, Bluetooth 5.3, USB-C 3.2", Weight: "581 g" },
  },
  // ── Google Pixel ──
  {
    id: 19, brand: "Google", category: "Android",
    name: "Pixel 9 Pro XL",
    desc: "Google AI, 50MP triple camera, Tensor G4 chip.",
    description: "Pixel 9 Pro XL is Google's most powerful phone ever. Tensor G4 brings the best of Google AI directly to your device — from Call Screen to Magic Eraser to Best Take. The 50MP triple camera system with a 5x periscope telephoto captures stunning photos in any light.",
    price: 1099, originalPrice: 1199, tag: "AI Phone", tagColor: "#0284c7", tagBg: "#e0f2fe", rating: 4.8, reviews: "1.1k",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Obsidian", hex: "#1c1c1e" }, { name: "Porcelain", hex: "#f0ece3" }, { name: "Hazel", hex: "#8b7355" }, { name: "Rose Quartz", hex: "#e8b4b8" }],
    storage: [{ label: "128 GB", price: 1099, originalPrice: 1199 }, { label: "256 GB", price: 1199, originalPrice: 1299 }, { label: "512 GB", price: 1399, originalPrice: 1499 }, { label: "1 TB", price: 1599, originalPrice: 1699 }],
    specs: { Display: "6.8\" LTPO OLED 1-120Hz", Chip: "Google Tensor G4", Camera: "50MP + 48MP Ultra + 48MP 5x Tele", Battery: "5060 mAh, 37W charging", Storage: "128 GB – 1 TB", OS: "Android 15", Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, UWB", Weight: "221 g" },
  },
  {
    id: 20, brand: "Google", category: "Android",
    name: "Pixel 9 Pro",
    desc: "Pure Google AI experience, 7 years of updates.",
    description: "Pixel 9 Pro delivers the full Google AI experience in a more compact form. Tensor G4 powers on-device AI features, and the triple camera with a new 50MP front camera makes every selfie stunning. Google guarantees 7 years of OS updates and security patches.",
    price: 899, originalPrice: 999, tag: "New", tagColor: "#0284c7", tagBg: "#e0f2fe", rating: 4.7, reviews: "950",
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Obsidian", hex: "#1c1c1e" }, { name: "Porcelain", hex: "#f0ece3" }, { name: "Hazel", hex: "#8b7355" }, { name: "Rose Quartz", hex: "#e8b4b8" }],
    storage: [{ label: "128 GB", price: 899, originalPrice: 999 }, { label: "256 GB", price: 999, originalPrice: 1099 }, { label: "512 GB", price: 1199, originalPrice: 1299 }],
    specs: { Display: "6.3\" LTPO OLED 1-120Hz", Chip: "Google Tensor G4", Camera: "50MP + 48MP Ultra + 48MP 5x Tele", Battery: "4700 mAh, 27W charging", Storage: "128 GB – 512 GB", OS: "Android 15", Connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, UWB", Weight: "199 g" },
  },
  {
    id: 21, brand: "Google", category: "Android",
    name: "Pixel 8a",
    desc: "Tensor G3, best-in-class camera AI, 6.1\" OLED.",
    description: "Pixel 8a brings Google's AI camera magic to the mid-range at an unbeatable price. Tensor G3 enables Real Tone, Magic Eraser, and Night Sight. The 6.1-inch Actua OLED display at 120Hz and IP67 water resistance make it one of the best value smartphones available.",
    price: 499, originalPrice: 599, tag: "Value", tagColor: "#d97706", tagBg: "#fef3c7", rating: 4.6, reviews: "720",
    img: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Obsidian", hex: "#1c1c1e" }, { name: "Porcelain", hex: "#f0ece3" }, { name: "Bay", hex: "#9abdd9" }, { name: "Aloe", hex: "#aee2c0" }],
    storage: [{ label: "128 GB", price: 499, originalPrice: 599 }, { label: "256 GB", price: 559, originalPrice: 659 }],
    specs: { Display: "6.1\" Actua OLED 120Hz", Chip: "Google Tensor G3", Camera: "64MP + 13MP Ultra", Battery: "4492 mAh, 18W charging", Storage: "128 GB / 256 GB", OS: "Android 14", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.3", Weight: "188 g" },
  },
  // ── OnePlus ──
  {
    id: 22, brand: "OnePlus", category: "Android",
    name: "OnePlus 12",
    desc: "Snapdragon 8 Gen 3, Hasselblad cameras, 100W charge.",
    description: "OnePlus 12 is a flagship killer that refuses to compromise. Snapdragon 8 Gen 3 delivers blazing performance, Hasselblad-tuned cameras capture life with cinematic quality, and 100W SUPERVOOC charging fills the 5400mAh battery in under 30 minutes.",
    price: 799, originalPrice: 899, tag: "Fast Charge", tagColor: "#dc2626", tagBg: "#fee2e2", rating: 4.7, reviews: "1.3k",
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Silky Black", hex: "#1c1c1e" }, { name: "Flowy Emerald", hex: "#2a6b4e" }],
    storage: [{ label: "256 GB", price: 799, originalPrice: 899 }, { label: "512 GB", price: 899, originalPrice: 999 }],
    specs: { Display: "6.82\" LTPO AMOLED 1-120Hz", Chip: "Snapdragon 8 Gen 3", Camera: "50MP Hasselblad + 48MP + 64MP Periscope", Battery: "5400 mAh, 100W SUPERVOOC", Storage: "256 GB / 512 GB", OS: "Android 14, OxygenOS 14", Connectivity: "5G, Wi-Fi 7, Bluetooth 5.4", Weight: "220 g" },
  },
  {
    id: 23, brand: "OnePlus", category: "Android",
    name: "OnePlus 12R",
    desc: "Snapdragon 8 Gen 2, 50MP camera, 100W SuperVOOC.",
    description: "OnePlus 12R delivers premium performance at a mid-range price. Snapdragon 8 Gen 2, a 50MP triple camera system, and 100W SUPERVOOC charging make it one of the best value flagship-killers on the market.",
    price: 499, originalPrice: 599, tag: "Value", tagColor: "#d97706", tagBg: "#fef3c7", rating: 4.5, reviews: "820",
    img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Iron Gray", hex: "#4a4a4a" }, { name: "Cool Blue", hex: "#4a6fa5" }],
    storage: [{ label: "128 GB", price: 499, originalPrice: 599 }, { label: "256 GB", price: 549, originalPrice: 649 }],
    specs: { Display: "6.78\" LTPO AMOLED 1-120Hz", Chip: "Snapdragon 8 Gen 2", Camera: "50MP + 8MP + 2MP", Battery: "5500 mAh, 100W SUPERVOOC", Storage: "128 GB / 256 GB", OS: "Android 14, OxygenOS 14", Connectivity: "5G, Wi-Fi 6E, Bluetooth 5.4", Weight: "207 g" },
  },
  // ── Xiaomi ──
  {
    id: 24, brand: "Xiaomi", category: "Android",
    name: "Xiaomi 14 Ultra",
    desc: "Leica Summilux cameras, Snapdragon 8 Gen 3, 90W.",
    description: "Xiaomi 14 Ultra redefines mobile photography with a Leica Summilux quad-camera system featuring a 1-inch sensor. Snapdragon 8 Gen 3 ensures top-tier performance, while 90W HyperCharge fills the 5000mAh battery in under 40 minutes.",
    price: 999, originalPrice: 1099, tag: "Camera King", tagColor: "#7c3aed", tagBg: "#f5f3ff", rating: 4.7, reviews: "760",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Black", hex: "#1c1c1e" }, { name: "White", hex: "#f5f5f5" }],
    storage: [{ label: "256 GB", price: 999, originalPrice: 1099 }, { label: "512 GB", price: 1099, originalPrice: 1199 }, { label: "1 TB", price: 1299, originalPrice: 1399 }],
    specs: { Display: "6.73\" LTPO AMOLED 1-120Hz", Chip: "Snapdragon 8 Gen 3", Camera: "50MP Leica 1\" + 50MP Ultra + 50MP 5x + 50MP Tele", Battery: "5000 mAh, 90W HyperCharge", Storage: "256 GB – 1 TB", OS: "Android 14, HyperOS", Connectivity: "5G, Wi-Fi 7, Bluetooth 5.4", Weight: "219 g" },
  },
  {
    id: 25, brand: "Xiaomi", category: "Android",
    name: "Redmi Note 13 Pro",
    desc: "200MP camera, 67W turbo charging, AMOLED display.",
    description: "Redmi Note 13 Pro packs a jaw-dropping 200MP camera, a gorgeous 6.67-inch AMOLED display at 120Hz, and 67W turbo charging into an incredibly affordable package. IP54 water resistance adds peace of mind.",
    price: 299, originalPrice: 349, tag: "Budget Pick", tagColor: "#16a34a", tagBg: "#f0fdf4", rating: 4.5, reviews: "2.4k",
    img: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&h=600&fit=crop&q=85",
    images: ["https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&h=800&fit=crop&q=85"],
    colors: [{ name: "Midnight Black", hex: "#1c1c1e" }, { name: "Aurora Purple", hex: "#7c3aed" }, { name: "Forest Green", hex: "#2a6b4e" }],
    storage: [{ label: "128 GB", price: 299, originalPrice: 349 }, { label: "256 GB", price: 329, originalPrice: 379 }],
    specs: { Display: "6.67\" AMOLED 120Hz", Chip: "MediaTek Dimensity 7200 Ultra", Camera: "200MP + 8MP Ultra + 2MP Macro", Battery: "5000 mAh, 67W fast charging", Storage: "128 GB / 256 GB", OS: "Android 13, MIUI 14", Connectivity: "5G, Wi-Fi 6, Bluetooth 5.3", Weight: "187 g" },
  },
];

export const ALL_PRODUCTS: Product[] = ALL_PRODUCTS_RAW.map(p => ({
  ...p,
  slug: slugify(p.name),
  reviewsList: BASE_REVIEWS.map((r, i) => ({ ...r, id: p.id * 10 + i })),
}));

export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find(p => p.slug === slug);
}
