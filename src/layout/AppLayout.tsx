import React from "react";
import { Box, CssBaseline } from "@mui/material";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import MainContent from "./MainContent";

const AppLayout: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideNav />
      <Box sx={{ flexGrow: 1 }}>
        <TopNav />
        <MainContent />
      </Box>
    </Box>
  );
};

export default AppLayout;
