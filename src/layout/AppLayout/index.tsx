import React from "react";
import { CssBaseline } from "@mui/material";
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
  return (
    <AppContainer>
      <CssBaseline />
      <TopNavContainer>
        <TopNav />
      </TopNavContainer>
      <MainContentContainer>
        <StyledSideNav>
          <SideNav />
        </StyledSideNav>
        <StyledMainContent>
          <MainContent />
        </StyledMainContent>
      </MainContentContainer>
    </AppContainer>
  );
};

export default AppLayout;
