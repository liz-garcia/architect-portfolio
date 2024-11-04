import { useState, useEffect } from "react";
import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";

// * ***** Tailwind CSS utility classes *****
const aboutMeContainer =
  "h-1366-w-1024:portrait:h-1/2 lg-md-portrait:portrait:h-1/2 lg-md-portrait:portrait:place-content-center 2xl:h-fit 3xl:h-[40%] 3xl:flex 3xl:flex-col 3xl:items-center 3xl:justify-center min-h-fit h-1180-1550:h-1/3 h-1180-1550:place-content-center xs-landscape:h-vh h-1260-w-1024:h-[40%] h-1260-w-1024:place-content-center h-1260-w-1024:px-12 xs-landscape:h-vh xs-landscape:pt-2";
// * aboutMe Section element
const aboutMeStyle =
  "h-fit px-28 lg:px-20 md:px-12 xl:px-16 pt-16 sm:pt-12 md:pt-8 lg:pt-10 pb-10 lg:px-12 2xl:px-16 md:pb-4 2xl:pb-6 sm:pb-16 flex lg:flex-col 2xl:flex-row gap-4 lg:gap-0 lg:gap-2 sm:gap-2 justify-center sm:h-dvh sm:px-16 sm:mx-2 xs:h-svh xs:px-10 h-414-w-736:portrait:px-8 xs:gap-2 2xs:px-8 3xl:px-64 h-1180-1550:px-36 h-1260-w-1024:px-24 h-1260-w-1024:gap-4 h-1260-w-1024:flex h-1260-w-1024:flex-col h-658-w-320:gap-1 xs-landscape:min-h-fit xs-landscape:px-10 xs-landscape:py-4 xs-landscape:h-svh md-portrait:px-16 md-portrait:mt-4 md-portrait:mb-2 h-568-w-320:px-6 h-658-w-320:px-6 h-1180-1550:mt-2 h-1180-1550:mx-6 xs-landscape:gap-1 h-658-w-320-landscape:landscape:gap-0 h-658-w-320-landscape:landscape:px-8 h-414-w-896-landscape:landscape:mx-4 h-430-w-932-landscape:landscape:px-20 h-412-w-915-landscape:landscape:px-16 h-540-w-720-landscape:landscape:gap-0 h-540-w-720-landscape:landscape:pb-2 h-568-w-320-landscape:landscape:px-6";
// * aboutMeTitle
const aboutMeTitleStyle =
  "lg:flex-none flex-1 w-1/3 lg:w-auto xl:w-1/5 h-1260-w-1024:w-full";
const h2Style =
  "font-bold font-serif text-4xl h-1366-w-1024:portrait:text-5xl xs:text-[2.25rem] 3xl:text-5xl h-658-w-320:text-[2.02rem] h-568-w-320-landscape:text-3xl h-667-w-375:text-center h-667-w-375:pt-2 xs:text-center xs-landscape:text-[2.15rem] h-658-w-320-landscape:landscape:text-[1.85rem]/tight h-414-w-896:portrait:text-4xl h-414-w-896:portrait:scale-105 h-1260-w-1024:text-[2.75rem] h-1180-1550:pt-2 h-1260-w-1024:text-5xl";
// * aboutMeText
const aboutMeTextStyle =
  "lg:flex-none flex flex-col gap-1 w-2/3 lg:w-auto pt-2 pl-4 pr-18 lg:pl-0 sm:pt-0 3xl:pl-16 xl:w-4/5 3xl:w-4/5 xs-landscape:pt-0 h-540-w-720-landscape:landscape:pt-1 h-568-w-320-landscape:landscape:gap-0 h-1260-w-1024:pl-0 h-1260-w-1024:w-full";
const h3Style =
  "font-light text-2xl text-zinc-800 italic h-1366-w-1024:portrait:text-3xl h-1366-w-1024:portrait:pb-2 lg:text-xl xs:text-2xl sm:mb-1 sm:portrait:px-2 h-667-w-375:text-center h-667-w-375:text-xl h-667-w-375:portrait:px-0 3xl:text-4xl 3xl:mt-2 h-568-w-320:mb-0 h-568-w-320:text-[1.05rem]/snug h-658-w-320:text-xl xs:text-center h-658-w-320:mb-0 h-658-w-320-landscape:landscape:text-[1.15rem]/tight h-414-w-896-landscape:landscape:text-[1.45rem] h-568-w-320-landscape:landscape:mb-1 h-568-w-320-landscape:landscape:text-base/tight h-1260-w-1024:text-3xl h-1260-w-1024:pb-2";
