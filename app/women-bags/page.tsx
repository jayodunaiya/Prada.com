"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import NavBar from "@/app/NavBar";
import Footer from "../Footer/Footer"; // Ensure you have this file

// 1. DATABASE: Centralized Category Content
const CATEGORY_DATA: Record<string, any> = {
  "bags": {
    title: "Women's Bags",
    description: "The iconic Prada bag collection: architectural silhouettes meet refined materials.",
    bannerImage: "https://www.prada.com/content/dam/pradaspa/home_page/2026/04/galleria/bags/galleria.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg",
    products: [
      { id: "1", name: "Prada Galleria Bag", price: "₦198,000", image: "https://www.prada.com/content/dam/pradaspa/home_page/2026/04/galleria/bags/galleria.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" },
      { id: "buckle-cotton-leather-bag", name: "Buckle Cotton Bag", price: "₦3,600", image: "https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/01.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" },
    ]
  }
};

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const category = CATEGORY_DATA[slug];

  if (!category) return notFound();

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <NavBar />

      {/* Hero Header */}
      <section className="relative w-full h-[60vh] lg:h-[70vh] flex flex-col justify-end p-8 lg:p-16">
        <img 
          src={category.bannerImage} 
          alt={category.title} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-7xl font-light uppercase tracking-tighter text-white">
            {category.title}
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        {/* Description Strip */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">Collection</p>
          <p className="text-xl font-light leading-relaxed">{category.description}</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16">
          {category.products.map((product: any) => (
            <a 
              key={product.id} 
              href={`/products/${product.id}`} 
              className="group block space-y-4"
            >
              <div className="aspect-[3/4] bg-neutral-100 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1500ms] ease-out" 
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-[11px] uppercase tracking-[0.15em]">{product.name}</h3>
                <p className="text-[11px] text-neutral-500 tracking-wide">{product.price}</p>
              </div>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}