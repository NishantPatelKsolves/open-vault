import PropTypes from "prop-types";

export const DashboardIcon = ({
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
      d="M7.51699 2.36664L3.02533 5.86664C2.27533 6.44997 1.66699 7.69164 1.66699 8.63331V14.8083C1.66699 16.7416 3.24199 18.325 5.17533 18.325H14.8253C16.7587 18.325 18.3337 16.7416 18.3337 14.8166V8.74997C18.3337 7.74164 17.6587 6.44997 16.8337 5.87497L11.6837 2.26664C10.517 1.44997 8.64199 1.49164 7.51699 2.36664Z"
      stroke="#757575"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14.9917V12.4917"
      stroke="#757575"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

DashboardIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
