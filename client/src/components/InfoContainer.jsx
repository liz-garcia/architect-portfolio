// * InfoContainer style for Resume section on Homepage
import PropTypes from "prop-types";

// Tailwind CSS styles
const infoContainer =
  "leading-tight grid grid-rows-1 grid-cols-[1fr_2fr] gap-4 xl:gap-0 sm:gap-1 sm:pb-2 xs:pb-1 xs:gap-0 2xs:pb-1 h-568-w-320-landscape:pb-0 lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_2fr] xl:flex xl:flex-col xl:gap-1 xs:flex xs:flex-col";
const dateStyle =
  "mt-1 ml-1 3xl:text-2xl 2xl:text-sm lg:text-base lg:portrait:text-lg md:portrait:text-base sm:portrait:text-base 2xs:portrait:text-sm h-568-w-320-landscape:text-sm h-568-w-320-landscape:mt-1";
const dataItems = "my-1";
const itemTitle =
  "inline bg-sky-200 w-fit px-1 py-0 font-semibold 3xl:text-2xl lg:portrait:text-lg md:portrait:text-base xs:portrait:text-lg 2xs:portrait:text-base h-568-w-320-landscape:text-sm";
const itemDetail =
  "mt-1 xs:mt-0 ml-1 text-sm xl:text-base italic 3xl:text-xl 2md:text-[0.845rem]/[1.15rem] sm:text-base 2sm:text-[0.87rem]/[1.15rem] xs:text-base 2xs:text-sm h-540-w-720-landscape:landscape:text-sm h-568-w-320-landscape:text-xs h-667-w-375-landscape-extra:text-sm h-658-w-320-landscape-extra:text-xs";

// InfoContainer component
const InfoContainer = ({ date, title, detail }) => {
  return (
    <>
      <div className={infoContainer}>
        <p className={dateStyle}>{date}</p>
        <div className={dataItems}>
          <p className={itemTitle}>{title}</p>
          <p className={itemDetail}>{detail}</p>
        </div>
      </div>
    </>
  );
};

// Prop-types validation
InfoContainer.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default InfoContainer;
