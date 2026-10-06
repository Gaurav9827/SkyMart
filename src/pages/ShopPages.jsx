import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import { getProductdata } from "../apis/productApi";
import { useProductHook } from "../hooks/useProductHook";

const ShopPages = () => {
const{productsData}  = useProductHook()

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-0">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="font-sans text-4xl font-semibold tracking-tight sm:text-5xl">
            All Products
          </h1>

          <p className="mt-2 font-sans text-base text-gray-500">
           {productsData.length} `products found
          </p>
        </div>

        {/* Search / Filter */}
        <SearchBar />

        {/* Products */}
        <div  className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productsData.map((val) => {
            return <ProductCard key={val.id} product={val} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default ShopPages;
