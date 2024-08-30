import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const primaryLinkStyle =
  "block px-5 py-4 w-fit bg-lime-200 hover:bg-lime-300 rounded-lg";

// PrimaryLink Component
const PrimaryLink = ({ to, children }) => {
  return (
    <Link to={to} className={primaryLinkStyle}>
      {children}
    </Link>
  );
};

// PropTypes
PrimaryLink.propTypes = {
  // Set children to 'PropTypes.node.isRequired', to allow for any renderable content
  children: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string, // e.g., "/about"
    PropTypes.object, // e.g., { pathname: "/about", search: "?source=home" }
  ]).isRequired,
};

export default PrimaryLink;
