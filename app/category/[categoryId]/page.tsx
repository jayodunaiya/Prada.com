"use client";
import { useState } from "react";
import Link from "next/link";
import NavBar from "@/app/NavBar";
import Footer from "../../Footer/Footer";

const CATEGORY_PRODUCTS = [
  { id: "buckle-cotton-leather-bag", name: "Prada Buckle cotton and leather bag", price: "₦3,600", tag: "Online Exclusive", image: "https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/01.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" },
  { id: "cotton-boucle-crop-top", name: "Cotton boucle crop top", price: "₦1,450", tag: "Online Exclusive", image: "https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/02.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" },
  { id: "raffia-hat", name: "Raffia hat", price: "₦850", tag: "New In", image: "https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/03.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" },
  { id: "leather-sandals", name: "Leather sandals with floral ornament", price: "₦1,200", tag: "Essential", image: "https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/04.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" },
  { id: "galleria-leather-bag", name: "Prada Galleria Saffiano leather", price: "₦4,200", tag: "New In", image: "https://www.prada.com/content/dam/pradaspa/home_page/2026/04/galleria/bags/galleria.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" },
  { id: "bonnie-shoulder-bag", name: "Prada Bonnie brushed leather", price: "₦3,100", tag: "Essential", image: "https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/bonnie_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" }
];

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <NavBar />
      <main className="max-w-[1800px] mx-auto px-8 py-24">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {CATEGORY_PRODUCTS.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="flex flex-col gap-3 group cursor-pointer">
              <div className="aspect-[1/1] bg-neutral-50 overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700" />
                <span className="absolute top-3 left-3 text-[8px] uppercase tracking-[0.2em] bg-white px-2 py-0.5">{product.tag}</span>
              </div>
              <p className="text-xs font-light tracking-wide">{product.name}</p>
              <p className="text-[11px] font-medium">{product.price}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}