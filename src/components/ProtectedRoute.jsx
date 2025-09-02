// components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>; // Or a fancy spinner
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
