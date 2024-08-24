import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./AppWrapper";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* AppWrapper for providers and contexts. */}
    <AppWrapper>
      {/* App.jsx builds all our main layout elements: Nav, Main, Footer, etc. */}
      <App />
    </AppWrapper>
  </React.StrictMode>
);
