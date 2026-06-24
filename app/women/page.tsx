import NavBar from "../NavBar";
import Footer from "../Footer/Footer";
import Link from "next/link";

export default function For_Her() {
  return (
    <div>
      {/* Nav-Bar */}
      <NavBar />
      <div className="bg-white">
        <div className="flex justify-between px-4 sm:px-10 pt-15 z-50 sticky top-0 bg-white/90 backdrop-blur-sm">
          <p className="text-gray-400 text-[11px]">32 PRODUCTS</p>
          <p className="text-[11px] font-bold">FILTERS . SORT BY: SUGGESTED</p>
        </div>

        {/* Bags Categories Horizontal Scroll on Mobile */}
        <div className="overflow-x-auto w-full pt-18 px-4 sm:px-10 text-black">
          <div className="flex justify-start md:justify-center gap-6 md:gap-0.5 min-w-max md:min-w-0">
            
            
            <div className="flex flex-col text-[12px] justify-center items-center">
              <img className="h-32 w-32 object-cover" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/03/essentials_bags/slider/summer_bags_3.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
              <p className="mt-4 font-semibold">Prada Summer Bags</p>
            </div>
            

            <div className="flex flex-col text-[12px] items-center">
              <img className="h-32 w-32 object-cover" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/route_2.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
              <p className="mt-4 font-semibold">Prada Route</p>
            </div>
              
            <div className="flex flex-col text-[12px] items-center">
              <img className="h-32 w-32 object-cover" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/galleria/bags/galleria.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
              <p className="mt-4 font-semibold">Prada Galleria</p>
            </div>

            <div className="flex flex-col text-[12px] justify-center items-center">
              <img className="h-32 w-32 object-cover" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/bonnie_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
              <p className="mt-4 font-semibold">Prada Bonnie</p>
            </div>

            <div className="flex flex-col text-[12px] justify-center items-center">
              <img className="h-32 w-32 object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/02/SS26_II/essential_bags/cross/EU/explore.jpg" alt="" />
              <p className="mt-4 font-semibold">Prada Explore</p>
            </div>

            <div className="flex flex-col text-[12px] justify-center items-center">
              <img className="h-32 w-32 object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/02/SS26_II/essential_bags/cross/EU/edition.jpg" alt="" />
              <p className="mt-4 font-semibold">Prada Re-Edition</p>
            </div>

          </div>
        </div>
      </div>

      {/* Big Video */}
      <div className="w-full h-auto">
        <video 
          autoPlay
          muted
          loop
          playsInline 
          className="w-full h-full object-cover"
          src="/14742441_1080_1920_30fps.mp4" 
          controls
        />
      </div>

      {/* White-Part Description */}
      <div className="bg-white min-h-[200px] py-10 px-4 flex flex-col justify-center items-center gap-3">
        <p className="font-bold text-[22px] text-black">Prada Explore</p>
        <p className="text-gray-600 text-center text-[14px] max-w-3xl leading-relaxed">
          The Prada Explore bag reimagines a versatile silhouette with updated details that subtly renew its character while preserving its refined, utilitarian essence - bold yet refined, experimental yet timeless.
        </p>
      </div>

      {/* Array of Bags 1 */}
      <Link
      href="/products/15"
      >
      
      <div className="px-4 md:px-0 bg-white">
        <div className="grid grid-cols-2 md:flex md:justify-between min-h-max md:h-130 gap-y-8 gap-x-2 md:gap-0.5 text-black font-bold">
          <div className="flex flex-col text-[14px] md:text-[15px]">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/2DX8F0K74/1BD394_2DX8_F0K74_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="pl-2 md:pl-4 pt-2">Prada Explore medium nappa leather shoulder bag with flap</p>
          </div>

          <div className="flex flex-col text-[14px] md:text-[15px]">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/2DX8F0K74/1BC264_2DX8_F0K74_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="pl-2 md:pl-4 pt-2">Prada Explore large nappa leather bag</p>
          </div>
            
          <div className="flex flex-col text-[14px] md:text-[15px]">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/2DX8F0036/1BD394_2DX8_F0036_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="pl-2 md:pl-4 pt-2">Prada Explore medium nappa leather shoulder bag with flap</p>
          </div>

          <div className="flex flex-col text-[14px] md:text-[15px]">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/2DX8F0036/1BC264_2DX8_F0036_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="pl-2 md:pl-4 pt-2">Prada Explore large nappa leather bag</p>
          </div>
        </div>
      </div>
      </Link>

      {/* FIRST-PAIR Split Banner */}
      <div className="flex flex-col md:flex-row justify-center items-stretch w-full">
        <div className="h-80 md:h-150 w-full md:w-1/2 bg-gray-200 flex flex-col justify-center items-center p-6">
          <p className="text-black text-center text-[15px] font-semibold">A Continuous Exploration of Style</p>
          <p className="text-gray-600 text-center text-[10px] pt-2">True to its name, Explore bag is a trusted companion for both urban and outdoor journeys.</p>
        </div>
        <div className="h-auto w-full md:w-1/2">
          <img className="h-full w-full object-cover max-h-[400px] md:max-h-[600px]" src="https://i.pinimg.com/736x/1d/95/ef/1d95efaed13bd137fe9c7ac2d13036a4.jpg" alt="" />
        </div>
      </div>
  
      {/* Array of Bags-2 */}
      <Link
      href="/products/12"
      >
      <div className="px-4 md:px-0 bg-white">
        <div className="grid grid-cols-2 md:flex md:justify-between min-h-max md:h-130 text-black bg-white gap-y-8 gap-x-2 md:gap-0.5">
          <div className="flex flex-col text-[14px] md:text-[15px] font-semibold">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/RDLNF0040/1BD394_RDLN_F0040_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="pl-2 md:pl-4 pt-2">Prada Explore medium Re-Nylon shoulder bag with flap</p>
          </div>

          <div className="flex flex-col text-[14px] md:text-[15px] font-semibold">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/RDLNF0040/1BC264_RDLN_F0040_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="pl-2 md:pl-4 pt-2">Prada Explore large nappa leather bag</p>
          </div>
            
          <div className="flex flex-col text-[14px] md:text-[15px] font-semibold">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/2DX8F03BH/1BD394_2DX8_F03BH_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="pl-2 md:pl-4 pt-2">Prada Explore medium nappa leather shoulder bag with flap</p>
          </div>

          <div className="flex flex-col text-[14px] md:text-[15px] font-semibold">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/2DX8F03BH/1BC264_2DX8_F03BH_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="pl-2 md:pl-4 pt-2">Prada Explore large nappa leather bag</p>
          </div>
        </div>
      </div>
      </Link>

      {/* SECOND-PAIR Split Banner */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-stretch w-full">
        <div className="h-auto w-full md:w-1/2">
          <img className="h-full w-full object-cover max-h-[400px] md:max-h-[600px]" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_woman/explore/card_2/card_DT.jpg" alt="" />
        </div>
        <div className="h-80 md:h-150 w-full md:w-1/2 bg-gray-200 flex flex-col justify-center items-center p-6">
          <p className="text-black text-center text-[15px] font-semibold">Functionality and Modernism</p>
          <p className="text-gray-600 text-center text-[10px] pt-2">A unique perspective — bold yet refined, experimental yet timeless.</p>
        </div>
      </div>

      {/* Array of Bags-3 */}
      <Link
      href="/products/10"
      >
      <div className="px-4 md:px-0 bg-white">
        <div className="grid grid-cols-2 md:flex md:justify-between min-h-max md:h-120 bg-white gap-y-8 gap-x-2 md:gap-0.5 text-black">
          <div className="flex flex-col text-[14px] md:text-[15px] font-semibold">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/2DX8F0D57/1BD394_2DX8_F0D57_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="pl-2 md:pl-4 pt-2">Prada Explore medium nappa leather shoulder bag with flap</p>
          </div>

          <div className="flex flex-col text-[14px] md:text-[15px] font-semibold">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/RDLNF0D57/1BC264_RDLN_F0D57_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="pl-2 md:pl-4 pt-2">Prada Explore large Re-Nylon and leather bag</p>
          </div>
            
          <div className="flex flex-col text-[14px] md:text-[15px] font-semibold">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/RDLNF0D57/1BD394_RDLN_F0D57_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="pl-2 md:pl-4 pt-2">Prada Explore medium Re-Nylon shoulder bag with flap</p>
          </div>

          <div className="flex flex-col text-[14px] md:text-[15px] font-semibold">
            <img className="w-full h-auto object-cover" src="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/2DX8F0D57/1BC264_2DX8_F0D57_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
            <p className="pl-2 md:pl-4 pt-2">Prada Explore large nappa leather bag</p>
          </div>
        </div>
      </div>
      </Link>

      {/* SHOW-MORE Description Footer Area */}
      <div className="flex flex-col justify-center items-center py-16 px-4 text-black bg-white">
        <h1 className="text-[13px] font-semibold mb-4">SHOW MORE</h1>
        <hr className="w-16 border-black mb-6" />
        <p className="text-center text-[14px] max-w-2xl leading-relaxed">
          The <span className="font-bold">Prada Explore Bag</span> captures a utilitarian essence, blending bold refinement with experimental yet timeless design. Its softly padded yet streamlined structure offers comfort and style, while practical 3D pockets and a spacious internal compartment provide functional versatility for your wallet and modern needs.
        </p>
      </div>
      <hr className="border-gray-300" />

      {/* Breadcrumbs Links */}
      <div className="bg-white py-8 px-4 flex justify-center items-center text-black">
        <p className="text-[14px] font-semibold text-center leading-loose">
          <span className="hover:underline cursor-pointer">Prada</span> /{" "}
          <span className="hover:underline cursor-pointer">Womens</span> /{" "}
          <span className="hover:underline cursor-pointer">Essentials</span> / Prada explore
        </p>
      </div>
      <hr className="border-gray-300" />

      <Footer />
    </div>
  );
}