import React from "react";
import { Header } from "semantic-ui-react";

const DisplayDate = (props) => {
  const posted = new Date(props.date);
  const month = posted.toLocaleString("en-US", { month: "long" });
  const day = posted.toLocaleString("en-US", { day: "2-digit" });
  const year = posted.getFullYear();

  return (
    <>
      <Header
        as="h3"
        style={{ marginTop: 0 }}
      >{`Posted on ${month} ${day}, ${year}`}</Header>
    </>
  );
};

export default DisplayDate;
