import React from "react";
import { Box } from "@mui/material";

const drawerWidth = 240;

const SideNav: React.FC = () => {
  return (
    <Box
      sx={{
        width: drawerWidth,
        height: "100vh",
        bgcolor: "blue",
        color: "white",
      }}
    >
      SideNav
    </Box>
  );
};

export default SideNav;
