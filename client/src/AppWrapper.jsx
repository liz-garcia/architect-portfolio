import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import { PortfolioProvider } from "./contexts/PortfolioContext.jsx";

// * This component wraps our App with the providers we do not want to have in our tests.

const AppWrapper = ({ children }) => {
  return (
    <PortfolioProvider>
      <Router>{children}</Router>
    </PortfolioProvider>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppWrapper;
