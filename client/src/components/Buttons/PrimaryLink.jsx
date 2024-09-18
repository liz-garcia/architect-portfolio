import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const size = "w-fit";
const text = "font-medium text-zinc-800 text-center uppercase text-sm/loose";
const layout = "block px-5 py-3 rounded-lg";
const color = "bg-lime-200 border border-lime-300 drop-shadow-md"; // Initial color before hover

// Transition from solid slate to gradient, with smooth color movement
const transitionColor = "hover:bg-green-300 hover:border-green-400";
const transition =
  "hover:scale-105 transform transition ease-in-out duration-500";
const transitionFont = "hover:font-medium hover:text-sm/loose";

// Final PrimaryLink style
const primaryLinkStyle = `${size} ${text} ${layout} ${color} ${transition} ${transitionFont} ${transitionColor}`;

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
