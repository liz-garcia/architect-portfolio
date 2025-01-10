import PropTypes from "prop-types";

const LoadingSpinner = () => {
  return (
    <div
      id="loadingSpinner"
      className={
        "flex h-full w-full place-content-center items-center justify-center pb-8"
      }
    >
      <div className="">
        <svg
          className="h-12 w-12 animate-spin text-zinc-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

// Prop-types validation
LoadingSpinner.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default LoadingSpinner;
