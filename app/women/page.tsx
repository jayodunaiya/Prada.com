import NavBar from "../NavBar";
import Footer from "../Footer/Footer";
export default function For_Her() {
    return(

 <div>
   {/* Nav-Bar */}
    <NavBar/>
    <div className="h-84 bg-white">
      <div className="flex justify-between px-10 pt-15 z-50 sticky top-0">
        <p className="text-gray-400 text-[11px]">32 PRODUCTS</p>
        <p className="text-[11px] font-bold">FILTERS . SORT BY: SUGGESTED</p>
       </div>

      {/* Bags */}
        <div className="flex justify-center gap-0.5 w-full pt-18 text-black">
        
      <div className="flex flex-col text-[12px] justify-center items-center">
          <img className="h-32 w-32"  src="https://www.prada.com/content/dam/pradaspa/home_page/2026/03/essentials_bags/slider/summer_bags_3.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
          <p className="mt-4 font-semibold">Prada Summer Bags</p>
        </div>

      <div className="flex flex-col text-[12px] items-center">
        <img  className="h-32 w-32" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/route_2.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
        <p className="mt-4 font-semibold">Prada Route</p>
      </div>
        
       <div className="flex flex-col  text-[12px] items-center">
         <img className="h-32 w-32" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/galleria/bags/galleria.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
          <p className="mt-4 font-semibold">Prada Galleria</p>
       </div>

        <div className="flex flex-col text-[12px] justify-center items-center">
          <img className="h-32 w-32" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/bonnie_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
          <p className="mt-4 font-semibold">Prada Bonnie</p>
        </div>

        <div className="flex flex-col text-[12px] justify-center items-center">
          <img className="h-32 w-32" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/02/SS26_II/essential_bags/cross/EU/explore.jpg" alt="" />
          <p className="mt-4 font-semibold">Prada Explore</p>
        </div>

        <div className="flex flex-col text-[12px] justify-center items-center">
          <img className="h-32 w-32"  src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/02/SS26_II/essential_bags/cross/EU/edition.jpg" alt="" />
          <p className="mt-4 font-semibold">Prada Re-Edition</p>
                </div>
        </div>

                </div>

    {/* Big Video */}

    <video autoPlay
      muted
      loop
      playsInline src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_woman/explore/hero/loop_DT.mp4#t=0.001" controls></video>

{/* White-Part */}
    <div className="bg-white h-50 flex flex-col justify-center items-center gap-3">
      <p className="font-bold text-[22px] text-black">Prada Explore</p>
        <p className="text-gray-600 text-center text-[14px] ">The Prada Explore bag reimagines a versatile silhouette with updated details that subtly renew its character while<br /> preserving its refined, utilitarian essence - bold yet refined, experimental yet timeless.</p>
      </div>

{/* Array of Bags */}
  <div className="flex justify-between h-130 bg-white gap-0.5 text-black font-bold">
          <div className="flex flex-col text-[15px]">
        <img src="https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/2DX8F0K74/1BD394_2DX8_F0K74_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
        <p className="pl-4 pt-2">Prada Explore medium nappa leather <br />shoulder bag with flap</p>
      </div>

      <div className="flex flex-col text-[15px]">
        <img src="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/2DX8F0K74/1BC264_2DX8_F0K74_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
        <p className="pl-4 pt-2">Prada Explore large nappa leather bag</p>
      </div>
        
       <div className="flex flex-col text-[15px]">
         <img src="https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/2DX8F0036/1BD394_2DX8_F0036_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
          <p className="pl-4 pt-2">Prada Explore medium nappa leather <br />shoulder bag with flap</p>
       </div>

        <div className="flex flex-col text-[15px]">
          <img src="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/2DX8F0036/1BC264_2DX8_F0036_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
          <p className="pl-4 pt-2">Prada Explore large nappa leather bag</p>
        </div>
        </div>

  {/* FIRST-PAIR */}
      <div className="flex justify-center">
        <div className="h-150 w-160 bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-black text-center text-[15px] font-semibold">A Continuous Exploration <br />of Style</p>
          <p className="text-gray-600 text-center text-[10px] pt-2">True to its name, Explore bag is a trusted <br /> companion for both urban and outdoor <br /> journeys.</p>
      </div>

      <img className="h-150 w-160" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_woman/explore/card_1/card_DT.jpg" alt="" />
      </div>
  
  {/* Array of Bags-2 */}
  <div className="flex justify-between h-130 text-black bg-white gap-0.5">
          <div className="flex flex-col text-[15px] font-semibold">
        <img src="https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/RDLNF0040/1BD394_RDLN_F0040_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
        <p className="pl-4 pt-2">Prada Explore medium Re-Nylon shoulder bag with flap</p>
      </div>

      <div className="flex flex-col text-[15px] font-semibold">
        <img src="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/RDLNF0040/1BC264_RDLN_F0040_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
        <p className="pl-4 pt-2">Prada Explore large nappa leather <br /> bag</p>
      </div>
        
       <div className="flex flex-col text-[15px] font-semibold">
         <img src="https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/2DX8F03BH/1BD394_2DX8_F03BH_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
          <p className="pl-4 pt-2">Prada Explore medium nappa leather <br />shoulder bag with flap</p>
       </div>

        <div className="flex flex-col text-[15px] font-semibold">
          <img src="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/2DX8F03BH/1BC264_2DX8_F03BH_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
          <p className="pl-4 pt-2">Prada Explore large nappa leather bag</p>
        </div>
        </div>

  {/* SECOND-PAIR */}
      <div className="flex justify-center">
      <img className="h-150 w-160" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_woman/explore/card_2/card_DT.jpg" alt="" />

      <div className="h-150 w-160 bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-black text-center text-[15px] font-semibold">Functionality and Modernism</p>
          <p className="text-gray-600 text-center text-[10px] pt-2">A unique perspective — bold yet refined, <br /> experimental yet timeless.</p>
      </div>
      </div>

  {/* Array of Bags-3 */}
  <div className="flex justify-between h-120 bg-white gap-0.5 text-black">
          <div className="flex flex-col text-[15px] font-semibold">
        <img src="https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/2DX8F0D57/1BD394_2DX8_F0D57_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
        <p className="pl-4 pt-2">Prada Explore medium nappa leather <br /> shoulder bag with flap</p>
      </div>

      <div className="flex flex-col text-[15px] font-semibold">
        <img src="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/RDLNF0D57/1BC264_RDLN_F0D57_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
        <p className="pl-4 pt-2">Prada Explore large Re-Nylon and leather <br /> bag</p>
      </div>
        
       <div className="flex flex-col text-[15px] font-semibold">
         <img src="https://www.prada.com/content/dam/pradabkg_products/1/1BD/1BD394/RDLNF0D57/1BD394_RDLN_F0D57_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
          <p className="pl-4 pt-2">Prada Explore medium Re-Nylon shoulder bag with flap</p>
       </div>

        <div className="flex flex-col text-[15px] font-semibold">
          <img src="https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC264/2DX8F0D57/1BC264_2DX8_F0D57_V_NOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
          <p className="pl-4 pt-2">Prada Explore large nappa leather bag</p>
        </div>
        </div>

   {/* SHOW-MORE */}

      <div className="flex flex-col justify-between items-center h-85 bg-white py-10 text-black">
        <h1 className="text-[13px] font-semibold">SHOW MORE <hr /> </h1>
        <p className="text-center text-[14px]">The <span className="font-bold">Prada Explore Bag</span> captures a utilitarian essence, blending bold <br /> refinement with experimental yet timeless design. Its softly padded yet <br /> streamlined structure offers comfort and style, while practical 3D pockets and <br /> a spacious internal compartment provide functional versatility for your wallet <br /> and modern needs.</p>
      </div>
      <hr className="border-gray-300" />

      {/* Prada / Womens / Essentials / Prada explore */}

      <div className="bg-white h-20 flex justify-center items-center text-black">
        <p className="text-[14px] font-semibold"><span className="hover hover:underline cursor-pointer">Prada</span> / <span className="hover hover:underline cursor-pointer"> Womens</span> / <span className="hover hover:underline cursor-pointer">Essentials</span> / Prada explore</p>
      </div>
      <hr className="border-gray-300" />

      <Footer  />

        </div>
)}