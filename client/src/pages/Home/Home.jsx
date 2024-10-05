import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection.jsx";
import About from "../About/About.jsx"; // * Import About page

// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";

// Tailwind CSS utility classes
// const homeStyle = "";

// Home page
function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  // TODO Explanatory comment here
  useEffect(() => {
    // Check if the user is on the homepage and the URL is not already "/"
    if (location.pathname === "/home" || location.pathname === "/about") {
      // Use history.replaceState to change the URL to "/" without reloading
      window.history.replaceState({}, "", "/");
    }
  }, [location]); // This will run whenever the location changes

  // TODO Explanatory comment here
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the top
      if (window.scrollY === 0 && location.pathname !== "/") {
        // Change the URL to "/" without reloading the page
        navigate("/", { replace: true });
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, navigate]); // Re-run if location or navigate changes

  // TODO Explanatory comment here
  useEffect(() => {
    if (location.pathname === "/about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div id="homepage">
        <HeroSection />
        <About />
        <h1>Homepage</h1>
      </div>
    </>
  );
}

export default Home;
