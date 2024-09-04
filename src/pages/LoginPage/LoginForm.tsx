import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LoginFormData } from "./../../interfaces/authTypes";
import { loginService } from "../../services/authService";
import { notifySuccess, notifyError } from "../../utils/toastify";

const LoginForm: React.FC = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const userData = await loginService(data.username, data.password);
      setUser(userData);
      notifySuccess("Logged in successfully");
      navigate("/");
    } catch (error) {
      notifyError("Wrong Credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="username"
        control={control}
        defaultValue=""
        rules={{ required: "Username is required" }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: "Password is required" }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
