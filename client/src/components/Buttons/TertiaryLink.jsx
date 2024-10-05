import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Tailwind CSS utility classes
const size = "w-fit min-w-fit";
const font =
  "font-normal text-zinc-800 text-center uppercase text-sm 3xl:text-base";
const layout = "block px-5 py-3";
const hoverFont =
  "hover:scale-105 hover:text-zinc-800 hover:font-normal hover:text-sm 3xl:hover:text-base hover:underline underline-offset-8";

// Final TertiaryLink style
const tertiaryLinkStyle = `${size} ${font} ${layout} ${hoverFont}`;

// TertiaryLink component
const TertiaryLink = ({ to, href, children }) => {
  if (href) {
    // If 'href' is provided, render an <a> element
    return (
      <a href={href} className={tertiaryLinkStyle}>
        {children}
      </a>
    );
  } else if (to) {
    // If 'to' is provided, render a <Link> element
    return (
      <Link to={to} className={tertiaryLinkStyle}>
        {children}
      </Link>
    );
  } else {
    // If neither 'to' nor 'href' is provided, return null or some fallback
    return null;
  }
};

// PropTypes
TertiaryLink.propTypes = {
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

export default TertiaryLink;
