import Footer from "./Footer/Footer"
import NavBar from "./NavBar" 
import Link from "next/link"
export default function Home() {

  return (

    <div>
      {/* First-Video */}
      <video className="relative" 
      autoPlay
      muted
      loop
      playsInline  src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/hero/w/loop_DT_1.mp4#t=0.001" controls></video>
      
      <NavBar />

        {/*  The Digital Edit */}

      <div className="text-white absolute w-full flex flex-col justify-center items-center gap-2 top-130">
        <h1 className="text-[10px]">THE DIGITAL EDIT</h1>
        <p className="text-[22px] font-semibold">Days of Summer</p>
        <p className="text-[12px]">FOR HER </p>
      </div>

        {/* White-Part */}
      <div className="bg-white h-40 flex flex-col justify-center items-center gap-6">
        <p className="text-black text-center text-[14px] ">Lightness and pure textures shape the essence of summer in the new <br /> Prada collection, with an online exclusive edit.</p>

        <div className="flex gap-5">
          <h1 className="text-black text-[14px] font-semibold">WOMEN <hr /></h1>
          <h1 className="text-black text-[14px] font-semibold">MEN <hr /> </h1>
        </div>
      </div>

      {/* Pictures Part */}

      <div className="flex justify-between">

        <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
        <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/01.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
        <p>Prada Buckle cutton and leather bag</p>
      </div>

      <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
        <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/02.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
        <p>Cotton boucle crop top</p>
      </div>
        
       <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
         <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/03.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
          <p>Raffia hat</p>
       </div>

        <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
          <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider/w/04.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
          <p>Leather sandals with floral ornament</p>
        </div>

      </div>
      
        {/* Pair 1 */}
      <div className="flex mt-10 bg-gray-50 h-180 justify-between items-center px-20">

        <Link
        href="/discover"
        >
        <div className="flex flex-col gap-4 text-[14px] justify-center ml-15 items-center">
          <img className="h-64 w-auto" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/06/may_issue/sunglasses_w/card_small_DT.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1680.1680.jpg" alt="" />
          <p className="text-[18px] font-semibold">Women's Sunglasses</p>
          <p className="text-[14px]">Bold Reflectiions</p>
          <h1 className="text-[13px] font-semibold">DISCOVER <hr /></h1>
        </div>
        </Link>
        <video className="h-150 w-auto" autoPlay
      muted
      loop
      playsInline src="https://www.prada.com/content/dam/pradaspa/home_page/2026/06/may_issue/sunglasses_w/loop_DT.mp4#t=0.001" controls ></video>
      </div>

      {/* Big-Video 3 */}

      <video className="relative"
       autoPlay
      muted
      loop
      playsInline src="https://www.prada.com/content/dam/pradaspa/home_page/2026/06/may_issue/new_in/w/loop_DT.mp4#t=0.001" controls></video>

        {/* White-Part 2 */}
      <div className="bg-white h-50 flex flex-col justify-center items-center gap-6">
        <p className="text-black text-center text-[14px] ">Essential volumes, natural materials and functional details define the new <br /> season, reinterpreting the codes of summer style.</p>

        <div className="flex gap-5">
          <h1 className="text-black text-[14px] font-semibold">WOMEN <hr /></h1>
          <h1 className="text-black text-[14px] font-semibold">MEN <hr /> </h1>
        </div>
      </div>


      <div className="flex h-125 justify-around gap-0.5">

        <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
        <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/route_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
        <p>Women's Bags</p>
      </div>

      <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
        <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/may_issue/products_days_of_summer/w/rtw_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
        <p>Women's Ready-to-Wear</p>
      </div>
        
       <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
         <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/may_issue/products_days_of_summer/w/shoes_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
          <p>Women's Shoes</p>
       </div>

        <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
          <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/slider_2/w_hat.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
          <p>Women's Accessories</p>
        </div>

      </div>

      {/* Big-Video 3 */}
      <div>
        <video className="relative"
      autoPlay
      muted
      loop
      playsInline src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/explore/loop_DT.mp4#t=0.001" controls></video>

        <div className="text-white  absolute w-full flex flex-col justify-center items-center gap-2 top-1020">
        <h1 className="text-[30px] font-semibold ">Prada Explore</h1>
        <p className="text-[13px] text-center">Bold elegance and utility in a versatile bag, with 3D pockets and interiors <br /> designed for every personal journey.</p>

        <div className="flex gap-6">
          <h1 className="text-[13px] font-semibold"><Link href="/ForHer">FOR HER</Link> <hr className="border" /> </h1>
          
            <h1 className="text-[13px] font-semibold"><Link href="/ForHim">FOR HIM</Link> <hr className="border" /> </h1>
        </div>
      </div>
      </div>

       {/* Bags Collections */}
      <div className="bg-white h-70 flex flex-col justify-center items-center gap-3 mt-6">
        <p className="text-[25px] font-semibold">Bag's Collections</p>
        <p className="text-black text-center text-[14px] ">From the bags that shaped Prada’s iconic vision to the newest designs, <br /> past and present come together in functional elegance with a deeply <br />
         modern spirit.</p>

        <div className="flex gap-5 mt-4">
          <h1 className="text-black text-[13px] font-semibold"> WOMEN <hr className="mt-2 border" /></h1> 
          <h1 className="text-black text-[13px] font-semibold">MEN <hr className="mt-2 border" /> </h1>
        </div>
      </div>


      {/* Array of Bags */}

      <div className="flex flex-col justify-between h-160 py-5 cursor-pointer gap-0.5">

        <div className="flex justify-between gap-0.5">
          <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
        <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/03/essentials_bags/slider/summer_bags_3.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
        <p className="mt-4">Prada Summer Bags</p>
      </div>

      <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
        <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/route_2.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
        <p className="mt-4">Prada Route</p>
      </div>
        
       <Link
       href="/products/1"
       >
       <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
         <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/galleria/bags/galleria.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
          <p className="mt-4">Prada Galleria</p>
       </div>
       </Link>

        <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
          <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/bags/bonnie_1.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />
          <p className="mt-4">Prada Bonnie</p>
        </div>
        </div>

            <div className="flex justify-center items-center">
              <hr  className="w-50 border" /><hr className="w-30 border border-gray-300" />
              </div>
      </div>

      {/* Pair 2 */}

      <div className="flex mt-10 bg-gray-50 h-180 justify-between items-center px-20">
        <video className="h-150 w-auto" autoPlay
      muted
      loop
      playsInline src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/sunglasses/m/loop_DT.mp4#t=0.001" controls ></video>

        <div className="flex flex-col gap-4 text-[14px] justify-center mr-20 items-center cursor-pointer">
          <img className="h-64 w-auto" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/sunglasses/m/editorial_DT.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1680.1680.jpg" alt="" />
          <p className="text-[18px] font-semibold">Men's Sunglasses</p>
          <p className="text-[14px]">New Geometric Shapes</p>
          <h1 className="text-[13px] font-semibold">DISCOVER <hr className="border" /></h1>
        </div>
      </div>

      {/* Black-Part Array */}

      <div className="flex flex-col items-center h-160 py-5  gap-0.5 bg-black">
        <p className="text-white text-[25px] font-semibold py-10">Pradasphere News</p>
        <div className="flex justify-between carousel gap-5 overflow-hidden">
         <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
          <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/pradasphere_component/fw_DT.jpg/_jcr_content/renditions/cq5dam.web.3360.3360.jpg" alt="" />
          <p className="text-white text-[14px] font-semibold mt-2">Pradasphere: Days of Summer</p>
         </div>
          
          <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
            <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/05/days_of_summer/pradasphere/pradasphere_DT.jpg/_jcr_content/renditions/cq5dam.web.3360.3360.jpg" alt="" />
            <p className="text-white text-[14px] font-semibold mt-2">Pradasphere: Days of Summer</p>
          </div>
          
          <div className="flex flex-col gap-4 text-[14px] font-semibold justify-center items-center">
            <img src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/pradasphere_component/frames_DT.jpg/_jcr_content/renditions/cq5dam.web.3360.3360.jpg" alt="" />
            <p className="text-white text-[14px] font-semibold mt-2">Pradasphere: Frames</p>
          </div>
     </div>

    </div>

      <Footer />
    </div>
  )}