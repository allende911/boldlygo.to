import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-less/semantic.less";
import AddPostHandler from "./Blog/AddPostHandler";
import TopBar from "./UI/TopBar";
import SinglePost from "./Blog/SinglePost";

ReactDOM.render(
  <BrowserRouter>
    <TopBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="newPost" element={<AddPostHandler />} />
      <Route path="blogs/:id" element={<SinglePost />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