const elevatorPitchStyle =
  "text-justify my-1 md:mb-0 sm:mb-4 lg:pb-0 2xl:pb-1 2xl:leading-relaxed sm:text-xl/relaxed h-1366-w-1024:portrait:text-xl/relaxed h-844-w-390-landscape:landscape:text-[1.05rem] h-430-w-932-landscape:landscape:text-[1.15rem] h-667-w-375:text-[1.025rem]/relaxed 2xs:text-base 3xl:text-2xl/relaxed 3xl:pt-4 h-658-w-320:text-[0.9rem] h-658-w-320-landscape:landscape:text-[0.9rem] h-568-w-320:leading-normal h-568-w-320:mb-1 h-568-w-320-landscape:landscape:mb-2 xs-landscape:text-[0.95rem]/relaxed h-658-w-320:mb-2 h-667-w-375:mb-2 h-882-w-344:leading-relaxed xs-landscape:mt-0 h-414-w-896-landscape:landscape:text-lg/relaxed h-414-w-896:portrait:text-[1.15rem] h-412-w-915-landscape:landscape:text-[1.15rem] h-540-w-720-landscape:landscape:text-base/relaxed h-540-w-720-landscape:landscape:mt-0 h-568-w-320-landscape:landscape:mb-0 h-568-w-320-landscape:landscape:text-[0.85rem]/relaxed h-414-w-736:portrait:text-lg/relaxed h-414-w-736-landscape:landscape:text-[1.025rem]/relaxed h-375-w-812:portrait:text-lg/relaxed h-375-w-812-landscape:landscape:text-[1.045rem]/relaxed h-1260-w-1024:text-xl/relaxed h-1260-w-1024:mb-2";
const dividerStyle1 =
  "absolute -right-[56px] xl:-right-[56px] 2xl:-right-[36px] xl:w-4/5 w-2/3 h-12 border-b border-zinc-300 lg:hidden h-1260-w-1024:hidden 3xl:hidden";
const buttonContainerStyle =
  "flex justify-between gap-4 sm:py-0 md:py-4 xl:py-2 2xl:py-0 3xl:py-4 3xl:gap-4 items-center h-1180-1550:pb-2 xs-landscape:py-2 xs-landscape:pb-0 xs-landscape:gap-2 h-658-w-320-landscape:landscape:scale-95 h-658-w-320-landscape:landscape:ml-16 h-667-w-375-landscape:landscape:pt-1 h-540-w-720-landscape:landscape:pt-2 h-540-w-720-landscape:landscape:pb-2 h-414-w-736-landscape:landscape:pt-2 h-375-w-812-landscape:landscape:scale-95 h-375-w-812-landscape:landscape:ml-8";
const dividerStyle2 =
  "flex-1 border-b border-zinc-300 h-658-w-320-landscape:landscape:scale-x-[2.5] h-658-w-320-landscape:landscape:mr-20 h-375-w-812-landscape:landscape:mr-10 h-375-w-812-landscape:landscape:scale-x-[1.2]";

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
              It all started with a blank sheet of paper and a love for creating
              spaces where people truly feel at home. Over the years, I&apos;ve
              designed everything from cozy residences in Nicaragua to managing
              complex estimates for large-scale projects in Utah and Puget
              Sound. Now, having recently moved to Minneapolis, I&apos;m excited
              to bring my blend of creative design and practical construction
              expertise to new challenges. With a strong focus on precision,
              efficiency, and quality results, I&apos;m committed to turning
              every vision into a successful project.
            </p>
            <div
              className={
                isSmallScreen
                  ? "flex gap-2 xs:scale-95 xs:flex-row-reverse xs:place-content-center 2xs:scale-[0.85] h-667-w-375:scale-[0.8] h-667-w-375:flex-nowrap h-658-w-320:scale-[0.65] h-844-w-390:scale-[0.85] h-882-w-344:scale-[0.8] h-568-w-320-landscape:landscape:scale-[0.85] h-568-w-320-landscape:landscape:place-content-center"
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
