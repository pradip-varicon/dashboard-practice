import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { LoginFormType, loginSchema } from "../../interfaces/authTypes";
import { TextFieldController } from "./TextFieldController";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useLogin({
    onSuccess: () => {
      navigate("/");
    },
  });

  const onSubmit = (data: LoginFormType) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextFieldController name="username" control={control} label="Username" />
      <TextFieldController
        name="password"
        control={control}
        label="Password"
        type="password"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={isPending}
        startIcon={isPending && <CircularProgress size={24} />}
      >
        {isPending ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
