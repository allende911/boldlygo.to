import React from "react";
import { Divider, Menu, Segment } from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment basic>
      <Divider />
      <Menu secondary>
        <Menu.Item>&copy; 2022 sdmacdonald</Menu.Item>
        <Menu.Item right>
          <a href="https://boldlygoto.herokuapp.com/admin/auth/login">Login</a>
        </Menu.Item>
      </Menu>
    </Segment>
  );
}
