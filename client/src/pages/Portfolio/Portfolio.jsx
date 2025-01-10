import ImageGrid from "../../components/Galleries/ImageGrid.jsx";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";

const portfolioPageStyle = "relative bg-white animate-fadeIn w-full h-full";

const Portfolio = () => {
  const images = [project1, project2, project3, project3];

  return (
    <div id="portfolioPage" className={portfolioPageStyle}>
      <ImageGrid images={images} />
    </div>
  );
};

export default Portfolio;
