import PropTypes from "prop-types";

// Tailwind CSS utility classes
const size = "w-fit min-w-fit";
const text = "font-normal text-white text-center uppercase text-sm 3xl:text-xl";
const layout = "block px-5 py-3 rounded-xl 3xl:px-8 3xl:py-5";
const color = "bg-zinc-800 border border-zinc-800 drop-shadow";
const hoverColor = "hover:bg-lime-300 hover:border-lime-400";
const hoverFont = "hover:text-zinc-800 hover:text-sm 3xl:hover:text-xl";
const transition =
  "hover:scale-105 transform transition ease-in-out duration-500";

// Final PrimaryButton style
const primaryButtonStyle = `${size} ${text} ${layout} ${color} ${transition} ${hoverFont} ${hoverColor}`;

// PrimaryButton Component
const PrimaryButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={primaryButtonStyle}>
      {children}
    </button>
  );
};

// PropTypes
PrimaryButton.propTypes = {
  // Set children to 'PropTypes.node.isRequired', to allow for any renderable content
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default PrimaryButton;
