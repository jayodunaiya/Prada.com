export default function NavBar() {
    return(
        <div className="sticky top-0 z-50">
             {/* Nav-Bar */}
      <div className="h-15 bg-white flex justify-between px-5 items-center sticky top-0 w-full">
        
        <div className="flex gap-5">
          <div className="flex gap-2 cursor-pointer">
        <img className="h-5 w-auto" src="https://img.icons8.com/?size=60&id=S5biqohaDgd1&format=png" alt="" />
        <p className="text-[14px] font-semibold text-black">Menu</p>
        </div>

        {/* <div>
           <img src="data:image/png;base64,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" alt="" />
        </div> */}

        <div className="flex gap-2 cursor-pointer">
        <img className="h-5 w-auto" src="https://img.icons8.com/tiny-bold/48/search.png" alt="" />
        <p className="text-[14px] font-semibold text-black">Search</p>
        </div>
        </div>
        
        <img src="C:\Users\PC\Downloads\prada-fashion-white-logo-hd-png-701751694773734yaaj1ubzl3-removebg-preview-removebg-preview.png" alt="" />
        <p className="text-black text-[14px] font-semibold">Contact us</p>
      </div>
        </div>
    )}