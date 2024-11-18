import PropTypes from "prop-types";

const ErrorDisplay = ({ error, height = "h-full", width = "w-full" }) => {
  const message =
    error?.message || "An unknown error occurred. Please try again later.";

  return (
    <div
      id="errorDisplay"
      className={`flex ${height} ${width} place-content-center`}
    >
      <div className="mx-auto my-auto">
        <p className="mx-auto my-auto text-center italic">
          Unexpected error: {message}
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
