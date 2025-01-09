import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "../components/CustomGrid/Sidebar";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #ffffff;
`;

const Content = styled.main`
  flex-grow: 1;
  height: 100%;
  position: relative;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  height: calc(100% -78px);
  width: 100%;
  padding: 24px;
  overflow-y: auto;
`;

const AuthGuard = () => {
  return (
    <Container>
      {/* Sidebar is included in the layout */}
      <Sidebar />
      <Content>
        <Wrapper>
          {/* Outlet renders the routed child components */}
          <Outlet />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default AuthGuard;
