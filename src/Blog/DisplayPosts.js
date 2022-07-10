import React, { useState } from "react";
import DisplayDate from "./DisplayDate";
import {
  Grid,
  Header,
  Image,
  Button,
  Loader,
  Modal,
  Icon,
} from "semantic-ui-react";
import ReactMarkdown from "react-markdown";

export default function DisplayPosts(props) {
  const [open, setOpen] = useState(false);

  return !props.blogs ? (
    <Loader />
  ) : (
    <Grid relaxed padded stackable id="postTop">
      {props.blogs.map((blog, index) => (
        <Grid.Row
          columns={2}
          className={`${blog.id % 2 === true ? "even" : "odd"}`}
          key={blog.id}
        >
          <Grid.Column>
            <Header as="h2">{blog.Title}</Header>
            <DisplayDate date={blog.Date} />
            {blog.postContent
              .filter((textBlock) => textBlock.__component == "post.text-block")
              .slice(0, 1)
              .map((text) => (
                <ReactMarkdown children={text.textBlock} key={text.id} />
              ))}
            <Modal
              closeIcon
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              trigger={
                <Button primary size="large">
                  Read More
                </Button>
              }
            >
              <Modal.Header>{blog.Title}</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  {blog.postContent.map((content) =>
                    content.__component == "post.text-block" ? (
                      <ReactMarkdown
                        children={content.textBlock}
                        key={content.id}
                      />
                    ) : content.__component == "post.media" ? (
                      <Image
                        size="medium"
                        centered
                        rounded
                        src={content.postMedia[0].url}
                        style={{ paddingBottom: 20 }}
                      />
                    ) : (
                      ""
                    )
                  )}
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button primary>
                  <Icon name="remove" /> Close
                </Button>
              </Modal.Actions>
            </Modal>
          </Grid.Column>
          <Grid.Column>
            {blog.postContent
              .filter((postMedia) => postMedia.__component == "post.media")
              .map((image) => (
                <Image
                  src={image.postMedia[0].url}
                  alt={image.postMedia[0].caption}
                  centered
                  size="large"
                  key={image.postMedia[0].name}
                />
              ))}
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  );
}
