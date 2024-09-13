import AboutMeSection from "./AboutMeSection.jsx";
import FeaturedProjectsSection from "./FeaturedProjectsSection.jsx";

// Tailwind CSS utility classes
const aboutStyle = "w-screen";
const presentationStyle = "h-screen flex flex-col sm:h-fit";

// About section
function About() {
  return (
    <section id="about" className={aboutStyle}>
      <section id="presentation" className={presentationStyle}>
        <AboutMeSection />
        <FeaturedProjectsSection />
      </section>
      <section id="resume"></section>
      <section id="contact"></section>
    </section>
  );
}

export default About;
