import { AUTH_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants/authConstants";
import { UserType } from "../interfaces/authTypes";

export const setTokens = (tokens: UserType) => {
  try {
    localStorage.setItem(AUTH_TOKEN_KEY, tokens.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
  } catch (error) {
    console.error("Error setting tokens:", error);
  }
};

export const getTokens = () => {
  try {
    const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    return { authToken, refreshToken };
  } catch (error) {
    console.error("Error getting tokens:", error);
    return { authToken: null, refreshToken: null };
  }
};

export const removeTokens = () => {
  try {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  } catch (error) {
    console.error("Error removing tokens:", error);
  }
};
