import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation } from "react-router-dom";
import { StyledAppBar, StyledToolbar } from "./TopNavStyles";
import { useAuth } from "../../context/AuthContext";
import { headings } from "../constants";

const TopNav: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();

  const currentHeading = headings[location.pathname] || "Projects";

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h6" noWrap component="div">
          {currentHeading}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <PersonIcon fontSize="large" />
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            {user?.firstName ?? ""} {user?.lastName ?? ""}
          </Typography>
        </IconButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default TopNav;
