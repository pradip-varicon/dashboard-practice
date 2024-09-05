// LoginForm.tsx
import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useLoginForm } from "../../hooks/useLoginForm";
import { TextFieldController } from "./TextFieldController";

const LoginForm: React.FC = () => {
  const { control, handleSubmit, onSubmit, isPending } = useLoginForm();

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
