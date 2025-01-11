import PropTypes from "prop-types";
import usePortfolio from "../contexts/usePortfolio.js";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import ErrorDisplay from "../components/ErrorDisplay.jsx";

// Tailwind CSS utility classes
const mainStyle = "w-dvw overflow-hidden";

// Main Component
const Main = ({ children }) => {
  const { isLoading, error } = usePortfolio();

  // * Handle 'isLoading' state
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // * Handle 'error' state
  if (error) {
    return <ErrorDisplay error={new Error("Failed to load Portfolio data")} />;
  }

  // Render children as-is since PortfolioProvider already provides context
  return <main className={mainStyle}>{children}</main>;
};

// PropTypes for Main component
Main.propTypes = {
  children: PropTypes.node.isRequired, // Ensures that children is a React node and is required
};

export default Main;
