import React, { useState, lazy, Suspense } from "react";
import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation } from "react-router-dom";
import {
  StyledAppBar,
  StyledToolbar,
  StyledBox,
  ProfileContainer,
  ProfileAvatar,
  ProfileName,
  DropdownIcon,
} from "./TopNavStyles";
import { useAuth } from "../../context/AuthContext";
import { headings } from "../constants";
import LoadingSpinner from "../../components/LoadingSpinner";

const ProfileDropdown = lazy(() => import("./ProfileDropdown"));

const TopNav: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const currentHeading = headings[location.pathname] || "Projects";

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <Typography variant="h6" noWrap component="div">
            {currentHeading}
          </Typography>
          <StyledBox />
          <ProfileContainer onClick={handleOpen}>
            {user?.image ? (
              <ProfileAvatar
                src={user.image}
                alt={`${user?.firstName} ${user?.lastName}`}
              />
            ) : (
              <PersonIcon fontSize="large" />
            )}
            <ProfileName variant="body1">
              {user?.firstName ?? ""} {user?.lastName ?? ""}
            </ProfileName>
            <DropdownIcon />
          </ProfileContainer>
        </StyledToolbar>
      </StyledAppBar>
      <Suspense fallback={<LoadingSpinner />}>
        <ProfileDropdown
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        />
      </Suspense>
    </>
  );
};

export default TopNav;
