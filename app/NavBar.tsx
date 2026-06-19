"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
// Imported useRouter and usePathname hooks from Next.js navigation systems
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname(); // Tracks current route layout localization
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Conditional logic to hide back navigation layout on the root/home page screen matrix
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Primary Global Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-[99] w-full bg-white border-b border-neutral-100 text-black font-sans antialiased selection:bg-black selection:text-white">
        <nav className="relative flex items-center justify-between h-14 md:h-16 px-4 sm:px-6 lg:px-8 max-w-[1800px] mx-auto">
          
          {/* Left Controls: Balanced Left Anchor */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-1 justify-start">
            
            {/* --- BACK NAVIGATION ACTION BUTTON --- */}
            {!isHomePage && (
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 cursor-pointer group bg-transparent border-none p-0 outline-none mr-2"
                aria-label="Navigate back to previous premium collection page"
              >
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium hidden md:inline-block">
                  Back
                </span>
                {/* Visual dividing pip lines */}
                <span className="text-neutral-200 hidden md:inline-block font-extralight ml-1">/</span>
              </button>
            )}

            {/* Menu Trigger */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group bg-transparent border-none p-0 outline-none"
              aria-label="Open global navigation menu"
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black transition-transform duration-300 group-hover:scale-x-110">
                <path d="M0 1H16" stroke="currentColor" strokeWidth="1.2" />
                <path d="M0 6H16" stroke="currentColor" strokeWidth="1.2" />
                <path d="M0 11H16" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium hidden sm:inline-block">
                Menu
              </span>
            </button>

            {/* Search Trigger */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group bg-transparent border-none p-0 outline-none"
              aria-label="Open search engine"
            >
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black transition-transform duration-300 group-hover:scale-110">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium hidden sm:inline-block">
                Search
              </span>
            </button>
          </div>

          {/* Center Brand Identity (Pinned Dynamically at Absolute Middle) */}
          <div className="flex items-center justify-center shrink-0 mx-4">
            <Link href="/" className="flex items-center justify-center group" aria-label="Home">
              <div className="relative w-24 sm:w-28 md:w-36 h-8 sm:h-10 flex items-center justify-center text-black transition-opacity duration-300 group-hover:opacity-70">
                <Image 
                  src="/download.png" 
                  alt="Logo" 
                  fill 
                  className="object-contain"
                  priority 
                />
              </div>
            </Link>
          </div>

          {/* Right Controls: Balanced Right Anchor */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-12 flex-1 justify-end">
            
            {/* Desktop-Only Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 border-r border-neutral-100 pr-8">
              <Link href="/women" className="text-[10px] uppercase tracking-[0.25em] font-medium text-black hover:text-neutral-500 transition-colors">
                WOMEN
              </Link>
              <Link href="/men" className="text-[10px] uppercase tracking-[0.25em] font-medium text-black hover:text-neutral-500 transition-colors">
                MEN
              </Link>
              <Link href="/discover" className="text-[10px] uppercase tracking-[0.25em] font-medium text-black hover:text-neutral-500 transition-colors">
                DISCOVER
              </Link>
            </div>
            
            {/* Contact Support Trigger Button */}
            <button 
              onClick={() => setIsContactOpen(true)}
              className="text-[10px] uppercase tracking-[0.25em] font-medium text-black hover:text-neutral-500 transition-colors cursor-pointer bg-transparent border-none p-0 outline-none"
            >
              <span className="hidden sm:inline">Contact Us</span>
              <span className="inline sm:hidden" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
            </button>
          </div>

        </nav>
      </header>

      {/* Mandatory Layout Buffer Block */}
      <div className="h-14 md:h-16 w-full" aria-hidden="true" />

      {/* --- SIDE DRAWER 1: LEFT-HAND INTERACTIVE MENU --- */}
      <div className={`fixed inset-0 z-[999] transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"}`}>
        <div onClick={() => setIsMenuOpen(false)} className="absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity duration-300" />
        <aside className={`absolute left-0 top-0 h-full w-full max-w-[100vw] sm:max-w-md bg-white p-6 sm:p-8 flex flex-col justify-between transition-transform duration-500 ease-out transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div>
            <div className="flex justify-end mb-8 sm:mb-12">
              <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-black transition bg-transparent border-none p-0 outline-none">
                <span className="text-[9px] uppercase tracking-widest font-semibold">Close</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.2"/></svg>
              </button>
            </div>
            <nav className="space-y-5 sm:space-y-6">
              {["New In", "Category", "Women", "Men", "Discover"].map((category) => (
                <Link 
                  key={category} 
                  href={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-xs sm:text-sm uppercase tracking-[0.25em] font-light text-black hover:translate-x-2 transition-transform duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t border-neutral-100 pt-6 text-[9px] tracking-widest text-neutral-400 uppercase font-light">
            Milan Atelier Services
          </div>
        </aside>
      </div>

      {/* --- PANEL INTERACTIVE 2: TOP-DOWN SEARCH INTERACTIVE --- */}
      <div className={`fixed inset-0 z-[999] transition-all duration-300 ${isSearchOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"}`}>
        <div onClick={() => setIsSearchOpen(false)} className="absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-300" />
        <div className={`absolute top-0 left-0 w-full bg-white px-4 sm:px-8 py-8 sm:py-12 transition-transform duration-500 ease-out transform ${isSearchOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between border-b border-black pb-3">
              <div className="flex items-center gap-3 sm:gap-4 flex-1">
                <svg width="14" height="14" viewBox="0 0 15 15" fill="none" className="text-black"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.2"/></svg>
                <input 
                  type="text" 
                  placeholder="SEARCH CURRENT COLLECTIONS..." 
                  className="w-full bg-transparent border-none outline-none text-[11px] uppercase tracking-[0.2em] text-black placeholder-neutral-400"
                />
              </div>
              <button onClick={() => setIsSearchOpen(false)} className="cursor-pointer text-neutral-400 hover:text-black transition bg-transparent border-none p-0 outline-none">
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5"/></svg>
              </button>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-3">Trending Searches</p>
                <div className="space-y-2 text-[10px] sm:text-[11px] uppercase tracking-wider text-black">
                  <Link href="/products/1" onClick={() => setIsSearchOpen(false)} className="block cursor-pointer hover:text-neutral-500">Prada Galleria Bag</Link>
                  <Link href="/Men_Sunglasses" onClick={() => setIsSearchOpen(false)} className="block cursor-pointer hover:text-neutral-500">Men&apos;s Sunglasses</Link>
                </div>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-3">Quick Suggestions</p>
                <div className="space-y-2 text-[10px] sm:text-[11px] uppercase tracking-wider text-black">
                  <Link href="/women" onClick={() => setIsSearchOpen(false)} className="block cursor-pointer hover:text-neutral-500">WOMEN</Link>
                  <Link href="/men" onClick={() => setIsSearchOpen(false)} className="block cursor-pointer hover:text-neutral-500">MEN</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SIDE DRAWER 3: RIGHT-HAND CLIENT ASSISTANCE PANEL --- */}
      <div className={`fixed inset-0 z-[999] transition-all duration-300 ${isContactOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"}`}>
        <div onClick={() => setIsContactOpen(false)} className="absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity duration-300" />
        <aside className={`absolute right-0 top-0 h-full w-full max-w-[100vw] sm:max-w-md bg-white p-6 sm:p-8 flex flex-col justify-between transition-transform duration-500 ease-out transform ${isContactOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div>
            <div className="flex justify-between items-center mb-8 sm:mb-12 pb-4 border-b border-neutral-100">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-black">Client Assistance</span>
              <button onClick={() => setIsContactOpen(false)} className="flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-black transition bg-transparent border-none p-0 outline-none">
                <span className="text-[9px] uppercase tracking-widest font-semibold">Close</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.2"/></svg>
              </button>
            </div>
            <div className="space-y-8 sm:space-y-10">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-2">Call Concierge</p>
                <a href="tel:+2347062757429" className="block text-xs sm:text-sm font-light tracking-wide text-black hover:text-neutral-500 transition-colors">
                  +234 706 275 7429
                </a>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-2">Digital Correspondence</p>
                <a href="mailto:client.service@brand.com" className="text-xs sm:text-sm font-light tracking-wide text-black border-b border-black inline-block pb-0.5 hover:text-neutral-500 hover:border-neutral-300 transition-all">
                  Prada@gmail.com
                </a>
              </div>
              <div>
                <button className="w-full py-3 border border-black text-center text-[10px] uppercase tracking-[0.25em] font-medium bg-black text-white hover:bg-neutral-900 transition-colors cursor-pointer rounded-none">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-100 pt-6 text-[9px] tracking-widest text-neutral-400 uppercase font-light">
            Global Relations · Excellence Certified
          </div>
        </aside>
      </div>
    </>
  );
}