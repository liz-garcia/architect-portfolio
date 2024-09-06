import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// * AutoEaseCarrousel component renders an automated carrousel with a smooth fade transition effect between images.

// Tailwind CSS styles
const carrouselContainerStyle = "relative size-full overflow-hidden";
const imgStyle =
  "absolute inset-0 size-full object-cover transition-opacity duration-700 ease-in-out";

// AutoEaseCarrousel component
const AutoEaseCarrousel = ({
  images,
  displayTime = 3000,
  altText = "Image",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      //  Modulus (%) operator to ensure that the currentIndex loops back to the beginning once it reaches the end of the images array.
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, displayTime);

    // Cleanup function: stop the interval as component unmounts or before re-running the effect
    return () => clearInterval(interval);

    // Dependency array: If either images.length or displayTime changes, the effect will be cleaned up and then re-executed.
  }, [images.length, displayTime]);

  return (
    <div className={`auto-ease-carrousel ${carrouselContainerStyle}`}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${altText} ${index}`}
          className={`${imgStyle} ${
            // Dynamically set opacity depending on our current img index
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

// PropTypes validation
AutoEaseCarrousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // * Required - Array of image URLs
  displayTime: PropTypes.number, // * Optional - Time in milliseconds for each image display
  altText: PropTypes.string, // * Optional - Alt text for all our images
};

export default AutoEaseCarrousel;
