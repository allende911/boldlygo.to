import React from "react";
import { Container, Header, Segment, Icon, Divider } from "semantic-ui-react";
import { Link, animateScroll } from "react-scroll";

export default function Heading(props) {
  return (
    <Segment basic style={props.headingStyles}>
      <Container style={{ marginTop: "5rem" }}>
        <Header
          as="h1"
          style={{
            fontSize: `${props.headerSize}`,
            textAlign: "center",
            color: "#fff",
            paddingTop: "4rem",
          }}
        >
          BoldlyGo<span style={{ fontWeight: 100 }}>.to</span>
          <Divider inverted />
        </Header>
        <Segment
          basic
          style={{ color: "#fff", textAlign: "center", fontSize: "2rem" }}
        >
          <p>I'm restoring a neglected camper from 1984.</p>
          <p>Here's where I'm documenting my progress.</p>
        </Segment>
        <Segment basic textAlign="center" style={{ marginTop: "3rem" }}>
          <Link
            to="postTop"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Icon name="arrow circle down" size="huge" inverted />
          </Link>
        </Segment>
      </Container>
    </Segment>
  );
}
