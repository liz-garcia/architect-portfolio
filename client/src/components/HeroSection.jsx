import { useState, useEffect } from "react";
import PrimaryLink from "./Buttons/PrimaryLink.jsx";
import heroImage1 from "/architectural-plan-1.png";
import heroImage2 from "/architectural-plan-2.png";
import heroImage3 from "/architectural-plan-3.png";

// Tailwind CSS utility classes
const heroSectionStyle = "h-80dvh flex pl-16 items-center gap-8";
const heroTitleStyle = "w-1/3 text-center";
const h1Style = "font-serif font-bold text-5xl/none lg:text-7xl/[3.5rem] mb-4";
const h2Style = "text-lg/5 py-2 mb-4";
const heroImgContainerStyle = "m-auto w-2/3 h-full bg-no-repeat bg-left-top";
const heroImgStyle =
  "w-full h-full object-contain transition-opacity duration-1000 ease-in-out";

// HeroSection component
function HeroSection() {
  const images = [heroImage1, heroImage2, heroImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fade-in effect
      }, 1000); // 1 second to allow fade-out
    }, 4000); // Change image every 4 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <section id="heroSection" className={heroSectionStyle}>
        <div id="hero-title" className={heroTitleStyle}>
          <h1 className={h1Style}>Architect Portfolio</h1>
          <h2 className={h2Style}>
            Rhina Aragón, senior architect based in Minnesota.
          </h2>
          <PrimaryLink to="/#contact">Contact me</PrimaryLink>
        </div>
        <div id="hero-image-container" className={heroImgContainerStyle}>
          <img
            id="hero-image"
            src={images[currentImageIndex]}
            alt={`Architectural Plan ${currentImageIndex + 1}`}
            className={`${heroImgStyle} ${fade ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
