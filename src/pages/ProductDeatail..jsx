import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  ShoppingCart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Star,
} from "lucide-react";

const ProductDeatail = () => {
  return (
    <main className="min-h-screen bg-[#0d0d0d] px-4 py-8 text-white sm:px-6 lg:px-10">
      {/* Breadcrumb */}
      <div className="mx-auto mb-10 flex max-w-7xl items-center gap-3 text-sm text-gray-500">
        <button
          onClick={() => navigate("/shop")}
          className="flex items-center gap-2 hover:text-white"
        >
          <ArrowLeft size={16} />
          Products
        </button>

        <span>/</span>
        <span>Electronics</span>

        <span>/</span>
        <span className="text-gray-300">Wireless Bluetooth...</span>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Product Image */}
        <div className="flex min-h-[500px] items-center justify-center rounded-[30px] bg-white p-10">
          <img
            src="https://cdn.dummyjson.com/product-images/mobile-accessories/1.webp"
            alt="Wireless Bluetooth Headphones"
            className="max-h-[420px] w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          {/* Category */}
          <span className="mb-5 w-fit rounded-full border border-[#B7DF02]/30 bg-[#B7DF02]/10 px-3 py-1 text-sm font-medium text-[#B7DF02]">
            Electronics
          </span>

          {/* Title */}
          <h1 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
            Wireless Bluetooth
            <br />
            Headphones
          </h1>

          {/* Rating */}
          <div className="mt-7 flex items-center gap-3">
            <div className="flex gap-1 text-[#B7DF02]">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>

            <span className="font-medium">4.5</span>

            <span className="text-gray-600">(120 reviews)</span>
          </div>

          <div className="my-7 border-t border-gray-700" />

          {/* Price */}
          <p className="text-4xl font-semibold italic text-[#B7DF02]">$99.99</p>

          <div className="my-7 border-t border-gray-700" />

          {/* Description */}
          <p className="max-w-2xl text-base leading-7 text-gray-500">
            High-quality wireless headphones with noise cancellation and 30-hour
            battery life. Perfect for music lovers and professionals.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex gap-4">
            <button className="flex h-16 flex-1 items-center justify-center gap-3 rounded-2xl bg-[#B7DF02] text-lg font-medium text-black transition hover:brightness-90">
              <ShoppingCart size={22} />
              Add to Cart
            </button>

            <button className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-700 text-gray-400 transition hover:border-[#B7DF02] hover:text-[#B7DF02]">
              <Heart size={25} />
            </button>
          </div>

          {/* Features */}
          <div className="mt-7 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-gray-700 p-5 text-center">
              <Truck size={21} className="mx-auto text-[#B7DF02]" />

              <p className="mt-3 text-sm font-semibold text-gray-400">
                Free Delivery
              </p>

              <p className="mt-1 text-xs text-gray-600">On orders $50+</p>
            </div>

            <div className="rounded-2xl border border-gray-700 p-5 text-center">
              <ShieldCheck size={21} className="mx-auto text-[#B7DF02]" />

              <p className="mt-3 text-sm font-semibold text-gray-400">
                Secure Pay
              </p>

              <p className="mt-1 text-xs text-gray-600">256-bit SSL</p>
            </div>

            <div className="rounded-2xl border border-gray-700 p-5 text-center">
              <RotateCcw size={21} className="mx-auto text-[#B7DF02]" />

              <p className="mt-3 text-sm font-semibold text-gray-400">
                Easy Returns
              </p>

              <p className="mt-1 text-xs text-gray-600">30-day policy</p>
            </div>
          </div>

          {/* Next */}
          <button className="mt-14 flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#B7DF02] font-medium text-black">
            Next
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDeatail;
