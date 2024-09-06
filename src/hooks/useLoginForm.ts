import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LoginFormType, loginSchema } from "../interfaces/LoginFormType";

export const useLoginForm = () => {
  const { login, isLoginLoading } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormType) => {
    try {
      login(data);
      navigate("/");
    } catch {
      // Error handling is done in the hook
    }
  };

  return { register, handleSubmit, onSubmit, isLoginLoading, errors };
};
