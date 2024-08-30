import { Stack, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Stack
      sx={{
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      direction="row"
    >
      <CircularProgress color="secondary" />
    </Stack>
  );
};

export default LoadingSpinner;
