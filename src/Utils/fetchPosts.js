import React, { useState, useEffect } from "react";
import strapiParse from "strapi-parse";

const fetchPosts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  const getAll = () => {
    if (!data) {
      setLoading(true);
      fetch("https://boldlygoto.herokuapp.com/api/blogs/")
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            alert("Error loading data");
          }
          setData((prevData) => strapiParse(data));
          setLoading(false);
        })
        .then((error) => console.log(error));
      setLoading(false);
    }
  };

  return { getAll, loading };
};

export default fetchPosts;
