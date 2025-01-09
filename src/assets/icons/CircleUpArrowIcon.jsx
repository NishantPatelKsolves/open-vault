import PropTypes from "prop-types";

export const CircleUpArrowIcon = ({ width, height, fill, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15"
        cy="15"
        r="14.75"
        transform="matrix(1 0 0 -1 0 30)"
        fill="white"
        stroke="#9CA4AD"
        strokeWidth="0.5"
      />
      <path
        d="M16.5999 12.575L11.1666 7.14162C10.5249 6.49995 9.4749 6.49995 8.83324 7.14162L3.3999 12.575"
        stroke={stroke}
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CircleUpArrowIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};
