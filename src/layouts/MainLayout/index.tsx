import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import { Content } from "./styles";

const MainLayout: React.FC = () => {
  return (
    <Content>
      <Header />
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </Content>
  );
};

export default MainLayout;
