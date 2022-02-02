import React from "react";
import { Link } from "react-router-dom";
import DisplayDate from "./DisplayDate";
import { Grid, Header, Image, Button, Divider } from "semantic-ui-react";

export default function DisplayPosts(props) {
  return (
    <Grid relaxed padded stackable id="postTop">
      {props.blogs.map((blog) => (
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
              <Link to={`/api/blogs/${blog.id}`}>
                <Button primary size="large">
                  Read More
                </Button>
              </Link>
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
