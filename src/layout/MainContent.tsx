import React from "react";
import { Box } from "@mui/material";

const MainContent: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "lightgray",
        p: 3,
        marginTop: "64px",
        height: "calc(100vh - 64px)",
      }}
    >
      MainContent
    </Box>
  );
};

export default MainContent;
