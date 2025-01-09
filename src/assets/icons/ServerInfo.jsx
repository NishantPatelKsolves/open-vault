import PropTypes from "prop-types";

export const ServerInfoIcon = ({
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
      d="M5.99967 14.6666H9.99967C11.9997 14.6666 12.6663 13.9999 12.6663 11.9999V3.99992C12.6663 1.99992 11.9997 1.33325 9.99967 1.33325H5.99967C3.99967 1.33325 3.33301 1.99992 3.33301 3.99992V11.9999C3.33301 13.9999 3.99967 14.6666 5.99967 14.6666Z"
      stroke="#757575"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z"
      stroke="#757575"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"
      stroke="#757575"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ServerInfoIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
