import { useEffect } from "react";
import {
  useQuery,
  UseQueryResult,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getUserInfoService,
  refreshTokenService,
} from "../services/authService";
import { UserType } from "../interfaces/authTypes";
import { getTokens } from "../utils/getTokens";

export const useAuthHook = () => {
  const queryClient = useQueryClient();

  const { authToken, refreshToken } = getTokens();

  const userQuery: UseQueryResult<UserType, Error> = useQuery<UserType, Error>({
    queryKey: ["checkAuth"],
    queryFn: async () => {
      if (!authToken || !refreshToken) {
        throw new Error("No tokens available");
      }

      try {
        return await getUserInfoService();
      } catch (error) {
        console.error("Access token expired, attempting to refresh token...");

        await refreshTokenService();
        return await getUserInfoService();
      }
    },
    enabled: !!authToken && !!refreshToken,
    retry: false, // Disable automatic retries
  });

  useEffect(() => {
    if (!authToken || !refreshToken) {
      queryClient.clear();
    }
  }, [authToken, refreshToken, queryClient]);

  return {
    user: userQuery.data,
    isAuthLoading: userQuery.isLoading,
    isError: userQuery.isError,
  };
};
