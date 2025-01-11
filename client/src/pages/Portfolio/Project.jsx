import { useParams } from "react-router-dom";
import usePortfolio from "../../contexts/usePortfolio.js";

const projectPageStyle = "bg-red-400";

const Project = () => {
  const { projectId } = useParams();
  const { portfolio } = usePortfolio();

  // header full width with name
  // about the project, half stats, half pitch
  //project gallery free size

  return (
    <div id={`projectPage-${projectId}`} className={projectPageStyle}>
      <p>{portfolio.projects[0].title}</p>
    </div>
  );
};

export default Project;
