"use client";
import { useState } from "react";

import CategorySidebar from "@/components/CategorySidebar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopByCategory from "@/components/ShopByCategory";
import NewArrivals from "@/components/NewArrivals";
import ShopByBrand from "@/components/ShopByBrand";
import FeaturedGrid from "@/components/FeaturedGrid";
import WelcomeBanner from "@/components/WelcomeBanner";
import ShopByPhoneModel from "@/components/ShopByPhoneModel";
import Footer from "@/components/Footer";

export default function Home() {
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <>
      {/*
        CategorySidebar renders two internal sub-components:
        - DesktopSidebar (visible ≥1024px via .sidebar-desktop CSS class)
        - MobileSidebar  (visible <1024px  via .sidebar-mobile  CSS class)
        Both read the same externalOpen / onRequestClose props.
      */}
      <CategorySidebar
        externalOpen={categoryOpen}
        onRequestClose={() => setCategoryOpen(false)}
      />

      {/* Main page — offset by 52px on desktop to clear the icon rail */}
      <div
        className="sidebar-offset"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar onCategoryToggle={() => setCategoryOpen(v => !v)} />

        <main className="pb-16 lg:pb-0" style={{ flex: 1 }}>
          <HeroSection />
          <ShopByCategory />
          <NewArrivals />
          <ShopByBrand />
          <FeaturedGrid />
          <WelcomeBanner />
          <ShopByPhoneModel />
        </main>

        <Footer />
      </div>
    </>
  );
}
