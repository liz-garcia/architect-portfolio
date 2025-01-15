import usePortfolio from "../../contexts/usePortfolio.js";
import ImageGrid from "../../components/Galleries/ImageGrid.jsx";

const portfolioPageStyle =
  "bg-gradient-to-br from-zinc-900 to-zinc-950 animate-fadeInUp w-full h-full";

// * Maximal 9 projects - Otherwise, it is necessary to adjust de ImageGrid height for lg to 2xl and 3xl screens.

// Portfolio Gallery component
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
