/*eslint-disable*/
import PropTypes from "prop-types";
import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

import { CrossIcons } from "../../../assets";
import { theme } from "../../../styles";
import Button from "./Button";
import SvgButton from "./SvgButton";

const Title = styled.h5`
  color: ${(props) => props.theme.colors.darker};
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 22px; /* Updated size */
  line-height: 13px;
`;

const CloseButton = styled(SvgButton)`
  width: 30px;
  height: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 26px 18px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 28px; /* Increase heading size */
  margin-bottom: 20px;
  margin-top: 15px;
`;

const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 26px  18px 26px;
`;

const Footer = styled.div`
  padding: ${(props) => (props.hasSingleButton ? "32px" : "18px")} 18px;
  display: flex;
  gap: 1rem;
  align-self: ${(props) => props.footerAlign};
  flex-wrap: wrap;

  & > * {
    flex: 1;
  }
`;

const CloseIcon = styled(CrossIcons)`
  padding: 5px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.white};
`;

ReactModal.setAppElement("#root");

export const Modal = ({
  title,
  children,
  isOpen,
  closeIcon = true,
  onRequestClose,
  loading = false,
  secondaryButtonText = "",
  primaryButtonText = "",
  primaryButtonDisabled = false,
  onSubmit = () => null,
  onSecondarySubmit,
  secondaryButtonProps = {},
  footerAlign = "center",
  contentStyles,
  tertiaryButton = false,
  tertiaryButtonConfig = {
    tertiaryButtonTest: "",
    tertiaryButtonSubmit: () => null,
    tertiaryButtonDisable: false,
    tertiaryButtonLoading: false,
  },
  tertiaryButtonLoading,
  thirdVarint = false,
}) => {
  const styleObject = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999,
      backgroundColor: theme.colors.shadow,
    },
    content: {
      padding: 0,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "none",
      overflow: "hidden",
      borderRadius: 16,
      minWidth: "30%",
      maxWidth: "546px",
      width: "90%",
      maxHeight: "90%",
      transform: "translate(-50%, -50%)",
      backgroundColor: theme.colors.white,
      zIndex: 9999,
      // boxShadow: `0px 4px 18px 0px ${theme.colors.shadow}`,
      boxShadow: "none !important",
      display: "flex",
      flexDirection: "column",
      ...contentStyles,
    },
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(); // Prevent the default action when Enter is pressed
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={styleObject}
    >
      <form
        className="d-flex flex-column overflow-auto"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        onKeyDown={handleKeyDown}
      >
        <Header>
          <Title className="mb-0">{title}</Title>
          {closeIcon && (
            <CloseButton icon={<CloseIcon />} onClick={onRequestClose} />
          )}
        </Header>
        <Body className="modal-body">{children}</Body>
        {(primaryButtonText || secondaryButtonText || tertiaryButton) && (
          <Footer
            footerAlign={footerAlign}
            hasSingleButton={!secondaryButtonText}
          >
            {secondaryButtonText && (
              <Button
                type="button"
                variant={thirdVarint ? "tertiary" : "secondary"}
                onClick={onSecondarySubmit || onRequestClose}
                disabled={secondaryButtonProps.disabled}
                {...secondaryButtonProps}
              >
                {secondaryButtonText}
              </Button>
            )}
            {tertiaryButton && tertiaryButtonConfig && (
              <Button
                type="button"
                variant={thirdVarint ? "tertiary" : "secondary"}
                onClick={tertiaryButtonConfig.tertiaryButtonSubmit}
                disabled={tertiaryButtonConfig.disabled}
                loading={tertiaryButtonConfig.tertiaryButtonLoading}
                {...tertiaryButtonConfig}
              >
                {tertiaryButtonConfig.tertiaryButtonTest}
              </Button>
            )}
            {primaryButtonText && (
              <Button
                type="submit"
                loading={loading}
                data-dismiss="modal"
                disabled={primaryButtonDisabled}
                size={!secondaryButtonText ? "lg" : "md"}
              >
                {primaryButtonText}
              </Button>
            )}
          </Footer>
        )}
      </form>
    </ReactModal>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.oneOf(["lg", "md", "sm"]),
  onSubmit: PropTypes.func,
  secondaryButtonText: PropTypes.string,
  primaryButtonDisabled: PropTypes.bool,
  primaryButtonText: PropTypes.string,
  loading: PropTypes.bool,
  onSecondarySubmit: PropTypes.func,
  secondaryButtonProps: PropTypes.object,
  contentStyles: PropTypes.object,
  footerAlign: PropTypes.string,
  tertiaryButton: PropTypes.bool,
  tertiaryButtonConfig: PropTypes.shape({
    tertiaryButtonTest: PropTypes.string,
    tertiaryButtonSubmit: PropTypes.func,
    tertiaryButtonDisable: PropTypes.bool,
    tertiaryButtonLoading: PropTypes.bool,
  }),
};
