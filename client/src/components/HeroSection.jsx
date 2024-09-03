import { useState, useEffect } from "react";
import PrimaryLink from "./Buttons/PrimaryLink.jsx";
import heroImage1 from "/architectural-plan-1.png";
import heroImage2 from "/architectural-plan-2.png";
import heroImage3 from "/architectural-plan-3.png";

// Tailwind CSS utility classes
const heroSectionStyle =
  "w-[100dvw] h-[88dvh] flex pl-16 md:p-0 2xl:pl-16 3xl:pl-28 items-center justify-center md:flex-col-reverse gap-8 md:gap-2 2xl:gap-12 3xl:gap-24";
// Text div
const heroTitleStyle =
  "w-1/3 text-center flex flex-col md:w-full md:h-1/3 items-center justify-center md:pb-4 sm:pb-8";
const h1Style =
  "font-serif font-bold mb-4 lg:text-5xl/[2.5rem] xl:text-6xl/[3rem] 2xl:text-7xl/[3.5rem] 3xl:text-8xl/[4.75rem] md:mb-2 sm:mb-1";
const h2Style =
  "py-2 mb-4 md:mb-2 sm:text-lg/5 xl:text-xl/6 2xl:text-2xl 3xl:text-3xl";
// Image div
const heroImgContainerStyle = "w-2/3 h-full md:h-2/3 md:w-full";
const heroImgStyle =
  "size-full object-cover transition-opacity duration-1000 ease-in-out p-0";

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
        <div id="heroTitle" className={heroTitleStyle}>
          <h1 className={h1Style}>Architect Portfolio</h1>
          <h2 className={h2Style}>
            Rhina Aragón, senior architect based in Minnesota.
          </h2>
          <PrimaryLink to="/#contact">Contact me</PrimaryLink>
        </div>
        <div id="hero-image-container" className={heroImgContainerStyle}>
          <img
            id="heroImage"
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
