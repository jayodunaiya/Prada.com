import NavBar from "../NavBar";
import Footer from "../Footer/Footer";

export default function Women_Sunglasses() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav-Bar */}
      <NavBar />
      <hr className="border-0.5 border-gray-300" />
      
      {/* Sticky Top Info Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="flex justify-between px-4 py-4 md:px-10 md:pt-5">
          <p className="text-gray-400 text-[10px] md:text-[11px]">101 PRODUCTS</p>
          <p className="text-[10px] md:text-[11px] font-bold tracking-wider">FILTERS . SORT BY: SUGGESTED</p>
        </div>
      </div>

      {/* Categories Horizontal Carousel / Grid */}
      <div className="w-full bg-white px-4 py-6 md:py-13">
        <div className="flex overflow-x-auto md:overflow-x-visible md:justify-center gap-4 md:gap-2 pb-4 md:pb-0 scrollbar-none">
          {[
            { name: "Sunglasses", img: "card.jpg" },
            { name: "Prada Soft Bags", img: "card_2.jpg" },
            { name: "Prada Bonnie", img: "card_3.jpg" },
            { name: "Prada Brique", img: "card_4.jpg" },
            { name: "Prada Re-Nylon", img: "card_5.jpg" },
            { name: "Prada Re-Nylon", img: "card_6.jpg" },
            { name: "Prada Re-Nylon", img: "card_7.jpg" },
            { name: "Prada Re-Nylon", img: "card_8.jpg" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col text-[11px] md:text-[12px] items-center flex-shrink-0 w-24 md:w-32">
              <img 
                className="h-24 w-24 md:h-32 md:w-32 hover:border cursor-pointer object-cover" 
                src={`https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/accessories/w/cross/${item.img}`} 
                alt={item.name} 
              />
              <p className="mt-3 font-semibold text-center text-black">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FIRST-PAIR Banner Section */}
      <div className="flex flex-col md:flex-row justify-center items-stretch w-full relative">
        <div className="w-full md:w-1/2">
          <img 
            className="w-full h-full object-cover" 
            src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/06/15_06/sunglasses_w/card_1_DT.jpg" 
            alt="Shifting Perspectives 1" 
          />
        </div>
        <div className="w-full md:w-1/2 relative flex items-center justify-center bg-gray-50 min-h-[300px] md:min-h-auto">
          <img 
            className="w-full h-full object-cover absolute inset-0 hidden md:block" 
            src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/06/15_06/sunglasses_w/card_2_DT.jpg" 
            alt="Shifting Perspectives 2" 
          />
          {/* Text Overlay container made relative on mobile / layout-bound on desktop */}
          <div className="relative md:absolute z-10 p-6 text-center md:text-right md:right-12 text-black md:bg-transparent bg-white/80 md:backdrop-blur-none backdrop-blur-sm m-4 md:m-0 max-w-sm md:max-w-none">
            <p className="font-bold text-[18px] md:text-[20px] uppercase tracking-wide">Shifting Perspectives</p>
            <p className="text-[13px] md:text-[14px] mt-2 font-light">
              The freedom to reinvent your perspective <br className="hidden md:inline" /> through new combinations.
            </p>
          </div>
        </div>
      </div>

      {/* Array of Bags 1 (Product Row) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 bg-white gap-0.5 text-black font-bold border-b border-gray-200">
        {[
          { title: "Prada Explore leather shoulder bag", img: "SPRD58/E21QFE71C/SPRD58_E21Q_FE71C_C_051_SLF.jpg" },
          { title: "Prada Explore leather bag", img: "SPRD58/E5AKFE81C/SPRD58_E5AK_FE81C_C_051_SLF.jpg" },
          { title: "Prada Explore medium nappa leather shoulder bag with flap", img: "SPRD50/E1BCFE50Q/SPRD50_E1BC_FE50Q_C_057_SLF.jpg" },
          { title: "Prada Explore leather bag", img: "SPRD50/EZVNFE70B/SPRD50_EZVN_FE70B_C_057_SLF.jpg" }
        ].map((prod, i) => (
          <div key={i} className="flex flex-col text-[11px] md:text-[12px] p-2 md:p-4 border-b lg:border-b-0 border-r border-gray-100 last:border-r-0">
            <img className="w-full h-auto object-cover" src={`https://www.prada.com/content/dam/pradabkg_products/S/SPR/${prod.img}/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg`} alt={prod.title} />
            <p className="mt-2 font-medium">{prod.title}</p>
          </div>
        ))}
      </div>

      {/* Array of Bags 2 (Split Products Grid & Highlight Video) */}
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        {/* LEFT - Products Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 order-2 lg:order-1">
          {[
            { title: "Prada Shadowplay sunglasses", img: "SPRD07/E27IFE80W/SPRD07_E27I_FE80W_C_053_SLF.jpg" },
            { title: "Prada Shadowplay sunglasses", img: "SPRD07/E20DFE50Q/SPRD07_E20D_FE50Q_C_053_SLF.jpg" },
            { title: "Prada Shadowplay sunglasses", img: "SPRD08/E20DFE70X/SPRD08_E20D_FE70X_C_U053_SLF.jpg" },
            { title: "Prada Shadowplay sunglasses", img: "SPRD08/E16KFE10X/SPRD08_E16K_FE10X_C_U053_SLF.jpg" }
          ].map((prod, i) => (
            <div key={i} className="border-r border-b border-gray-200 bg-white flex flex-col justify-between p-2">
              <img className="w-full aspect-square object-cover" src={`https://www.prada.com/content/dam/pradabkg_products/S/SPR/${prod.img}/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg`} alt={prod.title} />
              <p className="p-3 text-[11px] md:text-xs text-black font-medium">{prod.title}</p>
            </div>
          ))}
        </div>

        {/* RIGHT - Video Highlight */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto order-1 lg:order-2 relative">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/sunglasses_29/w/card_1/loop_DT.mp4#t=0.001"
          />
        </div>
      </div>

      {/* Repeated Product Blocks Container */}
      <div className="space-y-0.5 mt-4">
        {/* Array of Bags 3 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-white text-black font-bold">
          {[
            "SPRB15/S16KFE60K/SPRB15_S16K_FE60K_C_051_SLF.jpg",
            "SPRB15/E17NFE70R/SPRB15_E17N_FE70R_C_051_SLF.jpg",
            "SPRB15/E28IFE50W/SPRB15_E28I_FE50W_C_051_SLF.jpg",
            "SPRB15/F29CFE05Z/SPRB15_F29C_FE05Z_C_051_SLF.jpg"
          ].map((img, i) => (
            <div key={i} className="flex flex-col text-[11px] md:text-[12px] p-2 md:p-4 border-b border-r border-gray-100">
              <img className="w-full h-auto object-cover" src={`https://www.prada.com/content/dam/pradabkg_products/S/SPR/${img}/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg`} alt="" />
              <p className="mt-2 font-medium">Prada Sunglasses with the iconic metal plaque</p>
            </div>
          ))}
        </div>

        {/* Array of Bags 4 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-white text-black font-bold">
          {[
            "SPRD51/E7ABFE70W/SPRD51_E7AB_FE70W_C_055_SLF.jpg",
            "SPRD51/E5AKFE20I/SPRD51_E5AK_FE20I_C_055_SLF.jpg",
            "SPRD51/E1BCFE50Q/SPRD51_E1BC_FE50Q_C_055_SLF.jpg",
            "SPRD51/EZVNFE30X/SPRD51_EZVN_FE30X_C_055_SLF.jpg"
          ].map((img, i) => (
            <div key={i} className="flex flex-col text-[11px] md:text-[12px] p-2 md:p-4 border-b border-r border-gray-100">
              <img className="w-full h-auto object-cover" src={`https://www.prada.com/content/dam/pradabkg_products/S/SPR/${img}/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg`} alt="" />
              <p className="mt-2 font-medium">Sunglasses with Prada logo</p>
            </div>
          ))}
        </div>

        {/* Array of Bags 5, 6, 7 (Merged seamlessly into responsive structural layouts) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-white text-black font-bold">
          {[
            "SPRC05/E16KFE08Z/SPRC05_E16K_FE08Z_C_057_SLF.jpg",
            "SPRC05/E20DFE50Q/SPRC05_E20D_FE50Q_C_057_SLF.jpg",
            "SPRC05/E16KFE30X/SPRC05_E16K_FE30X_C_057_SLF.jpg",
            "SPRC05/S20DFE08N/SPRC05_S20D_FE08N_C_057_SLF.jpg",
            "SPRC05/E27IFE70X/SPRC05_E27I_FE70X_C_057_SLF.jpg",
            "SPRC05/E24GFE70T/SPRC05_E24G_FE70T_C_057_SLF.jpg",
            "SPRC05/E25OFE04N/SPRC05_E25O_FE04N_C_057_SLF.jpg",
            "SPRC05/E23GFE70G/SPRC05_E23G_FE70G_C_057_SLF.jpg",
            "SPRC05/E17KFE20S/SPRC05_E17K_FE20S_C_057_SLF.jpg",
            "SPRD08/E25PFE21C/SPRD08_E25P_FE21C_C_U053_SLF.jpg",
            "SPRD08/E25OFE04N/SPRD08_E25O_FE04N_C_U053_SLF.jpg",
            "SPRD56/S1BCFE10W/SPRD56_S1BC_FE10W_C_055_SLF.jpg",
            "SPRD56/E1BCFE50Q/SPRD56_E1BC_FE50Q_C_055_SLF.jpg",
            "SPRD03/E16KFE08Z/SPRD03_E16K_FE08Z_C_D051_SLF.jpg",
            "SPRD03/E25BFE50L/SPRD03_E25B_FE50L_C_D051_SLF.jpg",
            "SPRD03/E26JFE70G/SPRD03_E26J_FE70G_C_D051_SLF.jpg",
            "SPRD04/E05KFE50Q/SPRD04_E05K_FE50Q_C_U053_SLF.jpg",
            "SPRD04/E16KFE08Z/SPRD04_E16K_FE08Z_C_U053_SLF.jpg",
            "SPRD04/E27IFE80W/SPRD04_E27I_FE80W_C_U053_SLF.jpg",
          ].map((img, i) => (
            <div key={i} className="flex flex-col text-[11px] md:text-[12px] p-2 md:p-4 border-b border-r border-gray-100">
              <img className="w-full h-auto object-cover" src={`https://www.prada.com/content/dam/pradabkg_products/S/SPR/${img}/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg`} alt="" />
              <p className="mt-2 font-medium">Prada Luxury Collection Eyewear</p>
            </div>
          ))}
          {/* Final distinct product inside block definition */}
          <div className="flex flex-col text-[11px] md:text-[12px] p-2 md:p-4 border-b border-r border-gray-100">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRD05/E17NFE50W/SPRD05_E17N_FE50W_C_052_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="mt-2 font-medium">Prada Sunglasses with the iconic metal plaque</p>
          </div>
        </div>
      </div>

      {/* Show More Action Call */}
      <div className="flex justify-center items-center font-bold text-black text-[13px] md:text-[14px] py-10 md:py-16">
        <button className="hover:text-gray-600 transition-colors uppercase tracking-widest border-b border-black pb-1">
          Show More
        </button>
      </div>

      {/* Bottom Hero Campaign Banner Container */}
      <div className="relative w-full overflow-hidden min-h-[400px] md:min-h-0 aspect-[4/3] md:aspect-[21/9] flex items-center justify-center">
        <img 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/digital_resort/mosaic/w/mosaic_dt.jpg" 
          alt="Days of Summer" 
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Ambient darkening overlay for contrast */}
        <div className="relative z-10 text-white flex flex-col justify-center items-center gap-3 px-6 text-center">
          <h2 className="text-[20px] md:text-[26px] font-semibold tracking-wide uppercase">Days of Summer</h2>
          <p className="text-[12px] md:text-[14px] font-light max-w-md leading-relaxed">
            The energy of the summer season captured in an online exclusive selection.
          </p>
          <button className="text-[12px] md:text-[14px] font-bold tracking-widest border-b border-white pt-2 pb-0.5 hover:text-gray-200 transition-colors">
            DISCOVER
          </button>
        </div>
      </div>

      {/* Editorial Descriptive Text Block */}
      <div className="flex bg-white px-6 py-12 md:py-20 justify-center items-center border-b border-gray-200">
        <p className="text-center text-[13px] md:text-[14px] text-gray-700 leading-relaxed max-w-3xl">
          Prada women's sunglasses feature a wide range of frames and colors, ranging 
          from refined black round and classic square styles to dramatic oversized 
          silhouettes and sleek, contemporary rectangular designs.
        </p>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white py-6 md:py-8 flex justify-center items-center text-black px-4 text-center">
        <p className="text-[12px] md:text-[14px] tracking-wide text-gray-500">
          <span className="hover:underline cursor-pointer text-black">Prada</span> /{" "}
          <span className="hover:underline cursor-pointer text-black">Womens</span> /{" "}
          <span className="hover:underline cursor-pointer text-black">Accessories</span> /{" "}
          <span className="text-gray-400 font-medium">Sunglasses</span>
        </p>
      </div>
      
      <hr className="border-gray-200" />
      <Footer />
    </div>
  );
}