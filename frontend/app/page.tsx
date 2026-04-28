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
      {/* Always-visible icon sidebar (desktop only) */}
      <div className="hidden lg:block">
        <CategorySidebar
          externalOpen={categoryOpen}
          onRequestClose={() => setCategoryOpen(false)}
        />
      </div>

      {/* Mobile sidebar (no icon strip — full drawer) */}
      {categoryOpen && (
        <div className="flex lg:hidden">
          <CategorySidebar
            externalOpen={true}
            onRequestClose={() => setCategoryOpen(false)}
          />
        </div>
      )}

      {/* Main content — offset by sidebar width on desktop */}
      <div
        className="lg:pl-[52px]"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar onCategoryToggle={() => setCategoryOpen((v) => !v)} />

        <main
          className="pb-16 lg:pb-0"
          style={{ flex: 1 }}
        >
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
