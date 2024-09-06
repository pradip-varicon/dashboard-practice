import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getUserInfoService,
  refreshTokenService,
} from "../services/authService";
import { AUTH_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants/authConstants";
import { UserType } from "../interfaces/authTypes";

export const useAuthHook = () => {
  const getTokens = () => {
    const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    return { authToken, refreshToken };
  };

  const {
    data: user,
    isPending: isAuthLoading,
    isError,
    refetch,
  } = useQuery<UserType>({
    queryKey: ["checkAuth"],
    queryFn: async () => {
      try {
        return await getUserInfoService();
      } catch (error) {
        console.error("Access token expired, attempting to refresh token...");

        try {
          await refreshTokenService();
          return await getUserInfoService();
        } catch (refreshError) {
          console.error("Failed to refresh token, please log in again.");
          throw new Error("Token refresh failed");
        }
      }
    },
    enabled: false, // Disabled initially
  });

  useEffect(() => {
    const initAuth = async () => {
      const { authToken, refreshToken } = getTokens();

      if (!authToken || !refreshToken) {
        return;
      }

      try {
        await refetch();
      } catch (error) {
        console.error("Authentication check failed:", error);
      }
    };

    initAuth();
  }, [refetch]);

  console.log(user);

  return {
    user,
    isAuthLoading,
    isError,
  };
};
