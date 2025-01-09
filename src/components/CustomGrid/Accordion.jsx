import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DownArrowIcon, UpArrowIcon } from "../../assets";
import { Item, SubMenu } from "./Sidebar";
import React from "react";

const AccordionContainer = styled.div`
  margin-top: 10px;
`;

const AccordionItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionContent = styled.div`
  padding-left: 20px;
`;

const Accordion = ({
  name,
  path,
  pages,
  activePath,
  onClick,
  onSubmenuClick,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionItem onClick={toggleAccordion}>
        <Item
          active={activePath.startsWith(path)}
          onClick={() => onClick(path)}
        >
          {/* Render the icon here */}
          {icon && (
            <span className="icon-wrapper">{React.createElement(icon)}</span>
          )}
          <span className="nav-text">{name}</span>
        </Item>
        {isOpen ? <UpArrowIcon /> : <DownArrowIcon />}
      </AccordionItem>
      {isOpen && (
        <AccordionContent>
          <SubMenu>
            {pages.map((page) => (
              <Item
                key={page.path}
                active={activePath.startsWith(`/${page.path}`)}
                onClick={() => onSubmenuClick(page.path)}
              >
                {/* Render the icon in submenu items */}
                {page.icon ? (
                  <span className="icon-wrapper">
                    {React.createElement(page.icon)}
                  </span>
                ) : (
                  // Fallback to the parent's icon if the submenu item does not have its own icon
                  icon && (
                    <span className="icon-wrapper">
                      {React.createElement(icon)}
                    </span>
                  )
                )}
                <span className="nav-text">{page.path}</span>
              </Item>
            ))}
          </SubMenu>
        </AccordionContent>
      )}
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
  activePath: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onSubmenuClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType, // Correct prop type for an icon component
};

export default Accordion;
