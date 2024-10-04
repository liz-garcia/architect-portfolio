import Image from "../../components/Image.jsx";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";

// Tailwind CSS utility classes
const featuredProjectsStyle =
  "flex-1 p-12 bg-zinc-900 text-white h-2/3 md:h-auto sm:flex-none sm:h-screen flex justify-center gap-8 3xl:h-1/2";
const projectContainerStyle = "w-3/12 rounded-lg overflow-hidden";

// FeaturedProjectsSection component
const FeaturedProjectsSection = () => {
  return (
    <section id="featuredProjects" className={featuredProjectsStyle}>
      <div className={projectContainerStyle}>
        <Image src={project1} altText="Project 1" />
      </div>
      <div className={projectContainerStyle}>
        <Image src={project2} altText="Project 2" />
      </div>
      <div className={projectContainerStyle}>
        <Image src={project3} altText="Project 3" />
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
