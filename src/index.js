import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-less/semantic.less";
import PostParse from "./Blog/PostParse";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/api/blogs/:id" element={<PostParse />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
