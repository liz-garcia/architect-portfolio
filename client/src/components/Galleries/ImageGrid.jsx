import PropTypes from "prop-types";

// Tailwind CSS styles
const gridContainerStyle =
  "w-full h-full grid grid-cols-3 gap-4 sm:grid-cols-2 xs:gap-2 2xs:grid-cols-1";
const gridItemStyle = "w-full h-full object-cover rounded-xl 3xl:rounded-2xl";

// ImageGrid component
const ImageGrid = ({ images }) => {
  return (
    <div className={gridContainerStyle}>
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden">
          <img src={src} alt={`Image ${index + 1}`} className={gridItemStyle} />
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
