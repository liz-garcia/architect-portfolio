import PropTypes from "prop-types";

const ErrorDisplay = ({ error }) => {
  return (
    <div
      id="errorDisplay"
      className={
        "flex h-full w-full place-content-center items-center justify-center text-center"
      }
    >
      <div className="mx-auto my-auto pb-8">
        <h1 className="text-2xl font-black 3xl:text-6xl">Oops!</h1>
        <h2 className="text-xl font-bold 3xl:text-4xl">Unexpected error</h2>
        <p className="mx-auto my-auto text-center text-lg italic">
          {`${error?.message.toString() || "Unknown error"}. Please try again later.`}
        </p>
      </div>
    </div>
  );
};

// Prop-types validation
ErrorDisplay.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default ErrorDisplay;
