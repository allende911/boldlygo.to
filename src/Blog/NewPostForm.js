import React, { useState } from "react";
import { Button, Form, Header, Container, Grid } from "semantic-ui-react";
import styledComponents from "styled-components";
import NewPostPreview from "./NewPostPreview";

const NewPostForm = (props) => {
  const [previewTitle, setPreviewTitle] = useState("");
  return (
    <>
      <Container>
        <Header as="h2">Post New Entry:</Header>

        <Form onSubmit={props.onNewPost}>
          <Grid columns={2}>
            <Grid.Column>
              <Form.Input
                label="New Blog Title:"
                type="text"
                onChange={props.onChangeTitle}
                value={props.previewTitle}
              />
              <Form.Input
                label="Preview Image (URL):"
                type="text"
                onChange={props.onChangePreviewImage}
                value={props.previewImage}
              />
              <Grid columns={2}>
                <Grid.Column>
                  <Form.Input
                    type="date"
                    label="Post Date:"
                    onChange={props.onChangeDate}
                    value={props.previewDate}
                  />
                </Grid.Column>
                <Grid.Column>
                  <label htmlFor="author">Author:</label>
                  <select
                    placeholder="Choose Author"
                    onChange={props.onChangeAuthor}
                    value={props.previewAuthor}
                  >
                    <option>Choose Author</option>
                    <option>Casi</option>
                    <option>Danny</option>
                  </select>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Form.TextArea
                id="content"
                label="Content:"
                placeholder="Tell us what happened."
                type="text"
                style={{ minHeight: 200 }}
                onChange={props.onChangeContent}
                value={props.previewContent}
              />

              <Button type="submit" primary floated="right">
                Submit
              </Button>
              <NewPostPreview
                previewTitle={props.previewTitle}
                previewContent={props.previewContent}
                previewImage={props.previewImage}
              />
            </Grid.Column>
          </Grid>
        </Form>
      </Container>
    </>
  );
};

export default NewPostForm;
