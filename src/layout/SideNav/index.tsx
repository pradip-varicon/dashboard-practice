import React from "react";
import {
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  useMediaQuery,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Assessment";
import SalesOrderIcon from "@mui/icons-material/ReceiptLong";
import InventoryIcon from "@mui/icons-material/Inventory";
import SuppliersIcon from "@mui/icons-material/Business";
import PurchaseOrderIcon from "@mui/icons-material/ShoppingBag";
import DeliveriesIcon from "@mui/icons-material/LocalMall";
import CustomersIcon from "@mui/icons-material/PeopleOutline";
import InvoicesIcon from "@mui/icons-material/Receipt";
import ReportsIcon from "@mui/icons-material/BarChart";
import AnalyticsIcon from "@mui/icons-material/Insights";
import SettingsIcon from "@mui/icons-material/Settings";
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
  { text: "Overview", icon: <DashboardIcon />, path: "/overview" },
  { text: "Sales Orders", icon: <SalesOrderIcon />, path: "/sales-orders" },
  { text: "Inventory", icon: <InventoryIcon />, path: "/inventory" },
  { text: "Suppliers", icon: <SuppliersIcon />, path: "/suppliers" },
  {
    text: "Purchase Orders",
    icon: <PurchaseOrderIcon />,
    path: "/purchase-orders",
  },
  { text: "Deliveries", icon: <DeliveriesIcon />, path: "/deliveries" },
  { text: "Customers", icon: <CustomersIcon />, path: "/customers" },
  { text: "Invoices", icon: <InvoicesIcon />, path: "/invoices" },
  { text: "Reports", icon: <ReportsIcon />, path: "/reports" },
  { text: "Analytics", icon: <AnalyticsIcon />, path: "/analytics" },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    subNav: [
      { text: "Product Categories", path: "/settings/product-categories" },
      { text: "User Roles", path: "/settings/user-roles" },
      { text: "Tax Settings", path: "/settings/tax-settings" },
      { text: "Company Information", path: "/settings/company-info" },
      { text: "Billing & Invoices", path: "/settings/billing-invoices" },
    ],
  },
];

const SideNav: React.FC<{ isSideNavOpen: boolean }> = ({ isSideNavOpen }) => {
  const {
    open,
    selectedIndex,
    selectedSubIndex,
    handleClick,
    handleSubItemClick,
  } = useSideNav(navItems);

  const isTablet = useMediaQuery((theme: any) =>
    theme.breakpoints.between("sm", "md")
  );

  return (
    <StyledDrawer variant="permanent" isTablet={isTablet}>
      <StyledToolbar>
        <LogoContainer>
          <img src={logoSrc} alt="Company Logo" height="40" />
        </LogoContainer>
      </StyledToolbar>

      <List component="nav" aria-label="main navigation">
        {navItems.map(({ text, icon, subNav }, index) => (
          <React.Fragment key={text}>
            <ListItemStyled
              selected={selectedIndex === index && selectedSubIndex === null}
              onClick={() => handleClick(index)}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              {isSideNavOpen && <ListItemText primary={text} />}
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
