"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Primary Global Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-[99] w-full bg-white border-b border-neutral-100 text-black font-sans antialiased selection:bg-black selection:text-white">
        <nav className="relative flex items-center justify-between h-16 px-8 max-w-[1800px] mx-auto">
          
          {/* Left Controls: Menu & Search */}
          <div className="flex items-center gap-10">
            {/* Menu Trigger */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-3 cursor-pointer group bg-transparent border-none p-0 outline-none"
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black transition-transform duration-300 group-hover:scale-x-110">
                <path d="M0 1H16" stroke="currentColor" strokeWidth="1.2" />
                <path d="M0 6H16" stroke="currentColor" strokeWidth="1.2" />
                <path d="M0 11H16" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
                Menu
              </span>
            </button>

            {/* Search Trigger */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-3 cursor-pointer group bg-transparent border-none p-0 outline-none"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black transition-transform duration-300 group-hover:scale-110">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
                Search
              </span>
            </button>
          </div>

          {/* Center Brand Identity (Pure Inline SVG Vector Logo) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <Link href="/" className="flex items-center justify-center group" aria-label="PRADA Home">
              <div className="w-28 md:w-36 h-auto flex items-center justify-center text-black transition-opacity duration-300 group-hover:opacity-70">
                <svg 
                  viewBox="0 0 295 56" 
                  fill="currentColor" 
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M49.6 0H0v54.8h17.4V34.5h27.8c18.5 0 29.5-10.7 29.5-24.1C74.7 3.4 63.8 0 49.6 0zm-1.5 20.3H17.4V14.1h30.2c7.6 0 11.5 1.5 11.5 6.2 0 4.6-4.1 6-11 6zM116.8 0H79.8v54.8h17.4V35.4h15.2l17.7 19.4h22.6l-21.7-23.4c12.2-2.1 19.8-9.6 19.8-20C150.8 4 136.6 0 116.8 0zm-3.2 21.2H97.2V14.1h15.8c8.1 0 12 1.6 12 6.5s-3.9 6.1-11.4 6.1zM192.1 0l-28.5 54.8h18.5l6.3-12.8h30.8l6.1 12.8h18.8L215.8 0h-23.7zm1.1 27.8l9.4-19.4 9.6 19.4h-19zM294.6 0h-39.7v54.8h39.7c25 0 39.5-14.7 39.5-33.1S319.6 0px 294.6 0zm-2.4 40.7h-19.9V14.1h19.9c13.8 0 21.4 6.7 21.4 18.2.1 11.5-7.5 18.4-21.4 18.4z" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Right Controls: Help/Support Portal */}
          <div className="flex items-center gap-15">

            <div className="flex items-center gap-6">
              <Link
            href="/women"
            >
            <button
            className="text-[10px] uppercase tracking-[0.25em] font-medium text-black hover:text-neutral-500 transition-colors cursor-pointer bg-transparent border-none p-0 outline-none"
            >
              WOMEN
            </button>
            </Link>

            <Link
            href="/men"
            >
            <button
            className="text-[10px] font-bold uppercase tracking-[0.25em] font-medium text-black hover:text-neutral-500 transition-colors cursor-pointer bg-transparent border-none p-0 outline-none"
            >
              MEN
            </button>
            </Link>

            <Link
            href="/discover"
            >
            <button
            className="text-[10px] font-bold uppercase tracking-[0.25em] font-medium text-black hover:text-neutral-500 transition-colors cursor-pointer bg-transparent border-none p-0 outline-none"
            >
              DISCOVER
            </button>
            </Link>
            </div>
            
            <button 
              onClick={() => setIsContactOpen(true)}
              className="text-[10px] uppercase tracking-[0.25em] font-medium text-black hover:text-neutral-500 transition-colors cursor-pointer bg-transparent border-none p-0 outline-none"
            >
              Contact Us
            </button>

          </div>

        </nav>
      </header>

      {/* Mandatory Layout Buffer block to protect underneath body items */}
      <div className="h-16 w-full" aria-hidden="true" />

      {/* --- SIDE DRAWER 1: LEFT-HAND INTERACTIVE MENU --- */}
      <div className={`fixed inset-0 z-[999] transition-visibility duration-300 ${isMenuOpen ? "visible" : "invisible"}`}>
        <div 
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0"}`} 
        />
        
        <aside className={`absolute left-0 top-0 h-full w-full max-w-md bg-white p-8 flex flex-col justify-between transition-transform duration-500 ease-out transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div>
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-black transition bg-transparent border-none p-0 outline-none">
                <span className="text-[9px] uppercase tracking-widest font-semibold">Close</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.2"/></svg>
              </button>
            </div>

            <nav className="space-y-6">
              {["New In", "Women", "Men", "Discover",].map((category) => (
                <Link 
                  key={category} 
                  href={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-sm uppercase tracking-[0.25em] font-light text-black hover:translate-x-2 transition-transform duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
                
              ))}
            </nav>
          </div>

          <div className="border-t border-neutral-100 pt-6 text-[10px] tracking-widest text-neutral-400 uppercase font-light">
            Milan Atelier Services
          </div>
        </aside>
      </div>

      {/* --- PANEL INTERACTIVE 2: TOP-DOWN SEARCH INTERACTIVE --- */}
      <div className={`fixed inset-0 z-[999] transition-visibility duration-300 ${isSearchOpen ? "visible" : "invisible"}`}>
        <div 
          onClick={() => setIsSearchOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-500 ${isSearchOpen ? "opacity-100" : "opacity-0"}`} 
        />

        <div className={`absolute top-0 left-0 w-full bg-white px-8 py-12 transition-transform duration-500 ease-out transform ${isSearchOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="max-w-4xl mx-auto">
            
            <div className="flex items-center justify-between border-b border-black pb-3">
              <div className="flex items-center gap-4 flex-1">
                <svg width="14" height="14" viewBox="0 0 15 15" fill="none" className="text-black"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.2"/></svg>
                <input 
                  type="text" 
                  autoFocus={isSearchOpen}
                  placeholder="SEARCH CURRENT COLLECTIONS..." 
                  className="w-full bg-transparent border-none outline-none text-xs uppercase tracking-[0.2em] text-black placeholder-neutral-400"
                />
              </div>
              <button onClick={() => setIsSearchOpen(false)} className="cursor-pointer text-neutral-400 hover:text-black transition bg-transparent border-none p-0 outline-none">
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5"/></svg>
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-3">Trending Searches</p>
                <div className="space-y-2 text-[11px] uppercase tracking-wider text-black">
                  <Link
                  href="/products/1"
                  >
                  <p className="cursor-pointer hover:text-neutral-500">Prada Galleria Bag</p>
                  </Link>

                  <Link
                  href="/Men_Sunglasses"
                  >
                  <p className="cursor-pointer hover:text-neutral-500">Men's Sunglasses</p>
                  </Link>

                  <Link
                  href="/discover"
                  >
                  <p className="cursor-pointer hover:text-neutral-500">Women's Sunglasses</p>
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-3">Quick Suggestions</p>
                <div className="space-y-2 text-[11px] uppercase tracking-wider text-black">
                  <Link
                  href="/women"
                  >
                  <p className="cursor-pointer hover:text-neutral-500">WOMEN</p>
                  </Link>

                  <Link
                  href="/men"
                  >
                  <p className="cursor-pointer hover:text-neutral-500">MEN</p>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- SIDE DRAWER 3: RIGHT-HAND CLIENT ASSISTANCE PANEL --- */}
      <div className={`fixed inset-0 z-[999] transition-visibility duration-300 ${isContactOpen ? "visible" : "invisible"}`}>
        <div 
          onClick={() => setIsContactOpen(false)}
          className={`absolute inset-0 bg-black/30 backdrop-blur-xs transition-opacity duration-500 ${isContactOpen ? "opacity-100" : "opacity-0"}`} 
        />
        
        <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white p-8 flex flex-col justify-between transition-transform duration-500 ease-out transform ${isContactOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div>
            <div className="flex justify-between items-center mb-12 pb-4 border-b border-neutral-100">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-black">Client Assistance</span>
              <button onClick={() => setIsContactOpen(false)} className="flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-black transition bg-transparent border-none p-0 outline-none">
                <span className="text-[9px] uppercase tracking-widest font-semibold">Close</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.2"/></svg>
              </button>
            </div>

            <div className="space-y-10">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-2">Call Concierge</p>
                <a href="tel:+18779777232" className="block text-sm font-light tracking-wide text-black hover:text-neutral-500 transition-colors">
                  +234 706 275 7429
                </a>
                <p className="text-[10px] text-neutral-400 mt-1 font-light tracking-wide">Monday - Saturday: 9 AM - 10 PM EST</p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-2">Digital Correspondence</p>
                <a href="mailto:client.service@brand.com" className="block text-sm font-light tracking-wide text-black border-b border-black inline-block pb-0.5 hover:text-neutral-500 hover:border-neutral-300 transition-all">
                  client.service@brand.com
                </a>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-3">Immediate Support</p>
                <button className="w-full py-3 border border-black text-center text-[10px] uppercase tracking-[0.25em] font-medium bg-black text-white hover:bg-neutral-900 transition-colors cursor-pointer rounded-none">
                  Start Live Chat
                </button>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <p className="text-[9px] uppercase tracking-[0.25em] font-semibold text-neutral-400 mb-2">Corporate Framework</p>
                <p className="text-xs font-light text-neutral-600 tracking-wide leading-relaxed">
                  For corporate affairs, brand heritage inquiries, or press media validation kits, reach out directly to our Milan headquarters.
                </p>
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