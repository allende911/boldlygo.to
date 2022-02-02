import React, { useState, useEffect } from "react";
import DisplayPosts from "./DisplayPosts";
import useFetch from "../Utils/useFetch";
import { strapiParse } from "strapi-parse";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

export default function DisplayPostParse() {
  const [blogs, setBlogs] = useState([]);
  const [viewPost, setViewPost] = useState([]);
  const { get, loading } = useFetch("https://boldlygoto.herokuapp.com/api/");

  useEffect(() => {
    get(
      "blogs?sort=Date&fields=id&fields=Title&fields=Date&fields=Slug&populate[postContent][populate]=*"
    ).then((data) => {
      if (data) {
        setBlogs((prevData) => strapiParse(data));
      }
    });
  }, []);

  return (
    <Segment basic>
      {loading && (
        <Dimmer>
          <Loader />
        </Dimmer>
      )}
      <DisplayPosts blogs={blogs} />
    </Segment>
  );
}
