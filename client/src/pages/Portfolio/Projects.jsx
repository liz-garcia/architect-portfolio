import ImageGrid from "../../components/Galleries/ImageGrid";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";

const projectsPageStyle = "animate-fadeInUp w-screen h-[74vh] p-8 xs:p-4";

const Projects = () => {
  const images = [project1, project2, project3, project3];

  return (
    <div id="projectsPage" className={projectsPageStyle}>
      <ImageGrid images={images} />
    </div>
  );
};

export default Projects;
