import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { render } from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import ImageEdit from "./components/ImageEdit";
import VideoEdit from "./components/VideoEdit";

render(
  <div>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/photo" component={ImageEdit} />
        <Route path="/video" component={VideoEdit} />
      </div>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
