import React, { useState, useEffect } from "react";
import DisplayPosts from "./DisplayPosts";
import useFetch from "../Utils/useFetch";
import { strapiParse } from "strapi-parse";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

export default function PostParse() {
  const [blogs, setBlogs] = useState([]);
  const { get, loading } = useFetch("https://boldlygoto.herokuapp.com/api/");

  useEffect(() => {
    get(
      "blogs?sort=Date&fields=id&fields=Title&fields=Date&fields=Slug&populate[blogPost][populate]=*"
    ).then((data) => {
      if (data) {
        setBlogs((prevData) => strapiParse(data));
      }
    });
  }, []);

  return (
    <Segment basic>
      {loading && <Loader />}
      <DisplayPosts blogs={blogs} />
    </Segment>
  );
}
