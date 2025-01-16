import PropTypes from "prop-types";

const masonryContainer = "grid grid-cols-3 grid-rows-auto sm:grid-cols-1 gap-4";

const imageStyle = "w-full mb-4";

const MasonryGallery = ({ imageUrls }) => {
  return (
    <div className={masonryContainer}>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Gallery image ${index + 1}`}
          className={imageStyle}
        />
      ))}
    </div>
  );
};

// Prop-types validation
MasonryGallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MasonryGallery;
