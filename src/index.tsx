import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./stylesGlobal/globalStyles";
import UseProvider from "./context/UseProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UseProvider>
      <GlobalStyles />
      <App />
    </UseProvider>
  </React.StrictMode>
);
