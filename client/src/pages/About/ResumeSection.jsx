const resumeSectionStyle = "h-screen grid grid-cols-3 grid-rows-2 gap-4 p-16";
const resumeSubsection = "bg-zinc-400";
const resumePictures = "bg-lime-200";
const largePicture = "col-span-2";

const ResumeSection = () => {
  return (
    <>
      <section id="resume" className={resumeSectionStyle}>
        <div id="education" className={resumeSubsection}>
          <h1>Education</h1>
        </div>
        <div id="workExperience" className={resumeSubsection}>
          <h1>Work experience</h1>
        </div>
        <div id="softwareSkills" className={resumeSubsection}>
          <h1>Software skills</h1>
        </div>
        <div id="sectionPicture1" className={resumePictures}></div>
        <div
          id="sectionPicture2"
          className={`${resumePictures} ${largePicture}`}
        ></div>
      </section>
    </>
  );
};

export default ResumeSection;
