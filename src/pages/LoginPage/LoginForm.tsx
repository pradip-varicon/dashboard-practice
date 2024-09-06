import React from "react";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useLoginForm } from "../../hooks/useLoginForm";

const LoginForm: React.FC = () => {
  const { register, handleSubmit, onSubmit, isLoginLoading, errors } =
    useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        {...register("username")}
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        {...register("password")}
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={isLoginLoading}
        startIcon={isLoginLoading && <CircularProgress size={24} />}
      >
        {isLoginLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
