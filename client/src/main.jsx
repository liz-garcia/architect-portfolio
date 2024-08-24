import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./AppWrapper";
import App from "./App.jsx";
import "./index.css";

// Get the root element
// Add TailwindCSS utility classes if needed
const rootElement = document.getElementById("root");
rootElement.className =
  "min-h-screen flex flex-col items-center justify-center text-center";

// Render the React application
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* AppWrapper for providers and contexts. */}
    <AppWrapper>
      {/* App.jsx builds all our main layout elements: Nav, Main, Footer, etc. */}
      <App />
    </AppWrapper>
  </React.StrictMode>
);
