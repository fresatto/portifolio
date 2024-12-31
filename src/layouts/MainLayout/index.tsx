import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";

import { Content } from "./styles";

const MainLayout: React.FC = () => {
  return (
    <Content>
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </Content>
  );
};

export default MainLayout;
