import React from "react";
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Star,
  Zap,
Box,
TrendingUp,
Tag,
} from "lucide-react";

const HomePages = () => {
  return (
    <main className="min-h-screen bg-black text-white">

    
     {/* ================= HERO SECTION ================= */}
<section className="px-2 pt-6 sm:px-4 lg:px-6">
  <div
    className="relative overflow-hidden rounded-[30px] border border-gray-300/80 bg-[#111111]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(183, 223, 2, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(183, 223, 2, 0.06) 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px",
    }}
  >
    <div className="mx-auto flex min-h-[445px] max-w-[1450px] items-center justify-between px-8 py-12 sm:px-12 lg:px-16">

      {/* LEFT CONTENT */}
      <div>
        {/* Greeting */}
        <p className="text-sm font-medium tracking-widest text-[#B7DF02] sm:text-base">
          GOOD MORNING 👋
        </p>

        {/* Heading */}
        <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[56px]">
          Welcome back,
          <span className="block text-[#B7DF02]">
            GAURAV!
          </span>
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-[560px] text-base leading-7 text-gray-500 sm:text-lg">
          Discover today's picks — hand-curated products across
          <br className="hidden sm:block" />
          electronics, fashion, and more.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">

          <button className="flex items-center gap-3 rounded-2xl bg-[#B7DF02] px-7 py-4 text-base font-semibold text-black transition hover:bg-[#caff00]">
            Shop Now
            <span className="text-xl">→</span>
          </button>

          <button className="rounded-2xl border border-gray-700 px-7 py-4 text-base font-medium text-gray-400 transition hover:border-gray-500 hover:text-white">
            View All Products
          </button>

        </div>
      </div>

      {/* RIGHT STATS */}
      <div className="hidden w-[190px] flex-col gap-4 lg:flex">

        {/* Products */}
        <div className="flex h-[118px] flex-col items-center justify-center rounded-2xl border border-[#B7DF02]/30 bg-[#B7DF02]/10">
          <h3 className="text-4xl font-bold text-[#B7DF02]">
            20+
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Products Available
          </p>
        </div>

        {/* Delivery */}
        <div className="flex h-[108px] flex-col items-center justify-center rounded-2xl border border-gray-300/80 bg-[#111111]">
          <h3 className="text-3xl font-bold text-white">
            Free
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Delivery on ₹999+
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

