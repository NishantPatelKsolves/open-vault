import PropTypes from "prop-types";
import { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { history } from "../../helper/history";
import { ROUTES_MENU } from "../../routes";
import { Logo } from "../../assets";
import Accordion from "./Accordion";

export const Container = styled.div`
  height: 100%;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: "#FFF7ED";
  position: relative;
  z-index: 100;
  width: 280px;
  border-right: 1px solid #d6cfcf;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const List = styled.ul`
  max-height: calc(100vh - 250px);
  width: 100%;
  margin-top: 20px;
  padding-left: 0;
  overflow-y: auto;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem 32px;
  font-size: 16px;
  font-weight: 550;
  color: ${({ $active }) => ($active ? "#FFFFFF" : "#444445")};
  background-color: ${({ $active }) => ($active ? "#F49200" : "transparent")};
  cursor: pointer;
  gap: 20px;
  border-radius: 8px;
  ${({ $active }) =>
    $active &&
    `
      background-color: #F49200; 
      border-radius: 8px; 
      padding: 12px 24px; 
      gap: 12px; 
      position: relative; 
      margin-left: 20px;
      margin-right: 20px;
    `}

  .nav-text {
    color: ${({ $active }) => ($active ? "#FFFFFF" : "#757575")};
  }
`;

export const Divider = styled.div`
  width: 220px;
  height: 2px;
  border-radius: 2px;
  background-color: #e0e0e0;
  margin: 16px 0;
`;

export const SubMenu = styled.div`
  padding-left: 16px;
  position: relative;

  ${Item} {
    font-size: 13px;
    line-height: 16px;
    font-weight: 550;
    color: #757575;
    gap: 10px;
  }
`;

const StyleButton = styled.div`
  cursor: pointer;
`;

const LOGO_HEIGHT = 80;

export const Sidebar = ({ route }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname || !route) return;
    function extractFirstPart(path) {
      const parts = path.split("/");
      return parts[1] || "";
    }
    if (pathname !== route) {
      history.push(`/${extractFirstPart(pathname)}`);
    }
  }, [pathname, route]);

  const handleRoute = (path, hasSubMenu) => {
    if (hasSubMenu) return;

    history.push(`/${path}`);
  };

  const handleSubmenuRoute = (path) => {
    history.push(`/${path}`);
  };

  const getFiltered = (item) => {
    return !item.hidden && !item.isSideBarHidden;
  };

  const getImage = () => {
    const handleClick = () => {
      history.push("/dashboard");
    };

    return (
      <StyleButton onClick={handleClick}>
        <Logo width={200} height={LOGO_HEIGHT} />
      </StyleButton>
    );
  };

  return (
    <Container>
      {getImage()}
      <Divider />
      <List className="sidebar-navigation">
        {ROUTES_MENU.filter(getFiltered).map((item) => {
          const active = pathname.startsWith(`/${item.path}`);
          const hasSubMenu = item.pages && item.pages.length > 1;

          return (
            <div key={item.path}>
              {hasSubMenu ? (
                <Accordion
                  name={item.name}
                  path={item.path}
                  pages={item.pages}
                  activePath={pathname}
                  onSubmenuClick={handleSubmenuRoute}
                  icon={item.icon}
                />
              ) : (
                <Item
                  $active={active}
                  onClick={() => handleRoute(item.path, hasSubMenu)}
                  path={item.path}
                  data-tooltip-id={`tooltip-${item.path}`}
                >
                  <item.icon />
                  <span className="nav-text">{item.name}</span>
                </Item>
              )}
              <ReactTooltip
                id={`tooltip-${item.path}`}
                place="right"
                content={item.name}
                style={{
                  whiteSpace: "normal",
                  zIndex: 9999,
                }}
              />
            </div>
          );
        })}
      </List>
    </Container>
  );
};

Sidebar.propTypes = {
  route: PropTypes.string,
};

Item.propTypes = {
  $active: PropTypes.bool,
  path: PropTypes.string,
};

Item.defaultProps = {
  $active: false,
};
