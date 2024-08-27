import React, { useState, useEffect } from "react";
import { List, ListItemIcon, ListItemText, Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProjectsIcon from "@mui/icons-material/Work";
import TimesheetIcon from "@mui/icons-material/AccessTime";
import PurchaseOrderIcon from "@mui/icons-material/ShoppingCart";
import DocketIcon from "@mui/icons-material/Receipt";
import FormsIcon from "@mui/icons-material/Description";
import EquipmentIcon from "@mui/icons-material/Build";
import ResourceIcon from "@mui/icons-material/Assignment";
import FileManagerIcon from "@mui/icons-material/Folder";
import UserIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledDrawer,
  StyledToolbar,
  LogoContainer,
  ListItemStyled,
} from "./SideNavStyles";

const SideNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Projects", icon: <ProjectsIcon />, path: "/projects" },
    { text: "Timesheet", icon: <TimesheetIcon />, path: "/timesheet" },
    {
      text: "Purchase Order",
      icon: <PurchaseOrderIcon />,
      path: "/purchase-order",
    },
    { text: "Delivery Docket", icon: <DocketIcon />, path: "/delivery-docket" },
    { text: "Forms", icon: <FormsIcon />, path: "/forms" },
    { text: "Equipment", icon: <EquipmentIcon />, path: "/equipment" },
    {
      text: "Resource Assigner",
      icon: <ResourceIcon />,
      path: "/resource-assigner",
    },
    { text: "File Manager", icon: <FileManagerIcon />, path: "/file-manager" },
    { text: "User Management", icon: <UserIcon />, path: "/user-management" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  const getSelectedIndex = () => {
    return navItems.findIndex((item) => item.path === location.pathname);
  };

  const [selectedIndex, setSelectedIndex] = useState(getSelectedIndex());

  useEffect(() => {
    setSelectedIndex(getSelectedIndex());
  }, [location.pathname]);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    path: string
  ) => {
    event.preventDefault();
    setSelectedIndex(index);
    navigate(path);
  };

  return (
    <StyledDrawer variant="permanent">
      <StyledToolbar>
        <LogoContainer>
          <img src="logo5.png" alt="Company Logo" height="40" />
        </LogoContainer>
        <MenuIcon />
      </StyledToolbar>
      <List component="nav" aria-label="main navigation">
        {navItems.map(({ text, icon, path }, index) => (
          <ListItemStyled
            key={text}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index, path)}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemStyled>
        ))}
      </List>
      <Divider />
    </StyledDrawer>
  );
};

export default SideNav;
