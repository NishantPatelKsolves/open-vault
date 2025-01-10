import styled from "styled-components";
import { InfoCircleIcon } from "../../../assets/icons";
import PropTypes from "prop-types";

const NoticeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 30rem;
  border-left: 5px solid #f5a623;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  color: #f5a623;
  font-size: 20px;
  display: flex;
`;

const NoticeText = styled.span`
  font-size: 16px;
  font-weight: normal;
  color: #333;
`;

const NoticeTitle = styled.strong`
  color: #f5a623;
  font-weight: bold;
  margin-right: 5px;
`;

export const ImportantNotice = ({ title, message }) => {
  return (
    <NoticeContainer>
      <IconWrapper>
        <InfoCircleIcon />
      </IconWrapper>
      <NoticeText>
        <NoticeTitle>{title}</NoticeTitle>
        {message}
      </NoticeText>
    </NoticeContainer>
  );
};

ImportantNotice.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};
