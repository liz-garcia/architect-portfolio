import AppRouter from "./AppRouter.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

// * App.jsx builds all our main layout elements:
// * Nav, Main, Footer, Pages content (AppRouter), etc.
// * AppRouter.jsx to load the content for each page.
const App = () => {
  return (
    <>
      <Header />
      <Main>
        <AppRouter />
      </Main>
      <footer className="p-10">
        <h2>Footer</h2>
      </footer>
    </>
  );
};

export default App;
