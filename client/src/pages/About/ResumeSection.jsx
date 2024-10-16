import resumePicture1 from "../../assets/resumePictures/resumePicture1.png";
import resumePicture2 from "../../assets/resumePictures/resumePicture2.png";
import Image from "../../components/Image.jsx";
import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";

const resumeSectionStyle =
  "h-screen grid grid-cols-[1fr_2fr_2fr] grid-rows-[1fr_2fr] gap-4 lg:gap-2 px-16 py-12 pb-4 3xl:p-20 md:bg-zinc-200 sm:bg-red-100";
const resumeSubsection =
  "p-2 pt-0 flex flex-col gap-2 3xl:p-8 3xl:gap-4 xl:text-base lg:gap-3";
const h1Style =
  "font-serif font-bold text-3xl pb-2 3xl:text-5xl border-b mb-2 lg:pb-1 lg:mb-1 lg:text-[1.75rem] md:text-2xl";
const infoContainer =
  "leading-tight grid grid-rows-1 grid-cols-[1fr_2fr] gap-2 lg:flex lg:flex-col lg:gap-1";
const h2Style = "3xl:text-2xl";
const itemTitle = "font-semibold 3xl:text-2xl";
const itemDetail = "text-base italic xl:text-sm 3xl:text-xl";
const educationStyle = "2xl:flex 2xl:flex-col 2xl:gap-1";
const workExperienceStyle = "";
const softwareList =
  "leading-tight flex flex-wrap gap-1 text-center justify-center 3xl:text-2xl 3xl:gap-4";
const dotStyle =
  "w-1 h-1 bg-lime-400 rounded place-self-center mx-2 last:hidden";
const buttonContainer = "m-auto xl:scale-95";
const smallPicture = "";
const largePicture = "col-span-2";

const ResumeSection = () => {
  return (
    <>
      <section id="resume" className={resumeSectionStyle}>
        {/* Texts for ResumeSection */}
        <div id="education" className={resumeSubsection}>
          <h1 className={h1Style}>Education</h1>
          <div className={`${infoContainer} ${educationStyle}`}>
            <h2 className={h2Style}>2010 - 2015</h2>
            <div>
              <p className={itemTitle}>Bachelor of Architecture</p>
              <p className={itemDetail}>Universidad Centroamericana UCA</p>
            </div>
          </div>
        </div>
        <div id="workExperience" className={resumeSubsection}>
          <h1 className={h1Style}>Work experience</h1>
          <div className={`${infoContainer} ${workExperienceStyle}`}>
            <h2 className={h2Style}>2016 - 2017</h2>
            <div>
              <p className={itemTitle}>Lead Architect</p>
              <p className={itemDetail}>Daibutsu Aladdin Casino Company</p>
            </div>
          </div>
          <div className={`${infoContainer} ${workExperienceStyle}`}>
            <h2 className={h2Style}>2017 - 2023</h2>
            <div>
              <p className={itemTitle}>Estimator</p>
              <p className={itemDetail}>Nica Electronic Services NICAES</p>
            </div>
          </div>
          <div className={`${infoContainer} ${workExperienceStyle}`}>
            <h2 className={h2Style}>2017 - Present</h2>
            <div>
              <p className={itemTitle}>Freelance Architect</p>
              <p className={itemDetail}>Residential and Commercial Projects</p>
            </div>
          </div>
        </div>
        <div id="softwareSkills" className={resumeSubsection}>
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
        <div id="resumePicture2" className={largePicture}>
          <Image src={resumePicture2} altText="resumePicture" />
        </div>
        <div id="resumePicture1" className={smallPicture}>
          <Image src={resumePicture1} altText="resumePicture" />
        </div>
      </section>
    </>
  );
};

export default ResumeSection;
