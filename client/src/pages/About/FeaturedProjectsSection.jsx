// Tailwind CSS utility classes
const featuredProjectsStyle =
  "flex-1 p-12 bg-slate-950 text-white h-2/3 md:h-auto sm:flex-none sm:h-screen";

// FeaturedProjectsSection component
const FeaturedProjectsSection = () => {
  return (
    <section id="featuredProjects" className={featuredProjectsStyle}>
      Featured Projects
    </section>
  );
};

export default FeaturedProjectsSection;
