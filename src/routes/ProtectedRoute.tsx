import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LinearProgress from "@mui/material/LinearProgress";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, isAuthLoading } = useAuth();

  console.log("User: ", user);
  // user and loading ko lagi state banaune
  if (isAuthLoading) {
    return <LinearProgress />;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;