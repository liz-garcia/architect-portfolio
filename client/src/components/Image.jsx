// Default Basic Image Component
import PropTypes from "prop-types";

// Tailwind CSS styles
const imgContainerStyle = "relative size-full overflow-hidden";
const imgStyle = "absolute inset-0 size-full object-contain";
// * When using the `Image` component, it must be contained inside another parent `div`. This parent `div` must always be set to 'overflow-hidden' and provides the corresponding width/height settings, borders or any other styles.

const Image = ({ src, altText = "Image", objectFit = "contain" }) => {
  // Available options for objectFit argument are only: contain, cover, none, scale-down.
  const objectFitStyle = `object-${objectFit}`;

  return (
    <div className={imgContainerStyle}>
      <img
        src={src}
        alt={altText}
        className={`${imgStyle} ${objectFitStyle}`}
      />
    </div>
  );
};

// Prop-types validation
Image.propTypes = {
  src: PropTypes.string.isRequired,
  altText: PropTypes.string,
  objectFit: PropTypes.oneOf(["contain", "cover", "none", "scale-down"]),
};

export default Image;
