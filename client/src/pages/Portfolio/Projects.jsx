import ImageGridCover from "../../components/Galleries/ImageGridCover.jsx";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";

const projectsPageStyle = "bg-zinc-900 animate-fadeIn w-screen h-[75vh]";

const Projects = () => {
  const images = [project1, project2, project3, project3, project1, project2];

  return (
    <div id="projectsPage" className={projectsPageStyle}>
      <ImageGridCover images={images} />
    </div>
  );
};

export default Projects;
