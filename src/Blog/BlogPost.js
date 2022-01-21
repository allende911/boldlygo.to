import React from "react";

const BlogPost = (props) => {
  return (
    <div>
      <div>
        <img src={props.blogCardImage} />
      </div>
      <h3>{props.blogTitle}</h3>
      <sub>{`By: ${props.blogAuthor} on ${props.blogDate}`}</sub>
      <p>{props.blogEntry.slice(0, 100)}</p>
      <a href={`./${props.blogSlug}`}>Read More...</a>
    </div>
  );
};

export default BlogPost;
