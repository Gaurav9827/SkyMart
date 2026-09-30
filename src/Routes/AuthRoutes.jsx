import React, { useContext } from "react";
import { MyStore } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

const AuthRoutes = () => {
  const { user } = useContext(MyStore);
  if (user) {
   return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AuthRoutes;
