import axios from "axios";
import {
  AUTH_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  SERVER_BASE_URL,
} from "../constants/authConstants";
import { LoginFormType } from "../interfaces/LoginFormType";
import { UserType } from "../interfaces/authTypes";

export const loginService = async (data: LoginFormType): Promise<UserType> => {
  try {
    const response = await axios.post(`${SERVER_BASE_URL}/login`, {
      username: data.username,
      password: data.password,
      expiresInMins: 1,
    });

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

export const getUserInfoService = async (): Promise<UserType> => {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const response = await axios.get(`${SERVER_BASE_URL}/me`, {
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

export const refreshTokenService = async (): Promise<UserType> => {
  try {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    const response = await axios.post(`${SERVER_BASE_URL}/refresh`, {
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
