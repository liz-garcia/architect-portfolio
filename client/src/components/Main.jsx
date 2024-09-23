import PropTypes from "prop-types";

// Tailwind CSS utility classes
const mainStyle = "w-dvw";

// Main Component
const Main = ({ children }) => {
  return <main className={mainStyle}>{children}</main>;
};

// PropTypes for Main component
Main.propTypes = {
  children: PropTypes.node.isRequired, // Ensures that children is a React node and is required
};

export default Main;
