import Image from "../../components/Image.jsx";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import featuredProjectsBg from "/architectural-plan-5.png";

// Tailwind CSS utility classes
const featuredProjectsStyle =
  "relative flex-1 p-14 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white h-2/3 lg:h-1/2 xl:py-10 lg:px-0 lg:gap-4 md:h-auto sm:flex-none sm:h-screen flex justify-center gap-8 sm:flex-col 3xl:h-[60%] 3xl:gap-12 3xl:p-24 sm:p-10 sm:px-16 md:py-8 md:px-0 xs:p-10 lg-md-portrait:p-12 lg-md-portrait:gap-6 h-1180-1550:h-2/3 h-1180-1550:p-24 xs-landscape:h-lvh xs-landscape:min-h-fit h-568-w-320-landscape:flex-row xs-landscape:place-content-center h-568-w-320-landscape:p-8 h-568-w-320-landscape:place-content-center h-1180-1550:gap-10 h-1180-1550:py-16 h-1260-w-1024:h-[60%] h-1260-w-1024:p-16";
const featuredProjectsBgStyle =
  "absolute size-full mix-blend-overlay opacity-20 bg-white";
// Project container style
const imageContainerStyle =
  "flex items-center justify-center animate-fadeInUp min-h-[40px] overflow-hidden h-540-w-720-landscape:landscape:w-[27.5vw] 3xl:w-4/12 lg:w-3/12 2xl:w-4/12 mb-2 rounded-xl 3xl:rounded-2xl sm:size-full lg-md-portrait:w-4/12 lg-md-portrait:h-full xs-landscape:h-[80vh] drop-shadow-lg bg-white border border-zinc-900";
const transition =
  "hover:cursor-pointer hover:scale-105 transform transition ease-in-out duration-800";

const projectContainerStyle = `${imageContainerStyle} ${transition}`;

// FeaturedProjectsSection component
const FeaturedProjectsSection = () => {
  return (
    <section id="featuredProjects" className={featuredProjectsStyle}>
      <div id="featuredProjectsBg" className={featuredProjectsBgStyle}>
        <Image
          src={featuredProjectsBg}
          objectFit="cover"
          objectExtra="object-bottom-left"
        />
      </div>
      <div className={projectContainerStyle}>
        <Image
          src={project1}
          altText="Project 1"
          objectFit="cover"
          objectExtra="object-right-bottom sm:object-left-bottom xs:object-right-bottom hover:opacity-10 z-40 transform transition ease-in-out duration-800"
        />
        <p className="duration-800 absolute z-10 transform place-self-center text-lg italic text-zinc-950 transition ease-in-out">
          Title Project 1
        </p>
      </div>
      <div className={projectContainerStyle}>
        <Image
          src={project2}
          altText="Project 2"
          objectFit="cover"
          objectExtra="hover:opacity-10 z-40"
        />
        <p className="duration-800 absolute z-10 transform place-self-center text-lg italic text-zinc-950 transition ease-in-out">
          Title Project 2
        </p>
      </div>
      <div className={projectContainerStyle}>
        <Image
          src={project3}
          altText="Project 3"
          objectFit="cover"
          objectExtra="object-bottom hover:opacity-10 z-40"
        />
        <p className="duration-800 absolute z-10 transform place-self-center text-lg italic text-zinc-950 transition ease-in-out">
          Title Project 3
        </p>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
