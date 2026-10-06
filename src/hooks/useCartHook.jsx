import { useContext } from "react";
import { CartStore } from "../context/CartContext";

const useCartHook = () => {
  return useContext(CartStore);
};

export default useCartHook;