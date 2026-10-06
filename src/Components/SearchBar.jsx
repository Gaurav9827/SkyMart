import React, { useState } from "react";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";

const SearchBar = () => {

  let {register}= useForm()
  return (
    <div className="w-full rounded-2xl border border-gray-300/50 p-4 sm:p-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

        {/* Search */}
        <div className="flex h-13 w-full items-center rounded-2xl border border-gray-400/20 bg-[#1d1d1d] px-4 lg:flex-1">
          <Search
            size={20}
            className="shrink-0 text-gray-500"
          />

          <input
            {...register("search")}
            type="text"
            placeholder="Search products..."
            className="ml-3 w-full bg-transparent font-sans text-white outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Category */}
        <select
          {...register("category")}
          className="h-13 w-full cursor-pointer rounded-2xl border border-gray-400/20 bg-[#1d1d1d] px-5 text-white outline-none focus:border-[#B7DF02] lg:w-52"
        >
          <option value="all">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>

        {/* Sort */}
        <select
          {...register("sort")}
          className="h-13 w-full cursor-pointer rounded-2xl border border-gray-400/20 bg-[#1d1d1d] px-5 text-white outline-none focus:border-[#B7DF02] lg:w-56"
        >
          <option value="featured">Featured</option>
          <option value="latest">Latest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>

      </div>
    </div>
  );
};

;

export default SearchBar;