"use client";
import Link from "next/link";
import { LayoutGrid, ShoppingBag, FileText, LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import Image from "next/image";

const navItems = [
  { href: "/Admin/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "/Admin/products", label: "Products", icon: ShoppingBag },
  { href: "/Admin/orders", label: "Orders", icon: FileText, badge: 12 },
];

export default function Sidebar() {
  function handleLogout() {
    redirect("/auth/login");
  }
  return (
    <div className="h-screen w-60 bg-white border-r border-gray-100 flex flex-col">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex items-center">

            <img src="C:\Users\PC\Desktop\CAPSTONE PROJECT\my-app\public\download.png" alt="" />
            
            
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-3 flex flex-col gap-0.5">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium px-2 py-1.5">
          Main
        </p>
        {navItems.map(({ href, label, icon: Icon, badge }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-gray-500
              hover:bg-gray-50 hover:text-gray-900 transition-colors text-[13.5px]
              [&.active]:bg-orange-50 [&.active]:text-gray-600 [&.active]:font-medium"
          >
            <Icon size={17} strokeWidth={1.8} />
            {label}
            {badge && (
              <span
                className="ml-auto bg-black text-white text-[10px] font-medium
                px-2 py-px rounded-full leading-[18px]"
              >
                {badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-gray-100">
        <div className="flex items-center gap-2.5 px-2.5 py-2.5 rounded-lg bg-gray-50">
          <div
            className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center
            text-[12px] font-medium text-gray-800 shrink-0"
          >
            AU
          </div>
          <div>
            <p className="text-[12.5px] font-medium text-gray-800">
              Admin User
            </p>
            <p className="text-[11px] text-gray-400">admin@fooddash.com</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full mt-2 py-2 flex items-center justify-center gap-1.5
            text-[12.5px] text-black hover:text-red-500 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <LogOut size={14} />
          Log out
        </button>
      </div>
    </div>
  );
}