import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "./HeroSection.jsx";
import About from "../About/About.jsx"; // * Import About page

// Tailwind CSS utility classes
const homeStyle = "flex flex-col";

// Home page
function Home() {
  const location = useLocation();

  // TODO Explanatory comment here
  useEffect(() => {
    if (location.pathname === "/about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // TODO Explanatory comment here
  useEffect(() => {
    // Check if the user is on the homepage and the URL is not already "/"
    if (location.pathname === "/home" || location.pathname === "/about") {
      // Use history.replaceState to change the URL to "/" without reloading
      window.history.replaceState({}, "", "/");
    }
  }, [location]); // This will run whenever the location changes

  return (
    <>
      <div id="homepage" className={homeStyle}>
        <HeroSection />
        <About />
        <h1>Homepage</h1>
      </div>
    </>
  );
}

export default Home;
