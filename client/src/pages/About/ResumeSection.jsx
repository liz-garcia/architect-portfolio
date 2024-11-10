import resumePicture1 from "../../assets/resumePictures/resumePicture1.png";
import resumePicture2 from "../../assets/resumePictures/resumePicture2.png";
import Image from "../../components/Image.jsx";
import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";

const resumeSectionStyle =
  "min-h-fit h-screen grid grid-cols-3 xl:grid-cols-[1fr_2fr_2fr] grid-rows-[1fr_2fr] lg:grid-rows-[2fr_1fr_3fr] lg:grid-cols-[1fr_1fr_1fr] gap-4 xl:gap-2 px-16 py-12 pb-4 lg:px-12 lg:pt-8 lg:pb-2 3xl:p-20 md:gap-1 md:px-8 sm:min-h-fit sm:h-screen sm:flex sm:flex-col sm:gap-8 xs:gap-8 sm:place-content-center sm:pt-8 sm:pb-8 xs:py-8 xs:px-8";
const resumeSubsection =
  "p-2 pt-0 flex flex-col gap-2 3xl:p-8 3xl:gap-4 lg:gap-2 lg:pb-2 2xl:text-[1.09rem] xl:text-[1.05rem] lg:text-base sm:gap-2 sm:min-h-fit sm:pb-0 xs:pb-0";
const h1Style =
  "font-serif font-bold text-3xl xl:text-[1.85rem] pb-2 3xl:text-5xl border-b mb-2 lg:text-[1.75rem] md:text-2xl sm:text-2xl sm:pb-2 sm:mb-2 xs:text-2xl xs:pb-1 xs:mb-1";
const infoContainer =
  "leading-tight grid grid-rows-1 grid-cols-[1fr_2fr] gap-4 xl:gap-2 sm:gap-1 sm:pb-2 xs:pb-4 xs:gap-1";
const dateStyle = "3xl:text-2xl sm:text-base";
const itemTitle = "font-semibold 3xl:text-2xl sm:text-base xs:text-lg";
const itemDetail = "text-sm lg:text-base italic 3xl:text-xl";
const education =
  "lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:row-span-1 lg:pr-8 md:pr-4 sm:order-2 sm:pr-0 sm:px-0";
const educationInfo =
  "lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_2fr] xl:flex xl:flex-col xl:gap-1 xs:flex xs:flex-col";
const workExperience =
  "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-1 lg:pr-8 md:pr-4 sm:order-first sm:pr-0 sm:px-0";
const workExperienceInfo = "xs:flex xs:flex-col";
const softwareSkills =
  "lg:col-start-3 lg:row-start-1 lg:col-span-1 lg:row-span-1 lg:px-1 lg:pb-1 lg:text-[0.95rem] sm:order-3 sm:pr-0 sm:px-0";
const softwareList =
  "leading-tight flex flex-wrap gap-1 text-center justify-center lg:p-1 lg:pt-0 3xl:text-2xl 3xl:gap-4 sm:px-0";
const dotStyle =
  "w-1 h-1 bg-lime-400 rounded place-self-center mx-2 last:hidden lg:mx-1 sm:mx-2 xs:mx-1";
const buttonContainer = "mx-auto my-auto xl:scale-95 lg:scale-[0.85]";
// const pictures = "py-4 xl:pt-2 lg:px-2";
const pictures = "xl:pt-2 lg:px-2 md:px-1";
const smallPicture =
  "lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-2 lg:pt-0 sm:hidden";
const largePicture =
  "col-span-2 lg:row-start-3 lg:col-start-1 lg:col-span-2 lg:pr-8 md:pr-4 lg:mb-4 sm:hidden xs-landscape:hidden";

const ResumeSection = () => {
  return (
    <>
      <section id="resume" className={resumeSectionStyle}>
        {/* Texts for ResumeSection */}
        <div id="education" className={`${resumeSubsection} ${education}`}>
          <h1 className={h1Style}>Education</h1>
          <div className={`${infoContainer} ${educationInfo}`}>
            <p className={dateStyle}>2010 - 2015</p>
            <div>
              <p className={itemTitle}>Bachelor of Architecture</p>
              <p className={itemDetail}>Universidad Centroamericana UCA</p>
            </div>
          </div>
        </div>
        <div
          id="workExperience"
          className={`${resumeSubsection} ${workExperience}`}
        >
          <h1 className={h1Style}>Work experience</h1>
          <div className={`${infoContainer} ${workExperienceInfo}`}>
            <h2 className={dateStyle}>2016 - 2017</h2>
            <div>
              <p className={itemTitle}>Lead Architect</p>
              <p className={itemDetail}>Daibutsu Aladdin Casino Company</p>
            </div>
          </div>
          <div className={`${infoContainer} ${workExperienceInfo}`}>
            <h2 className={dateStyle}>2017 - 2023</h2>
            <div>
              <p className={itemTitle}>Estimator</p>
              <p className={itemDetail}>Nica Electronic Services NICAES</p>
            </div>
          </div>
          <div className={`${infoContainer} ${workExperienceInfo}`}>
            <h2 className={dateStyle}>2017 - Present</h2>
            <div>
              <p className={itemTitle}>Freelance Architect</p>
              <p className={itemDetail}>Residential and Commercial Projects</p>
            </div>
          </div>
        </div>
        <div
          id="softwareSkills"
          className={`${resumeSubsection} ${softwareSkills}`}
        >
          <h1 className={h1Style}>Software skills</h1>
          <ul className={softwareList}>
            <li>AutoCAD</li>
            <div className={dotStyle} />
            <li>Revit</li>
            <div className={dotStyle} />
            <li>SketchUp</li>
            <div className={dotStyle} />
            <li>Planswift</li>
            <div className={dotStyle} />
            <li>Lumion</li>
            <div className={dotStyle} />
            <li>Project</li>
            <div className={dotStyle} />
            <li>Adobe Photoshop</li>
            <div className={dotStyle} />
          </ul>
          <div className={buttonContainer}>
            <PrimaryLink to="/resume">View Full Resume PDF</PrimaryLink>
          </div>
        </div>
        {/* Pictures for ResumeSection */}
        <div id="resumePicture2" className={`${pictures} ${largePicture}`}>
          <Image
            src={resumePicture2}
            altText="resumePicture"
            objectFit="cover"
            objectExtra="object-left-bottom sm:object-center"
          />
        </div>
        <div id="resumePicture1" className={`${pictures} ${smallPicture}`}>
          <Image
            src={resumePicture1}
            altText="resumePicture"
            objectFit="contain"
            objectExtra="object-bottom lg:object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default ResumeSection;
