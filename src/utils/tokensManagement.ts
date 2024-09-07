import { AUTH_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants/authConstants";
import { UserType } from "../interfaces/authTypes";

export const setTokens = (tokens: UserType) => {
  localStorage.setItem(AUTH_TOKEN_KEY, tokens.token);
  localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
};

export const getTokens = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
  return { authToken, refreshToken };
};

export const removeTokens = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};
