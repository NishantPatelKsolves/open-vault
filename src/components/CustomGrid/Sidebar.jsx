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
  width: 280px;
  border-right: 1px solid #d6cfcf; /* Added right border */
  border-top-right-radius: 12px; /* Added top-right radius */
  border-bottom-right-radius: 12px; /* Added bottom-right radius */

  .logo-small {
    display: none;
  }

  .btn-hamburger {
    background: #fff !important;
    border: 1px solid #e9e0e0;
    width: 30px;
    height: 30px;
    padding: 0px;
    margin-top: 5px;
    &:hover {
      background: #fff !important;
    }
  }
  @media (max-width: 992px) {
    position: fixed;
    transition: 0.3s;
    z-index: 99;
    left: -281px;
    &.menuOpen {
      left: 0px;
    }
    button {
      display: block;
      position: absolute;
      margin-left: calc(100% + 55px);
    }
  }
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
  color: ${({ active }) =>
    active ? "#FFFFFF" : "#444445"}; /* Default color */
  background-color: ${({ active }) =>
    active ? "transparent" : "transparent"}; /* Transparent by default */
  cursor: pointer;
  gap: 20px;
  border-radius: 8px;

  // Create the oval when active
  ${({ active }) =>
    active &&
    `
      background-color: #F49200; /* Set the orange color */
      border-radius: 8px; /* Oval shape */
      padding: 12px 24px; /* Add padding to wrap around both icon and text */
      gap: 12px; /* Space between icon and text */
      position: relative; /* To allow pseudo-elements to be positioned correctly */
      margin-left: 20px; /* Add left margin for space */
      margin-right: 20px; /* Add right margin for space */
    `}

  // Create the top and bottom lines with curved ends
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background-color: #f49200; /* Set color to the same orange */
    border-radius: 50px; /* Curved ends for the lines */
    z-index: -1;
  }

  &::before {
    top: 0; /* Line above the item */
    left: 20px; /* Add space on the left side of the oval */
    right: 20px; /* Add space on the right side of the oval */
  }

  &::after {
    bottom: 0; /* Line below the item */
    left: 20px; /* Add space on the left side of the oval */
    right: 20px; /* Add space on the right side of the oval */
  }

  // Label color styling when active
  .nav-text {
    color: ${({ active }) =>
      active ? "#FFFFFF" : "#757575"}; /* White when active, #757575 when not */
  }

  @media screen and (max-width: 1400px) {
    font-size: 14px !important;
  }
`;

export const Divider = styled.div`
  width: 220px;
  height: 2px;
  border-radius: 2px;
  background-color: #e0e0e0; /* You can adjust the color as needed */
  margin: 16px 0; /* Add spacing before and after */
`;
export const SubMenu = styled.div`
  padding-left: 16px; /* Reduced indentation for submenu */

  ${Item} {
    font-size: 13px;
    line-height: 16px;
    font-weight: 550;
    color: #757575;
    gap: 10px; /* Reduced gap */
  }
`;
const StyleButton = styled.div`
  cursor: pointer;
`;

const LOGO_HEIGHT = 80;

export const Sidebar = ({ handleOpenSidebar, isOpenSidebar, route }) => {
  const { pathname } = useLocation();

  // Handle route change for submenus only
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
    // Prevent routing if the item has a submenu
    if (hasSubMenu) return;

    history.push(`/${path}`);
  };

  const handleSubmenuRoute = (path) => {
    history.push(`/${path}`);
  };

  // Show all items (no filtering)
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
    <Container className={`${isOpenSidebar ? "menuOpen" : ""}`}>
      <button
        className="btn btn-hamburger d-lg-none"
        onClick={() => handleOpenSidebar()}
      >
        <img alt="menu" src="/img/Frame.png" />
      </button>
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
                  icon={item.icon} // Pass the icon to Accordion
                  // New function for submenu item click
                />
              ) : (
                <Item
                  active={active}
                  onClick={() => handleRoute(item.path, hasSubMenu)} // Main item routing
                  path={item.path}
                  data-tooltip-id={`tooltip-${item.path}`}
                >
                  <item.icon />
                  <span className="nav-text">{item.name}</span>
                </Item>
              )}
              {isOpenSidebar && (
                <ReactTooltip
                  id={`tooltip-${item.path}`}
                  place="right"
                  content={item.name}
                  style={{
                    whiteSpace: "normal",
                    zIndex: 9999,
                  }}
                />
              )}
            </div>
          );
        })}
      </List>
    </Container>
  );
};

Sidebar.propTypes = {
  route: PropTypes.string,
  handleRoute: PropTypes.func,
  handleOpenSidebar: PropTypes.func,
  isOpenSidebar: PropTypes.bool,
  loading: PropTypes.bool,
};

Item.propTypes = {
  active: PropTypes.bool,
  path: PropTypes.string,
};
