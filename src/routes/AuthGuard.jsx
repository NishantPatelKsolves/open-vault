import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "../components/CustomGrid/Sidebar";
import Footer from "../components/CustomGrid/Footer";
import { Header } from "../components/CustomGrid/Header";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const SidebarContainer = styled.div`
  width: 280px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d6cfcf;
  border-right: 1px solid #d6cfcf;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 100;
`;

const Content = styled.main`
  flex-grow: 1;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  padding: 24px;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const AuthGuard = () => {
  // console.log(window.location.pathname);
  return (
    <Container>
      <Header />

      <MainContent>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <Content>
          <Outlet />
        </Content>
      </MainContent>
      <Footer />
    </Container>
  );
};

export default AuthGuard;
