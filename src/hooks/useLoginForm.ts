import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginService } from "../services/authService";
import { LoginFormType, loginSchema } from "../interfaces/LoginFormType";
import { UserType } from "../interfaces/authTypes";
import { setTokens, removeTokens } from "../utils/tokensManagement";
import { notifySuccess, notifyError } from "../utils/toastify";

export const useLoginForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useMutation<UserType, Error, LoginFormType>({
    mutationFn: (data: LoginFormType) => loginService(data),
    onSuccess: async (data: UserType) => {
      setTokens(data);
      await queryClient.refetchQueries({
        queryKey: ["checkAuth"],
        type: "active",
      });
      notifySuccess("Welcome to Dashboard !");
      navigate("/suppliers");
    },
    onError: (error: Error) => {
      notifyError(`${error.message}`);
    },
  });

  const onSubmit = (data: LoginFormType) => {
    loginMutation.mutate(data);
  };

  const logout = async () => {
    try {
      removeTokens();
      queryClient.clear();
      notifySuccess("You're logged out !");
      navigate("/login");
    } catch (error) {
      notifyError(`Error during logout: ${error}`);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    isLoginLoading: loginMutation.isPending,
    errors,
    logout,
  };
};
