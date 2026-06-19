"use client";

import React, { useState } from "react";
import NavBar from "@/app/NavBar";

interface ProductParams {
  params: Promise<{ productId: string }>;
}

export default function ProductDetails({ params }: ProductParams) {
  // Safe unwrap of async params for Next.js 15+ environments
  const { productId } = React.use(params);

  // Accordion state toggles
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("Navy");
  const [selectedSize, setSelectedSize] = useState<string>("");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const colors = [
    { name: "Sienna", class: "bg-amber-950" },
    { name: "Navy", class: "bg-blue-950" },
    { name: "Burgundy", class: "bg-red-950" },
    { name: "Forest", class: "bg-green-950" }
  ];

  const sizes = ["EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43"];

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-neutral-950 selection:text-white">
      <NavBar />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 lg:pt-12 pb-24">
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* COLUMN 1: EDITORIAL METADATA & ACCORDIONS (DESKTOP: LEFT) */}
          <div className="grid-cols-1 lg:col-span-3 order-2 lg:order-1 space-y-8 lg:sticky lg:top-28">
            <div>
              <nav className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase mb-2">
                Bags / Prada Galleria
              </nav>
              <h1 className="text-xl lg:text-2xl font-light tracking-wide uppercase text-neutral-900">
                Prada Galleria Bag
              </h1>
              <p className="text-[15px] font-medium tracking-wider mt-2 text-neutral-800">
                ₦198,000
              </p>
            </div>

            <p className="text-[12px] leading-relaxed text-neutral-500 font-light tracking-wide max-w-md">
              Fits true to size. Order your normal size. Follows standard US mens sizing. 
              Size chart can be found in the sizing drawer below.
            </p>

            {/* Micro-Interactive Accordion Group */}
            <div className="border-t border-neutral-200 divide-y divide-neutral-200">
              {/* Product Details Section */}
              <div className="py-3.5">
                <button
                  onClick={() => toggleSection("details")}
                  className="w-full flex justify-between items-center text-[11px] uppercase tracking-[0.15em] font-medium text-left py-1"
                >
                  <span>Product Details</span>
                  <span className="text-lg font-light">{openSection === "details" ? "−" : "+"}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === "details" ? "max-h-40 mt-3" : "max-h-0"}`}>
                  <p className="text-[12px] text-neutral-500 font-light leading-relaxed">
                    Saffiano leather handles and trim accents. Removable leather keychain wrapper. 
                    Front stitched metal triangle brand insignia plate. Double interior organizational spaces.
                  </p>
                </div>
              </div>

              {/* Sizing Section */}
              <div className="py-3.5">
                <button
                  onClick={() => toggleSection("sizing")}
                  className="w-full flex justify-between items-center text-[11px] uppercase tracking-[0.15em] font-medium text-left py-1"
                >
                  <span>Sizing & Fit</span>
                  <span className="text-lg font-light">{openSection === "sizing" ? "−" : "+"}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === "sizing" ? "max-h-40 mt-3" : "max-h-0"}`}>
                  <p className="text-[12px] text-neutral-500 font-light leading-relaxed">
                    Standard proportional scaling profile. For loose streetwear modifications, 
                    we advise selecting one tier size greater than customary measurements.
                  </p>
                </div>
              </div>

              {/* Delivery Section */}
              <div className="py-3.5">
                <button
                  onClick={() => toggleSection("delivery")}
                  className="w-full flex justify-between items-center text-[11px] uppercase tracking-[0.15em] font-medium text-left py-1"
                >
                  <span>Delivery & Returns</span>
                  <span className="text-lg font-light">{openSection === "delivery" ? "−" : "+"}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === "delivery" ? "max-h-40 mt-3" : "max-h-0"}`}>
                  <p className="text-[12px] text-neutral-500 font-light leading-relaxed">
                    Complimentary premium standard dispatch courier tracking routing. 
                    Hassle-free dynamic returns accepted within 14 calendar operational dates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: IMMERSIVE HERO PORTRAIT VIEWPORT (DESKTOP: CENTER) */}
          <div className="grid-cols-1 lg:col-span-6 order-1 lg:order-2">
            <div className="bg-neutral-50 overflow-hidden aspect-[4/5] w-full max-w-3xl mx-auto border border-neutral-100">
              <img 
                className="h-full w-full object-cover mix-blend-darken hover:scale-102 transition-transform duration-[1500ms] ease-out" 
                src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/galleria/bags/galleria.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" 
                alt="Prada Galleria Classic Leather Presentation" 
              />
            </div>
          </div>

          {/* COLUMN 3: TRANSACTION ARCHITECTURE PANEL (DESKTOP: RIGHT) */}
          <div className="grid-cols-1 lg:col-span-3 order-3 space-y-8 lg:sticky lg:top-28 lg:pl-4">
            {/* Color Swatch Picker */}
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                Selected Color: <span className="font-bold text-black">{selectedColor}</span>
              </p>
              <div className="flex flex-wrap gap-2.5">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-9 h-9 ${color.class} rounded-none relative transition-all duration-300 focus:outline-none ${
                      selectedColor === color.name 
                        ? "ring-1 ring-black ring-offset-4 scale-95" 
                        : "hover:scale-[1.05]"
                    }`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Dropdown Selection Panel */}
            <div className="space-y-3">
              <label htmlFor="size-select" className="block text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                Select Size
              </label>
              <div className="relative">
                <select 
                  id="size-select"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full h-11 border border-neutral-200 rounded-none bg-white text-[12px] tracking-widest px-4 uppercase appearance-none focus:outline-none focus:border-black transition-colors cursor-pointer"
                >
                  <option value="">Choose your size</option>
                  {sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-400">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* CTA Bag Submission Button Container */}
            <button 
              disabled={!selectedSize}
              className={`w-full h-12 text-[11px] tracking-[0.25em] font-bold transition-all duration-400 focus:outline-none ${
                selectedSize 
                  ? "bg-black text-white hover:bg-neutral-800 active:scale-[0.99]" 
                  : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
              }`}
            >
              {selectedSize ? "ADD TO BAG" : "SELECT A SIZE"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}