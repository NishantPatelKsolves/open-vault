import PropTypes from "prop-types";

export const FbcMasterIcon = ({
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
      d="M11.3066 4.11328C12.64 5.03995 13.56 6.51328 13.7466 8.21328"
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.32666 8.24673C2.49999 6.5534 3.40666 5.08006 4.72666 4.14673"
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.45996 13.96C6.23329 14.3533 7.11329 14.5733 8.03996 14.5733C8.93329 14.5733 9.77329 14.3733 10.5266 14.0066"
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.03986 5.13342C9.06343 5.13342 9.89319 4.30366 9.89319 3.28009C9.89319 2.25652 9.06343 1.42676 8.03986 1.42676C7.01629 1.42676 6.18652 2.25652 6.18652 3.28009C6.18652 4.30366 7.01629 5.13342 8.03986 5.13342Z"
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.22003 13.2799C4.2436 13.2799 5.07337 12.4501 5.07337 11.4266C5.07337 10.403 4.2436 9.57324 3.22003 9.57324C2.19646 9.57324 1.3667 10.403 1.3667 11.4266C1.3667 12.4501 2.19646 13.2799 3.22003 13.2799Z"
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.7801 13.2799C13.8037 13.2799 14.6334 12.4501 14.6334 11.4266C14.6334 10.403 13.8037 9.57324 12.7801 9.57324C11.7565 9.57324 10.9268 10.403 10.9268 11.4266C10.9268 12.4501 11.7565 13.2799 12.7801 13.2799Z"
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

FbcMasterIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
