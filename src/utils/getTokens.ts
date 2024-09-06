import { AUTH_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants/authConstants";
export const getTokens = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
  return { authToken, refreshToken };
};
