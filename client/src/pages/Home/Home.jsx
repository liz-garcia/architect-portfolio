import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "./HeroSection.jsx";
import About from "../About/About.jsx"; // * Import About page

// Tailwind CSS utility classes
const homeStyle = "flex flex-col";

// Home page
function Home() {
  const location = useLocation();

  // * Transition smoothly into the #about id when the the URL includes "/about"
  useEffect(() => {
    if (location.hash === "#about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // * Always return URL to "/"
  useEffect(() => {
    if (location.hash === "#about") {
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
