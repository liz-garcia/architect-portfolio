import usePortfolio from "../../contexts/usePortfolio.js";
import ImageGrid from "../../components/Galleries/ImageGrid.jsx";

const portfolioPageStyle =
  "relative bg-gradient-to-br from-zinc-900 to-zinc-950 animate-fadeIn w-full h-full";

const Portfolio = () => {
  const { portfolio } = usePortfolio();

  const projects = portfolio ? portfolio.projects : null;

  return (
    <div id="portfolioPage" className={portfolioPageStyle}>
      <ImageGrid items={projects} />
    </div>
  );
};

export default Portfolio;
