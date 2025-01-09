import styled from "styled-components";

const FooterContainer = styled.footer`
  width: calc(100% - 260px); /* Exclude the width of the sidebar */
  height: 54px;
  background-color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const FooterText = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1%;
  color: #96938c;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2015 - 2016 All Rights Reserved - :: Powered by CableLabs® v3.0-9
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
