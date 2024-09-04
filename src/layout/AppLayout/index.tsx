import React, { useState } from "react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import MainContent from "../MainContent";
import {
  AppContainer,
  MainContentContainer,
  StyledSideNav,
  StyledMainContent,
  TopNavContainer,
} from "./AppLayoutStyles";

const AppLayout: React.FC = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme: any) =>
    theme.breakpoints.between("sm", "md")
  );

  const handleToggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <AppContainer>
      <CssBaseline />
      <TopNavContainer>
        <TopNav onToggleSideNav={handleToggleSideNav} />
      </TopNavContainer>
      <MainContentContainer>
        {(isMobile || isSideNavOpen) && (
          <StyledSideNav isTablet={isTablet}>
            <SideNav isSideNavOpen={isSideNavOpen} />
          </StyledSideNav>
        )}
        <StyledMainContent>
          <MainContent />
        </StyledMainContent>
      </MainContentContainer>
    </AppContainer>
  );
};

export default AppLayout;
