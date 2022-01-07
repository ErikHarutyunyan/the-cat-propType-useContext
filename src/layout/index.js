import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./Layout.styled";

import { Header } from "../components/Header";
import { Main } from "../components/Main/";
import { Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header>
        <SideBar />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <div></div>
      </Footer>
    </LayoutWrapper>
  );
};

export { Layout };
