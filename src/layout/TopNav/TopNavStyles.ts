import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { drawerWidth } from "../constants";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
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

export const StyledBox = styled(Box)({
  flexGrow: 1,
});

export const ProfileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover, // Change to your preferred hover color
  },
}));

export const ProfileAvatar = styled(Avatar)({
  width: 32,
  height: 32,
});

export const ProfileName = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

export const DropdownIcon = styled(ArrowDropDownIcon)(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  color: theme.palette.text.secondary,
}));
