import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const size = "w-fit min-w-fit";
const text = "font-normal text-white text-center uppercase text-sm";
const layout = "block px-5 py-3 rounded-lg";
const color = "bg-zinc-800 border border-zinc-800 drop-shadow-sm";
const hoverColor = "hover:bg-lime-300 hover:border-lime-400";
const hoverFont = "hover:text-zinc-800 hover:font-normal hover:text-sm";
const transition =
  "hover:scale-105 transform transition ease-in-out duration-500";

// Final PrimaryLink style
const primaryLinkStyle = `${size} ${text} ${layout} ${color} ${transition} ${hoverFont} ${hoverColor}`;

// PrimaryLink component
const PrimaryLink = ({ to, href, children }) => {
  if (href) {
    // If 'href' is provided, render an <a> element
    return (
      <a href={href} className={primaryLinkStyle}>
        {children}
      </a>
    );
  } else if (to) {
    // If 'to' is provided, render a <Link> element
    return (
      <Link to={to} className={primaryLinkStyle}>
        {children}
      </Link>
    );
  } else {
    // If neither 'to' nor 'href' is provided, return null or some fallback
    return null;
  }
};

// PropTypes
PrimaryLink.propTypes = {
  children: PropTypes.node.isRequired, // Allows any renderable content
  to: PropTypes.oneOfType([
    PropTypes.string, // e.g., "/about"
    PropTypes.object, // e.g., { pathname: "/about", search: "?source=home" }
  ]),
  href: PropTypes.string,
  // Custom validation to ensure one of 'to' or 'href' is provided, but not both. At least one is required.
  props: (props, propName, componentName) => {
    if (!props.to && !props.href) {
      return new Error(
        `One of 'to' or 'href' is required in '${componentName}'.`
      );
    }
    if (props.to && props.href) {
      return new Error(
        `Only one of 'to' or 'href' should be provided in '${componentName}', not both.`
      );
    }
  },
};

export default PrimaryLink;
