import React from "react";
import { Outlet } from "react-router-dom";
import { MainContentContainer } from "./MainContentStyles";

const MainContent: React.FC = () => {
  return (
    <MainContentContainer component="main">
      <Outlet />
    </MainContentContainer>
  );
};

export default MainContent;
