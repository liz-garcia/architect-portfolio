import AppRouter from "./AppRouter.jsx";
import Nav from "./components/Nav/Nav.jsx";

const App = () => {
  return (
    <>
      {/* App.jsx builds all our main layout elements: Nav, Main, Footer, etc. */}
      <Nav />
      <main>
        {/* Routes to each of our pages content. */}
        <AppRouter />
      </main>
    </>
  );
};

export default App;
