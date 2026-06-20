"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutGrid, ShoppingBag, FileText, LogOut, Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { href: "/Admin/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "/Admin/products", label: "Products", icon: ShoppingBag },
  { href: "/Admin/orders", label: "Orders", icon: FileText, badge: 12 },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    router.push("/"); // Changed to home/landing page
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between w-full bg-white h-16 px-6 border-b border-black sticky top-0 z-[100]">
        <div className="relative w-24 h-6">
          <Image src="/download.png" alt="Logo" fill className="object-contain" priority />
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white/80 backdrop-blur-sm z-[99]" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar Shell */}
      <div className={`
        fixed inset-y-0 left-0 z-[99] md:z-10 w-64 bg-white border-r border-black flex flex-col h-screen
        transition-transform duration-300 ease-in-out md:sticky md:top-0 md:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        {/* Brand Header */}
        <div className="hidden md:flex px-8 py-10 border-b border-black">
          <div className="relative w-32 h-10">
            <Image src="/download.png" alt="Logo" fill className="object-contain" priority />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
          <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold px-2 py-4">
            Management
          </p>
          {navItems.map(({ href, label, icon: Icon, badge }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-2 py-3 text-[11px] uppercase tracking-[0.2em] transition-all duration-300
                  ${isActive 
                    ? "text-black font-bold" 
                    : "text-gray-400 hover:text-black"
                  }`}
              >
                <Icon size={16} strokeWidth={isActive ? 2.5 : 1.5} />
                {label}
                {badge && (
                  <span className="ml-auto text-[9px] font-bold">
                    {badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-black bg-white">
          <div className="mb-6">
            <p className="text-[10px] font-bold uppercase tracking-widest">Admin User</p>
            <p className="text-[9px] uppercase tracking-widest text-gray-400">admin@fooddash.com</p>
          </div>

          <Link
          href="/auth/login"
          >
          <button
            onClick={handleLogout}
            className="w-full py-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] border border-black hover:bg-black hover:text-white transition-colors duration-300 justify-center"
          >
            <LogOut size={12} />
            Log out
          </button>
          </Link>

        </div>
      </div>
    </>
  );
}