import PropTypes from "prop-types";

export const GeocodingIcon = ({
  width = 16,
  height = 16,
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
      d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.33324 2H5.9999C4.6999 5.89333 4.6999 10.1067 5.9999 14H5.33324"
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 2C11.3 5.89333 11.3 10.1067 10 14"
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 10.6667V10C5.89333 11.3 10.1067 11.3 14 10V10.6667"
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 6.00015C5.89333 4.70015 10.1067 4.70015 14 6.00015"
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

GeocodingIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
