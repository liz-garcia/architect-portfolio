import PrimaryLink from "../components/Buttons/PrimaryLink";

const notFoundStyle =
  " flex flex-col items-center justify-center gap-4 h-[50vh] px-16 text-center xs-landscape:gap-1 xs-landscape:scale-90";

const NotFoundPage = () => {
  return (
    <div id="notFound" className={notFoundStyle}>
      <h1 className="text-2xl font-black 3xl:text-6xl">404</h1>
      <h2 className="text-xl font-bold 3xl:text-4xl">Page Not Found</h2>
      <p className="3xl:py-8 3xl:text-3xl">
        Sorry, the page you are looking for does not exist.
      </p>
      <PrimaryLink to="/">Go back to Home</PrimaryLink>
    </div>
  );
};

export default NotFoundPage;
