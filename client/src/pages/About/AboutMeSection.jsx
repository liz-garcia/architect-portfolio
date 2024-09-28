import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";

// * Tailwind CSS utility classes
const aboutMeStyle =
  "px-28 pt-16 pb-10 md:pb-8 sm:pb-16 flex md:flex-col lg:flex-row gap-4 md:gap-2 sm:gap-4 justify-center sm:h-dvh sm:px-16 sm:mx-2 xs:h-dvh xs:px-10 xs:gap-2 md:mb-4 2xs:px-8";
// * aboutMeTitle
const aboutMeTitleStyle = "md:flex-none flex-1 w-1/3 md:w-auto";
const h2Style = "font-black font-serif text-4xl xs:text-[2.1rem]";
// * aboutMeText
const aboutMeTextStyle =
  "md:flex-none flex flex-col gap-1 w-2/3 md:w-auto pt-2 pl-10 pr-18 md:pl-0 sm:pt-0";
const h3Style =
  "font-light text-2xl text-zinc-800 italic md:text-xl xs:text-2xl sm:mb-1 h-667-w-375:text-xl";
// const brStyle = "3xl:hidden 2xl:hidden xs:block";
const elevatorPitchStyle =
  "text-justify my-1 sm:mb-4 h-667-w-375:mb-2 h-667-w-375:text-base 2xs:text-base";
const dividerStyle1 =
  "absolute -right-[72px] w-2/3 h-12 border-b border-zinc-300 md:hidden";
const buttonContainerStyle = "flex justify-between gap-4";
const dividerStyle2 = "flex-1 h-1/2 border-b border-zinc-300";

// AboutMeSection component
const AboutMeSection = () => {
  return (
    <>
      <div id="divider1" className={dividerStyle1}></div>
      <section id="aboutMe" className={aboutMeStyle}>
        <div id="aboutMeTitle" className={aboutMeTitleStyle}>
          <h2 className={h2Style}>About my passion</h2>
        </div>
        <div id="aboutMeText" className={aboutMeTextStyle}>
          <h3 className={h3Style}>Architect, Estimator, Drafting & Design</h3>
          <p id="elevatorPitch" className={elevatorPitchStyle}>
            As a versatile architect with a strong focus on residential,
            commercial, and remodeling projects, I have a proven track record of
            balancing creativity with technical precision. With over 10 years of
            experience, including 7 years as an estimator, I bring a deep
            understanding of both design and construction to each project. My
            design philosophy is guided by rhythm, simplicity, and contrast,
            ensuring that every space is functional, beautiful, and aligned with
            my clients&apos; needs. I thrive on being involved in the entire
            project lifecycle, from concept to completion.
          </p>
          <div className={buttonContainerStyle}>
            <div id="divider2" className={dividerStyle2}></div>
            <PrimaryLink to="/portfolio">View all projects</PrimaryLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMeSection;
