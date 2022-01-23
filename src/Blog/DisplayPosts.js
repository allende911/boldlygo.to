import React, { useState, useEffect } from "react";
import { Button, Card, Container, Menu } from "semantic-ui-react";
import { strapiParse } from "strapi-parse";
import PostCardSchema from "./PostCardSchema";

const DisplayPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [order, setOrder] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1337/api/blogs/")
      .then((response) => response.json())
      .then((data) => {
        setBlogs((prevBlogs) => strapiParse(data));
      });
    // .catch((error) => console.log(error));
  }, []);

  let first = blogs
    .slice()
    .sort((a, b) => (b.Date < a.Date ? -1 : 1))
    .map((post) => (
      <PostCardSchema
        key={post.id}
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
    console.log(blogs);
  };

  const handleLatesttoFirst = (event) => {
    setOrder(true);
    console.log(blogs);
  };

  return (
    <>
      <Button.Group>
        <Button tiny basic onClick={handleLatesttoFirst}>
          From the Beginning
        </Button>
        <Button tiny basic onClick={handleFirstToLatest}>
          Newest
        </Button>
      </Button.Group>
      <Card.Group
        stackable
        fluid="true"
        itemsPerRow={5}
        style={{ paddingLeft: "1em", paddingRight: "1em" }}
      >
        {order === true ? latest : first}
      </Card.Group>
    </>
  );
};

export default DisplayPosts;
