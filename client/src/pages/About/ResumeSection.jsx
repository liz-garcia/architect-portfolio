import resumePicture1 from "../../assets/resumePictures/resumePicture1.png";
import resumePicture2 from "../../assets/resumePictures/resumePicture2.png";
import Image from "../../components/Image.jsx";

const resumeSectionStyle =
  "h-screen grid grid-cols-3 grid-rows-[1fr_2fr] gap-2 p-12";
const resumeSubsection = "bg-zinc-200 p-4 flex flex-col";
const h1Style = "font-serif font-bold text-3xl pb-2";
const infoContainer = "flex gap-4 pb-1";
const h2Style = "font-bold w-1/3";
const itemTitle = "";
const itemDetail = "text-sm";
const resumePictures = "";
const largePicture = "col-span-2";

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
