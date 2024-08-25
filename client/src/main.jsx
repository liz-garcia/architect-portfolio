import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./AppWrapper.jsx";
import App from "./App.jsx";
import "./index.css";

// Get the root element
// Add TailwindCSS utility classes if needed
const rootElement = document.getElementById("root");
rootElement.className =
  "min-h-screen flex flex-col items-center justify-center text-center";

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
