"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutGrid,
  ShoppingBag,
  FileText,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  {
    href: "/Admin/dashboard",
    label: "Dashboard",
    icon: LayoutGrid,
    color: "text-sky-300",
    bg: "bg-sky-400/10",
  },
  {
    href: "/Admin/products",
    label: "Products",
    icon: ShoppingBag,
    color: "text-emerald-300",
    bg: "bg-emerald-400/10",
  },
  {
    href: "/Admin/orders",
    label: "Orders",
    icon: FileText,
    badge: 12,
    color: "text-amber-300",
    bg: "bg-amber-400/10",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-[100] h-16 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6">
        <div className="relative w-28 h-7">
          <Image
            src="/download.png"
            alt="Logo"
            fill
            priority
            className="object-contain invert"
          />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:opacity-70 transition"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0
          w-72
          bg-[#0A0A0A]
          border-r border-white/5
          flex flex-col
          z-50

          transition-all
          duration-500
          ease-[cubic-bezier(.22,1,.36,1)]

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }

          md:sticky md:top-0
        `}
      >
        {/* Logo */}
        <div className="px-8 pt-10 pb-8 border-b border-white/5">
          <div className="relative w-36 h-10">
            <Image
              src="/download.png"
              alt="Logo"
              fill
              priority
              className="object-contain invert opacity-90"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-5 py-8">
          <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-600 mb-6 px-2">
            Navigation
          </p>

          <nav className="space-y-3">
            {navItems.map(
              ({
                href,
                label,
                icon: Icon,
                badge,
                color,
                bg,
              }) => {
                const active =
                  pathname === href ||
                  pathname.startsWith(`${href}/`);

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      relative
                      flex
                      items-center
                      gap-4
                      px-4
                      py-3.5
                      rounded-2xl
                      border
                      transition-all
                      duration-300
                      group

                      ${
                        active
                          ? "bg-gradient-to-r from-white/[0.08] to-white/[0.03] border-white/10"
                          : "border-transparent hover:bg-white/[0.03] hover:border-white/5 hover:translate-x-1"
                      }
                    `}
                  >
                    {/* Active Indicator */}
                    <div
                      className={`
                        absolute
                        left-0
                        top-3
                        bottom-3
                        w-[3px]
                        rounded-full
                        transition-all

                        ${
                          active
                            ? "bg-white"
                            : "bg-transparent"
                        }
                      `}
                    />

                    {/* Icon */}
                    <div
                      className={`
                        w-11
                        h-11
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        transition-all

                        ${
                          active
                            ? `${bg}`
                            : "bg-white/[0.03] group-hover:bg-white/[0.05]"
                        }
                      `}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.75}
                        className={
                          active
                            ? color
                            : "text-neutral-500 group-hover:text-white"
                        }
                      />
                    </div>

                    {/* Label */}
                    <span
                      className={`
                        flex-1
                        text-sm
                        tracking-wide
                        font-light

                        ${
                          active
                            ? "text-white"
                            : "text-neutral-400 group-hover:text-white"
                        }
                      `}
                    >
                      {label}
                    </span>

                    {/* Badge */}
                    {badge && (
                      <span
                        className={`
                          min-w-7
                          h-7
                          rounded-full
                          flex
                          items-center
                          justify-center
                          text-[11px]
                          font-medium

                          ${
                            active
                              ? "bg-white text-black"
                              : "bg-white/5 text-neutral-300"
                          }
                        `}
                      >
                        {badge}
                      </span>
                    )}
                  </Link>
                );
              }
            )}
          </nav>
        </div>

        {/* Admin Card */}
        <div className="px-6 py-5 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold">
              A
            </div>

            <div>
              <h3 className="text-white text-sm font-medium">
                Administrator
              </h3>

              <p className="text-xs text-neutral-500">
                Luxury Store Manager
              </p>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="p-6">
          <button
            onClick={() => router.push("/auth/login")}
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              py-3.5
              flex
              items-center
              justify-center
              gap-3
              text-sm
              font-light
              tracking-wide
              text-neutral-300
              hover:bg-red-500/10
              hover:border-red-500/20
              hover:text-red-300
              transition-all
              duration-300
            "
          >
            <LogOut size={17} strokeWidth={1.6} />
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
}