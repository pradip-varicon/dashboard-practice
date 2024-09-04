import React from "react";
import { Container, Typography } from "@mui/material";
import LoginForm from "./LoginForm";
import { StyledBox } from "./LoginStyles";

const LoginPage: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <StyledBox>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <LoginForm />
      </StyledBox>
    </Container>
  );
};

export default LoginPage;
