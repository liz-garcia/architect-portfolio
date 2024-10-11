import Image from "../../components/Image.jsx";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";

// Tailwind CSS utility classes
const featuredProjectsStyle =
  "flex-1 p-12 bg-zinc-900 text-white h-2/3 lg:h-1/2 xl:py-10 lg:px-0 lg:gap-4 md:h-auto sm:flex-none sm:h-screen flex justify-center gap-8 sm:flex-col 3xl:h-1/2 3xl:gap-12 3xl:py-16 sm:p-16 md:py-8 md:px-0";
// Project container style
const imageContainerStyle =
  "3xl:w-3/12 lg:w-3/12 2xl:w-4/12 mb-2 rounded-xl overflow-hidden sm:size-full";
const transition =
  "hover:cursor-pointer hover:scale-105 transform transition ease-in-out duration-500";

const projectContainerStyle = `${imageContainerStyle} ${transition}`;

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
