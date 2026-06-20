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

const categories = ["All", "Women", "Men"];

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Prada Route",
    category: "Women",
    price: "₦4,374",
    inStock: true,
    image: <img className="h-40" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags/cross/route_1.jpg" alt="" />
  },
  {
    id: 2,
    name: "Leather Soft Bags",
    category: "Women",
    price: "₦3,366",
    inStock: true,
    image: <img className="h-47" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/soft_bag_1.jpg" alt="" />
  },
  {
    id: 3,
    name: "Prada Brique",
    category: "Women",
    price: "₦2,128",
    inStock: true,
    image: <img className="h-47" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/brique_2.jpg" alt="" />
  },
  {
    id: 4,
    name: "Prada Re-Nylon Backpack",
    category: "Men",
    price: "₦1,470",
    inStock: false,
    image: <img className="h-45" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/backpacks_1.jpg" alt="" />
  },
  {
    id: 5,
    name: "Prada Explore leather shoulder bag",
    category: "Men",
    price: "₦1,070",
    inStock: false,
    image: <img className="h-47" src="https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH204/2HE8F0002/2VH204_2HE8_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
  },
  {
    id: 6,
    name: "Prada Galleria",
    category: "Women",
    price: "₦1,070",
    inStock: false,
    image: <img className="h-47" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/04/galleria/cross/galleria_1.jpg" alt="" />
  },
];

const emptyForm = { name: "", description: "", price: "", category: "Women" };

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [form, setForm] = useState(emptyForm);

  const filtered = activeFilter === "All" ? products : products.filter((p) => p.category === activeFilter);

  function openAdd() {
    setEditProduct(null);
    setForm(emptyForm);
    setShowModal(true);
  }

  function openEdit(p: Product) {
    setEditProduct(p);
    setForm({ name: p.name, description: "", price: p.price.replace("₦", ""), category: p.category });
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
          p.id === editProduct.id ? { ...p, name: form.name, category: form.category, price: form.price.startsWith("₦") ? form.price : `₦${form.price}` } : p
        )
      );
    } else {
      const newProduct: Product = {
        id: Date.now(),
        name: form.name,
        category: form.category,
        price: form.price.startsWith("₦") ? form.price : `₦${form.price}`,
        inStock: true,
        image: null,
      };
      setProducts((prev) => [...prev, newProduct]);
    }
    setShowModal(false);
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex items-end justify-between mb-5">
          <div>
            <h1 className="text-[17px] font-medium text-gray-900">Products</h1>
            <p className="text-[12px] text-gray-400 mt-0.5">{products.length} products across 3 categories</p>
          </div>
          <button onClick={openAdd} className="flex items-center gap-1.5 bg-black text-white text-[12.5px] font-medium px-4 py-2 rounded-lg hover:opacity-80 transition-opacity">
            <Plus size={14} /> Add product
          </button>
        </div>

        <div className="flex items-center gap-2 mb-5">
          {categories.map((c) => (
            <button key={c} onClick={() => setActiveFilter(c)} className={`text-[11px] px-3 py-1.5 rounded-full border ${activeFilter === c ? "bg-black text-white" : "bg-white text-gray-500 border-gray-200"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {filtered.map((p) => (
            <div key={p.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
              <div className="h-30 bg-gray-100 flex items-center justify-center overflow-hidden">{p.image}</div>
              <div className="p-3.5">
                <p className="text-[12.5px] font-medium text-gray-900">{p.name}</p>
                <p className="text-[10px] text-gray-400 mt-0.5 mb-3">{p.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-gray-600">{p.price}</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => openEdit(p)} className="p-1.5 text-gray-400 hover:text-black"><Pencil size={11} /></button>
                    <button onClick={() => deleteProduct(p.id)} className="p-1.5 text-gray-400 hover:text-red-600"><Trash2 size={11} /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal JSX remains consistent with your previous structure */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-5">
            <h2 className="text-[14px] font-medium mb-4">{editProduct ? "Edit" : "Add"} Product</h2>
            <div className="flex flex-col gap-3">
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" className="bg-gray-50 p-2 text-[12.5px] rounded-lg border" />
              <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="Price (₦)" className="bg-gray-50 p-2 text-[12.5px] rounded-lg border" />
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="bg-gray-50 p-2 text-[12.5px] rounded-lg border">
                {categories.filter(c => c !== "All").map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-[12px] border rounded-lg">Cancel</button>
              <button onClick={saveProduct} className="px-4 py-2 text-[12px] bg-black text-white rounded-lg">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}