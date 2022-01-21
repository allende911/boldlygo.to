import React, { useState, useEffect } from "react";
import { strapiParse } from "strapi-parse";
import BlogPost from "./BlogPost";

const DisplayBlogPosts = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/blogs/")
      .then((response) => response.json())
      .then((data) => {
        setBlogs((prevBlogs) => strapiParse(data));
      });
    // .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {blogs
        .slice()
        .sort((a, b) => (b.blogDate < a.blogDate ? -1 : 1))
        .map((blog) => (
          <BlogPost
            key={blog.blogSlug}
            cardImage={blog.blogCardImage}
            blogTitle={blog.blogTitle}
            blogDate={blog.blogDate}
            blogSlug={blog.blogSlug}
            blogEntry={blog.blogEntry}
            blogAuthor={blog.blogAuthor}
          />
        ))}
    </>
  );
};

export default DisplayBlogPosts;
