import resumePicture1 from "../../assets/resumePictures/resumePicture1.png";
import resumePicture2 from "../../assets/resumePictures/resumePicture2.png";
import Image from "../../components/Image.jsx";
import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";

const resumeSectionStyle =
  "min-h-fit h-screen grid grid-cols-3 xl:grid-cols-[1fr_2fr_2fr] grid-rows-[1fr_2fr] lg:grid-rows-[2fr_1fr_3fr] lg:grid-cols-[1fr_1fr_1fr] gap-4 xl:gap-2 px-16 py-12 pb-4 lg:px-12 lg:pt-8 lg:pb-2 lg:portrait:grid-rows-[auto_auto_1fr] lg:portrait:px-16 lg:portrait:py-16 lg:portrait:gap-4 3xl:p-20 md:portrait:gap-4 md:portrait:px-10 md:portrait:pt-10 md:portrait:pb-0 sm:portrait:min-h-fit sm:portrait:h-screen sm:flex sm:flex-col sm:portrait:flex sm:portrait:flex-col sm:portrait:px-12 sm:portrait:gap-4 xs:portrait:gap-4 sm:portrait:place-content-center sm:portrait:pt-8 sm:portrait:pb-8 xs:portrait:py-8 xs:portrait:px-8 xs-landscape:px-10 xs-landscape:pb-8 h-1260-w-1024:h-[50vh] h-568-w-320-landscape:grid-rows-[2fr_1fr] h-568-w-320-landscape:landscape:py-6 h-568-w-320-landscape:landscape:px-8 h-667-w-375-landscape-extra:gap-1 h-667-w-375-landscape-extra:py-6 h-667-w-375-landscape-extra:grid-rows-[2fr_1fr] 2xs:portrait:gap-2";
const resumeSubsection =
  "p-2 pt-0 flex flex-col gap-2 3xl:p-8 3xl:gap-4 lg:gap-2 lg:pb-2 2xl:text-[1.09rem] xl:text-[1.05rem] lg:text-base sm:gap-2 sm:min-h-fit sm:pb-0 xs:gap-1 xs:pb-4 2xs:pb-0 h-568-w-320-landscape:gap-1";
const h1Style =
  "font-serif font-bold text-3xl xl:text-[1.85rem] pb-2 3xl:text-5xl border-b mb-2 lg:text-[1.75rem] md:text-2xl md:landscape:text-[1.35rem] sm:text-2xl sm:pb-2 sm:mb-2 xs:text-2xl xs:pb-1 xs:mb-1 2xs:text-[1.35rem] 2xs:pb-0 2xs:mb-1 h-568-w-320-landscape:pb-1 h-568-w-320-landscape:mb-0 h-568-w-320-landscape:text-xl h-667-w-375-landscape-extra:pb-0 h-667-w-375-landscape-extra:mb-0";
const infoContainer =
  "leading-tight grid grid-rows-1 grid-cols-[1fr_2fr] gap-4 xl:gap-2 sm:gap-1 sm:pb-2 xs:pb-1 xs:gap-0 2xs:pb-1 h-568-w-320-landscape:pb-0";
const dateStyle =
  "mt-1 ml-1 3xl:text-2xl lg:portrait:text-lg sm:portrait:text-base 2xs:portrait:text-sm h-568-w-320-landscape:text-sm h-568-w-320-landscape:mt-1";
const dataItems = "my-1";
const itemTitle =
  "inline bg-lime-200 w-fit px-1 py-0 font-semibold 3xl:text-2xl lg:portrait:text-lg sm:portrait:text-base xs:portrait:text-lg 2xs:portrait:text-base h-568-w-320-landscape:text-sm";
const itemDetail =
  "mt-1 xs:mt-0 ml-1 text-sm lg:text-base italic 3xl:text-xl xs:text-base 2xs:text-sm h-540-w-720-landscape:landscape:text-sm h-568-w-320-landscape:text-xs h-667-w-375-landscape-extra:text-sm h-658-w-320-landscape-extra:text-xs";
