import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const size = "w-fit";
const text = "font-medium text-white";
const layout = "block px-5 py-3 rounded-lg";
const color = "bg-slate-950";
// const transitionColor = "hover:bg-gradient-to-r hover:from-sky-500 hover:via-teal-500 hover:to-emerald-500";
const transitionColor =
  "hover:bg-gradient-to-r hover:from-sky-600 hover:to-emerald-500";
const transition =
  "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300";
const primaryLinkStyle = `${size} ${text} ${layout} ${color} ${transitionColor} ${transition}`;

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
