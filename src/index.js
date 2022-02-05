import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-less/semantic.less";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
