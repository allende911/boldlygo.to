import React, { useState } from "react";
import { Menu, Sidebar, Segment, Icon } from "semantic-ui-react";
import Heading from "./Heading";

export default function MobileNavigation(props) {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <Segment basic style={{ backgroundColor: "#e07a5f" }}>
      <Menu inverted borderless secondary>
        <Menu.Item onClick={() => setSidebarOpened(true)}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="compass" />
          BoldlyGo.to
        </Menu.Item>
      </Menu>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setSidebarOpened(false)}
          vertical
          width="thin"
          visible={sidebarOpened}
          style={{ maxHeight: 240 }}
        >
          <Menu.Item>Home</Menu.Item>
          <Menu.Item disabled name="Latest" />
          <Menu.Item disabled name="Photos" />
          <Menu.Item disabled name="About" />
          <Menu.Item disabled name="Contact" />
          <Menu.Item
            name="Login"
            href="https://boldlygoto.herokuapp.com/admin"
          />
        </Sidebar>

        <Sidebar.Pusher style={{ padding: 0, backgroundColor: "#3d405b" }}>
          <Heading
            headingStyles={{
              marginTop: "1rem",
              backgroundColor: "#3d405b",
              minHeight: "95vh",
              verticalAlign: "center",
            }}
            headerSize="4rem"
          />{" "}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Segment>
  );
}
