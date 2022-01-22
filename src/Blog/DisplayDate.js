import React from "react";

const DisplayDate = (props) => {
  const posted = new Date(props.date);
  const month = posted.toLocaleString("en-US", { month: "long" });
  const day = posted.toLocaleString("en-US", { day: "2-digit" });
  const year = posted.getFullYear();

  return (
    <>
      <h5>{`Posted on ${month} ${day}, ${year}.`}</h5>
    </>
  );
};

export default DisplayDate;