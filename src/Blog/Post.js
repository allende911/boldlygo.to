import React, { useState, useEffect } from "react";
import { Container, Header, Image, Button } from "semantic-ui-react";
import useFetch from "../Utils/useFetch";
import { strapiParse } from "strapi-parse";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Quote = styled.blockquote`
  font-size: 1.5rem;
  margin: 0 auto;
  text-align: center;
  font-style: italic;
  width: 100%;
  padding: 1rem 0;
  border-top: 5px solid #f5f5f5;
  border-bottom: 5px solid #f5f5f5;
  background-color: #fafafa;
`;

const QuoteAuthor = styled.p`
  font-style: italic;
  text-align: right;
  width: 100%;
`;

export default function PostData(props) {
  const { get, loading } = useFetch("http://localhost:1337/api/blogs/");
  const [data, setData] = useState([]);
  let id = useParams();

  useEffect(() => {
    get(`${id.id}?populate[blogPost][populate]=*`).then((post) => {
      setData(() => strapiParse(post));
    });
  }, []);

  return (
    <>
      {loading ? (
        ""
      ) : (
        <Container text>
          <Header as="h2">{data.Title}</Header>

          {data.length !== 0 ? (
            data.blogPost.map((content) =>
              content.__component == "post.quote" ? (
                <>
                  <Quote>{content.quoteText}</Quote>
                  <QuoteAuthor>{content.quoteAuthor}</QuoteAuthor>
                </>
              ) : content.__component == "post.text-block" ? (
                <p>{content.textBlock}</p>
              ) : content.__component == "post.media" ? (
                <Image
                  style={{ marginBottom: 10 }}
                  fluid
                  src={content.postImage.formats.small.url}
                />
              ) : (
                "false"
              )
            )
          ) : (
            <p>Loading...</p>
          )}
          <Link to="/">
            <Button primary>Back Home</Button>
          </Link>
        </Container>
      )}
    </>
  );
}
