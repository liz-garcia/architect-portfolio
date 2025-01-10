import PropTypes from "prop-types";

// Tailwind CSS styles
const gridContainerStyle =
  "absolute w-full h-full grid grid-cols-3 gap-8 sm:grid-cols-2 xs:gap-2 2xs:grid-cols-1 p-12 xs:p-4";
const gridItemContainer =
  "flex items-center justify-center overflow-hidden drop-shadow-lg bg-white rounded-xl 3xl:rounded-2xl hover:border hover:border-zinc-800 hover:cursor-pointer hover:scale-105 transform transition ease-in-out duration-400";
const gridImgStyle = "w-full h-full object-cover rounded-xl 3xl:rounded-2xl";
const titleStyle =
  "absolute z-10 transform place-self-center text-lg italic text-zinc-950 transition duration-500 ease-in-out";

// * Parent container to this component should always be set to 'relative' and set clear dimensions for the ImageGridCover component to inherit

// ImageGrid component
const ImageGrid = ({ images }) => {
  return (
    <div className={gridContainerStyle}>
      {images.map((src, index) => (
        <div key={index} className={gridItemContainer}>
          <div className="z-40 size-full hover:opacity-10">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className={gridImgStyle}
            />
          </div>
          <p className={titleStyle}>Project Title</p>
        </div>
      ))}
    </div>
  );
};

// Prop-types validation
ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGrid;
