import PropTypes from "prop-types";

export const OpenEye = ({
  width = 24,
  height = 24,
  fill = "none",
  stroke = "#292D32",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

OpenEye.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};