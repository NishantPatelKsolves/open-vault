import PropTypes from "prop-types";

export const LogoutIcon = ({
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
      d="M7.4165 6.29995C7.67484 3.29995 9.2165 2.07495 12.5915 2.07495H12.6998C16.4248 2.07495 17.9165 3.56662 17.9165 7.29162V12.725C17.9165 16.45 16.4248 17.9416 12.6998 17.9416H12.5915C9.2415 17.9416 7.69984 16.7333 7.42484 13.7833"
      stroke="#757575"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.66675 10H12.4001"
      stroke="#757575"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5415 7.20825L13.3332 9.99992L10.5415 12.7916"
      stroke="#757575"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

LogoutIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
