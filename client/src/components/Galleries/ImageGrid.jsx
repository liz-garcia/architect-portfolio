import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Tailwind CSS styles
const gridContainerStyle =
  "w-full h-full grid grid-cols-3 auto-rows-fr gap-8 lg:grid-cols-2 sm:grid-cols-1 p-16 xs:p-12 xs-landscape:landscape:grid-cols-3 3xl:grid-cols-5 3xl:p-20 3xl:gap-10 3xl:py-24";
const gridItemContainer =
  "flex items-center justify-center overflow-hidden drop-shadow-lg hover:bg-white rounded-xl 3xl:rounded-2xl hover:border hover:border-zinc-800 hover:cursor-pointer hover:scale-105 transform transition ease-in-out duration-400";
const gridImgStyle = "w-full h-full object-cover rounded-xl 3xl:rounded-2xl";
const titleStyle =
  "absolute z-10 transform place-self-center text-lg italic text-zinc-950 transition duration-400 ease-in-out p-8";

// * Parent container to this component should always be set to 'relative' and set clear dimensions for the ImageGridCover component to inherit
// * This component is designed to work with the projects array from our database

// ImageGrid component
const ImageGrid = ({ items }) => {
  return (
    <div className={gridContainerStyle}>
      {items.map((item, index) => (
        <div key={index} className={gridItemContainer}>
          <Link
            to={`/portfolio/${item.projectId}`}
            className="duration-400 z-40 size-full transform transition ease-in-out hover:opacity-10"
          >
            <img
              src={item.refImg}
              alt={`Image ${index + 1}`}
              className={gridImgStyle}
            />
          </Link>
          <p className={titleStyle}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

// Prop-types validation
ImageGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGrid;
