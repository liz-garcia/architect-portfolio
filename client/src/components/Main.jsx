import PropTypes from "prop-types";

// Tailwind CSS utility classes
const mainStyle = "w-dvw";
const mainContent = "";

// Main Component
const Main = ({ children }) => {
  return (
    <main className={mainStyle}>
      {/* Content visible only in portrait mode */}
      <div id="mainContent" className={`xs-landscape:hidden ${mainContent}`}>
        {children}
      </div>

      {/* Message visible only in landscape mode */}
      <div
        id="messageContent"
        className="hidden h-[88dvh] items-center justify-center bg-zinc-100 xs-landscape:flex"
      >
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
