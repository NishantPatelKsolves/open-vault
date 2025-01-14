import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  svg {
    width: 24px; /* Adjust the icon size as needed */
    height: 24px;
  }
`;

const SvgButton = ({ icon, onClick, ...rest }) => (
  <Button onClick={onClick} {...rest}>
    {icon}
  </Button>
);

SvgButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SvgButton;
