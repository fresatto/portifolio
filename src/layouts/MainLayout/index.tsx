import React from "react";
import { Outlet } from "react-router";
import BG from "../../components/Bg";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import { Content } from "./styles";

const MainLayout: React.FC = () => {
  return (
    <Content>
      <Header />
      <Sidebar />
      <section className="content">
        <Outlet />
      </section>
    </Content>
  );
};

export default MainLayout;
