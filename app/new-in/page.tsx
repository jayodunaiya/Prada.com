"use client";

import { useState, useRef, useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer/Footer";
import Link from "next/link";
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

const initialGalleryRows = [
  { name: "Prada Summer Bags", url: "https://www.prada.com/content/dam/pradaspa/home_page/2026/03/essentials_bags/slider/summer_bags_3.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" },
  { name: "Prada Route", url: "https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/route_2.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" },
  { name: "Prada Galleria", url: "https://www.prada.com/content/dam/pradaspa/home_page/2026/04/galleria/bags/galleria.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" },
  { name: "Prada Bonnie", url: "https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/bonnie_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" },
  { name: "Prada Explore", url: "https://www.prada.com/content/dam/pradaspa/ecommerce/2026/02/SS26_II/essential_bags/cross/EU/explore.jpg" },
  { name: "Prada Re-Edition", url: "https://www.prada.com/content/dam/pradaspa/ecommerce/2026/02/SS26_II/essential_bags/cross/EU/edition.jpg" },
];

export default function NewInPage() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Suggested");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sortOptions = ["Suggested", "Price: Low to High", "Price: High to Low", "Newest Arrivals"];
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
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-neutral-900 selection:text-white">
      <NavBar />

      {/* Dynamic Utility & Filtering Sub-Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300">
        <p className="text-neutral-500 text-[10px] tracking-[0.25em] font-medium uppercase">
          32 PRODUCTS
        </p>
        
        {/* Controlled Custom Dropdown Component */}
        <div ref={dropdownRef} className="relative inline-block text-left">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="text-[10px] font-medium tracking-[0.2em] uppercase flex items-center gap-2 cursor-pointer hover:text-neutral-500 transition-colors focus:outline-none"
          >
            FILTERS . SORT BY: <span className="font-bold text-neutral-900">{selectedSort}</span>
            <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className={`transform transition-transform duration-500 ease-out ${isSortOpen ? "rotate-180" : ""}`}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {isSortOpen && (
            <div className="absolute right-0 mt-4 w-52 bg-white border border-neutral-100 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-300 rounded-none">
              <ul className="py-1.5 divide-y divide-neutral-50">
                {sortOptions.map((option) => (
                  <li key={option}>
                    <button
                      onClick={() => {
                        setSelectedSort(option);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3 text-[10px] uppercase tracking-widest transition-colors ${selectedSort === option ? "font-bold text-black bg-neutral-50" : "text-neutral-500 hover:bg-neutral-50/60 hover:text-black"}`}
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
      <div className="px-6 md:px-12 py-14 overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex flex-row lg:grid lg:grid-cols-6 gap-8 lg:gap-4 min-w-max lg:min-w-0 justify-between">
          {initialGalleryRows.map((item, index) => (
            <div key={index} className="flex flex-col text-[11px] items-center text-center group cursor-pointer max-w-[140px] lg:max-w-none">
              <div className="overflow-hidden bg-neutral-50 p-2 border border-transparent group-hover:border-neutral-200 transition-all duration-500">
                <img className="h-28 w-28 lg:h-32 lg:w-32 object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src={item.url} alt={item.name} />
              </div>
              <p className="mt-4 font-medium tracking-wider text-neutral-600 group-hover:text-black transition-colors duration-300">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Loop Lookbook Video Banner */}
      <div className="w-full bg-neutral-900 relative aspect-[16/10] md:aspect-[21/9] max-h-[75vh] overflow-hidden group">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover scale-100 group-hover:scale-[1.01] transition-transform duration-[2000ms] ease-out"
          src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_woman/explore/hero/loop_DT.mp4#t=0.001" 
          controls
        />
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>

      {/* Editorial Copy Intro Block */}
      <div className="bg-white py-24 px-6 text-center max-w-2xl mx-auto flex flex-col items-center gap-4">
        <span className="text-[10px] tracking-[0.3em] text-neutral-400 font-semibold uppercase">The Collection</span>
        <h2 className="font-light text-2xl tracking-[0.1em] text-black uppercase">Prada Explore</h2>
        <p className="text-neutral-500 text-[13px] leading-relaxed font-light tracking-wide mt-2">
          The Prada Explore bag reimagines a versatile silhouette with updated details that subtly renew its character while preserving its refined, utilitarian essence—bold yet refined, experimental yet timeless.
        </p>
      </div>

      {/* Main Grid Collection Runway Segment 1 */}
      <div className="px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
          {lookbookCollection.map((product, i) => (
            <Link
            href="/products/15"
            >
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className="aspect-[1/1] bg-neutral-50 overflow-hidden relative">
                <img src={product.url} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="pt-4 text-[12px] leading-relaxed tracking-wide font-normal text-neutral-800 group-hover:text-black transition-colors duration-300">{product.name}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Split Focus Dual Editorial Card Block 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch w-full border-t border-b border-neutral-100 bg-neutral-50">
        <div className="flex flex-col justify-center items-center p-12 md:p-20 text-center order-2 md:order-1">
          <span className="text-[9px] tracking-[0.3em] text-neutral-400 font-bold uppercase mb-3">Philosophy</span>
          <h3 className="text-black text-lg font-normal tracking-wider uppercase leading-snug">A Continuous Exploration <br />of Style</h3>
          <p className="text-neutral-500 text-[12px] tracking-wide pt-4 max-w-xs leading-relaxed font-light">
            True to its name, the Explore bag is a trusted companion for both urban and outdoor journeys.
          </p>
        </div>
        <div className="aspect-square md:aspect-auto md:h-[540px] overflow-hidden order-1 md:order-2 relative">
          <img className="w-full h-full object-cover scale-100 hover:scale-102 transition-transform duration-[1500ms] ease-out" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_woman/explore/card_1/card_DT.jpg" alt="Lookbook Visual" />
        </div>
      </div>

      {/* Main Grid Collection Runway Segment 2 */}
      
      <div className="px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
          {essentialCollection1.map((product, i) => (
            <Link
      href="/products/10"
      > 
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className="aspect-[1/1] bg-neutral-50 overflow-hidden relative">
                <img src={product.url} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="pt-4 text-[12px] leading-relaxed tracking-wide font-normal text-neutral-800 group-hover:text-black transition-colors duration-300">{product.name}</p>
            </div>
      </Link>
          ))}
        </div>
      </div>

      {/* Split Focus Dual Editorial Card Block 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch w-full border-t border-b border-neutral-100 bg-neutral-50">
        <div className="aspect-square md:aspect-auto md:h-[540px] overflow-hidden relative">
          <img className="w-full h-full object-cover scale-100 hover:scale-102 transition-transform duration-[1500ms] ease-out" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_woman/explore/card_2/card_DT.jpg" alt="Lookbook Functional Focus" />
        </div>
        <div className="flex flex-col justify-center items-center p-12 md:p-20 text-center">
          <span className="text-[9px] tracking-[0.3em] text-neutral-400 font-bold uppercase mb-3">Craftsmanship</span>
          <h3 className="text-black text-lg font-normal tracking-wider uppercase leading-snug">Functionality and Modernism</h3>
          <p className="text-neutral-500 text-[12px] tracking-wide pt-4 max-w-xs leading-relaxed font-light">
            A unique perspective — bold yet refined, experimental yet timeless.
          </p>
        </div>
      </div>

      {/* Main Grid Collection Runway Segment 3 */}
      <div className="px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
          {essentialCollection2.map((product, i) => (
            <Link
            href="/products/20"
            >
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className="aspect-[1/1] bg-neutral-50 overflow-hidden relative">
                <img src={product.url} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="pt-4 text-[12px] leading-relaxed tracking-wide font-normal text-neutral-800 group-hover:text-black transition-colors duration-300">{product.name}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Global Highlights Summary and Read More Accordion Trigger Container */}
      <div className="bg-white py-20 px-6 text-center max-w-2xl mx-auto flex flex-col items-center gap-8 border-t border-neutral-100">
        <button className="text-[11px] font-bold tracking-[0.25em] uppercase border-b border-black pb-1.5 cursor-pointer hover:text-neutral-500 hover:border-neutral-300 transition-all duration-300 focus:outline-none">
          SHOW MORE
        </button>
        <p className="text-neutral-600 text-[13px] leading-relaxed font-light tracking-wide">
          The <span className="font-semibold text-black">Prada Explore Bag</span> captures a utilitarian essence, blending bold refinement with experimental yet timeless design. Its softly padded yet streamlined structure offers comfort and style, while practical 3D pockets and a spacious internal compartment provide functional versatility for your wallet and modern needs.
        </p>
      </div>

      {/* Directory Breadcrumbs Trail Footer Anchor */}
      <div className="bg-neutral-50 border-t border-neutral-100 py-8 text-center text-[12px] text-neutral-500 tracking-wide">
        <p className="font-normal">
          
          <Link
          href="/"
          >
          <span className="hover:text-black cursor-pointer transition-colors duration-300">Prada</span>
          </Link>

          <span className="mx-2 text-neutral-300">/</span>

          <Link
          href="/women"
          >
           <span className="hover:text-black cursor-pointer transition-colors duration-300">Womens</span>
          </Link>

         
          <span className="mx-2 text-neutral-300">/</span>

          <Link
          href="/discover"
          >
           <span className="hover:text-black cursor-pointer transition-colors duration-300">Discover</span>
          </Link>
          
          <span className="mx-2 text-neutral-300">/</span>
          <span className="text-neutral-400 font-light">Prada explore</span>
        </p>
      </div>

      <Footer />
    </div>
  );
}