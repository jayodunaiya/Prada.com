import NavBar from "../NavBar";
import Footer from "../Footer/Footer";
import Link from "next/link";

export default function For_Him() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-neutral-200">
      {/* Nav-Bar */}
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

      {/* Category Icons Navigation Carousel */}
      <div className="w-full bg-white px-4 py-6 border-b border-gray-100 overflow-hidden">
        <div className="flex overflow-x-auto md:overflow-x-visible md:justify-center gap-4 md:gap-8 pb-3 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[
            { name: "Prada Explore", img: "explore_1.jpg" },
            { name: "Prada Soft Bags", img: "soft_bag_1.jpg" },
            { name: "Prada Bonnie", img: "bonnie_1.jpg" },
            { name: "Prada Brique", img: "brique_2.jpg" },
            { name: "Prada Re-Nylon", img: "backpacks_1.jpg" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col text-[11px] md:text-[12px] items-center flex-shrink-0 w-24 md:w-32 cursor-pointer group">
              <div className="overflow-hidden bg-neutral-50 rounded-xs">
                <img 
                  className="h-24 w-24 md:h-32 md:w-32 object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  src={`https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/${item.img}`} 
                  alt={item.name} 
                />
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
          src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/explore/hero/loop_DT.mp4#t=0.001" 
          controls
        />
      </div>

      {/* Editorial Content Section */}
      <div className="bg-white px-6 py-12 md:py-20 flex flex-col justify-center items-center gap-4 border-b border-gray-100">
        <h2 className="font-bold text-[20px] md:text-[24px] text-black tracking-widest uppercase">Prada Explore</h2>
        <p className="text-neutral-600 text-center text-[13px] md:text-[14px] leading-relaxed max-w-3xl font-light">
          Prada stands out for its continuous reinvention: a constant dialogue between archive and contemporaneity, where innovation and curiosity guide every creation. The Prada Explore bag collection reflects this dynamic vision, combining sophisticated aesthetics with a functional spirit.
        </p>
      </div>

      {/* Array of Bags 1 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 bg-white text-black font-bold border-b border-gray-200">
        {[
          { title: "Prada Explore leather shoulder bag", path: "2VH/2VH204/2HE8F0002/2VH204_2HE8_F0002_V_OOO_SLF.jpg" },
          { title: "Prada Explore leather bag", path: "2VH/2VH206/2HE8F0002/2VH206_2HE8_F0002_V_OOO_SLF.jpg" },
          { title: "Prada Explore medium nappa leather shoulder bag with flap", path: "2VH/2VH204/2HE8F0201/2VH204_2HE8_F0201_V_OOO_SLF.jpg" },
          { title: "Prada Explore leather bag", path: "2VH/2VH206/2HE8F0201/2VH206_2HE8_F0201_V_OOO_SLF.jpg" }
        ].map((prod, i) => (
          <Link
          href="/products/10"
          >
          <div key={i} className="flex flex-col text-[13px] md:text-[14px] p-3 md:p-6 border-b border-r border-neutral-100 last:border-r-0 lg:border-b-0 group cursor-pointer">
            <div className="overflow-hidden bg-neutral-50 mb-4">
              <img className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500" src={`https://www.prada.com/content/dam/pradabkg_products/2/${prod.path}/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg`} alt={prod.title} />
            </div>
            <p className="pl-1 font-medium tracking-wide leading-snug">{prod.title}</p>
          </div>
          </Link>
        ))}
      </div>

      {/* FIRST-PAIR Split Row */}
      <div className="flex flex-col md:flex-row justify-center items-stretch w-full bg-white border-b border-gray-200">
        <div className="w-full md:w-1/2 bg-neutral-50 flex flex-col justify-center items-center p-8 py-16 md:p-12 lg:p-24 text-center">
          <h3 className="text-black text-[18px] md:text-[20px] font-semibold tracking-widest uppercase">Utility Refined</h3>
          <p className="text-neutral-600 text-[13px] md:text-[14px] leading-relaxed pt-4 max-w-md font-light">
            Prada Explore men’s bags merge form and function through an essential yet distinctive design. Versatile models conceived for a style in motion, balancing elegance and experimentation. Designed to accompany every journey, the Explore line blends an urban soul with an outdoor attitude.
          </p>
        </div>
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
          <img className="w-full h-full object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/explore/card_1/card_DT.jpg" alt="Utility Refined Showcase" />
        </div>
            </div>
  
      {/* Array of Bags-2 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 bg-white text-black font-semibold border-b border-gray-200">
        {[
          { title: "Prada Explore leather backpack", path: "2VZ/2VZ118/2HE8F0201/2VZ118_2HE8_F0201_V_OOO_SLF.jpg" },
          { title: "Prada Explore leather backpack", path: "2VZ/2VZ118/2HE8F0002/2VZ118_2HE8_F0002_V_OOO_SLF.jpg" },
          { title: "Prada Explore Re-Nylon and leather bag", path: "2VD/2VD082/2DW3F0002/2VD082_2DW3_F0002_V_OOO_SLF.jpg" },
          { title: "Prada Explore Re-Nylon and leather bag", path: "2VH/2VH204/2DW3F0002/2VH204_2DW3_F0002_V_OOO_SLF.jpg" }
        ].map((prod, i) => (
          <Link
          href="/products/10"
          >
          <div key={i} className="flex flex-col text-[13px] md:text-[14px] p-3 md:p-6 border-b border-r border-neutral-100 last:border-r-0 lg:border-b-0 group cursor-pointer">
            <div className="overflow-hidden bg-neutral-50 mb-4">
              <img className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500" src={`https://www.prada.com/content/dam/pradabkg_products/2/${prod.path}/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg`} alt={prod.title} />
            </div>
            <p className="pl-1 font-medium tracking-wide leading-snug">{prod.title}</p>
          </div>
          </Link>
        ))}
      </div>

      {/* SECOND-PAIR Image Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-white border-b border-gray-200">
        <div className="w-full aspect-[4/3] md:aspect-auto border-b md:border-b-0 md:border-r border-neutral-100">
          <img className="w-full h-full object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/explore/card_2/card_DT.jpg" alt="Campaign Context Aspect Left" />
        </div>
        <div className="w-full aspect-[4/3] md:aspect-auto">
          <img className="w-full h-full object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/explore/card_3/card_3_DT.jpg" alt="Campaign Context Aspect Right" />
        </div>
            </div>

      {/* Array of Bags-3 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 bg-white text-black font-semibold border-b border-gray-200">
        {[
          { title: "Prada Explore medium nappa leather shoulder bag with flap", path: "2VH/2VH206/2DW3F0D57/2VH206_2DW3_F0D57_V_OOO_SLF.jpg" },
          { title: "Prada Explore large Re-Nylon and leather bag", path: "2VZ/2VZ118/2DW3F0D57/2VZ118_2DW3_F0D57_V_OOO_SLF.jpg" },
          { title: "Prada Explore medium Re-Nylon shoulder bag with flap", path: "2VZ/2VZ118/2DW3F0002/2VZ118_2DW3_F0002_V_OOO_SLF.jpg" },
          { title: "Prada Explore large nappa leather bag", path: "2VZ/2VZ118/2DW3F0038/2VZ118_2DW3_F0038_V_OOO_SLF.jpg" }
        ].map((prod, i) => (
          <Link
          href="/products/10"
          >
          <div key={i} className="flex flex-col text-[13px] md:text-[14px] p-3 md:p-6 border-b border-r border-neutral-100 last:border-r-0 lg:border-b-0 group cursor-pointer">
            <div className="overflow-hidden bg-neutral-50 mb-4">
              <img className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500" src={`https://www.prada.com/content/dam/pradabkg_products/2/${prod.path}/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg`} alt={prod.title} />
            </div>
            <p className="pl-1 font-medium tracking-wide leading-snug">{prod.title}</p>
          </div>
          </Link>
        ))}
      </div>

      {/* Breadcrumbs Navigation UI */}
      <div className="bg-white py-10 flex justify-center items-center text-neutral-400 px-4 text-center text-[12px] md:text-[13px] tracking-widest uppercase">
        <p>
        
        <Link
        href="/"
        >
        <span className="hover:text-black hover:underline cursor-pointer transition-colors">Prada</span>    
        </Link>
                
          <span className="mx-2">/</span>
          <span className="hover:text-black hover:underline cursor-pointer transition-colors">Womens</span>
          <span className="mx-2">/</span>
          <span className="hover:text-black hover:underline cursor-pointer transition-colors">Essentials</span>
          <span className="mx-2">/</span>
          <span className="text-black font-semibold">Prada explore</span>
        </p>
      </div>
      
      <hr className="border-gray-200" />
      <Footer />
    </div>
  );
}