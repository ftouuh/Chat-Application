// PrivateRoute.jsx

import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectStatus } from "./userSlice";

const PrivateRoute = ({ children }) => {
  const isAuthenticatedRedux = useSelector(selectStatus);
  const isAuthenticatedLocalStorage = localStorage.getItem("isAuthenticated");

  console.log("is auth (Redux):", isAuthenticatedRedux);
  console.log("is auth (LocalStorage):", isAuthenticatedLocalStorage);

  const isAuthenticated = isAuthenticatedRedux || isAuthenticatedLocalStorage;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