{/* ================= HOME STATS ================= */}
<section className="px-6 py-6 lg:px-8">
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

    {/* Cart Items */}
    <div className="flex h-[150px] items-center gap-5 rounded-[28px] border border-gray-300/80 bg-[#111111] px-7">
      <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-[#B7DF02]/10">
        <Box
          size={27}
          strokeWidth={2}
          className="text-[#B7DF02]"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white">
          0
        </h3>

        <p className="text-base text-gray-400">
          Cart Items
        </p>

        <p className="mt-1 text-sm text-gray-600">
          In your bag
        </p>
      </div>
    </div>

    {/* Cart Value */}
    <div className="flex h-[150px] items-center gap-5 rounded-[28px] border border-gray-300/80 bg-[#111111] px-7">
      <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-blue-500/10">
        <TrendingUp
          size={27}
          strokeWidth={2}
          className="text-blue-400"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white">
          $0.00
        </h3>

        <p className="text-base text-gray-400">
          Cart Value
        </p>

        <p className="mt-1 text-sm text-gray-600">
          Ready to checkout
        </p>
      </div>
    </div>

    {/* Top Products */}
    <div className="flex h-[150px] items-center gap-5 rounded-[28px] border border-gray-300/80 bg-[#111111] px-7">
      <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-yellow-500/10">
        <Star
          size={27}
          strokeWidth={2}
          className="text-yellow-400"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white">
          5
        </h3>

        <p className="text-base text-gray-400">
          Top Products
        </p>

        <p className="mt-1 text-sm text-gray-600">
          Highly rated
        </p>
      </div>
    </div>

    {/* Categories */}
    <div className="flex h-[150px] items-center gap-5 rounded-[28px] border border-gray-300/80 bg-[#111111] px-7">
      <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-purple-500/10">
        <Tag
          size={27}
          strokeWidth={2}
          className="text-purple-400"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white">
          6
        </h3>

        <p className="text-base text-gray-400">
          Categories
        </p>

        <p className="mt-1 text-sm text-gray-600">
          To explore
        </p>
      </div>
    </div>

  </div>
</section>


      
     {/* ================= SHOP BY CATEGORY ================= */}
<section className="px-2 py-8 sm:px-4 lg:px-6">
  {/* Heading */}
  <div className="mb-7 flex items-center justify-between">
    <h2 className="text-2xl font-semibold text-white sm:text-3xl">
      Shop by Category
    </h2>

    <button className="flex items-center gap-2 text-sm font-medium text-[#B7DF02] transition hover:text-[#caff00] sm:text-base">
      View All
      <span className="text-xl">→</span>
    </button>
  </div>

  {/* Categories */}
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {/* Electronics */}
    <div className="flex h-[162px] cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition duration-300 hover:-translate-y-1">
      <div className="text-4xl">
        💻
      </div>

      <h3 className="mt-4 text-lg font-medium text-gray-900">
        Electronics
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        17 items
      </p>
    </div>

    {/* Clothing */}
    <div className="flex h-[162px] cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition duration-300 hover:-translate-y-1">
      <div className="text-4xl">
        📦
      </div>

      <h3 className="mt-4 text-lg font-medium text-gray-900">
        Clothing
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        2 items
      </p>
    </div>

    {/* Furniture */}
    <div className="flex h-[162px] cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition duration-300 hover:-translate-y-1">
      <div className="text-4xl">
        📦
      </div>

      <h3 className="mt-4 text-lg font-medium text-gray-900">
        Furniture
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        3 items
      </p>
    </div>

    {/* Home */}
    <div className="flex h-[162px] cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition duration-300 hover:-translate-y-1">
      <div className="text-4xl">
        📦
      </div>

      <h3 className="mt-4 text-lg font-medium text-gray-900">
        Home
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        14 items
      </p>
    </div>

    {/* Sports */}
    <div className="flex h-[162px] cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition duration-300 hover:-translate-y-1">
      <div className="text-4xl">
        📦
      </div>

      <h3 className="mt-4 text-lg font-medium text-gray-900">
        Sports
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        8 items
      </p>
    </div>

    {/* Accessories */}
    <div className="flex h-[162px] cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition duration-300 hover:-translate-y-1">
      <div className="text-4xl">
        📦
      </div>

      <h3 className="mt-4 text-lg font-medium text-gray-900">
        Accessories
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        6 items
      </p>
    </div>
  </div>
</section>                 


      {/* ================= TOP RATED + NEW ARRIVALS ================= */}
<section className="px-2 py-8 sm:px-4 lg:px-6">
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

    {/* ================= TOP RATED ================= */}
    <div className="rounded-[30px] bg-white p-7 sm:p-8">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-black">
          <Star
            size={23}
            className="fill-yellow-400 text-yellow-400"
          />
          Top Rated
        </h2>

        <button className="flex items-center gap-2 text-sm font-medium text-[#B7DF02]">
          See all
          <span className="text-lg">→</span>
        </button>
      </div>

      {/* Products */}
      <div className="mt-7 space-y-3">

        {/* Product 1 */}
        <div className="flex h-[92px] items-center justify-between rounded-2xl border border-gray-200 px-5">
          <div className="flex items-center gap-5">
            <img
              src="https://dummyjson.com/image/80x80"
              alt="Product"
              className="h-11 w-11 object-cover"
            />

            <span className="text-base font-medium text-[#B7DF02]">
              $599.99
            </span>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B7DF02]/10 text-[#B7DF02]">
            <ShoppingBag size={17} />
          </button>
        </div>

        {/* Product 2 */}
        <div className="flex h-[92px] items-center justify-between rounded-2xl border border-gray-200 px-5">
          <div className="flex items-center gap-5">
            <img
              src="https://dummyjson.com/image/80x80"
              alt="Product"
              className="h-11 w-11 object-cover"
            />

            <span className="text-base font-medium text-[#B7DF02]">
              $199.99
            </span>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B7DF02]/10 text-[#B7DF02]">
            <ShoppingBag size={17} />
          </button>
        </div>

        {/* Product 3 */}
        <div className="flex h-[92px] items-center justify-between rounded-2xl border border-gray-200 px-5">
          <div className="flex items-center gap-5">
            <img
              src="https://dummyjson.com/image/80x80"
              alt="Product"
              className="h-11 w-11 object-cover"
            />

            <span className="text-base font-medium text-[#B7DF02]">
              $349.99
            </span>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B7DF02]/10 text-[#B7DF02]">
            <ShoppingBag size={17} />
          </button>
        </div>

        {/* Product 4 */}
        <div className="flex h-[92px] items-center justify-between rounded-2xl border border-gray-200 px-5">
          <div className="flex items-center gap-5">
            <img
              src="https://dummyjson.com/image/80x80"
              alt="Product"
              className="h-11 w-11 object-cover"
            />

            <span className="text-base font-medium text-[#B7DF02]">
              $49.99
            </span>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B7DF02]/10 text-[#B7DF02]">
            <ShoppingBag size={17} />
          </button>
        </div>

        {/* Product 5 */}
        <div className="flex h-[92px] items-center justify-between rounded-2xl border border-gray-200 px-5">
          <div className="flex items-center gap-5">
            <img
              src="https://dummyjson.com/image/80x80"
              alt="Product"
              className="h-11 w-11 object-cover"
            />

            <span className="text-base font-medium text-[#B7DF02]">
              $149.99
            </span>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B7DF02]/10 text-[#B7DF02]">
            <ShoppingBag size={17} />
          </button>
        </div>

      </div>
    </div>


    {/* ================= NEW ARRIVALS ================= */}
    <div className="rounded-[30px] bg-white p-7 sm:p-8">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-black">
          <Zap
            size={23}
            className="fill-[#B7DF02] text-[#B7DF02]"
          />
          New Arrivals
        </h2>

        <button className="flex items-center gap-2 text-sm font-medium text-[#B7DF02]">
          See all
          <span className="text-lg">→</span>
        </button>
      </div>

      {/* Products */}
      <div className="mt-7 space-y-3">

        {/* Product 1 */}
        <div className="flex h-[92px] items-center justify-between rounded-2xl border border-gray-200 px-5">
          <div className="flex items-center gap-5">
            <img
              src="https://dummyjson.com/image/80x80"
              alt="Product"
              className="h-11 w-11 object-cover"
            />

            <span className="text-base font-medium text-[#B7DF02]">
              $99.99
            </span>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B7DF02]/10 text-[#B7DF02]">
            <ShoppingBag size={17} />
          </button>
        </div>

        {/* Product 2 */}
        <div className="flex h-[92px] items-center justify-between rounded-2xl border border-gray-200 px-5">
          <div className="flex items-center gap-5">
            <img
              src="https://dummyjson.com/image/80x80"
              alt="Product"
              className="h-11 w-11 object-cover"
            />

            <span className="text-base font-medium text-[#B7DF02]">
              $299.99
            </span>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B7DF02]/10 text-[#B7DF02]">
            <ShoppingBag size={17} />
          </button>
        </div>

        {/* Product 3 */}
        <div className="flex h-[92px] items-center justify-between rounded-2xl border border-gray-200 px-5">
          <div className="flex items-center gap-5">
            <img
              src="https://dummyjson.com/image/80x80"
              alt="Product"
              className="h-11 w-11 object-cover"
            />

            <span className="text-base font-medium text-[#B7DF02]">
              $24.99
            </span>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B7DF02]/10 text-[#B7DF02]">
            <ShoppingBag size={17} />
          </button>
        </div>

        {/* Product 4 */}
        <div className="flex h-[92px] items-center justify-between rounded-2xl border border-gray-200 px-5">
          <div className="flex items-center gap-5">
            <img
              src="https://dummyjson.com/image/80x80"
              alt="Product"
              className="h-11 w-11 object-cover"
            />

            <span className="text-base font-medium text-[#B7DF02]">
              $199.99
            </span>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B7DF02]/10 text-[#B7DF02]">
            <ShoppingBag size={17} />
          </button>
        </div>

        {/* Product 5 */}
        <div className="flex h-[92px] items-center justify-between rounded-2xl border border-gray-200 px-5">
          <div className="flex items-center gap-5">
            <img
              src="https://dummyjson.com/image/80x80"
              alt="Product"
              className="h-11 w-11 object-cover"
            />

            <span className="text-base font-medium text-[#B7DF02]">
              $34.99
            </span>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B7DF02]/10 text-[#B7DF02]">
            <ShoppingBag size={17} />
          </button>
        </div>

      </div>
    </div>

  </div>
</section>


{/* ================= FEATURES ================= */}
<section className="px-2 py-6 sm:px-4 lg:px-6">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

    {/* Fast Delivery */}
    <div className="flex items-center gap-5 rounded-2xl border border-gray-300/80 bg-[#111111] px-7 py-6">
      <Zap
        size={30}
        className="shrink-0 text-[#B7DF02]"
      />

      <div>
        <h3 className="font-semibold text-gray-300">
          Fast Delivery
        </h3>

        <p className="mt-1 text-sm text-gray-600">
          Same-day on select items
        </p>
      </div>
    </div>

    {/* Secure Payments */}
    <div className="flex items-center gap-5 rounded-2xl border border-gray-300/80 bg-[#111111] px-7 py-6">
      <ShieldCheck
        size={30}
        className="shrink-0 text-blue-400"
      />

      <div>
        <h3 className="font-semibold text-gray-300">
          Secure Payments
        </h3>

        <p className="mt-1 text-sm text-gray-600">
          100% encrypted checkout
        </p>
      </div>
    </div>

    {/* Best Prices */}
    <div className="flex items-center gap-5 rounded-2xl border border-gray-300/80 bg-[#111111] px-7 py-6">
      <Tag
        size={30}
        className="shrink-0 text-green-400"
      />

      <div>
        <h3 className="font-semibold text-gray-300">
          Best Prices
        </h3>

        <p className="mt-1 text-sm text-gray-600">
          Price-match guarantee
        </p>
      </div>
    </div>

  </div>
</section>

    </main>
  );
};

export default HomePages;