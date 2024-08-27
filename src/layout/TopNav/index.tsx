import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import UserIcon from "@mui/icons-material/People";

const drawerWidth = 240;

const TopNav: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        marginLeft: `${drawerWidth}px`,
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor: "#ffffff",
        color: "#002e5d",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Projects
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <HelpIcon />
        </IconButton>
        <IconButton color="inherit">
          <UserIcon />
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            Pradip Singh
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
