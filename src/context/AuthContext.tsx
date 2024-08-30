import React, { createContext, useContext, useState, useEffect } from "react";
import { meService, refreshTokenService } from "../services/authService";
import { AuthContextType, UserType } from "../interfaces/types";
import { AUTH_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants/authConstants";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
      const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

      if (!authToken || !refreshToken) {
        setLoading(false);
        return;
      }

      try {
        const userData = await meService();
        setUser(userData);
      } catch (error) {
        try {
          await refreshTokenService();
          const userData = await meService();
          setUser(userData);
        } catch (refreshError) {
          console.error("Authentication failed, please log in again.");
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
