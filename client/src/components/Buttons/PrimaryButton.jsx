import PropTypes from "prop-types";

// Tailwind CSS utility classes
const primaryButtonStyle =
  "px-5 py-4 w-fit bg-emerald-100 hover:bg-emerald-200 rounded-lg";

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
