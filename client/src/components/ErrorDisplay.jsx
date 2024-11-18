import PropTypes from "prop-types";

const ErrorDisplay = (error, height = "h-full", width = "w-full") => {
  return (
    <div
      id="errorDisplay"
      className={`flex ${height} ${width} place-content-center`}
    >
      <div className="mx-auto my-auto">
        <p className="mx-auto my-auto text-center italic">
          Unexpected error: {error?.toString() || "Unknown error"}. Please try
          again later.
        </p>
      </div>
    </div>
  );
};

// Prop-types validation
ErrorDisplay.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default ErrorDisplay;
