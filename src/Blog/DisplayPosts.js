import React, { useState, useEffect } from "react";
import { Button, Card, Container, Menu, Segment } from "semantic-ui-react";
import PostCardSchema from "./PostCardSchema";
import useFetch from "../Utils/useFetch";
import { strapiParse } from "strapi-parse";

const DisplayPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [order, setOrder] = useState(true);
  const { get, loading } = useFetch("http://localhost:1337/api/");

  useEffect(() => {
    get("blogs").then((data) => {
      setBlogs(strapiParse(data));
    });
  }, []);

  let first = blogs
    .slice()
    .sort((a, b) => (b.Date < a.Date ? -1 : 1))
    .map((post) => (
      <PostCardSchema
        key={post.id}
        id={post.id}
        postPreviewImage={post.PreviewImage}
        postTitle={post.Title}
        postDate={post.Date}
        postSlug={post.Slug}
        postContent={post.Content}
        postAuthor={post.Author}
      />
    ));

  let latest = blogs
    .slice()
    .sort((a, b) => (b.Date > a.Date ? -1 : 1))
    .map((post) => (
      <PostCardSchema
        key={post.id}
        id={post.id}
        postPreviewImage={post.PreviewImage}
        postTitle={post.Title}
        postDate={post.Date}
        postSlug={post.Slug}
        postContent={post.Content}
        postAuthor={post.Author}
      />
    ));

  const handleFirstToLatest = (event) => {
    setOrder(false);
  };

  const handleLatesttoFirst = (event) => {
    setOrder(true);
  };
  {
  }
  return (
    <>
      <Segment basic className={`${loading === true ? "loading" : ""}`}>
        <Container>
          <Button.Group>
            <Button mini="true" basic onClick={handleLatesttoFirst}>
              From the Beginning
            </Button>
            <Button mini="true" basic onClick={handleFirstToLatest}>
              Newest
            </Button>
          </Button.Group>
          <Card.Group
            stackable
            fluid="true"
            itemsPerRow={3}
            style={{
              paddingLeft: "1em",
              paddingRight: "1em",
              marginTop: ".5em",
            }}
          >
            {order === true ? latest : first}
          </Card.Group>
        </Container>
      </Segment>
    </>
  );
};

export default DisplayPosts;
