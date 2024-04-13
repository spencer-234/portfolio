import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { VisibilityContextProvider } from "./VisibilityContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VisibilityContextProvider>
      <App />
    </VisibilityContextProvider>
  </React.StrictMode>
);
