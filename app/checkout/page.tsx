// app/checkout/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import CheckoutLayout from "../Checkoutlayout/page";
import { useCartStore } from "@/app/store/useCartStore";

export default function CheckoutPage() {
  const { cartItems, getSubtotal } = useCartStore();
  const subtotal = getSubtotal();

  // Shipping Method Cost
  const [shippingCost, setShippingCost] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    fullName: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper for Naira formatting
  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  const total = subtotal + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.fullName) {
      alert("Please fill in your Contact and Shipping details.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setIsSubmitting(true);
    const tx_ref = `PRADA-${Date.now()}`;

    const payload = {
      tx_ref,
      amount: total,
      currency: "NGN",
      redirect_url: `${window.location.origin}/payment-success`,
      customer: {
        email: formData.email,
        phonenumber: formData.phoneNumber,
        name: formData.fullName,
      },
      customizations: {
        title: "Checkout",
        description: `Purchase of ${cartItems.map((i) => `${i.name} (x${i.quantity})`).join(", ")}`,
      },
    };

    try {
      const response = await fetch("/api/flutterwave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.status === "success" && data.data?.link) {
        window.location.href = data.data.link;
      } else {
        alert("Payment initialization failed. Please try again.");
      }
    } catch (error) {
      console.error("Flutterwave error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CheckoutLayout>
      <form
        onSubmit={handleSubmit}
        className="max-w-[1450px] mx-auto px-6 lg:px-14 py-16"
      >
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
          {/* LEFT: FORM INPUTS */}
          <div className="lg:col-span-7">
            {/* CONTACT */}
            <div className="mb-16">
              <h2 className="uppercase tracking-[0.3em] text-[11px] font-semibold mb-8">
                Contact Information
              </h2>
              <div className="space-y-7">
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full border-b border-neutral-300 py-4 text-sm outline-none focus:border-black transition bg-transparent"
                />
                <input
                  required
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full border-b border-neutral-300 py-4 text-sm outline-none focus:border-black transition bg-transparent"
                />
              </div>
            </div>

            {/* SHIPPING */}
            <div className="mb-16">
              <h2 className="uppercase tracking-[0.3em] text-[11px] font-semibold mb-8">
                Shipping Address
              </h2>
              <div className="space-y-7">
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full border-b border-neutral-300 py-4 outline-none focus:border-black transition bg-transparent"
                />
                <input
                  required
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  placeholder="Street Address"
                  className="w-full border-b border-neutral-300 py-4 outline-none focus:border-black transition bg-transparent"
                />
                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    required
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="border-b border-neutral-300 py-4 outline-none focus:border-black transition bg-transparent"
                  />
                  <input
                    required
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="Postal Code"
                    className="border-b border-neutral-300 py-4 outline-none focus:border-black transition bg-transparent"
                  />
                </div>
                <input
                  required
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className="w-full border-b border-neutral-300 py-4 outline-none focus:border-black transition bg-transparent"
                />
              </div>
            </div>

            {/* DELIVERY */}
            <div className="mb-16">
              <h2 className="uppercase tracking-[0.3em] text-[11px] font-semibold mb-8">
                Delivery Method
              </h2>
              <div className="space-y-5">
                <label className="flex justify-between items-center border p-6 cursor-pointer hover:border-black transition">
                  <div>
                    <p className="uppercase tracking-[0.25em] text-[10px] font-semibold">
                      Complimentary Delivery
                    </p>
                    <p className="text-sm text-neutral-500 mt-2">
                      3–5 Business Days
                    </p>
                  </div>
                  <input
                    type="radio"
                    name="delivery"
                    checked={shippingCost === 0}
                    onChange={() => setShippingCost(0)}
                  />
                </label>
                <label className="flex justify-between items-center border p-6 cursor-pointer hover:border-black transition">
                  <div>
                    <p className="uppercase tracking-[0.25em] text-[10px] font-semibold">
                      Express Delivery
                    </p>
                    <p className="text-sm text-neutral-500 mt-2">
                      Next Business Day
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-sm">
                      {formatNaira(35000)}
                    </span>
                    <input
                      type="radio"
                      name="delivery"
                      checked={shippingCost === 35000}
                      onChange={() => setShippingCost(35000)}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT: DYNAMIC SUMMARY CARD */}
          <aside className="lg:col-span-5">
            <div className="sticky top-28 rounded-xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
              {cartItems.length > 0 ? (
                <>
                  {/* UPDATED STATIC IMAGE */}
                  <div className="relative h-[260px] bg-neutral-100">
                    <img
                      src="https://i.pinimg.com/736x/ee/85/5f/ee855f0334e00954ce450935efbb55e9.jpg"
                      alt="Checkout"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <span className="text-white font-light tracking-[0.4em] uppercase text-sm">
                        Secure Checkout
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="uppercase tracking-[0.3em] text-[10px] text-neutral-400">
                      Order Summary
                    </p>
                    <h3 className="text-xl font-light mt-3">
                      {cartItems[0].name}{" "}
                      {cartItems.length > 1 && `+ ${cartItems.length - 1} more`}
                    </h3>

                    <div className="max-h-[160px] overflow-y-auto mt-4 space-y-2 border-b pb-4 border-neutral-100">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between text-xs text-neutral-500"
                        >
                          <span>
                            {item.name} (x{item.quantity})
                          </span>
                          <span>{formatNaira(item.price * item.quantity)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4 text-sm mt-6">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formatNaira(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>
                          {shippingCost === 0
                            ? "Free"
                            : formatNaira(shippingCost)}
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-black mt-6 pt-6 flex justify-between items-center">
                      <span className="uppercase tracking-[0.3em] text-[10px] font-semibold">
                        Total
                      </span>
                      <span className="text-2xl font-light">
                        {formatNaira(total)}
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-8 bg-black text-white py-4 uppercase tracking-[0.35em] text-[11px] hover:bg-neutral-900 transition disabled:bg-neutral-400"
                    >
                      {isSubmitting ? "Processing..." : "Complete Purchase"}
                    </button>
                  </div>
                </>
              ) : (
                <div className="p-12 text-center text-neutral-400 text-sm">
                  Your cart is empty. Return to store to select items.
                </div>
              )}
            </div>
          </aside>
        </div>
      </form>
    </CheckoutLayout>
  );
}
