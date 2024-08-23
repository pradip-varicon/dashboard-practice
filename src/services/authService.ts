import axios from "axios";
import { AUTH_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants/constants";

const API_URL = import.meta.env.VITE_SERVER_BASE_URL;

export const loginService = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
      expiresInMins: 1,
    });

    const { token, refreshToken } = response.data;

    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        "Login failed: " + (error.response?.data?.message || error.message)
      );
    } else {
      throw new Error("An unexpected error occurred: " + String(error));
    }
  }
};

export const meService = async () => {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        "Fetching user data failed: " +
          (error.response?.data?.message || error.message)
      );
    } else {
      throw new Error("An unexpected error occurred: " + String(error));
    }
  }
};

export const refreshTokenService = async () => {
  try {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    const response = await axios.post(`${API_URL}/refresh`, {
      refreshToken,
      expiresInMins: 1,
    });

    const { token } = response.data;

    localStorage.setItem(AUTH_TOKEN_KEY, token);

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        "Token refresh failed: " +
          (error.response?.data?.message || error.message)
      );
    } else {
      throw new Error("An unexpected error occurred: " + String(error));
    }
  }
};

export const logoutService = async () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  return true;
};
