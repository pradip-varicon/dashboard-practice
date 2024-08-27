import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { drawerWidth } from "../constants";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  marginLeft: 240,
  width: `calc(100% - ${drawerWidth}px)`,
  backgroundColor: "#ffffff",
  color: "#002e5d",
  boxShadow: "none",
  borderBottom: "1px solid #ddd",
}));

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
