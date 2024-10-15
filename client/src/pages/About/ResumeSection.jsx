import resumePicture1 from "../../assets/resumePictures/resumePicture1.png";
import resumePicture2 from "../../assets/resumePictures/resumePicture2.png";
import Image from "../../components/Image.jsx";
import PrimaryLink from "../../components/Buttons/PrimaryLink.jsx";

const resumeSectionStyle =
  "h-screen grid grid-cols-3 grid-rows-[1fr_2fr] gap-2 p-12 3xl:p-20";
const resumeSubsection = "p-2 flex flex-col gap-2 3xl:p-8 3xl:gap-4";
const h1Style = "font-serif font-bold text-3xl pb-2 3xl:text-5xl";
const infoContainer = "grid grid-rows-1 grid-cols-[1fr_2fr] gap-2";
const h2Style = "font-bold leading-tight 3xl:text-2xl";
const itemTitle = "leading-tight 3xl:text-2xl";
const itemDetail = "text-base italic leading-tight 3xl:text-xl";
const resumePictures = "";
const largePicture = "col-span-2";
const softwareList =
  "grid grid-cols-3 gap-2 text-center leading-tight 3xl:text-2xl 3xl:gap-4";
const buttonContainer = "m-auto";

const ResumeSection = () => {
  return (
    <>
      <section id="resume" className={resumeSectionStyle}>
        {/* Texts for ResumeSection */}
        <div id="education" className={resumeSubsection}>
          <h1 className={h1Style}>Education</h1>
          <div className={infoContainer}>
            <h2 className={h2Style}>2010 - 2015</h2>
            <div>
              <p className={itemTitle}>Bachelor of Architecture</p>
              <p className={itemDetail}>Universidad Centroamericana UCA</p>
            </div>
          </div>
        </div>
        <div id="workExperience" className={resumeSubsection}>
          <h1 className={h1Style}>Work experience</h1>
          <div className={infoContainer}>
            <h2 className={h2Style}>2016 - 2017</h2>
            <div>
              <p className={itemTitle}>Lead Architect</p>
              <p className={itemDetail}>Daibutsu Aladdin Casino Company</p>
            </div>
          </div>
          <div className={infoContainer}>
            <h2 className={h2Style}>2017 - 2023</h2>
            <div>
              <p className={itemTitle}>Estimator</p>
              <p className={itemDetail}>Nica Electronic Services NICAES</p>
            </div>
          </div>
          <div className={infoContainer}>
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
            <li>Revit</li>
            <li>SketchUp</li>
            <li>Planswift</li>
            <li>Lumion</li>
            <li>Project</li>
            <li>Adobe Photoshop</li>
          </ul>
          <div className={buttonContainer}>
            <PrimaryLink to="/resume">View Full Resume PDF</PrimaryLink>
          </div>
        </div>
        {/* Pictures for ResumeSection */}
        <div id="resumePicture1" className={resumePictures}>
          <Image src={resumePicture1} altText="resumePicture" />
        </div>
        <div
          id="resumePicture2"
          className={`${resumePictures} ${largePicture}`}
        >
          <Image src={resumePicture2} altText="resumePicture" />
        </div>
      </section>
    </>
  );
};

export default ResumeSection;
