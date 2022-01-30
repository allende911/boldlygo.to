import React, { useState, useEffect } from "react";
import { Card, Segment } from "semantic-ui-react";
import PostCardSchema from "./PostCardSchema";
import useFetch from "../Utils/useFetch";
import { strapiParse } from "strapi-parse";

const DisplayPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [order, setOrder] = useState(true);
  const { get, loading } = useFetch("https://boldlygoto.herokuapp.com/api/");

  useEffect(() => {
    get("blogs?populate=*").then((data) => {
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
        postPreviewImage={post.Thumbnail.url}
        postTitle={post.Title}
        postDate={post.Date}
        postSlug={post.Slug}
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
        postPreviewImage={post.Thumbnail.url}
        postTitle={post.Title}
        postDate={post.Date}
        postSlug={post.Slug}
        postAuthor={post.Author}
      />
    ));

  const handleFirstToLatest = (event) => {
    setOrder(false);
  };

  const handleLatesttoFirst = (event) => {
    setOrder(true);
  };

  return (
    <Segment basic>
      {loading === true ? (
        "loading"
      ) : (
        <Card.Group stackable fluid="true" itemsPerRow={3}>
          {order === true ? latest : first}
        </Card.Group>
      )}
    </Segment>
  );
};

export default DisplayPosts;
