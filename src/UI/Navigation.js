import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import Heading from "./Heading";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <>
      <Menu
        fixed="top"
        secondary
        borderless
        inverted
        size="large"
        style={{ padding: "1rem 0", backgroundColor: "#e07a5f" }}
      >
        <Menu.Item header icon="compass" />
        <Menu.Item
          name="Home"
          active={activeItem === "home"}
          onClick={() => setActiveItem("home")}
          as={Link}
          to="/"
        />
        <Menu.Item
          disabled
          name="Latest"
          active={activeItem === "latest"}
          onClick={() => setActiveItem("latest")}
        />
        <Menu.Item
          disabled
          name="Photos"
          active={activeItem === "photos"}
          onClick={() => setActiveItem("photos")}
        />
        <Menu.Item
          disabled
          name="About"
          active={activeItem === "about"}
          onClick={() => setActiveItem("about")}
        />
        <Menu.Item
          disabled
          name="Contact"
          active={activeItem === "contact"}
          onClick={() => setActiveItem("contact")}
        />
        <Menu.Item
          position="right"
          name="Login"
          href="https://boldlygoto.herokuapp.com/admin"
          target="_blank"
        />
      </Menu>

      <Segment basic style={{ padding: 0 }}>
        <Heading
          headingStyles={{
            marginTop: "3rem",
            backgroundColor: "#3d405b",
            minHeight: "95vh",
            verticalAlign: "center",
          }}
          headerSize="6rem"
        />
      </Segment>
    </>
  );
}
