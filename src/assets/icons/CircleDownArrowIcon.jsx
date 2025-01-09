import PropTypes from "prop-types";

export const CircleDownArrowIcon = ({ width, height, fill, stroke }) => {
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
        fill="white"
        stroke="#9CA4AD"
        strokeWidth="0.5"
      />
      <path
        d="M16.5999 7.42505L11.1666 12.8584C10.5249 13.5 9.4749 13.5 8.83324 12.8584L3.3999 7.42505"
        stroke={stroke}
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
CircleDownArrowIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};
