import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePortfolio from "../../contexts/usePortfolio.js";
import Image from "../../components/Image";
import NotFoundPage from "../NotFoundPage.jsx";

const projectPageStyle = "animate-fadeInUp w-full flex flex-col";
const projectHeroSectionStyle = "h-[88dvh] xs:h-[84dvh] xs-landscape:h-[84dvh]";
const projectHeroImgStyle = "h-3/4";
const projectTitleStyle = "bg-gradient-to-br from-zinc-900 to-zinc-950 h-1/4";
const aboutProjectStyle = "h-screen";

const Project = () => {
  const { projectId } = useParams();
  const { portfolio } = usePortfolio();

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the project that matches the projectId
  const projectData = portfolio
    ? portfolio.projects.find((project) => project.projectId === projectId)
    : null;

  // If projectData is not found, handle the case
  if (!projectData) {
    return <NotFoundPage />;
  }

  // * header full width with name
  // * about the project, half stats, half pitch
  // * project gallery free size

  return (
    <div id={`projectPage-${projectId}`} className={projectPageStyle}>
      <div id="projectHeroSection" className={projectHeroSectionStyle}>
        <div id="projectHeroImg" className={projectHeroImgStyle}>
          <Image
            src={projectData.mainImg}
            altText={projectData.projectId}
            objectFit="cover"
            objectExtra="object-bottom"
          />
        </div>
        <div id="projectTitle" className={projectTitleStyle}></div>
      </div>
      <div id="aboutProject" className={aboutProjectStyle}></div>
    </div>
  );
};

export default Project;
