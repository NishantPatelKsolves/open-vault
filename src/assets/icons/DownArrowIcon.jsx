import PropTypes from "prop-types";

export const DownArrowIcon = ({
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
      d="M13.28 5.93994L8.9333 10.2866C8.41997 10.7999 7.57997 10.7999 7.06664 10.2866L2.71997 5.93994"
      stroke="#757575"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

DownArrowIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