const education =
  "lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:row-span-1 lg:pr-8 md:pr-4 sm:order-2 sm:pr-0 sm:px-0";
const educationInfo =
  "lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_2fr] xl:flex xl:flex-col xl:gap-1 xs:flex xs:flex-col";
const workExperience =
  "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-1 lg:pr-8 md:pr-4 sm:order-first sm:pr-0 sm:px-0";
const workExperienceInfo = "xs:flex xs:flex-col";
const softwareSkills =
  "lg:col-start-3 lg:row-start-1 lg:col-span-1 lg:row-span-1 lg:px-1 lg:pb-1 lg:text-[0.95rem] lg:portrait:px-0 sm:order-3 sm:portrait:order-3 sm:portrait:pr-0 sm:portrait:px-0";
const softwareList =
  "leading-tight flex flex-wrap gap-1 text-center justify-center lg:p-1 lg:pt-0 3xl:text-2xl 3xl:gap-4 sm:px-0 xs:pt-1 h-568-w-320-landscape:text-sm h-568-w-320-landscape:py-2 h-658-w-320-landscape-extra:text-sm h-667-w-375-landscape-extra:text-sm";
const dotStyle =
  "w-1 h-1 bg-lime-400 rounded place-self-center mx-2 last:hidden lg:mx-1 sm:mx-1 xs:mx-1";
const buttonContainer =
  "mx-auto my-auto xl:scale-95 lg:scale-[0.85] lg:portrait:mt-2 sm:portrait:mt-1 md:landscape:mt-2 xs-landscape:landscape:mt-0 sm:scale-95 2xs:scale-90 h-568-w-320-landscape:scale-90";
const pictures = "2xl:pt-2 md:portrait:pt-0 lg:px-2";
const smallPicture =
  "lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-2 lg:pt-0 lg:portrait:hidden sm:hidden sm:portrait:hidden h-568-w-320-landscape:hidden";
const largePicture =
  "col-span-2 lg:row-start-3 lg:col-start-1 lg:col-span-2 lg:pr-8 md:pr-4 lg:portrait:col-span-3 lg:portrait:pr-0 lg:portrait:px-0 lg:portrait:mb-0 lg:portrait:pt-8 md:portrait:pr-4 lg:portrait:mb-4 sm:hidden sm:portrait:hidden xs-landscape:hidden h-1260-w-1024:portrait:pt-4 h-1260-w-1024:portrait:mb-0 h-568-w-320-landscape:hidden";

const ResumeSection = () => {
  return (
    <>
      <section id="resume" className={resumeSectionStyle}>
        {/* Texts for ResumeSection */}
        <div id="education" className={`${resumeSubsection} ${education}`}>
          <h1 className={h1Style}>Education</h1>
          <div className={`${infoContainer} ${educationInfo}`}>
            <p className={dateStyle}>2010 - 2015</p>
            <div className={dataItems}>
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
            <div className={dataItems}>
              <p className={itemTitle}>Lead Architect</p>
              <p className={itemDetail}>Daibutsu Aladdin Casino Company</p>
            </div>
          </div>
          <div className={`${infoContainer} ${workExperienceInfo}`}>
            <h2 className={dateStyle}>2017 - 2023</h2>
            <div className={dataItems}>
              <p className={itemTitle}>Estimator</p>
              <p className={itemDetail}>Nica Electronic Services NICAES</p>
            </div>
          </div>
          <div className={`${infoContainer} ${workExperienceInfo}`}>
            <h2 className={dateStyle}>2017 - Present</h2>
            <div className={dataItems}>
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
            <PrimaryLink to="/resume">View Full Resume</PrimaryLink>
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
            objectExtra="object-bottom lg:object-cover h-1260-w-1024:object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default ResumeSection;
