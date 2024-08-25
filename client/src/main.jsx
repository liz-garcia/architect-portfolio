import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./AppWrapper.jsx";
import App from "./App.jsx";
import "./index.css";

// Tailwind CSS utility classes
const layout = "min-h-screen flex flex-col items-center justify-center";
const text = "text-center";
const darkMode = "dark:bg-slate-800 dark:text-white";
const tailwindClasses = `${layout} ${text} ${darkMode}`;

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
    </AppWrapper>
  </React.StrictMode>
);
