import PropTypes from "prop-types";

export const HelpIcon = ({
  width = 20,
  height = 20,
  //   color = "#444445",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.1667 15.3583H10.8334L7.12507 17.8249C6.57507 18.1916 5.83341 17.8 5.83341 17.1333V15.3583C3.33341 15.3583 1.66675 13.6916 1.66675 11.1916V6.19157C1.66675 3.69157 3.33341 2.0249 5.83341 2.0249H14.1667C16.6667 2.0249 18.3334 3.69157 18.3334 6.19157V11.1916C18.3334 13.6916 16.6667 15.3583 14.1667 15.3583Z"
      stroke="#757575"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99977 9.46655V9.29159C9.99977 8.72492 10.3498 8.4249 10.6998 8.18324C11.0415 7.9499 11.3831 7.64991 11.3831 7.09991C11.3831 6.33325 10.7664 5.71655 9.99977 5.71655C9.2331 5.71655 8.61646 6.33325 8.61646 7.09991"
      stroke="#757575"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99617 11.4584H10.0037"
      stroke="#757575"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

HelpIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
