import React, { useState } from "react";
import { Menu, Header, Icon, Container, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (event) => {
    setActiveItem(event.target.value);
  };

  return (
    <>
      <Container>
        <Menu className="secondary" style={{ paddingTop: "1em" }}>
          <Menu.Item
            header
            as={Link}
            name="home"
            to="/"
            active={activeItem === "home"}
            onClick={handleItemClick}
          >
            <Icon name="compass" size="huge" />
            <Header
              as="h1"
              style={{
                margin: 0,
                fontFamily: "Fraunces",
                fontStyle: "italic",
                fontSize: "3em",
              }}
            >
              BoldyGo.to
            </Header>
          </Menu.Item>

          <Menu.Menu
            className="secondary"
            position="left"
            style={{ paddingRight: "3em", marginTop: "1em" }}
          >
            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="about"
              active={activeItem === "about"}
              onClick={handleItemClick}
            />
            <Menu.Item
              as={Link}
              name="new post"
              to="newPost"
              active={activeItem === "newPost"}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </Container>
      <Divider />
    </>
  );
};

export default TopBar;
