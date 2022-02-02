import React from "react";
import { Container, Segment, Header, Divider, Image } from "semantic-ui-react";
import DisplayDate from "./DisplayDate";

export default function Post(props) {
  return (
    <>
      <Container text>
        <Segment basic padded>
          <Header as="h1">{props.post.Title}</Header>
          <DisplayDate date={props.post.Date} />
          <Divider />
        </Segment>
        <Segment basic padded key={props.post.id}>
          {props.post.blogPost.map((block) =>
            block.__component == "post.text-block" ? (
              <p key={block.textBlock.id}>{block.textBlock}</p>
            ) : (
              <Image
                centered
                size="medium"
                alt={block.postImage.caption}
                src={block.postImage.url}
                key={block.postImage.id}
              />
            )
          )}
        </Segment>
      </Container>
    </>
  );
}
