import React from "react";
import {
  Button,
  Form,
  Header,
  Container,
  Divider,
  Grid,
  Message,
} from "semantic-ui-react";

const NewPostForm = (props) => {
  return (
    <Container style={{ paddingTop: 50 }}>
      <Grid stackable>
        <Grid.Column width={1} />
        <Grid.Column width={8} style={{ border: "1px solid #000" }}>
          <Container style={{ padding: 20 }}>
            <Header as="h2">Post New Entry:</Header>
            <Divider />
            <Form
              onSubmit={props.onNewPost}
              className={`${props.onIsLoading === true ? "loading" : ""}`}
            >
              <Grid doubling columns={2}>
                <Grid.Column width={6}>
                  <Form.Input
                    type="date"
                    label="Post Date:"
                    onChange={props.onChangeDate}
                  />
                </Grid.Column>
                <Grid.Column width={10}>
                  <div className="field">
                    <label htmlFor="author">Author:</label>
                    <div className="ui input">
                      <select
                        placeholder="Choose Author"
                        onChange={props.onChangeAuthor}
                      >
                        <option>Choose Author</option>
                        <option>Casi</option>
                        <option>Danny</option>
                      </select>
                    </div>
                  </div>
                </Grid.Column>
              </Grid>
              <Grid style={{ marginBottom: 10 }}>
                <Grid.Column width={16}>
                  <Form.Input
                    label="New Blog Title:"
                    type="text"
                    onChange={props.onChangeTitle}
                  />
                </Grid.Column>
                <Grid.Column width={16}>
                  <Form.TextArea
                    id="content"
                    label="Content:"
                    placeholder="Tell us what happened."
                    type="text"
                    style={{ minHeight: 200 }}
                    onChange={props.onChangeContent}
                  />
                </Grid.Column>
              </Grid>
              <Button type="submit" primary>
                Submit
              </Button>
            </Form>
          </Container>
        </Grid.Column>
        <Grid.Column />
      </Grid>
    </Container>
  );
};

export default NewPostForm;
