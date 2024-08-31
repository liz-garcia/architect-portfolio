import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const size = "w-fit";
const text = "font-medium text-white";
const layout = "block px-5 py-3 m-auto rounded-lg";
const color = "bg-slate-950";
const transition =
  "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300";
const primaryLinkStyle = `${size} ${text} ${layout} ${color} ${transition}`;

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
