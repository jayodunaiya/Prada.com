"use client";

import { useState } from "react";
import Sidebar from "@/app/component/side-bar";
import { X } from "lucide-react";

type Order = {
  id: string;
  customer: string;
  phone: string;
  items: string;
  total: string;
  address: string;
  status: "Pending" | "Delivered" | "Cancelled";
};

const initialOrders: Order[] = [
  {
    id: "#4021",
    customer: "Tunde Adeyemi",
    phone: "+234 801 234 5678",
    items: "prada Galleria",
    total: "$1,070.00",
    address: "12 Adeola Odeku St, Victoria Island, Lagos",
    status: "Delivered",
  },
  {
    id: "#4020",
    customer: "Fatima Bello",
    phone: "+234 802 345 6789",
    items: "Prada Brique",
    total: "$1,500.50",
    address: "5 Allen Ave, Ikeja, Lagos",
    status: "Pending",
  },
  {
    id: "#4019",
    customer: "Chidi Okafor",
    phone: "+234 803 456 7890",
    items: "Prada Route ×3, Lether soft Bags ×2",
    total: "$12,000.00",
    address: "3 Ozumba Mbadiwe, Lagos",
    status: "Delivered",
  },
  {
    id: "#4018",
    customer: "Ngozi Eze",
    phone: "+234 804 567 8901",
    items: "Crochet platform Sandals",
    total: "$2,500.00",
    address: "9 Awolowo Rd, Ikoyi, Lagos",
    status: "Cancelled",
  },
  {
    id: "#4017",
    customer: "Emeka Nwosu",
    phone: "+234 805 678 9012",
    items: "Leather Soft Bag ×4",
    total: "$1,500.00",
    address: "21 Bode Thomas, Surulere, Lagos",
    status: "Pending",
  },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-green-50 text-green-800",
  Pending: "bg-amber-50 text-amber-800",
  Cancelled: "bg-red-50 text-red-800",
};

const filters = ["All", "Pending", "Delivered", "Cancelled"] as const;

export default function OrderPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selected, setSelected] = useState<Order | null>(null);
  const [editStatus, setEditStatus] = useState<Order["status"]>("Pending");

  const filtered =
    activeFilter === "All"
      ? orders
      : orders.filter((o) => o.status === activeFilter);

  function openModal(order: Order) {
    setSelected(order);
    setEditStatus(order.status);
  }

  function saveOrder() {
    if (!selected) return;
    setOrders((prev) =>
      prev.map((o) =>
        o.id === selected.id ? { ...o, status: editStatus } : o,
      ),
    );
    setSelected(null);
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <h1 className="text-[17px] font-medium text-gray-900">Orders</h1>
            <p className="text-[12px] text-gray-400 mt-0.5">
              {orders.length} total orders
            </p>
          </div>
        </div>

        {/* Meta cards */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="bg-white border border-gray-100 rounded-xl p-3.5">
            <p className="text-[10px] text-gray-400 mb-1">Today</p>
            <p className="text-[15px] font-medium text-gray-900">48 orders</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-3.5">
            <p className="text-[10px] text-gray-400 mb-1">Pending</p>
            <p className="text-[15px] font-medium text-amber-700">
              {orders.filter((o) => o.status === "Pending").length} orders
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-3.5">
            <p className="text-[10px] text-gray-400 mb-1">Revenue today</p>
            <p className="text-[15px] font-medium text-gray-900">$35,800</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-[11px] px-3 py-1.5 rounded-full border transition-colors ${
                activeFilter === f
                  ? "bg-[#ebebeb] text-black border-gray-600"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {[
                  "Order",
                  "Customer",
                  "Items",
                  "Total",
                  "Status",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-[10px] uppercase tracking-wide text-gray-400 font-medium text-left px-4 py-3"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((o, i) => (
                <tr
                  key={o.id}
                  className={`hover:bg-orange-50/30 transition-colors ${i < filtered.length - 1 ? "border-b border-gray-50" : ""}`}
                >
                  <td className="text-[12px] text-gray-500 px-4 py-3">
                    {o.id}
                  </td>
                  <td className="text-[12px] text-gray-700 px-4 py-3 font-medium">
                    {o.customer}
                  </td>
                  <td className="text-[12px] text-gray-500 px-4 py-3">
                    {o.items}
                  </td>
                  <td className="text-[12px] text-gray-700 px-4 py-3">
                    {o.total}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${statusStyles[o.status]}`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => openModal(o)}
                      className="text-[11px] text-orange-600 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl border border-gray-100 w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <p className="text-[14px] font-medium text-gray-900">
                Order {selected.id} — details
              </p>
              <button
                onClick={() => setSelected(null)}
                className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
            <div className="px-5 py-4 flex flex-col gap-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium text-gray-500">
                    Customer
                  </label>
                  <input
                    readOnly
                    value={selected.customer}
                    className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[12.5px] text-gray-700"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium text-gray-500">
                    Phone
                  </label>
                  <input
                    readOnly
                    value={selected.phone}
                    className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[12.5px] text-gray-700"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium text-gray-500">
                    Total
                  </label>
                  <input
                    readOnly
                    value={selected.total}
                    className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[12.5px] text-gray-700"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-medium text-gray-500">
                    Status
                  </label>
                  <select
                    value={editStatus}
                    onChange={(e) =>
                      setEditStatus(e.target.value as Order["status"])
                    }
                    className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[12.5px] text-gray-700"
                  >
                    <option>Pending</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-medium text-gray-500">
                  Delivery address
                </label>
                <input
                  readOnly
                  value={selected.address}
                  className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-[12.5px] text-gray-700"
                />
              </div>
            </div>
            <div className="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 text-[12.5px] text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveOrder}
                className="px-4 py-2 text-[12.5px] font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}