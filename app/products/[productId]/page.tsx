// export default function ProductDetails({ params }: {
//     params: Promise<{ productId: string}>;
// }) {
//     const productId =
//     return <h1> Details about product</h1>
// }

import NavBar from "@/app/NavBar"
export default function ProductDetails(){
    return(
        <div>
            <NavBar/>

            <div className="flex justify-between pt-10">
                <div className="px-5">
                    <p className="text-[13px]">BAGS / Prada Galleria</p>
                    <p className="text-[11px]">₦198,000 </p>

                    <p className="text-[11px] text-gray-600 py-10">Fits true to size. Order your normal size. Follows <br /> standard US mens sizing. Size chart can be found <br /> in sizing drawer below.</p>

                    <div className="flex flex-col cursor-pointer">
                        <select className="w-60 h-10 border text-[12px] border-gray-300 border-r-0 border-l-0 font-bold" name="Product details" id="Product details">
                        <option value="small">Product Details</option>
                    </select>
                    

                    <select className="w-60 h-10 border text-[12px] border-gray-300 border-t-0 border-r-0 border-l-0 font-bold" name="Product details" id="Product details">
                        <option value="small">Sizing</option>
                    </select>

                    <select className="w-60 h-10 border text-[12px] border-gray-300 border-t-0 border-r-0 border-l-0 font-bold" name="Product details" id="Product details">
                        <option value="small">Delivery and Returns</option>
                    </select>
                    </div>
                </div>

                <img className="h-120 w-120" src="https://www.prada.com/content/dam/pradaspa/home_page/2026/04/galleria/bags/galleria.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg" alt="" />

                <div className="flex flex-col gap-4 px-10">
                    <p>Color: Navy</p>
                    <div className="flex gap-3">
                        <div className="w-12 h-12 bg-amber-950 hover:border"></div>
                        <div className="w-12 h-12 bg-blue-950 hover:border"></div>
                        <div className="w-12 h-12 bg-red-950 hover:border"></div>
                        <div className="w-12 h-12 bg-green-950 hover:border"></div>
                    </div>

                    <select className="w-60 h-10 border text-[14px] px-4 " name="" id="">
                        <option value="">Select Size</option>
                    </select>

                    <div className="flex justify-center items-center w-60 h-10 bg-black text-white text-[10px] cursor-pointer font-bold"><p>ADD TO BAG</p></div>

                </div>
            </div>
        </div>
    )
}