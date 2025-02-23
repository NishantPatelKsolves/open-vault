import PropTypes from "prop-types";

export const ReportsIcon = ({
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
      d="M6.66699 10.1665H12.5003"
      stroke="#757575"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66699 13.5H10.317"
      stroke="#757575"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.33366 5.00008H11.667C13.3337 5.00008 13.3337 4.16675 13.3337 3.33341C13.3337 1.66675 12.5003 1.66675 11.667 1.66675H8.33366C7.50033 1.66675 6.66699 1.66675 6.66699 3.33341C6.66699 5.00008 7.50033 5.00008 8.33366 5.00008Z"
      stroke="#757575"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 3.3501C16.1083 3.5001 17.5 4.5251 17.5 8.33343V13.3334C17.5 16.6668 16.6667 18.3334 12.5 18.3334H7.5C3.33333 18.3334 2.5 16.6668 2.5 13.3334V8.33343C2.5 4.53343 3.89167 3.5001 6.66667 3.3501"
      stroke="#757575"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ReportsIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
