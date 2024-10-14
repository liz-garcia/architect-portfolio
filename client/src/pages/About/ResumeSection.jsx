import resumePicture1 from "../../assets/resumePictures/resumePicture1.png";
import resumePicture2 from "../../assets/resumePictures/resumePicture2.png";
import Image from "../../components/Image.jsx";

const resumeSectionStyle =
  "h-screen grid grid-cols-3 grid-rows-[1fr_2fr] gap-4 p-16";
const resumeSubsection = "bg-zinc-400";
const resumePictures = "bg-lime-200";
const largePicture = "col-span-2";

const ResumeSection = () => {
  return (
    <>
      <section id="resume" className={resumeSectionStyle}>
        {/* Texts for ResumeSection */}
        <div id="education" className={resumeSubsection}>
          <h1>Education</h1>
        </div>
        <div id="workExperience" className={resumeSubsection}>
          <h1>Work experience</h1>
        </div>
        <div id="softwareSkills" className={resumeSubsection}>
          <h1>Software skills</h1>
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
