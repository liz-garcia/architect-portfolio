import AboutMeSection from "./AboutMeSection.jsx";
import FeaturedProjectsSection from "./FeaturedProjectsSection.jsx";

// Tailwind CSS utility classes
const aboutStyle = "w-screen";
const presentationStyle = "h-screen p-12 flex flex-col";

// About page
function About() {
  return (
    <div id="about" className={aboutStyle}>
      <section id="presentation" className={presentationStyle}>
        <AboutMeSection />
        <FeaturedProjectsSection />
      </section>
      <section id="resume"></section>
      <section id="contact"></section>
    </div>
  );
}

export default About;
