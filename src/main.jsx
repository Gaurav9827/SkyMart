import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/AppRoutes";
import AuthContext from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import CartContext from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <CartContext>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </CartContext>
  </AuthContext>,
);
