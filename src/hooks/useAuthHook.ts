import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getUserInfoService,
  refreshTokenService,
} from "../services/authService";
import { UserType } from "../interfaces/authTypes";
import { getTokens } from "../utils/tokensManagement";

export const useAuthHook = () => {
  const queryClient = useQueryClient();

  const { authToken, refreshToken } = getTokens();

  const userQuery = useQuery<UserType, Error>({
    queryKey: ["checkAuth"],
    queryFn: async () => {
      try {
        return await getUserInfoService();
      } catch (error) {
        console.error("Sessions expired, attempting to refresh sessions...");

        try {
          await refreshTokenService();
          return await getUserInfoService();
        } catch (refreshError) {
          console.error("Failed to refresh session:", refreshError);
          throw new Error("Unable to refresh session. Please log in again.");
        }
      }
    },
    enabled: !!authToken && !!refreshToken,
    retry: false, // disable auto retries
  });

  useEffect(() => {
    if (!authToken || !refreshToken) {
      console.log("No tokenn called");
      queryClient.clear();
    }
  }, [authToken, refreshToken, queryClient]);
  return {
    user: userQuery.data,
    isAuthLoading: userQuery.isLoading,
    isError: userQuery.isError,
  };
};
