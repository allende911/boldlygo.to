import React from "react";
import { Link } from "react-router-dom";
import { Divider, Header, Segment } from "semantic-ui-react";

export default function Heading() {
  return (
    <Segment basic>
      <Header as="h1">
        <Link to="/">BoldyGo.to</Link>
      </Header>
      <Divider />
    </Segment>
  );
}
