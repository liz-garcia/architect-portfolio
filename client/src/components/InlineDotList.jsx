// * InlineDotList style for subsection 'Skills' at Resume section on Homepage
import PropTypes from "prop-types";

// Tailwind CSS styles
const softwareList =
  "leading-tight flex flex-wrap gap-2 text-center justify-center lg:p-1 lg:pt-0 3xl:text-2xl 3xl:gap-4 sm:px-0 xs:pt-1 h-568-w-320-landscape:text-sm h-568-w-320-landscape:py-2 h-658-w-320-landscape-extra:text-sm h-667-w-375-landscape-extra:text-sm";
const dotStyle =
  "w-1 h-1 3xl:w-2 3xl:h-2 bg-lime-400 border border-lime-400 rounded place-self-center ml-2 3xl:ml-4";

// InlineDotList component
const InlineDotList = ({ array }) => {
  return (
    <ul className={softwareList}>
      {array.map((item, index) => (
        <li key={item} className="flex items-center">
          <span>{item}</span>
          {index < array.length - 1 && <div className={dotStyle} />}{" "}
          {/* Render dot only if not the last item */}
        </li>
      ))}
    </ul>
  );
};

// Prop-types validation
InlineDotList.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InlineDotList;
