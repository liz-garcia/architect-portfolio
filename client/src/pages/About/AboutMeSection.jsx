import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";

// * Tailwind CSS utility classes
const aboutMeStyle =
  "px-24 py-16 md:pb-8 sm:pb-16 flex md:flex-col lg:flex-row gap-4 md:gap-2 sm:gap-4 justify-center sm:h-screen";
// * aboutMeTitle
const aboutMeTitleStyle = "md:flex-none flex-1 w-1/3 md:w-auto";
const h2Style = "font-black font-serif text-4xl";
// * aboutMeText
const aboutMeTextStyle = "md:flex-none flex flex-col gap-1 w-2/3 md:w-auto";
const h3Style = "font-bold text-xl";
const elevatorPitchStyle = "mb-2";

// AboutMeSection component
const AboutMeSection = () => {
  return (
    <section id="aboutMe" className={aboutMeStyle}>
      <div id="aboutMeTitle" className={aboutMeTitleStyle}>
        <h2 className={h2Style}>About my passion</h2>
      </div>
      <div id="aboutMeText" className={aboutMeTextStyle}>
        <h3 className={h3Style}>Architect, Estimator, Design & Drafting</h3>
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
        <PrimaryLink to="/portfolio">View all projects</PrimaryLink>
      </div>
    </section>
  );
};

export default AboutMeSection;
