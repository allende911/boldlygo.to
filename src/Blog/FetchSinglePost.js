import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../Utils/useFetch";
import { strapiParse } from "strapi-parse";

export default function FetchSinglePost() {
  const { get, loading } = useFetch("https://boldlygo.to/api");
  const [post, setPost] = useState([]);

  useEffect(() => {
    get("").then((data) => {
      if (data) {
        setPost((prevPost) => strapiParse(data));
      }
    });
  });

  return <Post post={post} />;
}
