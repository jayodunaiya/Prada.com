export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 mt-12 md:mt-20">

      {/* Top Section */}
      {/* Changed from hardcoded grid-cols-5 to a responsive layout that scales down gracefully */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-16 px-6 sm:px-10 py-10 py-14">

        {/* Newsletter */}
        {/* Changed w-80 to max-w-sm lg:w-80 so it stretches naturally on mobile but caps on desktop */}
        <div className="w-full max-w-sm lg:w-80">
          <input
            type="email"
            placeholder="Insert your e-mail address*"
            className="w-full border-b border-black pb-3 outline-none text-[12px] placeholder:text-black"
          />

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <img className="w-4 h-4 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png" alt="" />
            <img className="w-4 h-4 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" alt="" />
            <img className="w-4 h-4 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/87/87390.png" alt="" />
            <img className="w-4 h-4 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="" />
            <img className="w-4 h-4 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/2111/2111685.png" alt="" />
            <img className="w-4 h-4 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/5968/5968898.png" alt="" />
            <img className="w-4 h-4 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/3046/3046120.png" alt="" />
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="uppercase tracking-wide text-[11px] font-medium">
            Contact Us
          </h3>

          <ul className="space-y-4 mt-6 md:mt-8 text-[12px]">
            <li className="cursor-pointer hover:underline">
              Call us 1-877-997-7232
            </li>
            <li className="cursor-pointer hover:underline">
              Write us on WhatsApp
            </li>
            <li className="cursor-pointer hover:underline">
              Contact us
            </li>
            <li className="cursor-pointer hover:underline">
              FAQ
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="uppercase tracking-wide text-[11px] font-medium">
            Services
          </h3>

          <ul className="space-y-4 mt-6 md:mt-8 text-[12px]">
            <li className="cursor-pointer hover:underline">
              Online and in-store services
            </li>
            <li className="cursor-pointer hover:underline">
              Track your order
            </li>
            <li className="cursor-pointer hover:underline">
              Returns
            </li>
            <li className="cursor-pointer hover:underline">
              Shipping and delivery
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="uppercase tracking-wide text-[11px] font-medium">
            Company
          </h3>

          <ul className="space-y-4 mt-6 md:mt-8 text-[12px]">
            <li className="cursor-pointer hover:underline">
              Fondazione Prada
            </li>
            <li className="cursor-pointer hover:underline">
              Prada Group
            </li>
            <li className="cursor-pointer hover:underline">
              Luna Rossa
            </li>
            <li className="cursor-pointer hover:underline">
              Sustainability
            </li>
            <li className="cursor-pointer hover:underline">
              Work with us
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="uppercase tracking-wide text-[11px] font-medium">
            Legal Terms and Conditions
          </h3>

          <ul className="space-y-4 mt-6 md:mt-8 text-[12px]">
            <li className="cursor-pointer hover:underline">
              Legal Notice
            </li>
            <li className="cursor-pointer hover:underline">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:underline">
              Cookie Policy
            </li>
            <li className="cursor-pointer hover:underline">
              Cookie Settings
            </li>
            <li className="cursor-pointer hover:underline">
              Sitemap
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Bottom Section */}
      {/* Changed flex-row to flex-col-reverse on mobile so copyright sits neatly below choices */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-0 px-6 sm:px-10 py-6">

        <p className="text-[11px] text-gray-600 text-center md:text-left">
          © PRADA 2007–2026 | VAT no. IT10115350158
        </p>

        {/* Changed links container to stack vertically on small devices or wrap evenly */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-14 text-[11px] font-medium text-center">

          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <img
              className="w-4 h-4"
              src="https://img.icons8.com/?size=100&id=3723&format=png"
              alt=""
            />
            <span>STORE LOCATOR</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <img
              className="w-4 h-4"
              src="https://img.icons8.com/?size=48&id=89777&format=png"
              alt=""
            />
            <span>SHIPPING TO: UNITED STATES / ENGLISH</span>
          </div>

        </div>

      </div>

    </footer>
  );
}