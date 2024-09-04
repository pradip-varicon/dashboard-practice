import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "isTablet",
})<{
  isTablet: boolean;
}>(({ isTablet, theme }) => ({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.contrastText,
    width: isTablet ? theme.spacing(7) : theme.spacing(30),
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,
}));

export const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const ListItemStyled = styled(ListItemButton)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: theme.palette.action.selected,
    "&:hover": {
      backgroundColor: theme.palette.action.selected,
    },
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
