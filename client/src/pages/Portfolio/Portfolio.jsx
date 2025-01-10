import ImageGrid from "../../components/Galleries/ImageGrid.jsx";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";

const portfolioPageStyle = "relative bg-white animate-fadeIn w-full h-full";

const Portfolio = () => {
  const projects = [
    { title: "Project 1", src: project1 },
    { title: "Project 2", src: project2 },
    { title: "Project 3", src: project3 },
    { title: "Project 4", src: project3 },
    { title: "Project 5", src: project1 },
  ];

  return (
    <div id="portfolioPage" className={portfolioPageStyle}>
      <ImageGrid items={projects} />
    </div>
  );
};

export default Portfolio;
