import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Homeapages from "../pages/Homeapages";
import LoginPages from "../pages/LoginPages";
import RegisterPages from "../pages/RegisterPages";
import AuthRoutes from "./AuthRoutes";
import ProtectedRoute from "./ProtectedRoute";
import ShopPages from "../pages/ShopPages";
import AboutPages from "../pages/AboutPages";

const router = createBrowserRouter([
  {
    element: <AuthRoutes />,
    children: [
      {
        path: "/login",
        element: <LoginPages />,
      },
      {
        path: "/register",
        element: <RegisterPages />,
      },
    ],
  },

  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayouts />,
        children: [
          {
            index: true,
            element: <Homeapages />,
          },
          {
            path: "products",
            element: <ShopPages />,
          },
          {
            path: "abouts",
            element: <AboutPages />,
          },
        ],
      },
    ],
  },
]);

export default router;
