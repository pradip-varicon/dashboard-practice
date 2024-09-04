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
  width: "100%",
  zIndex: 1100,
});

export const MainContentContainer = styled(Box)({
  display: "flex",
  flexGrow: 1,
  overflow: "hidden",
  marginTop: topWidth,
});

export const StyledSideNav = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isTablet",
})<{
  isTablet: boolean;
}>(({ isTablet, theme }) => ({
  width: isTablet ? drawerWidth / 2 : drawerWidth,
  flexShrink: 0,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

export const StyledMainContent = styled(Box)({
  flexGrow: 1,
  overflowY: "auto",
});
