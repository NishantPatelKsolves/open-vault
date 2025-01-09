import PropTypes from "prop-types";

export const UpArrowIcon = ({
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
      d="M13.2797 10.0601L8.93306 5.71339C8.41973 5.20006 7.57973 5.20006 7.06639 5.71339L2.71973 10.0601"
      stroke="#757575"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

UpArrowIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
