import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services/authService";
import { notifySuccess, notifyError } from "../utils/toastify";
import { LoginFormType } from "../interfaces/authTypes";

export const useLogin = (options: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: async (data: LoginFormType) => {
      const userData = await loginService(data.username, data.password);
      return userData;
    },
    onSuccess: () => {
      notifySuccess("Logged in successfully");
      options.onSuccess();
    },
    onError: () => {
      notifyError("Wrong Credentials");
    },
  });
};
