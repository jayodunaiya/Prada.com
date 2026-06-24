"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { Suspense } from "react";
import NavBar from "../NavBar";

// --- REAL FIX: Separate the core UI that consumes URL params ---
function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Extract parameters from your URL string securely
  const txRef = searchParams.get("tx_ref") || "N/A";
  const transactionId = searchParams.get("transaction_id") || "N/A";
  const status = searchParams.get("status") || "completed";

  return (
    <div className="max-w-md w-full text-center">
      {/* Animated/Minimalist Success Check Ring */}
      <div className="mx-auto w-16 h-16 bg-neutral-50 border border-neutral-200 rounded-full flex items-center justify-center mb-10">
        <Check size={20} strokeWidth={1.5} className="text-neutral-800" />
      </div>

      {/* Header Message */}
      <p className="uppercase tracking-[0.45em] text-[10px] text-neutral-400 mb-3">
        Transaction Authorized
      </p>
      <h1 className="text-3xl font-light tracking-wide mb-4">
        Thank You for Your Order
      </h1>
      <p className="text-sm text-neutral-500 font-light max-w-sm mx-auto leading-relaxed">
        Your payment has been cleared successfully. A digital confirmation
        containing your atelier production timeline has been sent to your mail.
      </p>

      {/* Dynamic Receipt Ledger Card */}
      <div className="mt-12 mb-12 border border-neutral-100 rounded-lg bg-neutral-50/50 p-6 text-left">
        <p className="uppercase tracking-[0.25em] text-[9px] font-semibold text-neutral-400 mb-5 border-b border-neutral-100 pb-2">
          Transaction Summary
        </p>

        <div className="space-y-4">
          <div className="flex justify-between items-baseline">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400">
              Gateway Status
            </span>
            <span className="text-xs uppercase tracking-wider font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              {status}
            </span>
          </div>

          <div className="flex justify-between items-baseline">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400">
              Order Reference
            </span>
            <span className="text-xs font-mono tracking-tight text-neutral-800 break-all select-all">
              {txRef}
            </span>
          </div>

          <div className="flex justify-between items-baseline">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400">
              System Transaction ID
            </span>
            <span className="text-xs font-mono tracking-tight text-neutral-800 select-all">
              #{transactionId}
            </span>
          </div>
        </div>
      </div>

      {/* Action Button Links */}
      <div className="space-y-3">
        <button
          onClick={() => router.push("/")}
          className="w-full bg-black text-white py-4 uppercase tracking-[0.35em] text-[10px] font-medium hover:bg-neutral-900 transition block text-center"
        >
          Continue Shopping
        </button>

        <Link
          href="/discover"
          className="w-full border border-neutral-200 bg-transparent text-black py-4 uppercase tracking-[0.35em] text-[10px] font-medium hover:border-black transition block text-center"
        >
          Explore Collections
        </Link>
      </div>

      {/* Global Support Footer Link */}
      <p className="mt-12 text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-light">
        Need Assistance?{" "}
        <Link
          href="/contact"
          className="text-black border-b border-black/30 hover:border-black transition pb-0.5"
        >
          Contact Atelier Services
        </Link>
      </p>
    </div>
  );
}

// --- MAIN EXPORT WRAPPED IN SUSPENSE FOR NEXT.JS BUILD COMPLIANCE ---
export default function PaymentSuccessPage() {
  return (
    <div>
      <NavBar />
      <main className="min-h-screen bg-white text-black font-sans antialiased flex items-center justify-center px-6 py-16 selection:bg-black selection:text-white">
        <Suspense
          fallback={
            <div className="text-center text-[10px] uppercase tracking-[0.35em] text-neutral-400">
              Verifying secure transmission...
            </div>
          }
        >
          <PaymentSuccessContent />
        </Suspense>
      </main>
    </div>
  );
}
