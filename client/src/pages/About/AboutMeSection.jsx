import { useState, useEffect } from "react";
import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";

// * ***** Tailwind CSS utility classes *****
const aboutMeContainer =
  "2xl:h-fit 3xl:h-1/2 3xl:flex 3xl:flex-col 3xl:items-center 3xl:justify-center min-h-fit h-1180-1550:h-1/3 h-1180-1550:place-content-center";
// * aboutMe Section element
const aboutMeStyle =
  "h-fit px-28 lg:px-18 md:px-12 xl:px-16 pt-16 sm:pt-12 md:pt-8 lg:pt-10 pb-10 lg:px-12 2xl:px-16 md:pb-4 xl:pb-4 2xl:pb-5 sm:pb-16 flex lg:flex-col 2xl:flex-row gap-4 lg:gap-0 lg:gap-2 sm:gap-2 justify-center sm:h-dvh sm:px-16 sm:mx-2 xs:h-svh xs:px-10 xs:gap-2 2xs:px-8 3xl:px-32 h-658-w-320:gap-1";
// * aboutMeTitle
const aboutMeTitleStyle = "lg:flex-none flex-1 w-1/3 lg:w-auto xl:w-1/5";
const h2Style =
  "font-bold font-serif text-4xl xs:text-[2.1rem] 3xl:text-6xl h-658-w-320:text-[1.8rem]";
// * aboutMeText
const aboutMeTextStyle =
  "lg:flex-none flex flex-col gap-1 w-2/3 lg:w-auto pt-2 pl-4 pr-18 lg:pl-0 sm:pt-0 3xl:pl-16 xl:w-4/5 3xl:w-4/5";
const h3Style =
  "font-light text-2xl text-zinc-800 italic lg:text-xl xs:text-2xl sm:mb-1 h-667-w-375:text-xl 3xl:text-4xl 3xl:mt-2 h-568-w-320:mb-0 h-568-w-320:text-[0.82rem]";
const elevatorPitchStyle =
  "text-justify my-1 md:mb-0 sm:mb-4 lg:pb-0 2xl:pb-1 2xl:leading-relaxed h-667-w-375:text-base 2xs:text-base 3xl:text-2xl/relaxed 3xl:pt-4 h-658-w-320:text-sm/relaxed h-568-w-320:leading-normal h-568-w-320:mb-1 ";
const dividerStyle1 =
  "absolute -right-[56px] xl:-right-[56px] 2xl:-right-[36px] xl:w-4/5 w-2/3 h-12 border-b border-zinc-300 lg:hidden 3xl:hidden";
const buttonContainerStyle =
  "flex justify-between gap-4 sm:py-0 md:py-2 xl:py-1 2xl:py-0 3xl:py-4 3xl:gap-8 items-center";
const dividerStyle2 = "flex-1 border-b border-zinc-300";

// AboutMeSection component
const AboutMeSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 640px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const handleMediaChange = (e) => setIsSmallScreen(e.matches);

    // Use `addEventListener` for better compatibility and performance
    mediaQuery.addEventListener("change", handleMediaChange);

    // Cleanup the listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <>
      <div id="aboutMeContainer" className={aboutMeContainer}>
        <div id="divider1" className={dividerStyle1}></div>
        <section id="aboutMe" className={aboutMeStyle}>
          <div id="aboutMeTitle" className={aboutMeTitleStyle}>
            <h2 className={h2Style}>About my passion</h2>
          </div>
          <div id="aboutMeText" className={aboutMeTextStyle}>
            <h3 className={h3Style}>Architect, Estimator, Drafting & Design</h3>
            <p id="elevatorPitch" className={elevatorPitchStyle}>
              As a versatile architect with a strong focus on residential,
              commercial, and remodeling projects, I have a proven track record
              of balancing creativity with technical precision. With over 10
              years of experience, including 7 years as an estimator, I bring a
              deep understanding of both design and construction to each
              project. My design philosophy is guided by rhythm, simplicity, and
              contrast, ensuring that every space is functional, beautiful, and
              aligned with my clients&apos; needs. I thrive on being involved in
              the entire project lifecycle, from concept to completion.
            </p>
            <div
              className={
                isSmallScreen
                  ? "flex gap-2 xs:scale-95 xs:flex-row-reverse xs:place-content-center 2xs:scale-[0.85] h-667-w-375:scale-[0.8] h-667-w-375:flex-nowrap h-658-w-320:scale-[0.75]"
                  : buttonContainerStyle
              }
            >
              <div
                id="divider2"
                className={isSmallScreen ? "hidden" : dividerStyle2}
              ></div>
              <PrimaryLink to="/#resume">CV Highlights</PrimaryLink>
              <PrimaryLink
                to={isSmallScreen ? "/#featuredProjects" : "/portfolio"}
              >
                {isSmallScreen ? "Featured projects" : "View all projects"}
              </PrimaryLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMeSection;
