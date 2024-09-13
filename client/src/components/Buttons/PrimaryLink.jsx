import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const size = "w-fit";
const text = "font-medium text-white text-center";
const layout = "block px-5 py-3 rounded-lg";
const color = "bg-slate-950"; // Initial color before hover

// Transition from solid slate to gradient, with smooth color movement
const transitionColor =
  "hover:bg-gradient-to-r hover:from-sky-500 hover:to-emerald-500";
const bgTransition = "bg-slate-950 transition-all duration-500 ease-in-out";
const transition =
  "hover:scale-105 transform transition ease-in-out duration-500 hover:translate-y-1";

// Final PrimaryLink style
const primaryLinkStyle = `${size} ${text} ${layout} ${color} ${transitionColor} ${bgTransition} ${transition}`;

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
