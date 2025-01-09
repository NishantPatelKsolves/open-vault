import { useState, useEffect } from "react";
import { Routes as Router } from "react-router-dom";
import PropTypes from "prop-types";
import { history } from "../helper/history";

export const HistoryRouter = ({ children }) => {
  const [state, setState] = useState({
    location: history.location,
    previousLocation: null,
  });

  useEffect(() => {
    const unlisten = history.listen(({ location }) => {
      setState((prevState) => ({
        location,
        previousLocation: prevState.location,
      }));
    });

    return () => {
      unlisten();
    };
  }, []);

  return <Router location={state.location}>{children}</Router>;
};

HistoryRouter.propTypes = {
  children: PropTypes.node.isRequired,
};
