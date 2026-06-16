"use client";

import NavBar from "@/app/NavBar";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/api/api";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        email,
        password,
      });

      const token = response.data.access_token;

      localStorage.setItem("token", token);

      router.push("/admin/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left Image */}
        <div className="hidden lg:block relative">
          <img
            src="data:image/png;base64,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"
            alt="Luxury fashion"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10"></div>

          <div className="absolute bottom-25 left-16 text-white max-w-md">
            <p className="uppercase tracking-[0.4em] text-xs mb-4">
              New Collection
            </p>

            <h1 className="text-6xl font-serif leading-tight">
              Modern
              <br />
              Elegance
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-8">
              Discover timeless pieces crafted with exceptional attention to
              detail and refined simplicity.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center px-8 py-20">
          <div className="w-full max-w-md">

            <div className="mb-14">
              <p className="uppercase tracking-[0.35em] text-xs text-gray-500">
                Welcome Back
              </p>

              <h2 className="mt-4 text-5xl font-serif text-black">
                Sign In
              </h2>

              <p className="mt-5 text-gray-500 leading-7">
                Sign in to your account to continue shopping and manage your
                orders.
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              className="space-y-8"
            >
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-black outline-none focus:border-black transition"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs text-black hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border-b border-gray-300 bg-transparent py-3 text-black outline-none focus:border-black transition"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-3 text-gray-600">
                  <input
                    type="checkbox"
                    className="accent-black"
                  />
                  Keep me signed in
                </label>
              </div>

              <Link
               href="/Admin"
              >

              <button
                type="submit"
                className="w-full bg-black text-white py-4 uppercase tracking-[0.3em] text-sm hover:bg-neutral-800 transition duration-300 cursor-pointer"
              >
                Sign In
              </button>
              </Link>
            </form>

            <div className="my-10 flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>

              <span className="px-5 text-xs uppercase tracking-[0.3em] text-gray-400">
                Or
              </span>

              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            <button className="w-full border border-black py-4 uppercase tracking-[0.25em] text-sm hover:bg-black hover:text-white transition duration-300">
              Continue with Google
            </button>

            <p className="mt-10 text-center text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-black underline underline-offset-4"
              >
                Create one
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}