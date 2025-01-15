import PropTypes from "prop-types";

// Tailwind CSS styles
const listStyle =
  "leading-tight flex flex-wrap gap-2 text-center lg:p-1 lg:pt-0 3xl:text-2xl 3xl:gap-4 sm:px-0 xs:pt-1 h-568-w-320-landscape:text-sm h-568-w-320-landscape:py-2 h-658-w-320-landscape-extra:text-sm h-667-w-375-landscape-extra:text-sm";
const itemStyle =
  "inline bg-zinc-800 w-fit px-2 py-1 font-medium text-base text-zinc-100 my-1";

// InlineBoxList component
const InlineBoxList = ({ array }) => {
  return (
    <ul className={listStyle}>
      {array.map((item, index) => (
        <li key={index} className="flex items-center">
          <p className={itemStyle}>{item}</p>
        </li>
      ))}
    </ul>
  );
};

// Prop-types validation
InlineBoxList.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InlineBoxList;
