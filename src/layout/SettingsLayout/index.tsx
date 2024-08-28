import React from "react";
import { Outlet } from "react-router-dom";

const SettingsLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SettingsLayout;
