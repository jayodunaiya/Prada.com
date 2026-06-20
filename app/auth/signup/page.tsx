"use client";

import NavBar from "@/app/NavBar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    // Registration logic goes here

    router.push("/auth/login");
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <div className="grid min-h-[calc(100vh-80px)] lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex items-center justify-center bg-neutral-100">
          <div className="max-w-md px-12">
            <p className="uppercase tracking-[0.35em] text-xs text-gray-500">
              Welcome
            </p>

            <h1 className="mt-6 text-6xl font-serif leading-tight text-black">
              Create
              <br />
              Your
              <br />
              Account
            </h1>

            <p className="mt-8 text-gray-600 leading-8">
              Discover a refined shopping experience with exclusive access,
              faster checkout, personalized recommendations, and your saved
              favourites.
            </p>

            <div className="mt-12 border-l border-black pl-6">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                Luxury Fashion
              </p>

              <p className="mt-2 text-2xl font-serif">
                Timeless Elegance.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-md">

            <div className="mb-12 text-center lg:text-left">
              <p className="uppercase tracking-[0.35em] text-xs text-gray-500">
                Sign Up
              </p>

              <h2 className="mt-4 text-4xl font-serif text-black">
                Create Account
              </h2>

              <p className="mt-3 text-gray-500">
                Enter your information below to begin.
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-8">

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-600 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-600 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-b border-gray-300 bg-transparent py-3 px-2 outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-600 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border-b border-gray-300 bg-transparent py-3 px-2 outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-600 mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-black transition"
                />
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-black"
                />

                <p className="leading-6">
                  I agree to the{" "}
                  <span className="underline cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="underline cursor-pointer">
                    Privacy Policy
                  </span>.
                </p>
              </div>

              <Link
              href="/"
              >

              <button
                type="submit"
                className="w-full bg-black text-white py-4 uppercase tracking-[0.3em] text-sm hover:bg-neutral-800 transition"
              >
                Create Account
              </button>
              </Link>

            </form>

            <div className="my-10 flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>

              {/* <span className="px-4 text-xs uppercase tracking-[0.25em] text-gray-400">
                or
              </span> */}

              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* <button className="w-full border border-black py-4 uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-white transition">
              Continue with Google
            </button> */}

            <p className="mt-10 text-center text-gray-500">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-black underline underline-offset-4"
              >
                Sign In
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}