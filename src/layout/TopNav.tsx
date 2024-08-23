import React from "react";
import { Box } from "@mui/material";

const drawerWidth = 240;

const TopNav: React.FC = () => {
  return (
    <Box
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        height: "64px",
        bgcolor: "green",
        color: "white",
        position: "fixed",
        top: 0,
        left: `${drawerWidth}px`,
      }}
    >
      TopNav
    </Box>
  );
};

export default TopNav;
