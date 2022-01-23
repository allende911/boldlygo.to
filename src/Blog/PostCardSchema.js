import React from "react";
import DisplayDate from "./DisplayDate";
import { Card, Image } from "semantic-ui-react";

const PostCardSchema = (props) => {
  return (
    <Card>
      <Image src={props.postPreviewImage} size="small" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.postTitle}</Card.Header>
        <Card.Description>
          {`${props.postContent.slice(0, 150)}...`}
        </Card.Description>
        <a href={props.postSlug} style={{ marginTop: 10, display: "block" }}>
          Read More...
        </a>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>{`By: ${props.postAuthor}`}</Card.Meta>
        <Card.Meta>
          <DisplayDate date={props.postDate} />
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default PostCardSchema;
