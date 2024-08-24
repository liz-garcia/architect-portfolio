import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./AppWrapper";
import App from "./App.jsx";
import "./index.css";

// Get the root element
// Add TailwindCSS utility classes
const rootElement = document.getElementById("root");
rootElement.className = "bg-gray-100 p-4 text-center";

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
