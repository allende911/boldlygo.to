import React, { useState, useEffect } from "react";
import BlogEntryForm from "./BlogEntryForm";

const BlogEntry = () => {
  const [blogAuthor, setAuthor] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogEntry, setBlogEntry] = useState("");
  const [blogDate, setPostedDate] = useState(new Date());
  const [blogCardImage, setCardImage] = useState(
    "https://source.unsplash.com/random/?city,night"
  );
  const [blogPost, addBlogPost] = useState([
    {
      blogAuthor: "",
      blogTitle: "",
      blogEntry: "",
      blogCardImage: "",
      blogDate: "",
    },
  ]);

  const handleBlogAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleBlogDate = (event) => {
    setPostedDate(event.target.value);
  };

  const handleBlogTitle = (event) => {
    setBlogTitle(event.target.value);
  };

  const handleBlogEntry = (event) => {
    setBlogEntry(event.target.value);
  };

  const handleBlogCardImage = (event) => {
    setCardImage(event.target.value);
  };

  const handleBlogPostSubmit = (event) => {
    event.preventDefault();
    const blogSlug = blogTitle.replace(/\s/g, "-").toLowerCase().slice(0, 20);
    fetch("http://localhost:1337/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          blogSlug: blogSlug,
          blogAuthor: blogAuthor,
          blogTitle: blogTitle,
          blogEntry: blogEntry,
          blogCardImage: blogCardImage,
          blogDate: blogDate,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        addBlogPost((prevData) => data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <BlogEntryForm
        onBlogPostSubmit={handleBlogPostSubmit}
        onBlogTitle={handleBlogTitle}
        onBlogEntry={handleBlogEntry}
        onBlogDate={handleBlogDate}
        onBlogAuthor={handleBlogAuthor}
        onBlogCardImage={handleBlogCardImage}
      />
    </>
  );
};

export default BlogEntry;
