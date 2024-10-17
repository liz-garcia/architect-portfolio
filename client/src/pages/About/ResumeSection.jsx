import resumePicture1 from "../../assets/resumePictures/resumePicture1.png";
import resumePicture2 from "../../assets/resumePictures/resumePicture2.png";
import Image from "../../components/Image.jsx";
import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";

const resumeSectionStyle =
  "h-screen grid grid-cols-3 xl:grid-cols-[1fr_2fr_2fr] grid-rows-[1fr_2fr] lg:grid-rows-[1fr_1fr_3fr] lg:grid-cols-[1fr_1fr_3fr] gap-4 lg:gap-2 px-16 py-12 pb-4 lg:px-10 lg:py-10 lg:pb-2 3xl:p-20 md:bg-zinc-200 sm:bg-red-100";
const resumeSubsection =
  "p-2 pt-0 flex flex-col gap-2 3xl:p-8 3xl:gap-4 xl:text-base lg:gap-2";
const h1Style =
  "font-serif font-bold text-3xl pb-2 3xl:text-5xl border-b mb-2 lg:pb-1 lg:mb-1 lg:text-[1.75rem] md:text-2xl";
const infoContainer =
  "leading-tight grid grid-rows-1 grid-cols-[1fr_2fr] gap-2 lg:gap-1";
const h2Style = "3xl:text-2xl xl:text-[0.95rem]";
const itemTitle = "font-semibold 3xl:text-2xl";
const itemDetail = "text-sm italic 3xl:text-xl";
const education = "lg:col-start-3 lg:col-span-1 lg:row-span-1";
const educationInfo =
  "xl:flex xl:flex-col xl:gap-1 lg:grid lg:grid-rows-1 lg:grid-cols-[1fr_2fr] lg:gap-1";
const workExperience =
  "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2";
const workExperienceInfo = "lg:flex lg:flex-col lg:gap-1";
const softwareSkills =
  "lg:col-start-3 lg:row-start-2 lg:col-span-1 lg:row-span-1";
const softwareList =
  "leading-tight flex flex-wrap gap-1 text-center justify-center 3xl:text-2xl 3xl:gap-4";
const dotStyle =
  "w-1 h-1 bg-lime-400 rounded place-self-center mx-2 last:hidden";
const buttonContainer = "mx-auto my-auto xl:scale-95 lg:scale-90";
const pictures = "lg:row-start-3";
const smallPicture = "lg:col-start-1 lg:col-span-2";
const largePicture = "col-span-2 lg:col-start-3 lg:col-span-1";

const ResumeSection = () => {
  return (
    <>
      <section id="resume" className={resumeSectionStyle}>
        {/* Texts for ResumeSection */}
        <div id="education" className={`${resumeSubsection} ${education}`}>
          <h1 className={h1Style}>Education</h1>
          <div className={`${infoContainer} ${educationInfo}`}>
            <h2 className={h2Style}>2010 - 2015</h2>
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
            <h2 className={h2Style}>2016 - 2017</h2>
            <div>
              <p className={itemTitle}>Lead Architect</p>
              <p className={itemDetail}>Daibutsu Aladdin Casino Company</p>
            </div>
          </div>
          <div className={`${infoContainer} ${workExperienceInfo}`}>
            <h2 className={h2Style}>2017 - 2023</h2>
            <div>
              <p className={itemTitle}>Estimator</p>
              <p className={itemDetail}>Nica Electronic Services NICAES</p>
            </div>
          </div>
          <div className={`${infoContainer} ${workExperienceInfo}`}>
            <h2 className={h2Style}>2017 - Present</h2>
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
          <Image src={resumePicture2} altText="resumePicture" />
        </div>
        <div id="resumePicture1" className={`${pictures} ${smallPicture}`}>
          <Image src={resumePicture1} altText="resumePicture" />
        </div>
      </section>
    </>
  );
};

export default ResumeSection;
