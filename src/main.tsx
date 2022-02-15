import React from "react";
import ReactDOM from "react-dom";

import App from "./pages/App";

import { GlobalStyle } from "./index.style";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
