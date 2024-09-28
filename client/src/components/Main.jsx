import PropTypes from "prop-types";

// Tailwind CSS utility classes
const mainStyle = "w-dvw";

// Main Component
const Main = ({ children }) => {
  return (
    <main className={mainStyle}>
      {/* Content visible only in portrait mode */}
      <div className="xs-landscape:hidden">{children}</div>

      {/* Message visible only in landscape mode */}
      <div className="hidden h-[88dvh] items-center justify-center bg-zinc-100 xs-landscape:flex">
        <p className="px-4 text-center text-lg font-semibold text-zinc-700">
          This experience is designed to be viewed in portrait. <br />
          Please rotate your device to portrait mode to view the content.
        </p>
      </div>
    </main>
  );
};

// PropTypes for Main component
Main.propTypes = {
  children: PropTypes.node.isRequired, // Ensures that children is a React node and is required
};

export default Main;
