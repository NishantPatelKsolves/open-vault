import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "../components/CustomGrid/Sidebar";
import Footer from "../components/CustomGrid/Footer";
import { Header } from "../components/CustomGrid/Header"; // Assuming the Header is imported from its correct location

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const MainContent = styled.div`
  flex-grow: 1; /* Allow MainContent to take up all available space */
  display: flex; /* Arrange Sidebar and Content side-by-side */
`;

const SidebarContainer = styled.div`
  width: 280px; /* Sidebar width */
  background-color: #ffffff; /* Ensure the sidebar remains white */
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d6cfcf;
  border-right: 1px solid #d6cfcf;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 100;
`;

const Content = styled.main`
  flex-grow: 1; /* Fill the remaining horizontal space */
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  flex: 1; /* Take up remaining vertical space within Content */
  padding: 24px;
  overflow-y: auto;
`;

const AuthGuard = () => {
  console.log(window.location.pathname);
  return (
    <Container>
      <Header />

      <MainContent>
        {/* Sidebar occupies its own space */}
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        {/* Content occupies the remaining space */}
        <Content>
          <Wrapper>
            {/* Outlet renders the routed child components */}
            <Outlet />
          </Wrapper>
        </Content>
      </MainContent>
      {/* Footer spans below content, excluding sidebar */}
      <Footer />
    </Container>
  );
};

export default AuthGuard;
