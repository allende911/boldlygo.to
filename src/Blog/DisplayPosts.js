import React from "react";
import DisplayDate from "./DisplayDate";
import { Grid, Header, Image, Button, Divider } from "semantic-ui-react";

export default function DisplayPosts({ blogs }) {
  return (
    <Grid relaxed padded stackable id="postTop">
      {blogs.map((blog) => (
        <>
          <Grid.Row
            columns={2}
            className={`${blog.id % 2 === true ? "even" : "odd"}`}
            key={blog.id}
          >
            <Grid.Column>
              <Header as="h2">{blog.Title}</Header>
              <DisplayDate date={blog.Date} />
              {blog.blogPost
                .filter((textBlock) => textBlock)
                .slice(0, 1)
                .map((text) => (
                  <p>{text.textBlock}</p>
                ))}
              <Button disabled primary size="large">
                Read More
              </Button>
            </Grid.Column>
            <Grid.Column>
              {blog.blogPost
                .filter((postImage) => postImage.__component == "post.media")
                .slice(0, 1)
                .map((media) => (
                  <Image
                    fluid
                    circular
                    src={media.postImage.url}
                    label={media.postImage.caption}
                    alt={media.postImage.alternativeText}
                  />
                ))}
            </Grid.Column>
          </Grid.Row>
          <Divider hidden />
        </>
      ))}
    </Grid>
  );
}
