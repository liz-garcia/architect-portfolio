import PropTypes from "prop-types";
import resumePicture1 from "../../assets/resumePictures/resumePicture1.png";
import resumePicture2 from "../../assets/resumePictures/resumePicture2.png";
import Image from "../../components/Image.jsx";
import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";
import InfoContainer from "../../components/InfoContainer.jsx";
import InlineDotList from "../../components/InlineDotList.jsx";

const resumeSectionStyle =
  "min-h-fit h-screen grid grid-cols-3 xl:grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_2fr] lg:grid-rows-[2fr_1fr_3fr] lg:grid-cols-[1fr_1fr_1fr] gap-4 xl:gap-2 px-16 py-12 pb-4 lg:px-12 lg:pt-8 lg:pb-2 lg:portrait:grid-rows-[auto_auto_1fr] lg:portrait:px-16 lg:portrait:py-16 lg:portrait:gap-4 3xl:p-20 md:portrait:gap-4 md:portrait:px-10 md:portrait:pt-10 md:portrait:pb-0 sm:portrait:min-h-fit sm:portrait:h-screen sm:flex sm:flex-col sm:portrait:flex sm:portrait:flex-col sm:portrait:px-12 sm:portrait:gap-4 xs:portrait:gap-4 sm:portrait:place-content-center sm:portrait:pt-8 sm:portrait:pb-8 xs:portrait:py-8 xs:portrait:px-8 xs-landscape:px-10 xs-landscape:pb-8 h-1260-w-1024:h-[50vh] ipad-surface-pro:portrait:h-[50vh] ipad-surface-pro:portrait:gap-2 ipad-surface-pro:portrait:p-12 ipad-surface-pro:portrait:pb-2 h-568-w-320-landscape:grid-rows-[2fr_1fr] h-568-w-320-landscape:landscape:py-6 h-568-w-320-landscape:landscape:px-8 h-667-w-375-landscape-extra:gap-1 h-667-w-375-landscape-extra:py-6 h-667-w-375-landscape-extra:grid-rows-[2fr_1fr] 2xs:portrait:gap-2 ipad-surface-pro-landscape:pt-20 ipad-surface-pro-landscape:pb-12";
const resumeSubsection =
  "p-2 pt-0 flex flex-col gap-2 3xl:p-8 3xl:gap-4 lg:gap-2 lg:pb-2 2xl:text-[1.09rem] xl:text-[1.05rem] lg:text-base sm:gap-2 sm:min-h-fit sm:pb-0 xs:gap-1 xs:pb-4 2xs:pb-0 h-568-w-320-landscape:gap-1";
const h1Style =
  "font-serif font-bold text-3xl xl:text-[1.85rem] pb-2 3xl:text-5xl border-b mb-2 lg:text-[1.75rem] md:text-2xl md:landscape:text-[1.35rem] sm:text-2xl sm:pb-2 sm:mb-2 xs:text-2xl xs:pb-1 xs:mb-1 2xs:text-[1.35rem] 2xs:pb-0 2xs:mb-1 h-568-w-320-landscape:pb-1 h-568-w-320-landscape:mb-0 h-568-w-320-landscape:text-xl h-667-w-375-landscape-extra:pb-0 h-667-w-375-landscape-extra:mb-0";
const education =
  "lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:row-span-1 lg:pr-8 md:pr-4 sm:order-2 sm:pr-0 sm:px-0";
const workExperience =
  "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-1 lg:pr-8 md:pr-4 sm:order-first sm:pr-0 sm:px-0";
const softwareSkills =
  "lg:col-start-3 lg:row-start-1 lg:col-span-1 lg:row-span-1 lg:px-1 lg:pb-1 lg:text-[0.95rem] lg:portrait:px-0 sm:order-3 sm:portrait:order-3 sm:portrait:pr-0 sm:portrait:px-0";
const buttonContainer =
  "mx-auto my-auto xl:scale-95 lg:scale-[0.85] lg:portrait:mt-2 sm:portrait:mt-1 md:landscape:mt-2 xs-landscape:landscape:mt-0 sm:scale-95 2xs:scale-90 h-568-w-320-landscape:scale-90";
const pictures = "2xl:pt-2 md:portrait:pt-0 px-2";
const smallPicture =
  "lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-2 lg:pt-0 lg:portrait:hidden sm:hidden sm:portrait:hidden h-568-w-320-landscape:hidden xl:px-2";
const largePicture =
  "col-span-2 lg:row-start-3 lg:col-start-1 lg:col-span-2 lg:pr-8 md:pr-4 lg:portrait:col-span-3 lg:portrait:pr-0 lg:portrait:px-0 lg:portrait:mb-0 lg:portrait:pt-8 md:portrait:pr-4 lg:portrait:mb-4 sm:hidden sm:portrait:hidden xs-landscape:hidden h-1260-w-1024:portrait:pt-4 h-1260-w-1024:portrait:mb-0 h-568-w-320-landscape:hidden";

const ResumeSection = ({ data }) => {
  // * Get an array of objects for every subsection
  const educationItems = data ? data.educationHighlights : null; // array of objects
  const workExperienceItems = data ? data.workExperienceHighlights : null; // array of objects
  const skillsItems = data ? data.skillsHighlights : null; // array of strings

  return (
    <>
      <section id="resume" className={resumeSectionStyle}>
        {/* Texts for ResumeSection */}
        <div id="education" className={`${resumeSubsection} ${education}`}>
          <h1 className={h1Style}>Education</h1>
          {/* Render an InfoContainer per item in educationHighlights */}
          {educationItems.map((item, index) => (
            <InfoContainer
              key={index}
              date={item.date}
              title={item.title}
              detail={item.detail}
            />
          ))}
        </div>
        <div
          id="workExperience"
          className={`${resumeSubsection} ${workExperience}`}
        >
          <h1 className={h1Style}>Work experience</h1>
          {/* Render an InfoContainer per item in workExperienceHighlights */}
          {workExperienceItems.map((item, index) => (
            <InfoContainer
              key={index}
              date={item.date}
              title={item.title}
              detail={item.detail}
            />
          ))}
        </div>
        <div
          id="softwareSkills"
          className={`${resumeSubsection} ${softwareSkills}`}
        >
          <h1 className={h1Style}>Software skills</h1>
          {/* Render InlineDotList with the array 'skillsItems' */}
          <InlineDotList array={skillsItems} />

          {/* Button for accessing Full Resume */}
          <div className={buttonContainer}>
            <PrimaryLink to="/resume">View Full Resume</PrimaryLink>
          </div>
        </div>
        {/* Pictures for ResumeSection */}
        <div id="resumePicture2" className={`${pictures} ${largePicture}`}>
          <Image
            src={resumePicture2}
            altText="resumePicture"
            objectFit="cover"
            objectExtra="object-center"
          />
        </div>
        <div id="resumePicture1" className={`${pictures} ${smallPicture}`}>
          <Image
            src={resumePicture1}
            altText="resumePicture"
            objectFit="cover"
            objectExtra="object-center lg:object-left-top"
          />
        </div>
      </section>
    </>
  );
};

// Prop-types validation
ResumeSection.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ResumeSection;
