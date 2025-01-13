import styled from "styled-components";
import { DownArrowIcon, UpArrowIcon } from "../../../assets/icons";
import PropTypes from "prop-types";

const CollapsibleWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin: 18px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  background: rgba(255, 255, 255, 1);
  height: 60px;
  top: 273px;
  left: 290px;
  gap: 0px;
  border-radius: 10px 10px 0px 0px;
  opacity: 0px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 27.24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #444;
`;

const ToggleButton = styled.div`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;

  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  top: 345px;
  left: 290px;
  gap: 0px;
  border-radius: 0px 0px 10px 10px;
  opacity: 0px;
  background: rgba(255, 255, 255, 1);

  padding: 0 20px 20px 20px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const IconButton = styled.button`
  min-width: 32px;
  min-height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #fff;
  border: 1px solid #ccc;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media (max-width: 1025px) {
    min-width: 24px;
    min-height: 24px;
    border-width: 0.5px;
    & svg {
      width: 24px;
      height: 24px;
    }
  }
  &.pencil-icon-schedule-list {
    @media (max-width: 1025px) {
      min-width: 24px;
      min-height: 24px;
      border-width: 0.5px;
      & svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

export const Collapsible = ({
  title,
  children,
  isTableOpen,
  toggleCollapsible,
}) => {
  return (
    <CollapsibleWrapper>
      <Header>
        <Title>{title}</Title>
        <div className="d-flex gap-3 w-70">
          <ToggleButton aria-expanded={isTableOpen} onClick={toggleCollapsible}>
            {isTableOpen ? (
              <IconButton>
                <UpArrowIcon />
              </IconButton>
            ) : (
              <IconButton>
                <DownArrowIcon />
              </IconButton>
            )}
          </ToggleButton>
        </div>
      </Header>
      {isTableOpen && <Content>{children}</Content>}
    </CollapsibleWrapper>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  isTableOpen: PropTypes.bool,
  toggleCollapsible: PropTypes.func,
};
