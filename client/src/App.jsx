import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import AppRouter from "./AppRouter.jsx";

// * Client App Router
const App = () => {
  return (
    <>
      <Nav />
      <main>
        <AppRouter />
      </main>
    </>
  );
};

export default App;
