import HeroSection from "./HeroSection.jsx";
import About from "../About/About.jsx"; // * Import About page
// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";

// Tailwind CSS utility classes
// const homeStyle = "";

// Home page
function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <h1>Homepage</h1>
    </>
  );
}

export default Home;
