import React from "react";
import { Divider, Menu, Segment } from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment basic>
      <Divider />
      <Menu secondary>
        <Menu.Item>&copy; 2022 sdmacdonald</Menu.Item>
      </Menu>
    </Segment>
  );
}
