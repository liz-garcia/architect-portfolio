import PropTypes from "prop-types";

// Tailwind CSS styles
const list = "leading-tight flex flex-col gap-4 h-fit";
const dotStyle =
  "w-2 h-2 3xl:w-2 3xl:h-2 bg-lime-400 border border-lime-400 rounded-full flex-shrink-0  ml-2 3xl:ml-4";

// RegularList component
const RegularList = ({ array }) => {
  return (
    <ul className={list}>
      {array.map((item, index) => (
        <li key={index} className="flex items-center gap-4">
          <div className={dotStyle} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

// Prop-types validation
RegularList.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RegularList;
