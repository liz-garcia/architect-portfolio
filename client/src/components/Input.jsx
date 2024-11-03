import PropTypes from "prop-types";

// Tailwind CSS classes
const inputStyle =
  "drop-shadow rounded-lg p-3 3xl:text-xl focus:outline-lime-300";

const Input = ({ name, value, onChange, ...rest }) => {
  return (
    <input
      {...rest}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={inputStyle}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
