import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";

// Tailwind CSS utility classes
const aboutMeStyle = "flex-1";
// const aboutSectionStyle =
//   "w-[100dvw] h-[100dvh] flex pl-16 md:p-0 2xl:pl-16 3xl:pl-28 items-center justify-center md:flex-col-reverse gap-8 md:gap-3 2xl:gap-12 3xl:gap-24";
const h2Style = "";
const aboutTextStyle = "";
const h3Style = "";
const elevatorPitchStyle = "";

// AboutSection component
const AboutMeSection = () => {
  return (
    <section id="aboutMe" className={aboutMeStyle}>
      <h2 className={h2Style}>About my passion</h2>
      <div id="aboutMeText" className={aboutTextStyle}>
        <h3 className={h3Style}>Architect, Estimator, Design & Drafting</h3>
        <p id="elevatorPitch" className={elevatorPitchStyle}>
          Elevator pitch goes here. Talk about skills, accomplishments and work
          expertise. Torem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
          metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
          interdum tellus elit sed risus.
        </p>
        <PrimaryLink to="/portfolio">View all projects</PrimaryLink>
      </div>
    </section>
  );
};

export default AboutMeSection;
