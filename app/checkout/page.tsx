// app/checkout/page.tsx

import Image from "next/image";
import CheckoutLayout from "../Checkoutlayout/page";

export default function CheckoutPage() {
  // Helper for Naira formatting
  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(amount);
  };

  return (
    <CheckoutLayout>
      <section className="max-w-[1450px] mx-auto px-6 lg:px-14 py-16">
        {/* Header */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.45em] text-[11px] text-neutral-400">
            Secure Checkout
          </p>
          <h1 className="mt-5 text-4xl md:text-5xl font-light tracking-wide">
            Complete your Order
          </h1>
          <div className="flex items-center gap-4 mt-8 text-[10px] uppercase tracking-[0.3em]">
            <span className="text-black">Bag</span>
            <div className="flex-1 h-px bg-neutral-300" />
            <span className="text-black font-semibold">Checkout</span>
            <div className="flex-1 h-px bg-neutral-300" />
            <span className="text-neutral-400">Confirmation</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          {/* LEFT: FORM */}
          <div className="lg:col-span-7">
            {/* CONTACT */}
            <div className="mb-16">
              <h2 className="uppercase tracking-[0.3em] text-[11px] font-semibold mb-8">Contact Information</h2>
              <div className="space-y-7">
                <input placeholder="Email Address" className="w-full border-b border-neutral-300 py-4 text-sm outline-none focus:border-black transition" />
                <input placeholder="Phone Number" className="w-full border-b border-neutral-300 py-4 text-sm outline-none focus:border-black transition" />
              </div>
            </div>

            {/* SHIPPING */}
            <div className="mb-16">
              <h2 className="uppercase tracking-[0.3em] text-[11px] font-semibold mb-8">Shipping Address</h2>
              <div className="space-y-7">
                <input placeholder="Full Name" className="w-full border-b border-neutral-300 py-4 outline-none focus:border-black transition" />
                <input placeholder="Street Address" className="w-full border-b border-neutral-300 py-4 outline-none focus:border-black transition" />
                <div className="grid md:grid-cols-2 gap-8">
                  <input placeholder="City" className="border-b border-neutral-300 py-4 outline-none focus:border-black transition" />
                  <input placeholder="Postal Code" className="border-b border-neutral-300 py-4 outline-none focus:border-black transition" />
                </div>
                <input placeholder="Country" className="w-full border-b border-neutral-300 py-4 outline-none focus:border-black transition" />
              </div>
            </div>

            {/* DELIVERY */}
            <div className="mb-16">
              <h2 className="uppercase tracking-[0.3em] text-[11px] font-semibold mb-8">Delivery Method</h2>
              <div className="space-y-5">
                <label className="flex justify-between border p-6 cursor-pointer hover:border-black transition">
                  <div>
                    <p className="uppercase tracking-[0.25em] text-[10px] font-semibold">Complimentary Delivery</p>
                    <p className="text-sm text-neutral-500 mt-2">3–5 Business Days</p>
                  </div>
                  <input type="radio" name="delivery" defaultChecked />
                </label>
                <label className="flex justify-between border p-6 cursor-pointer hover:border-black transition">
                  <div>
                    <p className="uppercase tracking-[0.25em] text-[10px] font-semibold">Express Delivery</p>
                    <p className="text-sm text-neutral-500 mt-2">Next Business Day</p>
                  </div>
                  <span className="font-medium">{formatNaira(35000)}</span>
                </label>
              </div>
            </div>

            {/* PAYMENT */}
            <div>
              <h2 className="uppercase tracking-[0.3em] text-[11px] font-semibold mb-8">Payment</h2>
              <div className="border p-8 bg-neutral-50">
                <p className="uppercase tracking-[0.3em] text-[10px] text-neutral-500 mb-8">Secure Card Payment</p>
                <input placeholder="Card Number" className="w-full border-b py-4 mb-6 outline-none bg-transparent" />
                <div className="grid grid-cols-2 gap-8">
                  <input placeholder="Expiry" className="border-b py-4 outline-none bg-transparent" />
                  <input placeholder="CVV" className="border-b py-4 outline-none bg-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: SUMMARY */}
          <aside className="lg:col-span-5">
            <div className="sticky top-28 rounded-xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
              <div className="relative h-[350px]">
                <Image
                  src="https://www.prada.com/content/dam/pradaspa/home_page/2026/03/essentials_bags/slider/summer_bags_3.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2400.2400.jpg"
                  alt="Prada Bag"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="uppercase tracking-[0.3em] text-[10px] text-neutral-400">Order Summary</p>
                <h3 className="text-2xl font-light mt-3">Prada Summer Bag</h3>
                <p className="mt-2 text-neutral-500">White Leather</p>
                <div className="border-t border-neutral-200 my-8"></div>
                
                <div className="space-y-5 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatNaira(3200000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>{formatNaira(0)}</span>
                  </div>
                </div>

                <div className="border-t border-black mt-8 pt-8 flex justify-between">
                  <span className="uppercase tracking-[0.3em] text-[10px] font-semibold">Total</span>
                  <span className="text-3xl font-light">{formatNaira(3200000)}</span>
                </div>

                <button className="w-full mt-10 bg-black text-white py-4 uppercase tracking-[0.35em] text-[11px] hover:bg-neutral-900 transition">
                  Complete Purchase
                </button>
                <p className="text-center mt-6 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                  Secure SSL Encrypted Checkout
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </CheckoutLayout>
  );
}