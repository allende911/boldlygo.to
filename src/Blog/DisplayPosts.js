import React, { useState, useEffect } from "react";
import { strapiParse } from "strapi-parse";
import PostCardSchema from "./PostCardSchema";

const DisplayPosts = () => {
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
        // .slice()
        // .sort((a, b) => (b.date < a.date ? -1 : 1))
        .map((post) => (
          <PostCardSchema
            key={blogs.length}
            postPreviewImage={post.PreviewImage}
            postTitle={post.Title}
            postDate={post.Date}
            postSlug={post.Slug}
            postContent={post.Content}
            postAuthor={post.Author}
          />
        ))}
    </>
  );
};

export default DisplayPosts;
