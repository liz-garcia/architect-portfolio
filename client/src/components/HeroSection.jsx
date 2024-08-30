// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";

// Tailwind CSS utility classes
const heroSectionStyle = "h-85dvh p-12";
const h1Style = "font-serif font-bold text-3xl";
const h2Style = "";

function HeroSection() {
  return (
    <>
      <section id="heroSection" className={heroSectionStyle}>
        <div>
          <h1 className={h1Style}>Architect Portfolio</h1>
          <h2 className={h2Style}>
            Rhina Aragón, senior architect based in Minnesota.
          </h2>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default HeroSection;
