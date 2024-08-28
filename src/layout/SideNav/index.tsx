import React from "react";
import {
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";
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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  StyledDrawer,
  StyledToolbar,
  LogoContainer,
  ListItemStyled,
} from "./SideNavStyles";
import { logoSrc } from "../constants";
import { useSideNav } from "../hooks/useSideNav";

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
  {
    text: "Settings",
    icon: <SettingsIcon />,
    subNav: [
      { text: "Allowance", path: "/settings/allowance" },
      { text: "Categories", path: "/settings/categories" },
      { text: "Accounting Codes", path: "/settings/accounting-codes" },
      { text: "Resource Cost Sheet", path: "/settings/resource-cost-sheet" },
      { text: "Segments", path: "/settings/segments" },
      { text: "Organization", path: "/settings/organization" },
    ],
  },
];

const SideNav: React.FC = () => {
  const {
    open,
    selectedIndex,
    selectedSubIndex,
    handleClick,
    handleSubItemClick,
  } = useSideNav(navItems);

  return (
    <StyledDrawer variant="permanent">
      <StyledToolbar>
        <LogoContainer>
          <img src={logoSrc} alt="Company Logo" height="40" />
        </LogoContainer>
        <MenuIcon />
      </StyledToolbar>

      <List component="nav" aria-label="main navigation">
        {navItems.map(({ text, icon, subNav }, index) => (
          <React.Fragment key={text}>
            <ListItemStyled
              selected={selectedIndex === index && selectedSubIndex === null}
              onClick={() => handleClick(index)}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
              {subNav && (open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemStyled>
            {subNav && (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {subNav.map((subItem, subIndex) => (
                    <ListItemStyled
                      key={subItem.text}
                      selected={selectedSubIndex === subIndex}
                      onClick={() =>
                        handleSubItemClick(subItem.path || "", subIndex)
                      }
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={subItem.text} />
                    </ListItemStyled>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      <Divider />
    </StyledDrawer>
  );
};

export default SideNav;
