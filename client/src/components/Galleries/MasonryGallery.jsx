import { useState } from "react";
import PropTypes from "prop-types";
import Masonry from "react-masonry-css";

const MasonryGallery = ({ imageUrls }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  // Breakpoints for masonry layout
  const breakpointColumns = {
    default: 3, // 3 columns for large screens
    1024: 2, // 2 columns for medium screens
    640: 1, // 1 column for small screens
  };

  return (
    <div>
      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-auto gap-8"
        columnClassName="masonry-column"
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Gallery image ${index + 1}`}
            className="duration-400 mb-8 w-full transform cursor-pointer rounded-lg object-cover transition ease-in-out hover:scale-105 hover:border hover:border-zinc-900"
            onClick={() => openModal(url)}
          />
        ))}
      </Masonry>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 bg-opacity-90">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-[90dvh] max-w-[80dvw] rounded-lg 3xl:max-w-[64dvw]"
            />
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-lg bg-zinc-950 bg-opacity-75 px-3 py-1 text-2xl font-bold text-white"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Prop-types validation
MasonryGallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MasonryGallery;
