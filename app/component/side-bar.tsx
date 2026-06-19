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
    router.push("/auth/login");
  }

  return (
    <>
      {/* Mobile Top Bar / Header */}
      <div className="md:hidden flex items-center justify-between w-full bg-white h-14 px-4 border-b border-gray-100 sticky top-0 z-[100]">
        <div className="relative w-28 h-8">
          {/* Using your public folder asset correctly */}
          <Image 
            src="/download.png" 
            alt="Logo" 
            fill 
            className="object-contain"
            priority 
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 text-gray-500 hover:text-black rounded-lg hover:bg-gray-50 transition-colors"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Backdrop for Mobile Layout */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-xs z-[99]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Core Shell */}
      <div className={`
        fixed inset-y-0 left-0 z-[99] md:z-10 w-60 bg-white border-r border-gray-100 flex flex-col h-screen
        transition-transform duration-300 ease-in-out md:sticky md:top-0 md:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        {/* Brand/Logo Header (Hidden on Mobile view because of Top Bar) */}
        <div className="hidden md:block px-5 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="relative w-32 h-10">
              <Image 
                src="/download.png" 
                alt="Logo" 
                fill 
                className="object-contain"
                priority 
              />
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-3 py-3 flex flex-col gap-0.5 overflow-y-auto">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium px-2 py-1.5">
            Main
          </p>
          {navItems.map(({ href, label, icon: Icon, badge }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)} // Auto-close draw window on choice selection
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13.5px] transition-colors
                  ${isActive 
                    ? "bg-orange-50 text-orange-700 font-medium" 
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`}
              >
                <Icon size={17} strokeWidth={1.8} />
                {label}
                {badge && (
                  <span className={`ml-auto text-[10px] font-medium px-2 py-px rounded-full leading-[18px]
                    ${isActive ? "bg-orange-600 text-white" : "bg-black text-white"}`}
                  >
                    {badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Workspace Profile Footer */}
        <div className="p-3 border-t border-gray-100 bg-white">
          <div className="flex items-center gap-2.5 px-2.5 py-2.5 rounded-lg bg-gray-50">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[12px] font-medium text-gray-800 shrink-0">
              AU
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] font-medium text-gray-800 truncate">
                Admin User
              </p>
              <p className="text-[11px] text-gray-400 truncate">admin@fooddash.com</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full mt-2 py-2 flex items-center justify-center gap-1.5 text-[12.5px] text-black hover:text-red-500 hover:bg-red-50/50 rounded-lg transition-colors"
          >
            <LogOut size={14} />
            Log out
          </button>
        </div>
      </div>
    </>
  );
}