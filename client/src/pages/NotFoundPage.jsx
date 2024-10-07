import PrimaryLink from "../components/Buttons/PrimaryLink";

const notFoundStyle =
  " flex flex-col items-center justify-center gap-4 h-[72vh]";

const NotFoundPage = () => {
  return (
    <div id="notFound" className={notFoundStyle}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <PrimaryLink to="/">Go back to Home</PrimaryLink>
    </div>
  );
};

export default NotFoundPage;
