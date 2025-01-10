import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { DownArrowIcon, LogoutIcon, UserIcon, HelpIcon } from "../../assets";
import { useLocation } from "react-router-dom";
import { ROUTE_NAME_MAP } from "../../helper/constants";
import { history } from "../../helper/history";

const PlaceholderIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #ff7a00;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
`;

const Container = styled.header`
  height: 65px;
  width: 100%;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid #ccc;
  z-index: 10;
  position: fixed;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 40px;
`;

const Name = styled.span`
  font-family: "Nato Sans", sans-serif;
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`;

const Role = styled.span`
  font-family: "Nato Sans", sans-serif;
  color: #757575;
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;
`;

const DropdownIconContainer = styled.div`
  cursor: pointer;
`;

const List = styled.div`
  width: 150px;
  position: absolute;
  top: 104%;
  right: 0;
  z-index: 2;
  border-radius: 20px;
  border: 1px solid #ccc;
  display: ${(props) => (props.$show ? "block" : "none")};
  background: #fff;
  box-shadow: 0px 0px 5px 0px #00000033;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  color: #444445;
  cursor: pointer;

  &:hover {
    background-color: #ebebf0;
  }
`;

const Option = styled.span`
  margin-left: 10px;
  color: #757575;
  font-family: "Nato Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

const Title = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 550;
  line-height: 28.1px;
  letter-spacing: 1%;
  color: #081c3a;
  margin-left: 280px;
`;

const ProfileDropdown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    {
      label: "My Account",
      icon: <UserIcon />,
      onClick: () => {
        history.push("/UserAccount");
        setShowMenu(false);
      },
    },
    {
      label: "Help",
      icon: <HelpIcon />,
      onClick: () => {
        setShowMenu(false);
      },
    },
    {
      label: "Logout",
      icon: <LogoutIcon />,
      onClick: () => {
        localStorage.clear();
        setShowMenu(false);
      },
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ProfileContainer ref={dropdownRef}>
      <PlaceholderIcon>JD</PlaceholderIcon>
      <ProfileDetails>
        <Name>John Doe</Name>
        <Role>User</Role>
      </ProfileDetails>
      <DropdownIconContainer onClick={() => setShowMenu(!showMenu)}>
        <DownArrowIcon />
      </DropdownIconContainer>
      <List $show={showMenu}>
        {options.map((item, idx) => (
          <Item key={idx} onClick={item.onClick}>
            <span>{item.icon}</span>
            <Option>{item.label}</Option>
          </Item>
        ))}
      </List>
    </ProfileContainer>
  );
};

export const Header = () => {
  const location = useLocation();
  const route = location.pathname.split("/")[1];

  const routeName =
    ROUTE_NAME_MAP[route] || route.replace(/([A-Z])/g, " $1").trim();

  return (
    <Container>
      <Title>{routeName}</Title>
      <ProfileDropdown />
    </Container>
  );
};
