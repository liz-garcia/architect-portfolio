import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "./HeroSection.jsx";
import AboutSection from "../About/About.jsx"; // * Import About section component

// Tailwind CSS utility classes
const homeStyle = "flex flex-col";

// Home page
function Home() {
  const location = useLocation();

  // * If a hash is present in the URL, scroll to the corresponding id. After the transition, reset the URL to "/".
  useEffect(() => {
    if (location.hash) {
      try {
        // Get the element by its id, which corresponds to the hash (without the #)
        const section = document.getElementById(location.hash.substring(1));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          // Notify the user that the section could not be found
          alert("Sorry, the section you are trying to view is not available.");
          // Fallback: scroll to top of the page if section is not found
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } catch (error) {
        // Show a friendly message
        alert("Sorry, an error occurred. Please try again.");
        // Fallback: scroll to top of the page
        window.scrollTo({ top: 0, behavior: "smooth" });
      } finally {
        // Use history.replaceState to change the URL to "/" without reloading
        window.history.replaceState({}, "", "/");
      }
    }
  }, [location]);

  return (
    <>
      <div id="homepage" className={homeStyle}>
        <HeroSection />
        <AboutSection />
        <h1>Homepage</h1>
      </div>
    </>
  );
}

export default Home;
