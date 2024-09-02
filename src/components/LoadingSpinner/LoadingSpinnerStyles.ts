import { styled } from "@mui/material/styles";
import { Stack, CircularProgress } from "@mui/material";

export const StyledStack = styled(Stack)(() => ({
  height: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));
