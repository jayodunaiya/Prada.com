import Footer from "./Footer/Footer"
import NavBar from "./NavBar" 
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased overflow-x-hidden selection:bg-neutral-200">
      
      {/* ================= HERO VIDEO BANNER ================= */}
      <div className="relative w-full h-[70vh] lg:h-screen bg-neutral-950 flex items-center justify-center">
        <video 
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" 
          autoPlay
          muted
          loop
          playsInline  
          src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/hero/w/loop_DT_1.mp4#t=0.001" 
        />
        
        {/* Monochromatic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10 mix-blend-multiply" />
        
        {/* Navigation Placement */}
        <div className="absolute top-0 left-0 w-full z-50">
          <NavBar />
        </div>

        {/* Hero Copy Deck */}
        <div className="relative z-10 text-white text-center flex flex-col justify-center items-center gap-3 px-4">
          <h1 className="text-[10px] tracking-[0.35em] uppercase font-medium text-neutral-200">THE DIGITAL EDIT</h1>
          <p className="text-2xl md:text-4xl font-extralight tracking-widest uppercase">Days of Summer</p>
          <Link href="/collections/days-of-summer" className="text-[9px] tracking-[0.4em] font-semibold text-neutral-300 border-b border-white/40 pb-0.5 uppercase cursor-pointer hover:text-white hover:border-white transition-colors duration-300">
            FOR HER
          </Link>
        </div>
      </div>

      {/* ================= EDITORIAL MESSAGE BLOCK 1 ================= */}
      <div className="bg-white py-16 lg:py-28 px-6 flex flex-col justify-center items-center gap-8">
        <p className="text-black text-center text-xs md:text-[13px] max-w-xl font-light tracking-wide leading-relaxed">
          Lightness and pure textures shape the essence of summer in the new Prada collection, featuring an online exclusive preview edit.
        </p>

        <div className="flex gap-12">
          <Link href="/women" className="text-black text-[11px] font-medium tracking-[0.25em] cursor-pointer group relative pb-1">
            WOMEN 
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
          <Link href="/men" className="text-black text-[11px] font-medium tracking-[0.25em] cursor-pointer group relative pb-1">
            MEN 
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </div>
      </div>

      {/* ================= EDITORIAL PRODUCT SELECTION GRID ================= */}
      <div className="px-4 lg:px-12 pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-10 lg:gap-x-2">
          
          {/* Item 1 */}
          <Link href="/category/buckle-cotton-leather-bag" className="flex flex-col gap-3 text-center group cursor-pointer">
            <div className="aspect-[1/1] bg-neutral-50 overflow-hidden relative">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/01.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Prada Bag" className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out" />
            </div>
            <p className="px-2 text-xs font-light tracking-wide text-neutral-800 transition-colors group-hover:text-black mt-1">Prada Buckle cotton and leather bag</p>
          </Link>

          {/* Item 2 */}
          <Link href="/category/cotton-boucle-crop-top" className="flex flex-col gap-3 text-center group cursor-pointer">
            <div className="aspect-[1/1] bg-neutral-50 overflow-hidden relative">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/02.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Crop Top" className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out" />
            </div>
            <p className="px-2 text-xs font-light tracking-wide text-neutral-800 transition-colors group-hover:text-black mt-1">Cotton boucle crop top</p>
          </Link>
          
          {/* Item 3 */}
          <Link href="/category/raffia-hat" className="flex flex-col gap-3 text-center group cursor-pointer">
            <div className="aspect-[1/1] bg-neutral-50 overflow-hidden relative">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/03.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Raffia Hat" className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out" />
            </div>
            <p className="px-2 text-xs font-light tracking-wide text-neutral-800 transition-colors group-hover:text-black mt-1">Raffia hat</p>
          </Link>

          {/* Item 4 */}
          <Link href="/category/leather-sandals-floral" className="flex flex-col gap-3 text-center group cursor-pointer">
            <div className="aspect-[1/1] bg-neutral-50 overflow-hidden relative">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/04.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Sandals" className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out" />
            </div>
            <p className="px-2 text-xs font-light tracking-wide text-neutral-800 transition-colors group-hover:text-black mt-1">Leather sandals with floral ornament</p>
          </Link>
        </div>
      </div>
        
      {/* ================= SPLIT RUNWAY EDITORIAL ROW 1 ================= */}
      <div className="bg-neutral-50 py-16 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 border-t border-b border-neutral-100">
        <Link href="/category/womens-sunglasses" className="w-full lg:w-1/2 group">
          <div className="flex flex-col gap-4 text-center items-center">
            <div className="w-full max-w-[420px] aspect-square overflow-hidden bg-white mb-2 shadow-xs">
              <img className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/06/may_issue/sunglasses_w/card_small_DT.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1680.1680.jpg" alt="Sunglasses Collection" />
            </div>
            <p className="text-lg font-light tracking-wide text-neutral-900 uppercase">Women's Sunglasses</p>
            <p className="text-xs text-neutral-500 tracking-widest font-light -mt-1 italic">Bold Reflections</p>
            <span className="text-[11px] font-medium tracking-[0.25em] border-b border-black pb-0.5 mt-3 group-hover:text-neutral-500 group-hover:border-neutral-300 transition-colors duration-300">DISCOVER</span>
          </div>
        </Link>
        <div className="w-full lg:w-1/2 aspect-video lg:aspect-[4/5] max-h-[600px] overflow-hidden bg-neutral-950">
          <video className="w-full h-full object-cover opacity-95" autoPlay muted loop playsInline src="https://www.prada.com/content/dam/pradaspa/home_page/2026/06/may_issue/sunglasses_w/loop_DT.mp4#t=0.001" />
        </div>
      </div>

      {/* ================= CINEMATIC LOOKBOOK COVER WIDESCREEN ================= */}
      <div className="w-full bg-neutral-950 relative aspect-[16/10] md:aspect-video max-h-[80vh] overflow-hidden">
        <video 
          className="w-full h-full object-cover mix-blend-screen" 
          autoPlay 
          muted 
          loop 
          playsInline 
          src="https://www.prada.com/content/dam/pradaspa/home_page/2026/06/may_issue/new_in/w/loop_DT.mp4#t=0.001" 
        />
      </div>

      {/* ================= EDITORIAL MESSAGE BLOCK 2 ================= */}
      <div className="bg-white py-16 lg:py-24 px-6 flex flex-col justify-center items-center gap-8">
        <p className="text-black text-center text-xs lg:text-[13px] max-w-xl font-light tracking-wide leading-relaxed">
          Essential volumes, natural elements and functional design markers define the new season, effortlessly reinterpreting classic summer styles.
        </p>
        <div className="flex gap-12">
          <Link href="/women" className="text-black text-[11px] font-medium tracking-[0.25em] cursor-pointer group relative pb-1">
            WOMEN<span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
          <Link href="/men" className="text-black text-[11px] font-medium tracking-[0.25em] cursor-pointer group relative pb-1">
            MEN<span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </div>
      </div>

      {/* ================= CATEGORY DIRECTORY COLLECTIONS GRID ================= */}
      <div className="px-4 lg:px-12 pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-10 lg:gap-x-2">
          
          <Link href="/category/womens-bags" className="flex flex-col gap-3 text-center group cursor-pointer">
            <div className="aspect-[1/1] overflow-hidden bg-neutral-50 relative">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/route_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Bags" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" />
            </div>
            <p className="text-xs font-light tracking-widest text-neutral-800 uppercase mt-1">Women's Bags</p>
          </Link>

          <Link href="/category/womens-ready-to-wear" className="flex flex-col gap-3 text-center group cursor-pointer">
            <div className="aspect-[1/1] overflow-hidden bg-neutral-50 relative">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/may_issue/products_days_of_summer/w/rtw_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Ready to wear" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" />
            </div>
            <p className="text-xs font-light tracking-widest text-neutral-800 uppercase mt-1">Women's Ready-to-Wear</p>
          </Link>

          <Link href="/category/womens-shoes" className="flex flex-col gap-3 text-center group cursor-pointer">
            <div className="aspect-[1/1] overflow-hidden bg-neutral-50 relative">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/may_issue/products_days_of_summer/w/shoes_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Shoes" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" />
            </div>
            <p className="text-xs font-light tracking-widest text-neutral-800 uppercase mt-1">Women's Shoes</p>
          </Link>

          <Link href="/category/womens-accessories" className="flex flex-col gap-3 text-center group cursor-pointer">
            <div className="aspect-[1/1] overflow-hidden bg-neutral-50 relative">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider_2/w_hat.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Accessories" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" />
            </div>
            <p className="text-xs font-light tracking-widest text-neutral-800 uppercase mt-1">Women's Accessories</p>
          </Link>
        </div>
      </div>

      {/* ================= PRADA EXPLORE FULL LANDSCAPE BANNER ================= */}
      <div className="relative lg:h-[85vh] bg-neutral-950 flex items-center justify-center overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover select-none"
          autoPlay
          muted
          loop
          playsInline 
          src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/explore/loop_DT.mp4#t=0.001" 
        />
        <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
        
        {/* Transparent Interactive Dashboard Container */}
        <div className="relative z-10 text-white text-center flex flex-col justify-center items-center gap-4 px-6 max-w-2xl">
          <h1 className="text-2xl lg:text-4xl font-extralight tracking-[0.25em] uppercase">Prada Explore</h1>
          <p className="text-xs text-neutral-200 font-light tracking-wide leading-relaxed max-w-md">
            Bold elegance paired seamlessly with utility in an architectural build, complete with curated spaces designed for contemporary movement.
          </p>

          <div className="flex gap-8 mt-4">
            <Link href="/women" className="text-[11px] font-medium tracking-[0.25em] border-b border-white/60 pb-1 hover:text-neutral-200 hover:border-white transition-all duration-300">
              FOR HER
            </Link>
            <Link href="/men" className="text-[11px] font-medium tracking-[0.25em] border-b border-white/60 pb-1 hover:text-neutral-200 hover:border-white transition-all duration-300">
              FOR HIM
            </Link>
          </div>
        </div>
      </div>

      {/* ================= BAG ARCHIVE HEADINGS ================= */}
      <div className="bg-white py-16 lg:py-24 px-6 flex flex-col justify-center items-center gap-4">
        <h2 className="text-xl lg:text-3xl font-extralight tracking-widest uppercase">Bag's Collections</h2>
        <p className="text-neutral-500 text-center text-xs lg:text-[13px] max-w-xl font-light tracking-wide leading-relaxed">
          From the historical contours that established our vision to tailored seasonal pieces, architectural integrity fuses seamlessly with modern function.
        </p>

        <div className="flex gap-8 mt-4">
          <Link href="/women/bags" className="text-black text-[11px] font-semibold tracking-widest cursor-pointer border-b border-black pb-0.5">WOMEN</Link> 
          <Link href="/men/bags" className="text-black text-[11px] font-semibold tracking-widest cursor-pointer border-b border-transparent hover:border-black pb-0.5 transition-colors duration-300">MEN</Link>
        </div>
      </div>

      {/* ================= BAG CATALOGUE CARDS MATRIX ================= */}
      <div className="px-4 lg:px-12 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-12 lg:gap-x-2">
          
          <Link href="/products/summer-bags" className="flex flex-col gap-2 text-center group cursor-pointer">
            <div className="aspect-[1/1] overflow-hidden bg-neutral-50">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/03/essentials_bags/slider/summer_bags_3.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Summer Bag" className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700" />
            </div>
            <p className="mt-3 text-xs font-light tracking-wide text-neutral-800">Prada Summer Bags</p>
          </Link>

          <Link href="/products/prada-route" className="flex flex-col gap-2 text-center group cursor-pointer">
            <div className="aspect-[1/1] overflow-hidden bg-neutral-50">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/route_2.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Prada Route" className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700" />
            </div>
            <p className="mt-3 text-xs font-light tracking-wide text-neutral-800">Prada Route</p>
          </Link>
            
          <Link href="/products/1" className="flex flex-col gap-2 text-center group">
            <div className="aspect-[1/1] overflow-hidden bg-neutral-50">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/galleria/bags/galleria.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Galleria Bag" className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700" />
            </div>
            <p className="mt-3 text-xs font-medium tracking-wide text-neutral-900 group-hover:text-neutral-500 transition-colors">Prada Galleria</p>
          </Link>

          <Link href="/products/prada-bonnie" className="flex flex-col gap-2 text-center group cursor-pointer">
            <div className="aspect-[1/1] overflow-hidden bg-neutral-50">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/bonnie_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="Prada Bonnie" className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700" />
            </div>
            <p className="mt-3 text-xs font-light tracking-wide text-neutral-800">Prada Bonnie</p>
          </Link>

        </div>

        {/* Minimal Editorial Page Brake Elements */}
        <div className="flex justify-center items-center mt-20 mb-4 opacity-60">
          <div className="w-16 h-[1px] bg-neutral-800"></div>
          <div className="w-12 h-[1px] bg-neutral-200"></div>
        </div>
      </div>

      {/* ================= SPLIT RUNWAY EDITORIAL ROW 2 ================= */}
      <div className="bg-neutral-50 py-16 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 border-t border-b border-neutral-100">
        <div className="w-full lg:w-1/2 aspect-video lg:aspect-[4/5] max-h-[600px] overflow-hidden bg-neutral-950 order-2 lg:order-1">
          <video className="w-full h-full object-cover opacity-95" autoPlay muted loop playsInline src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/sunglasses/m/loop_DT.mp4#t=0.001" />
        </div>

        <Link href="/category/mens-sunglasses" className="w-full lg:w-1/2 flex flex-col gap-4 text-center items-center order-1 lg:order-2 group cursor-pointer">
          <div className="w-full max-w-[420px] aspect-square overflow-hidden bg-white mb-2 shadow-xs">
            <img className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/sunglasses/m/editorial_DT.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1680.1680.jpg" alt="Men Sunglasses Collection" />
          </div>
          <p className="text-lg font-light tracking-wide text-neutral-900 uppercase">Men's Sunglasses</p>
          <p className="text-xs text-neutral-500 tracking-widest font-light -mt-1 italic">New Geometric Shapes</p>
          <span className="text-[11px] font-medium tracking-[0.25em] border-b border-black pb-0.5 mt-3 group-hover:text-neutral-500 group-hover:border-neutral-300 transition-colors duration-300">DISCOVER</span>
        </Link>
      </div>

      {/* ================= PRADASPHERE DIGEST MAGAZINE PANEL ================= */}
      <div className="flex flex-col items-center py-20 px-4 gap-12 bg-neutral-950 text-white">
        <h2 className="text-xl lg:text-3xl font-extralight tracking-[0.3em] uppercase">Pradasphere News</h2>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 max-w-6xl px-2 lg:px-0">
          
          <Link href="/pradasphere/days-of-summer-1" className="flex flex-col gap-4 text-center items-center group cursor-pointer">
            <div className="w-full aspect-[1/1] overflow-hidden bg-neutral-900">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/pradasphere_component/fw_DT.jpg/_jcr_content/renditions/cq5dam.web.3360.3360.jpg" alt="Magazine editorial" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-[1.01]" />
            </div>
            <p className="text-xs font-light tracking-widest text-neutral-300 uppercase mt-1 group-hover:text-white transition-colors">Pradasphere: Days of Summer</p>
          </Link>
          
          <Link href="/pradasphere/days-of-summer-2" className="flex flex-col gap-4 text-center items-center group cursor-pointer">
            <div className="w-full aspect-[1/1] overflow-hidden bg-neutral-900">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/pradasphere/pradasphere_DT.jpg/_jcr_content/renditions/cq5dam.web.3360.3360.jpg" alt="Magazine editorial 2" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-[1.01]" />
            </div>
            <p className="text-xs font-light tracking-widest text-neutral-300 uppercase mt-1 group-hover:text-white transition-colors">Pradasphere: Days of Summer</p>
          </Link>
          
          <Link href="/pradasphere/frames" className="flex flex-col gap-4 text-center items-center group cursor-pointer">
            <div className="w-full aspect-[1/1] overflow-hidden bg-neutral-900">
              <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/pradasphere_component/frames_DT.jpg/_jcr_content/renditions/cq5dam.web.3360.3360.jpg" alt="Magazine editorial 3" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-[1.01]" />
            </div>
            <p className="text-xs font-light tracking-widest text-neutral-300 uppercase mt-1 group-hover:text-white transition-colors">Pradasphere: Frames</p>
          </Link>

        </div>
      </div>

      <Footer />
    </div>
  )
}