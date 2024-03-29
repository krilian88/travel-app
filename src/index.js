import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <SimpleReactLightbox>
    <App />
  </SimpleReactLightbox>,
  document.getElementById("root")
);
