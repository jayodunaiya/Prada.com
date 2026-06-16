import NavBar from "../NavBar";
import Footer from "../Footer/Footer";
export default function For_Him() {
    return(

 <div>
   {/* Nav-Bar */}
    <NavBar/>
    <div className="h-84 bg-white">
      <div className="flex justify-between px-10 pt-15 z-50 sticky top-0">
        <p className="text-gray-400 text-[11px]">17 PRODUCTS</p>
        <p className="text-[11px] font-bold">FILTERS . SORT BY: SUGGESTED</p>
       </div>

      {/* Bags */}
        <div className="flex justify-center gap-0.5 w-full pt-18 text-black">
        
      <div className="flex flex-col text-[12px] justify-center items-center">
          <img className="h-32 w-32"  src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/explore_1.jpg" alt="" />
          <p className="mt-4 font-semibold">Prada Explore</p>
        </div>

      <div className="flex flex-col text-[12px] items-center">
        <img  className="h-32 w-32" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/soft_bag_1.jpg" alt="" />
        <p className="mt-4 font-semibold">Prada Soft Bags</p>
      </div>
        
       <div className="flex flex-col  text-[12px] items-center">
         <img className="h-32 w-32" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/bonnie_1.jpg" alt="" />
          <p className="mt-4 font-semibold">Prada Bonnie</p>
       </div>

        <div className="flex flex-col text-[12px] justify-center items-center">
          <img className="h-32 w-32" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/brique_2.jpg" alt="" />
          <p className="mt-4 font-semibold">Prada Brique</p>
        </div>

        <div className="flex flex-col text-[12px] justify-center items-center">
          <img className="h-32 w-32" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/backpacks_1.jpg" alt="" />
          <p className="mt-4 font-semibold text-center">Prada Re-Nylon </p>
        </div>
        </div>

                </div>

    {/* Big Video */}

    <video className="absolute " src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/explore/hero/loop_DT.mp4#t=0.001" autoPlay muted controls></video>

{/* White-Part */}
    <div className="bg-white h-50 flex flex-col justify-center items-center gap-3">
      <p className="font-bold text-[22px] text-black">Prada Explore</p>
        <p className="text-gray-600 text-center text-[14px] ">Prada stands out for its continuous reinvention: a constant dialogue between archive and contemporaneity, where <br /> innovation and curiosity guide every creation. The Prada Explore bag collection reflects this dynamic vision, combining <br /> sophisticated aesthetics with a functional spirit.</p>
      </div>

{/* Array of Bags */}
  <div className="flex justify-between h-130 bg-white gap-0.5 text-black font-bold">
          <div className="flex flex-col text-[15px]">
        <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH204/2HE8F0002/2VH204_2HE8_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
        <p className="pl-4 pt-2">Prada Explore leather shoulder bag</p>
      </div>

      <div className="flex flex-col text-[15px]">
        <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH206/2HE8F0002/2VH206_2HE8_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
        <p className="pl-4 pt-2">Prada Explore leather bag</p>
      </div>
        
       <div className="flex flex-col text-[15px]">
         <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH204/2HE8F0201/2VH204_2HE8_F0201_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
          <p className="pl-4 pt-2">Prada Explore medium nappa leather <br />shoulder bag with flap</p>
       </div>

        <div className="flex flex-col text-[15px]">
          <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH206/2HE8F0201/2VH206_2HE8_F0201_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
          <p className="pl-4 pt-2">Prada Explore leather bag</p>
        </div>
        </div>

  {/* FIRST-PAIR */}
      <div className="flex justify-center">
        <div className="h-150 w-160 bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-black text-center text-[18px] font-semibold">Utility Refined</p>
          <p className="text-gray-600 text-center text-[14px] pt-2">Prada Explore men’s bags merge form and <br /> function through an essential yet distinctive <br /> design. Versatile models conceived for a style <br /> in motion, balancing elegance and <br />experimentation. Designed to accompany <br /> every journey, the Explore line blends an urban <br /> soul with an outdoor attitude.</p>
      </div>

      <img className="h-150 w-160" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/explore/card_1/card_DT.jpg" alt="" />
      </div>
  
  {/* Array of Bags-2 */}
  <div className="flex justify-between h-130 text-black bg-white gap-0.5">
          <div className="flex flex-col text-[15px] font-semibold">
        <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VZ/2VZ118/2HE8F0201/2VZ118_2HE8_F0201_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
        <p className="pl-4 pt-2">Prada Explore leather backpack</p>
      </div>

      <div className="flex flex-col text-[15px] font-semibold">
        <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VZ/2VZ118/2HE8F0002/2VZ118_2HE8_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
        <p className="pl-4 pt-2">Prada Explore leather backpack</p>
      </div>
        
       <div className="flex flex-col text-[15px] font-semibold">
         <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VD/2VD082/2DW3F0002/2VD082_2DW3_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
          <p className="pl-4 pt-2">Prada Explore Re-Nylon and leather <br /> bag</p>
       </div>

        <div className="flex flex-col text-[15px] font-semibold">
          <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH204/2DW3F0002/2VH204_2DW3_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
          <p className="pl-4 pt-2">Prada Explore Re-Nylon and leather <br /> bag</p>
        </div>
        </div>

  {/* SECOND-PAIR */}
      <div className="flex justify-center">
      <img className="h-150 w-160" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/explore/card_2/card_DT.jpg" alt="" />

      {/* <div className="h-150 w-160 bg-gray-200 flex flex-col justify-center items-center">
          <p className="text-black text-center text-[15px] font-semibold">Functionality and Modernism</p>
          <p className="text-gray-600 text-center text-[10px] pt-2">A unique perspective — bold yet refined, <br /> experimental yet timeless.</p>
      </div> */}

      <img className="h-150 w-160" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/explore/card_3/card_3_DT.jpg" alt="" />
      </div>

  {/* Array of Bags-3 */}
  <div className="flex justify-between h-120 bg-white gap-0.5 text-black">
          <div className="flex flex-col text-[15px] font-semibold">
        <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH206/2DW3F0D57/2VH206_2DW3_F0D57_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
        <p className="pl-4 pt-2">Prada Explore medium nappa leather <br /> shoulder bag with flap</p>
      </div>

      <div className="flex flex-col text-[15px] font-semibold">
        <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VZ/2VZ118/2DW3F0D57/2VZ118_2DW3_F0D57_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
        <p className="pl-4 pt-2">Prada Explore large Re-Nylon and leather <br /> bag</p>
      </div>
        
       <div className="flex flex-col text-[15px] font-semibold">
         <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VZ/2VZ118/2DW3F0002/2VZ118_2DW3_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
          <p className="pl-4 pt-2">Prada Explore medium Re-Nylon shoulder bag with flap</p>
       </div>

        <div className="flex flex-col text-[15px] font-semibold">
          <img src="https://www.prada.com/content/dam/pradabkg_products/2/2VZ/2VZ118/2DW3F0038/2VZ118_2DW3_F0038_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />
          <p className="pl-4 pt-2">Prada Explore large nappa leather bag</p>
        </div>
        </div>

   {/* SHOW-MORE

      <div className="flex flex-col justify-between items-center h-85 bg-white py-10 text-black">
        <h1 className="text-[13px] font-semibold">SHOW MORE <hr /> </h1>
        <p className="text-center text-[14px]">The <span className="font-bold">Prada Explore Bag</span> captures a utilitarian essence, blending bold <br /> refinement with experimental yet timeless design. Its softly padded yet <br /> streamlined structure offers comfort and style, while practical 3D pockets and <br /> a spacious internal compartment provide functional versatility for your wallet <br /> and modern needs.</p>
      </div> */}
      <hr className="border-gray-300" />

      {/* Prada / Womens / Essentials / Prada explore */}

      <div className="bg-white h-20 flex justify-center items-center text-black">
        <p className="text-[14px] font-semibold"><span className="hover hover:underline cursor-pointer">Prada</span> / <span className="hover hover:underline cursor-pointer"> Womens</span> / <span className="hover hover:underline cursor-pointer">Essentials</span> / Prada explore</p>
      </div>
      <hr className="border-gray-300" />

      <Footer  />

        </div>
)}