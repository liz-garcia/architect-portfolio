import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./AppWrapper";
import App from "./App.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>
);
