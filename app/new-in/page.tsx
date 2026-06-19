"use client";

import { useState, useRef, useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer/Footer";

// Complete structured collection dataset for the new arrivals layout
const newArrivals = [
  {
    id: "new-01",
    name: "Prada Cropped Poplin Shirt",
    category: "Ready to Wear",
    price: "$1,450",
    image: "https://www.prada.com/content/dam/pradabkg_products/P/P40/P405G/1344F0009/P405G_1344_F0009_S_261_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg"
  },
  {
    id: "new-02",
    name: "Prada Route Canvas Shoulder Bag",
    category: "Bags",
    price: "$2,900",
    image: "https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags/cross/route_1.jpg"
  },
  {
    id: "new-03",
    name: "Prada Monolith Brushed Leather Loafers",
    category: "Shoes",
    price: "$1,250",
    image: "https://www.prada.com/content/dam/pradabkg_products/2/2DE/2DE129/305F0002/2DE129_305_F0002_F_A000_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg"
  },
  {
    id: "new-04",
    name: "Prada Symbole Acetate Sunglasses",
    category: "Accessories",
    price: "$520",
    image: "https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPR17W/E1ABF05S0/SPR17W_E1AB_F05S0_C_049_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg"
  }
];

const lookbookCollection = [
  { 
    name: "Prada Explore medium nappa leather shoulder bag with flap", 
    url: "https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/2DX8F0K74/1BD394_2DX8_F0K74_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" 
  },
  { 
    name: "Prada Explore large nappa leather bag", 
    url: "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/2DX8F0K74/1BC264_2DX8_F0K74_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" 
  },
  { 
    name: "Prada Explore medium nappa leather shoulder bag with flap", 
    url: "https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/2DX8F0036/1BD394_2DX8_F0036_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" 
  },
  { 
    name: "Prada Explore large nappa leather bag", 
    url: "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/2DX8F0036/1BC264_2DX8_F0036_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" 
  }
];

const essentialCollection1 = [
  { name: "Prada Explore medium Re-Nylon shoulder bag with flap", url: "https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/RDLNF0040/1BD394_RDLN_F0040_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" },
  { name: "Prada Explore large nappa leather bag", url: "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/RDLNF0040/1BC264_RDLN_F0040_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" },
  { name: "Prada Explore medium nappa leather shoulder bag with flap", url: "https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/2DX8F03BH/1BD394_2DX8_F03BH_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" },
  { name: "Prada Explore large nappa leather bag", url: "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/2DX8F03BH/1BC264_2DX8_F03BH_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" }
];

const essentialCollection2 = [
  { name: "Prada Explore medium nappa leather shoulder bag with flap", url: "https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/2DX8F0D57/1BD394_2DX8_F0D57_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" },
  { name: "Prada Explore large Re-Nylon and leather bag", url: "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/RDLNF0D57/1BC264_RDLN_F0D57_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" },
  { name: "Prada Explore medium Re-Nylon shoulder bag with flap", url: "https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/RDLNF0D57/1BD394_RDLN_F0D57_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" },
  { name: "Prada Explore large nappa leather bag", url: "https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/2DX8F0D57/1BC264_2DX8_F0D57_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" }
];

export default function NewInPage() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Suggested");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sortOptions = ["Suggested", "Price: Low to High", "Price: High to Low", "Newest Arrivals"];

  // Click handler to close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      <NavBar />

      {/* Dynamic Utility & Filtering Sub-Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-neutral-100 px-6 md:px-10 py-4 flex items-center justify-between">
        <p className="text-neutral-400 text-[11px] tracking-widest uppercase">
          32 PRODUCTS
        </p>
        
        {/* Controlled Custom Dropdown Component */}
        <div ref={dropdownRef} className="relative inline-block text-left">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="text-[11px] font-medium tracking-widest uppercase flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity"
          >
            FILTERS . SORT BY: <span className="font-bold">{selectedSort}</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transform transition-transform duration-300 ml-1 ${isSortOpen ? "rotate-180" : ""}`}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {isSortOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white border border-neutral-200 shadow-xl z-50">
              <ul className="py-1 divide-y divide-neutral-50">
                {sortOptions.map((option) => (
                  <li key={option}>
                    <button
                      onClick={() => {
                        setSelectedSort(option);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-[10px] uppercase tracking-wider hover:bg-neutral-50 transition-colors ${selectedSort === option ? "font-bold text-black" : "text-neutral-600"}`}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Micro Grid: Initial Header Gallery Row */}
      <div className="px-4 md:px-10 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {/* Item 1 */}
          <div className="flex flex-col text-[12px] items-center text-center">
            <img className="h-32 w-32 object-cover" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/03/essentials_bags/slider/summer_bags_3.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Summer Bags" />
            <p className="mt-4 font-semibold">Prada Summer Bags</p>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col text-[12px] items-center text-center">
            <img className="h-32 w-32 object-cover" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/route_2.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Route" />
            <p className="mt-4 font-semibold">Prada Route</p>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col text-[12px] items-center text-center">
            <img className="h-32 w-32 object-cover" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/galleria/bags/galleria.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Galleria" />
            <p className="mt-4 font-semibold">Prada Galleria</p>
          </div>
          {/* Item 4 */}
          <div className="flex flex-col text-[12px] items-center text-center">
            <img className="h-32 w-32 object-cover" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/bonnie_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Bonnie" />
            <p className="mt-4 font-semibold">Prada Bonnie</p>
          </div>
          {/* Item 5 */}
          <div className="flex flex-col text-[12px] items-center text-center">
            <img className="h-32 w-32 object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/02/SS26_II/essential_bags/cross/EU/explore.jpg" alt="Explore" />
            <p className="mt-4 font-semibold">Prada Explore</p>
          </div>
          {/* Item 6 */}
          <div className="flex flex-col text-[12px] items-center text-center">
            <img className="h-32 w-32 object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/02/SS26_II/essential_bags/cross/EU/edition.jpg" alt="Re-Edition" />
            <p className="mt-4 font-semibold">Prada Re-Edition</p>
          </div>
        </div>
      </div>

      {/* Cinematic Loop Lookbook Video Banner */}
      <div className="w-full bg-black relative aspect-video max-h-[70vh] overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
          src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_woman/explore/hero/loop_DT.mp4#t=0.001" 
          controls
        />
      </div>

      {/* Editorial Copy Intro Block */}
      <div className="bg-white py-16 px-6 text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
        <p className="font-bold text-[22px] tracking-wide text-black">Prada Explore</p>
        <p className="text-neutral-500 text-[14px] leading-relaxed font-light">
          The Prada Explore bag reimagines a versatile silhouette with updated details that subtly renew its character while preserving its refined, utilitarian essence - bold yet refined, experimental yet timeless.
        </p>
      </div>

      {/* Main Grid Collection Runway Segment 1 */}
      <div className="px-4 md:px-10 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {lookbookCollection.map((product, i) => (
            <div key={i} className="flex flex-col text-[15px] font-bold group cursor-pointer">
              <div className="aspect-square bg-neutral-50 overflow-hidden mb-2">
                <img src={product.url} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
              </div>
              <p className="px-2 pt-2 leading-tight text-neutral-900 group-hover:underline">{product.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Split Focus Dual Editorial Card Block 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full border-t border-b border-neutral-100">
        <div className="bg-neutral-50 aspect-square md:aspect-auto md:h-[500px] flex flex-col justify-center items-center p-8 text-center">
          <p className="text-black text-[15px] font-semibold tracking-wide">A Continuous Exploration <br />of Style</p>
          <p className="text-neutral-500 text-[11px] tracking-wide pt-2 max-w-xs leading-relaxed font-light">
            True to its name, the Explore bag is a trusted companion for both urban and outdoor journeys.
          </p>
        </div>
        <div className="aspect-square md:h-[500px] overflow-hidden">
          <img className="w-full h-full object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_woman/explore/card_1/card_DT.jpg" alt="Lookbook Visual" />
        </div>
      </div>

      {/* Main Grid Collection Runway Segment 2 */}
      <div className="px-4 md:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {essentialCollection1.map((product, i) => (
            <div key={i} className="flex flex-col text-[15px] font-semibold group cursor-pointer">
              <div className="aspect-square bg-neutral-50 overflow-hidden mb-2">
                <img src={product.url} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
              </div>
              <p className="px-2 pt-2 leading-tight text-neutral-900 group-hover:underline">{product.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Split Focus Dual Editorial Card Block 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full border-t border-b border-neutral-100">
        <div className="aspect-square md:h-[500px] overflow-hidden order-2 md:order-1">
          <img className="w-full h-full object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_woman/explore/card_2/card_DT.jpg" alt="Lookbook Functional Focus" />
        </div>
        <div className="bg-neutral-50 aspect-square md:aspect-auto md:h-[500px] flex flex-col justify-center items-center p-8 text-center order-1 md:order-2">
          <p className="text-black text-[15px] font-semibold tracking-wide">Functionality and Modernism</p>
          <p className="text-neutral-500 text-[11px] tracking-wide pt-2 max-w-xs leading-relaxed font-light">
            A unique perspective — bold yet refined, experimental yet timeless.
          </p>
        </div>
      </div>

      {/* Main Grid Collection Runway Segment 3 */}
      <div className="px-4 md:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {essentialCollection2.map((product, i) => (
            <div key={i} className="flex flex-col text-[15px] font-semibold group cursor-pointer">
              <div className="aspect-square bg-neutral-50 overflow-hidden mb-2">
                <img src={product.url} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
              </div>
              <p className="px-2 pt-2 leading-tight text-neutral-900 group-hover:underline">{product.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Highlights Summary and Read More Accordion Trigger Container */}
      <div className="bg-white py-16 px-6 text-center max-w-2xl mx-auto flex flex-col items-center gap-6 border-t border-neutral-100">
        <button className="text-[13px] font-bold tracking-[0.2em] uppercase border-b border-black pb-1 cursor-pointer hover:opacity-60 transition-opacity">
          SHOW MORE
        </button>
        <p className="text-neutral-700 text-[14px] leading-relaxed font-light">
          The <span className="font-bold text-black">Prada Explore Bag</span> captures a utilitarian essence, blending bold refinement with experimental yet timeless design. Its softly padded yet streamlined structure offers comfort and style, while practical 3D pockets and a spacious internal compartment provide functional versatility for your wallet and modern needs.
        </p>
      </div>

      {/* Directory Breadcrumbs Trail Footer Anchor */}
      <div className="bg-white border-t border-neutral-100 py-6 text-center text-[14px] text-black">
        <p className="font-medium tracking-wide">
          <span className="hover:underline cursor-pointer transition-all">Prada</span> /{" "}
          <span className="hover:underline cursor-pointer transition-all">Womens</span> /{" "}
          <span className="hover:underline cursor-pointer transition-all">Essentials</span> /{" "}
          <span className="text-neutral-400 font-normal">Prada explore</span>
        </p>
      </div>

      <Footer />
    </div>
  );
}