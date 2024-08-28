import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { drawerWidth } from "../constants";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.secondary.dark,
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
