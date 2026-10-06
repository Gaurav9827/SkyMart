import React from "react";
import { X, ShoppingBag, Box, Plus, Minus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
import useCartHook from "../hooks/useCartHook";

const CartCard = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCartHook();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Cart Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-[525px] flex-col bg-[#111111] text-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-gray-700 px-7">
          <div className="flex items-center gap-4">
            <ShoppingBag
              size={25}
              className="text-[#B7DF02]"
            />

            <h2 className="text-2xl font-semibold">
              Cart
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 transition hover:text-white"
          >
            <X size={25} />
          </button>
        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-gray-700 bg-[#1c1c1c]">
              <Box
                size={42}
                strokeWidth={1.5}
                className="text-gray-600"
              />
            </div>

            <h3 className="mt-7 text-2xl font-medium">
              Cart is empty
            </h3>

            <p className="mt-2 text-base text-gray-600">
              Go shop something cool!
            </p>

            <button
              onClick={() => {
                onClose();
                navigate("/products");
              }}
              className="mt-8 rounded-2xl bg-[#B7DF02] px-8 py-4 text-base font-medium text-black transition hover:brightness-90"
            >
              Browse Products
            </button>
          </div>
        ) : (
          /* CART ITEMS */
          <>
            <div className="flex-1 space-y-4 overflow-y-auto p-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-gray-800 bg-[#1a1a1a] p-4"
                >
                  {/* Product Image */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-24 w-24 rounded-xl object-cover"
                  />

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="line-clamp-2 font-medium">
                        {item.title}
                      </h3>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                      ${item.price} each
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-3 rounded-xl border border-gray-700 px-2 py-1">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="text-gray-400 hover:text-white"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="min-w-5 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="text-gray-400 hover:text-white"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Total */}
                      <p className="font-semibold text-[#B7DF02]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom */}
            <div className="shrink-0 border-t border-gray-800 p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-gray-400">
                  Total
                </span>

                <span className="text-2xl font-semibold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button className="w-full rounded-2xl bg-[#B7DF02] py-4 font-semibold text-black hover:bg-[#caff00]">
                Checkout
              </button>

              <button
                onClick={clearCart}
                className="mt-3 w-full text-sm text-gray-500 hover:text-white"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartCard;