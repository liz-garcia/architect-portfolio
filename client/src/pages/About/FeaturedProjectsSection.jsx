import Image from "../../components/Image.jsx";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";

// Tailwind CSS utility classes
const featuredProjectsStyle =
  "flex-1 p-14 bg-zinc-900 text-white h-2/3 lg:h-1/2 xl:py-10 lg:px-0 lg:gap-4 md:h-auto sm:flex-none sm:h-screen flex justify-center gap-8 sm:flex-col 3xl:h-1/2 3xl:gap-12 3xl:py-16 sm:p-10 md:py-8 md:px-0 xs:p-10 lg-md-portrait:p-16 lg-md-portrait:flex lg-md-portrait:flex-col lg-md-portrait:gap-8 h-1180-1550:h-2/3 h-1180-1550:p-24 xs-landscape:h-lvh xs-landscape:min-h-fit h-568-w-320-landscape:flex-row xs-landscape:place-content-center h-568-w-320-landscape:p-8 h-568-w-320-landscape:place-content-center h-1180-1550:gap-10 h-1180-1550:py-16";
// Project container style
const imageContainerStyle =
  "h-540-w-720-landscape:landscape:w-[27.5vw] 3xl:w-3/12 lg:w-3/12 2xl:w-4/12 mb-2 rounded-xl overflow-hidden sm:size-full lg-md-portrait:m-0 lg-md-portrait:p-0 lg-md-portrait:w-auto lg-md-portrait:h-[32%] xs-landscape:h-[80vh]";
const transition =
  "hover:cursor-pointer hover:scale-105 transform transition ease-in-out duration-500";

const projectContainerStyle = `${imageContainerStyle} ${transition}`;

// FeaturedProjectsSection component
const FeaturedProjectsSection = () => {
  return (
    <section id="featuredProjects" className={featuredProjectsStyle}>
      <div className={projectContainerStyle}>
        <Image src={project1} altText="Project 1" objectFit="cover" />
      </div>
      <div className={projectContainerStyle}>
        <Image src={project2} altText="Project 2" objectFit="cover" />
      </div>
      <div className={projectContainerStyle}>
        <Image src={project3} altText="Project 3" objectFit="cover" />
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
