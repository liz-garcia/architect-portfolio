import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const size = "w-fit min-w-fit";
const text = "font-normal text-zinc-700 text-center uppercase text-sm";
const layout = "block px-5 py-3 rounded-2xl";
const color = "bg-[#FFFFFF] border border-lime-300 drop-shadow-sm"; // Initial color before hover

// Transition from solid slate to gradient, with smooth color movement
const transitionColor = "hover:bg-lime-300 hover:border-lime-400";
const transition =
  "hover:scale-105 transform transition ease-in-out duration-500";
const transitionFont = "hover:text-zinc-700 hover:font-normal hover:text-sm";

// Final SecondaryLink style
const secondaryLinkStyle = `${size} ${text} ${layout} ${color} ${transition} ${transitionFont} ${transitionColor}`;

// SecondaryLink Component
const SecondaryLink = ({ to, href, children }) => {
  if (href) {
    // If 'href' is provided, render an <a> element
    return (
      <a href={href} className={secondaryLinkStyle}>
        {children}
      </a>
    );
  } else if (to) {
    // If 'to' is provided, render a <Link> element
    return (
      <Link to={to} className={secondaryLinkStyle}>
        {children}
      </Link>
    );
  } else {
    // If neither 'to' nor 'href' is provided, return null or some fallback
    return null;
  }
};

// PropTypes
SecondaryLink.propTypes = {
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

export default SecondaryLink;
