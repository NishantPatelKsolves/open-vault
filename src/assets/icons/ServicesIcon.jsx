import PropTypes from "prop-types";

export const ServicesIcon = ({
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
      d="M14.167 8.33341H15.8337C17.5003 8.33341 18.3337 7.50008 18.3337 5.83341V4.16675C18.3337 2.50008 17.5003 1.66675 15.8337 1.66675H14.167C12.5003 1.66675 11.667 2.50008 11.667 4.16675V5.83341C11.667 7.50008 12.5003 8.33341 14.167 8.33341Z"
      stroke="#757575"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.16699 18.3334H5.83366C7.50033 18.3334 8.33366 17.5001 8.33366 15.8334V14.1667C8.33366 12.5001 7.50033 11.6667 5.83366 11.6667H4.16699C2.50033 11.6667 1.66699 12.5001 1.66699 14.1667V15.8334C1.66699 17.5001 2.50033 18.3334 4.16699 18.3334Z"
      stroke="#757575"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.00033 8.33341C6.84127 8.33341 8.33366 6.84103 8.33366 5.00008C8.33366 3.15913 6.84127 1.66675 5.00033 1.66675C3.15938 1.66675 1.66699 3.15913 1.66699 5.00008C1.66699 6.84103 3.15938 8.33341 5.00033 8.33341Z"
      stroke="#757575"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.0003 18.3334C16.8413 18.3334 18.3337 16.841 18.3337 15.0001C18.3337 13.1591 16.8413 11.6667 15.0003 11.6667C13.1594 11.6667 11.667 13.1591 11.667 15.0001C11.667 16.841 13.1594 18.3334 15.0003 18.3334Z"
      stroke="#757575"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ServicesIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
