import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const MainContentContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3),
  marginTop: "64px",
}));
