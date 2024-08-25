import React from "react";
import { CssBaseline } from "@mui/material";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import MainContent from "../MainContent";
import { AppContainer, MainContentContainer } from "./AppLayoutStyles";

const AppLayout: React.FC = () => {
  return (
    <AppContainer>
      <CssBaseline />
      <SideNav />
      <MainContentContainer>
        <TopNav />
        <MainContent />
      </MainContentContainer>
    </AppContainer>
  );
};

export default AppLayout;
