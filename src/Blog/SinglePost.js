import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Utils/useFetch";
import { strapiParse } from "strapi-parse";
import { Container, Item, Segment, Header } from "semantic-ui-react";
import styled from "styled-components";

const Fraunces = styled.h1`
  font-family: Fraunces, Roboto, serif;
  font-size: 3em;
  font-weight: 700;
`;

const Commissioner = styled.header`
  font-family: Commissioner, Roboto, sans-serif;
  font-weight: 400;
  font-size: 1.4em;
  line-height: 2em;
`;

const SinglePost = () => {
  const { get, loading } = useFetch("http://localhost:1337/api/blogs/");
  const [blog, setBlogs] = useState([]);
  const params = useParams();

  const id = params.id;

  useEffect(() => {
    get(id).then((data) => {
      setBlogs(strapiParse(data));
    });
  }, []);

  return (
    <>
      <Container text>
        <Segment basic>
          <Header center>
            <Fraunces>{blog.Title}</Fraunces>
          </Header>
          <Commissioner>
            <Header>by {blog.Author}</Header>
            <Item.Image src={blog.PreviewImage} fluid />
            {blog.Content}
          </Commissioner>
        </Segment>
      </Container>
    </>
  );
};

export default SinglePost;
