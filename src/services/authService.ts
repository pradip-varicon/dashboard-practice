import axios from "axios";

const API_URL = "https://dummyjson.com/auth";

export const loginService = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
      expiresInMins: 1,
    });

    const { token, refreshToken } = response.data;

    localStorage.setItem("authToken", token);
    localStorage.setItem("refreshToken", refreshToken);

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
    const token = localStorage.getItem("authToken");
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
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await axios.post(`${API_URL}/refresh`, {
      refreshToken,
      expiresInMins: 1,
    });

    const { token } = response.data;

    localStorage.setItem("authToken", token);

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
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
  return true;
};
