import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePortfolio from "../../contexts/usePortfolio.js";
import Image from "../../components/Image";
import InlineBoxList from "../../components/Lists/InlineBoxList.jsx";
import RegularList from "../../components/Lists/RegularList.jsx";
import NotFoundPage from "../NotFoundPage.jsx";
import MasonryGallery from "../../components/Galleries/MasonryGallery.jsx";

// Tailwind utility classes
const projectPageStyle =
  "animate-fadeInUp w-full flex flex-col items-stretch mb-12 sm:mb-8";
const projectHeroSectionStyle = "h-[40dvh]";
const projectHeroImgStyle = "size-full";
const aboutProjectStyle =
  "w-full flex px-16 pb-2 gap-2 md:flex-col md:px-8 md:pt-4";
const projectDataStyle = "w-1/2 p-12 md:w-full md:p-4";
const projectTitle = "font-serif text-3xl font-bold italic";
const projectDetails = "mb-1";
const projectDescriptionText = "mt-2";
const projectDataHighlightsStyle =
  "w-1/2 p-12 flex items-center md:w-full md:p-4 md:pl-2";
const projectGalleryStyle = "place-self-center w-5/6  p-4";

// Project page component
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
      </div>
      <div id="aboutProject" className={aboutProjectStyle}>
        <div id="projectData" className={projectDataStyle}>
          <h1 className={projectTitle}>{projectData.title}</h1>
          <div className={projectDetails}>
            <InlineBoxList array={projectData.details} />
          </div>
          <p className={projectDescriptionText}>{projectData.description}</p>
        </div>
        <div id="projectDataHighlights" className={projectDataHighlightsStyle}>
          <RegularList array={projectData.highlights} />
        </div>
      </div>
      <section id="projectGallery" className={projectGalleryStyle}>
        <MasonryGallery imageUrls={projectData.gallery} />
      </section>
    </div>
  );
};

export default Project;
