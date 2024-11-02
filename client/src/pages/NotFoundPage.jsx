import PrimaryLink from "../components/Buttons/PrimaryLink";

const notFoundStyle =
  " flex flex-col items-center justify-center gap-4 h-[50vh] px-16 text-center";

const NotFoundPage = () => {
  return (
    <div id="notFound" className={notFoundStyle}>
      <h1 className="text-2xl font-black">404</h1>
      <h2 className="text-xl font-bold">Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <PrimaryLink to="/">Go back to Home</PrimaryLink>
    </div>
  );
};

export default NotFoundPage;
