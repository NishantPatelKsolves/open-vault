import PropTypes from "prop-types";

export const SendGridIcon = ({
  width = 20,
  height = 20,
  //   color = "#444445",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6663 6.99992V10.3333C14.6663 12.6666 13.333 13.6666 11.333 13.6666H4.66634C2.66634 13.6666 1.33301 12.6666 1.33301 10.3333V5.66659C1.33301 3.33325 2.66634 2.33325 4.66634 2.33325H9.33301"
      stroke="#757575"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.66699 6L6.75366 7.66667C7.44033 8.21333 8.567 8.21333 9.25366 7.66667L10.0403 7.04"
      stroke="#757575"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.9997 5.33333C13.9201 5.33333 14.6663 4.58714 14.6663 3.66667C14.6663 2.74619 13.9201 2 12.9997 2C12.0792 2 11.333 2.74619 11.333 3.66667C11.333 4.58714 12.0792 5.33333 12.9997 5.33333Z"
      stroke="#757575"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

SendGridIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
