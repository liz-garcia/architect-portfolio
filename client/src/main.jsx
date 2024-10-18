import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./AppWrapper.jsx";
import App from "./App.jsx";
import "./index.css";

// Tailwind CSS utility classes
const dimensions = "";
const layout = "flex flex-col bg-[#FFFFFF]";
const text = "text-[1.1rem]/relaxed text-zinc-800 font-sans font-light";
const darkMode = "";
const tailwindClasses = `${dimensions} ${layout} ${text} ${darkMode}`;

// Get the `root` element. Add TailwindCSS classes.
const rootElement = document.getElementById("root");
rootElement.className = tailwindClasses;

// Render the React application
// * AppWrapper.jsx for providers and contexts.
// * App.jsx builds all our main layout elements:
// * Nav, Main, Footer, Pages content (AppRouter), etc.
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppWrapper>
      <App />
      {/* `App` contains `main` */}
    </AppWrapper>
  </React.StrictMode>
);
