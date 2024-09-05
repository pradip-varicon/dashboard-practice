import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services/authService";
import { notifySuccess, notifyError } from "../utils/toastify";
import { LoginFormType, loginSchema } from "../interfaces/authTypes";

export const useLoginForm = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: LoginFormType) => {
      const userData = await loginService(data);
      return userData;
    },
    onSuccess: () => {
      notifySuccess("Logged in successfully");
      navigate("/");
    },
    onError: () => {
      notifyError("Wrong Credentials");
    },
  });

  const onSubmit = (data: LoginFormType) => {
    mutate(data);
  };

  return { control, handleSubmit, onSubmit, isPending };
};
