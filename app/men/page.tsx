import NavBar from "../NavBar";
import Footer from "../Footer/Footer";
import Link from "next/link";

export default function For_Him() {
  // Cultural collection images
  const culturalImages = [
    "https://i.pinimg.com/736x/aa/f1/c0/aaf1c05bd23f2352e63168b4b8d6257d.jpg",
    "https://i.pinimg.com/webp/1200x/10/43/83/104383fe2fec4d5e217aedf7c607efd3.webp",
    "https://i.pinimg.com/736x/4d/8c/f7/4d8cf724064a12f7b8cb6f1c83da9892.jpg",
    "https://i.pinimg.com/1200x/74/27/15/7427154629d2c8607df3e836f0a78fd9.jpg",
    "https://i.pinimg.com/736x/ee/85/5f/ee855f0334e00954ce450935efbb55e9.jpg",
    "https://i.pinimg.com/webp/736x/64/db/36/64db369caa3f7eb6effcf4aa6258a4fa.webp"
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-neutral-200">
      <NavBar />
      
      {/* Filters Sticky Bar */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="flex justify-between items-center px-4 py-4 md:px-10 md:py-5">
          <p className="text-gray-400 text-[10px] md:text-[11px] tracking-widest">17 PRODUCTS</p>
          <p className="text-[10px] md:text-[11px] font-bold tracking-widest cursor-pointer hover:opacity-70 transition-opacity">
            FILTERS . SORT BY: SUGGESTED
          </p>
        </div>
      </div>

      {/* Category Carousel */}
      <div className="w-full bg-white px-4 py-6 border-b border-gray-100 overflow-hidden">
        <div className="flex overflow-x-auto md:justify-center gap-4 md:gap-8 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[
            { name: "Cultural Heritage", img: culturalImages[0] },
            { name: "Modern Roots", img: culturalImages[1] },
            { name: "Artisanal Craft", img: culturalImages[2] },
            { name: "Signature Style", img: culturalImages[3] },
            { name: "Timeless Pieces", img: culturalImages[4] },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col text-[11px] md:text-[12px] items-center flex-shrink-0 w-24 md:w-32 cursor-pointer group">
              <div className="overflow-hidden bg-neutral-50 rounded-xs">
                <img className="h-24 w-24 md:h-32 md:w-32 object-cover group-hover:scale-105 transition-transform duration-500" src={item.img} alt={item.name} />
              </div>
              <p className="mt-3 font-semibold text-center text-black tracking-wide">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Video Section */}
      <div className="w-full bg-neutral-900 aspect-video max-h-[75vh] overflow-hidden relative">
        <video 
          className="w-full h-full object-cover" 
          autoPlay
          muted
          loop
          playsInline 
          src="/Download.mp4" 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <h1 className="text-white text-3xl md:text-5xl font-light tracking-[0.2em] uppercase">Heritage in Motion</h1>
        </div>
      </div>

      {/* Editorial Content */}
      <div className="bg-white px-6 py-12 md:py-20 flex flex-col items-center gap-4 border-b border-gray-100">
        <h2 className="font-bold text-[20px] md:text-[24px] text-black tracking-widest uppercase">The Cultural Collection</h2>
        <p className="text-neutral-600 text-center text-[13px] md:text-[14px] leading-relaxed max-w-3xl font-light">
          A fusion of heritage and contemporary luxury. Our collection honors deep-rooted craftsmanship, reinvented for the modern individual who values culture as much as style.
        </p>
      </div>

      {/* Split Row */}
      <div className="flex flex-col md:flex-row justify-center items-stretch w-full bg-white border-b border-gray-200">
        <div className="w-full md:w-1/2 bg-neutral-50 flex flex-col justify-center items-center p-8 py-16 md:p-24 text-center">
          <h3 className="text-black text-[18px] md:text-[20px] font-semibold tracking-widest uppercase">Legacy Refined</h3>
          <p className="text-neutral-600 text-[13px] md:text-[14px] leading-relaxed pt-4 max-w-md font-light">
            Every thread tells a story. By blending artisanal techniques with modern silhouettes, we create pieces that are not just worn, but inherited.
          </p>
        </div>
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
          <img className="w-full h-full object-cover" src={culturalImages[2]} alt="Legacy Refined Showcase" />
        </div>
      </div>

      {/* Image Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-white border-b border-gray-200">
        <div className="w-full aspect-[4/3] md:aspect-auto border-b md:border-b-0 md:border-r border-neutral-100">
          <img className="w-full h-full object-cover" src={culturalImages[0]} alt="Showcase" />
        </div>
        <div className="w-full aspect-[4/3] md:aspect-auto">
          <img className="w-full h-full object-cover" src={culturalImages[3]} alt="Showcase" />
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white py-10 flex justify-center items-center text-neutral-400 px-4 text-center text-[12px] md:text-[13px] tracking-widest uppercase">
        <p>
          <Link href="/"><span className="hover:text-black hover:underline cursor-pointer transition-colors">Home</span></Link>
          <span className="mx-2">/</span>
          <span className="text-black font-semibold">Cultural Collection</span>
        </p>
      </div>
      
      <Footer />
    </div>
  );
}