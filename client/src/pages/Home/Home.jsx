import { useState } from "react";
import Nav from "../../components/Nav/Nav.jsx";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Home.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React + Node</h2>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Home;
