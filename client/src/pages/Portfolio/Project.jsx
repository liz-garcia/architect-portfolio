import { useParams } from "react-router-dom";
import usePortfolio from "../../contexts/usePortfolio.js";
import Image from "../../components/Image";

const projectPageStyle =
  "bg-red-400 h-[88dvh] xs:h-[84dvh] xs-landscape:h-[84dvh]";
const projectHeroSectionStyle = "bg-green-200 h-1/2";
const aboutProjectStyle = "bg-sky-200 h-1/2";

const Project = () => {
  const { projectId } = useParams();
  const { portfolio } = usePortfolio();

  const projectData = portfolio ? portfolio.projects[0] : null;

  // header full width with name
  // about the project, half stats, half pitch
  //project gallery free size

  return (
    <div id={`projectPage-${projectId}`} className={projectPageStyle}>
      <div id="projectHeroSection" className={projectHeroSectionStyle}>
        <Image
          src={projectData.mainImg}
          altText={projectData.projectId}
          objectFit="cover"
        />
      </div>
      <div id="aboutProject" className={aboutProjectStyle}></div>
    </div>
  );
};

export default Project;
