import PropTypes from "prop-types";

export const InfoCircleIcon = ({
  width = 19,
  height = 19,
  fill = "none",
  stroke = "#F49200",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.57065 6.86949V7.61406M9.57065 9.47547V12.826M9.57065 17.2934C13.6828 17.2934 17.0163 13.9599 17.0163 9.84775C17.0163 5.73563 13.6828 2.4021 9.57065 2.4021C5.45853 2.4021 2.125 5.73563 2.125 9.84775C2.125 13.9599 5.45853 17.2934 9.57065 17.2934Z"
        stroke={stroke}
        strokeWidth="1.11685"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
InfoCircleIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};
