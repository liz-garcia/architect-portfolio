import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
      <HeroSection />
      <About />
      <h1>Homepage</h1>
    </>
  );
}

export default Home;
