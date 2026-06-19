"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Sidebar from "@/app/component/side-bar";
import { Plus, Pencil, Trash2, X, CloudUpload } from "lucide-react";
import React from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  inStock: boolean;
  image: ReactNode;
};

const categories = ["All", "Women", "Men",];

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Prada Route", 
    category: "Women        ", 
    price: "$4,374", 
    inStock: true,
    image: <img className="h-40" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags/cross/route_1.jpg" alt="" />
  },
  {
    id: 2,
    name: "Leather Soft Bags", 
    category: "Women", 
    price: "$3,366", 
    inStock: true,
    image: <img className="h-47" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/soft_bag_1.jpg" alt="" />
  },
  {
    id: 3,
    name: "Prada Brique", 
    category: "152",
    price: "$2,128",  
    inStock: true,
    image: <img className="h-47" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/brique_2.jpg" alt="" />
  },
  {
    id: 4,
    name: "Prada Re-Nylon Backpack", 
    category: "Men", 
    price: "$1,470", 
    inStock: false,
    image: <img className="h-45" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/backpacks_1.jpg" alt="" />
  },
  {
    id: 5,
    name: "Prada Explore leather shoulder bag", 
    category: "Men", 
    price: "$1,070", 
    inStock: false,
    image: <img className="h-47" src="https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH204/2HE8F0002/2VH204_2HE8_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
  },
  {
    id: 6,
    name: "Prada Galleria", 
    category: "Women", 
    price: "$1,070", 
    inStock: false,
    image: <img className="h-47" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/04/galleria/cross/galleria_1.jpg" alt="" />
  },
];

const emptyForm = { name: "", description: "", price: "", category: "Burgers" };

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [form, setForm] = useState(emptyForm);

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  function openAdd() {
    setEditProduct(null);
    setForm(emptyForm);
    setShowModal(true);
  }

  function openEdit(p: Product) {
    setEditProduct(p);
    setForm({
      name: p.name,
      description: "",
      price: p.price,
      category: p.category,
    });
    setShowModal(true);
  }

  function deleteProduct(id: number) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  function saveProduct() {
    if (!form.name.trim() || !form.price.trim()) return;
    if (editProduct) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editProduct.id
            ? {
                ...p,
                name: form.name,
                category: form.category,
                price: form.price,
              }
            : p,
        ),
      );
    } else {
      const newProduct: Product = {
        id: Date.now(),
        name: form.name,
        category: form.category,
        price: form.price.startsWith("$") ? form.price : `$${form.price}`,
        inStock: true,
        image: "",
      };
      setProducts((prev) => [...prev, newProduct]);
    }
    setShowModal(false);
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <h1 className="text-[17px] font-medium text-gray-900">Products</h1>
            <p className="text-[12px] text-gray-400 mt-0.5">
              {products.length} products across 5 categories
            </p>
          </div>
          <button
            onClick={openAdd}
            className="flex items-center gap-1.5 bg-black text-white text-[12.5px] font-medium px-4 py-2 rounded-lg hover:bg-white hover:border; hover:border-black; border-2 hover:text-black transition-colors"
          >
            <Plus size={14} />
            Add product
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`text-[11px] px-3 py-1.5 rounded-full border transition-colors ${
                activeFilter === c
                  ? "bg-[#ebebeb] text-black border-gray-600"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-3 gap-3">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden"
            >
              <div className="h-30 bg-[#ebebeb] flex items-center overflow-hidden justify-center text-4xl border-b border-gray-50">
                {p.image}
              </div>
              <div className="p-3.5">
                <p className="text-[12.5px] font-medium text-gray-900">
                  {p.name}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5 mb-3">
                  {p.category}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-gray-600">
                    {p.price}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${p.inStock ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                    >
                      {p.inStock ? "In stock" : "Out of stock"}
                    </span>
                    <button
                      onClick={() => openEdit(p)}
                      className="w-6 h-6 rounded-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Pencil size={11} />
                    </button>
                    <button
                      onClick={() => deleteProduct(p.id)}
                      className="w-6 h-6 rounded-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 hover:border-red-100 transition-colors"
                    >
                      <Trash2 size={11} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl border border-gray-100 w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <p className="text-[14px] font-medium text-gray-900">
                {editProduct ? "Edit product" : "Add new product"}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
            <div className="px-5 py-4 flex flex-col gap-3.5">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium text-gray-500">
                  Product name
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Spicy Chicken Wrap"
                  className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[12.5px] text-gray-700 placeholder:text-gray-300"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium text-gray-500">
                  Description
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  placeholder="Short description…"
                  rows={3}
                  className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[12.5px] text-gray-700 placeholder:text-gray-300 resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium text-gray-500">
                    Price ($)
                  </label>
                  <input
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                    placeholder="0.00"
                    className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[12.5px] text-gray-700 placeholder:text-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium text-gray-500">
                    Category
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[12.5px] text-gray-700"
                  >
                    {categories
                      .filter((c) => c !== "All")
                      .map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium text-gray-500">
                  Product image
                </label>
                <div className="border border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center gap-1.5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <CloudUpload size={20} className="text-gray-300" />
                  <span className="text-[11px] text-gray-400">
                    Click to upload or drag and drop
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-[12.5px] text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveProduct}
                className="px-4 py-2 text-[12.5px] font-medium text-white bg-gray-700  rounded-lg hover:bg-black transition-colors"
              >
                {editProduct ? "Save changes" : "Add product"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}