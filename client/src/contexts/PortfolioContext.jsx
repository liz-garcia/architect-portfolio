import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";

const PortfolioContext = createContext();

// Portfolio Provider
export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState(null);

  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/portfolio",
    (response) => {
      setPortfolio(response.result[0]);
    }
  );

  useEffect(() => {
    performFetch();

    return cancelFetch;

    // Empty dependency array ensures this runs once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolio, isLoading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};

// PropTypes for Main component
PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PortfolioContext };
