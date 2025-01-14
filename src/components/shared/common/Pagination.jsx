import PropTypes from "prop-types";
import styled from "styled-components";
// import { GreaterArrowIcon, LessArrowIcon } from "../../assets";
import { theme } from "../../../styles";
import { CaretLeft, CaretRight } from "../../../assets/icons";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledButton = styled.button`
  height: 2rem;
  width: 2rem;
  border-radius: 4px;
  border: 2px solid
    ${(props) => (props.$active ? theme.colors.primary : theme.colors.border)};
  background-color: ${(props) =>
    props.$active ? theme.colors.primary : "transparent"};
  color: ${(props) =>
    props.$active ? theme.colors.white : theme.colors.darker};
  font-weight: normal;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 9px 13px; */

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.primary};

    & svg path {
      fill: ${theme.colors.white} !important;
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${theme.colors.border};
    border: 2px solid ${theme.colors.border};
    & svg path {
      fill: ${theme.colors.white} !important;
    }
  }
  & svg path {
    fill: ${theme.colors.border} !important;
  }
`;

const Pagination = ({
  page,
  count,
  setCurrentPage,
  itemsPerPage,
  setRowsPerPage,
}) => {
  // const itemsPerPage = 10;
  const totalPage = Math.ceil(count / itemsPerPage);

  const getPageRange = () => {
    const start = (page - 1) * itemsPerPage + 1;
    const end = Math.min(count, page * itemsPerPage);
    return `${start} - ${end}`;
  };

  const getPageNumbers = () => {
    const pageNumbers = [];

    if (page > 1) {
      pageNumbers.push(1);
    }
    if (page > 4) {
      pageNumbers.push("...");
    }

    if (page > 3) {
      pageNumbers.push(page - 2);
    }

    if (page > 2) {
      pageNumbers.push(page - 1);
    }

    pageNumbers.push(page);

    if (page < totalPage - 1) {
      pageNumbers.push(page + 1);
    }

    if (page < totalPage - 2) {
      pageNumbers.push(page + 2);
    }
    if (page < totalPage - 3) {
      pageNumbers.push("...");
    }

    if (page < totalPage) {
      pageNumbers.push(totalPage);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  const handlePrev = () => {
    if (page > 1) {
      setCurrentPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPage) {
      setCurrentPage(page + 1);
    }
  };

  const handlePageChange = (number) => {
    if (number !== "...") {
      setCurrentPage(number);
    }
  };

  return (
    <Container>
      <span>{`${getPageRange()} of ${count}`}</span>
      <span>
        <select
          name="itemsPerPage"
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => {
            return (
              <option value={i + 1} key={i}>
                {i + 1}
              </option>
            );
          })}
        </select>
      </span>
      <Flex>
        <StyledButton onClick={handlePrev} disabled={page === 1}>
          <CaretLeft />
        </StyledButton>
        {pageNumbers.map((number, index) => (
          <StyledButton
            key={index}
            onClick={() => handlePageChange(number)}
            size="sm"
            variant="secondary"
            $active={number === page || false}
          >
            {number}
          </StyledButton>
        ))}
        <StyledButton onClick={handleNext} disabled={page === totalPage}>
          <CaretRight />
        </StyledButton>
      </Flex>
    </Container>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  setRowsPerPage: PropTypes.func.isRequired,
};

export default Pagination;
