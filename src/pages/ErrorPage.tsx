import React from "react";
import { Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import { RouteError } from "../interfaces/types";

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError;

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1">
        The page you are looking for does not exist.
      </Typography>
      {error && (
        <Typography variant="body2" color="error">
          <strong>Error:</strong>{" "}
          {error.message || "An unknown error occurred."}
        </Typography>
      )}
    </Container>
  );
};

export default ErrorPage;
