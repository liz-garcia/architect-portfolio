import AboutMeSection from "./AboutMeSection.jsx";
import FeaturedProjectsSection from "./FeaturedProjectsSection.jsx";
import ResumeSection from "./ResumeSection.jsx";

// Tailwind CSS utility classes
const aboutStyle =
  "w-screen relative overflow-hidden xs-landscape:block h-568-w-320:mt-4 3xl:pt-4 h-1180-1550:mt-4";
const presentationStyle =
  "h-screen flex flex-col sm:h-fit xs-landscape:min-h-fit";

// About section
function AboutSection() {
  return (
    <section id="about" className={aboutStyle}>
      <section id="presentation" className={presentationStyle}>
        <AboutMeSection />
        <FeaturedProjectsSection />
      </section>
      <ResumeSection />
      <section id="contact"></section>
    </section>
  );
}

export default AboutSection;
