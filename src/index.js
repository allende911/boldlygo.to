import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-less/semantic.less";
import Post from "./Blog/Post";
import Heading from "./UI/Heading";
import Footer from "./UI/Footer";

ReactDOM.render(
  <BrowserRouter>
    <Heading />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="blogs/:id" element={<Post />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
