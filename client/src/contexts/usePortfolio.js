import { useContext } from "react";
import { PortfolioContext } from "./PortfolioContext";

// Custom hook to use portfolio context
const usePortfolio = () => {
  return useContext(PortfolioContext);
};

export default usePortfolio;
