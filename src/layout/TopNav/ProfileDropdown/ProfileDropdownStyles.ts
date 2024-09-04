import { styled, Theme } from "@mui/material/styles";
import { Menu, MenuItem, Typography } from "@mui/material";

export const StyledMenu = styled(Menu)(({ theme }: { theme: Theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
}));

export const DisabledMenuItem = styled(MenuItem)(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.text.primary,
    pointerEvents: "none",
  })
);

export const MenuItemText = styled(Typography)(
  ({ theme }: { theme: Theme }) => ({
    marginLeft: theme.spacing(1),
  })
);
