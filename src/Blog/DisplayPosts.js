import React from "react";
import { Link } from "react-router-dom";
import DisplayDate from "./DisplayDate";
import { Grid, Header, Image, Button, Divider } from "semantic-ui-react";
import DisplayPostParse from "./DisplayPostParse";

export default function DisplayPosts(props) {
  return !props.blogs ? (
    <DisplayPostParse />
  ) : (
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
              {blog.postContent
                .filter(
                  (textBlock) => textBlock.__component == "post.text-block"
                )
                .slice(0, 1)
                .map((text) => (
                  <p>{text.textBlock}</p>
                ))}
              <Link to={`/api/blogs/${blog.id}`}>
                <Button primary disabled size="large">
                  Read More
                </Button>
              </Link>
            </Grid.Column>
            <Grid.Column>
              {blog.postContent
                .filter((postMedia) => postMedia.__component == "post.media")
                .slice(0, 1)
                .map((image) => (
                  <Image
                    src={image.postMedia[0].url}
                    alt={image.postMedia[0].caption}
                    fluid
                    circular
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
