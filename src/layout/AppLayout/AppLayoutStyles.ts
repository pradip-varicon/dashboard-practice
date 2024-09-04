import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { drawerWidth, topWidth } from "../constants";

export const AppContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  position: "relative",
});

export const TopNavContainer = styled(Box)({
  position: "fixed",
  top: 0,
  height: topWidth,
});

export const MainContentContainer = styled(Box)({
  display: "flex",
  flexGrow: 1,
  overflow: "hidden",
  marginTop: topWidth,
});

export const StyledSideNav = styled(Box)({
  width: drawerWidth,
  flexShrink: 0,
});

export const StyledMainContent = styled(Box)({
  flexGrow: 1,
  overflowY: "auto",
});
