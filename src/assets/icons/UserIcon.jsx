import PropTypes from "prop-types";

export const UserIcon = ({
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
      d="M10.1002 10.65C10.0418 10.6417 9.96685 10.6417 9.90018 10.65C8.43351 10.6 7.26685 9.39998 7.26685 7.92498C7.26685 6.41665 8.48351 5.19165 10.0002 5.19165C11.5085 5.19165 12.7335 6.41665 12.7335 7.92498C12.7252 9.39998 11.5668 10.6 10.1002 10.65Z"
      stroke="#757575"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.6164 16.15C14.1331 17.5084 12.1664 18.3334 9.99972 18.3334C7.83306 18.3334 5.86639 17.5084 4.38306 16.15C4.46639 15.3667 4.96639 14.6 5.85806 14C8.14139 12.4834 11.8747 12.4834 14.1414 14C15.0331 14.6 15.5331 15.3667 15.6164 16.15Z"
      stroke="#757575"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0001 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6025 1.66675 10.0001 1.66675C5.39771 1.66675 1.66675 5.39771 1.66675 10.0001C1.66675 14.6025 5.39771 18.3334 10.0001 18.3334Z"
      stroke="#757575"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

UserIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
