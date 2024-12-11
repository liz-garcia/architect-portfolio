import PropTypes from "prop-types";

// Tailwind CSS styles
const gridContainerStyle =
  "w-full h-full grid grid-cols-3 sm:grid-cols-2 2xs:grid-cols-1";
const gridItemStyle = "w-full h-full object-cover";

// ImageGrid component
const ImageGridCover = ({ images }) => {
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
ImageGridCover.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGridCover;
