import React, { useState } from "react";
import { Menu, Divider, Header } from "semantic-ui-react";

const TopBar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (event) => {
    setActiveItem(event.target.value);
  };

  return (
    <>
      <Menu className="secondary" style={{ paddingTop: "1em" }}>
        <Menu.Item header>
          <Header as="h1">BoldyGo.to</Header>
        </Menu.Item>

        <Menu.Menu
          className="secondary"
          position="right"
          style={{ paddingRight: "3em" }}
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
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default TopBar;
