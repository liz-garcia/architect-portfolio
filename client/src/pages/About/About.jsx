import PropTypes from "prop-types";
import AboutMeSection from "./AboutMeSection.jsx";
import FeaturedProjectsSection from "./FeaturedProjectsSection.jsx";
import ResumeSection from "./ResumeSection.jsx";

// Tailwind CSS utility classes
const aboutStyle =
  "w-screen relative xs-landscape:block h-568-w-320:mt-4 3xl:pt-4 h-1180-1550:mt-4";
const presentationStyle =
  "min-h-fit h-screen flex flex-col sm:h-fit xs-landscape:min-h-fit";

// About page is a section inside Homepage
// About section
function AboutSection({ data }) {
  // * Set all necessary data
  const aboutMeSectionData = data ? data.aboutMeSection : null;
  const resumeSectionData = data ? data.resumeSection : null;

  return (
    <section id="about" className={aboutStyle}>
      <section id="presentation" className={presentationStyle}>
        <AboutMeSection data={aboutMeSectionData} />
        <FeaturedProjectsSection />
      </section>
      <ResumeSection data={resumeSectionData} />
    </section>
  );
}

// Prop-types validation
AboutSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutSection;
