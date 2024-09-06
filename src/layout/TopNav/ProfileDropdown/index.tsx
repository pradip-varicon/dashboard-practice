import React from "react";
import { Typography, Divider, MenuItem } from "@mui/material";
import { useAuth } from "../../../context/AuthContext";
import { Edit as EditIcon, ExitToApp as LogoutIcon } from "@mui/icons-material";
import {
  StyledMenu,
  DisabledMenuItem,
  MenuItemText,
} from "./ProfileDropdownStyles";
import { ProfileDropdownProps } from "../../Interfaces/ProfileDropdownTypes";

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  anchorEl,
  open,
  onClose,
}) => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    logout();
    onClose();
  };

  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <DisabledMenuItem>
        <Typography variant="subtitle1">
          {user?.firstName} {user?.lastName}
        </Typography>
      </DisabledMenuItem>
      <DisabledMenuItem>
        <Typography variant="subtitle2">{user?.email}</Typography>
      </DisabledMenuItem>
      <Divider />
      <MenuItem>
        <EditIcon fontSize="small" />
        <MenuItemText variant="body2">Edit Profile</MenuItemText>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <LogoutIcon fontSize="small" />
        <MenuItemText variant="body2">Logout</MenuItemText>
      </MenuItem>
    </StyledMenu>
  );
};

export default ProfileDropdown;
