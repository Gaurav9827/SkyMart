import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import useCartHook from "../hooks/useCartHook";

const ProductCard = ({ product }) => {
   const { addToCart } = useCartHook();

  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-700/60 bg-[#111111]">

      {/* Image Section */}
      <div className="relative flex h-64 items-center justify-center bg-white p-6">

        {/* Category Badge */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-gray-600 px-3 py-1 text-xs font-medium text-white">
          {product.category}
        </span>

        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Details Section */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gray-500">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="min-h-12 text-lg font-semibold leading-6 text-white">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={15}
                fill={
                  index < Math.round(product.rating)
                    ? "#B7DF02"
                    : "transparent"
                }
                className={
                  index < Math.round(product.rating)
                    ? "text-[#B7DF02]"
                    : "text-gray-600"
                }
              />
            ))}
          </div>

          <span className="ml-1 text-xs text-gray-500">
            ({product.reviews?.length || 0})
          </span>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-600/70" />

        {/* Price + Add */}
        <div className="flex items-center justify-between">

          <span className="text-2xl font-bold text-[#B7DF02]">
            ${product.price}
          </span>

          <button 
            onClick={() => addToCart(product)}
          className="flex items-center gap-2 rounded-xl bg-[#B7DF02] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#caff00]">
            <ShoppingCart size={17} />
            Add
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;