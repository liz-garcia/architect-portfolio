import AppRouter from "./AppRouter.jsx";
import Header from "./components/Header.jsx";

// const headerProps = "";
// const mainProps = "";
// const footerProps = "";

// * App.jsx builds all our main layout elements:
// * Nav, Main, Footer, Pages content (AppRouter), etc.
// * AppRouter.jsx to load the content for each page.
const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
    </>
  );
};

export default App;
