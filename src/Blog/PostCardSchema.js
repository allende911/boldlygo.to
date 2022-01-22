import React from "react";
import DisplayDate from "./DisplayDate";

const PostCardSchema = (props) => {
  return (
    <div>
      <div>
        <img src={props.postPreviewImage} />
      </div>
      <h3>{props.postTitle}</h3>
      <h4>{`By: ${props.postAuthor}`}</h4>
      <DisplayDate date={props.postDate} />
      <p>{props.postContent}</p>
      <a href={`./${props.Slug}`}>Read More...</a>
    </div>
  );
};

export default PostCardSchema;
