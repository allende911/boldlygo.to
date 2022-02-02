import React, { useEffect, useState } from "react";
import Post from "./Post";
import useFetch from "../Utils/useFetch";
import { strapiParse } from "strapi-parse";
import { useParams } from "react-router-dom";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

export default function PostParse() {
  const params = useParams();
  const [post, setPost] = useState([]);
  const { get, loading } = useFetch(
    "https://boldlygoto.herokuapp.com/api/blogs/"
  );

  const id = params.id;

  useEffect(
    () =>
      get(`${id}?populate[blogPost][populate]=*`).then((data) => {
        if (data) {
          setPost((prevPost) => strapiParse(data));
        }
      }),
    []
  );

  return (
    <Segment basic>
      {loading && (
        <Dimmer>
          <Loader />
        </Dimmer>
      )}
      <Post post={post} />
    </Segment>
  );
}
