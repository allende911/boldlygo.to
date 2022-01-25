import React, { useState } from "react";
import { Modal, Button, Container, Header, Image } from "semantic-ui-react";
import styled from "styled-components";

const Fraunces = styled.h1`
  font-family: Fraunces, Roboto, serif;
  font-size: 3em;
  font-weight: 700;
`;

const Commissioner = styled.header`
  font-family: Commissioner, Roboto, sans-serif;
  font-weight: 400;
  font-size: 1.4em;
  line-height: 2em;
`;

const NewPostPreview = (props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Modal
      onClose={() => setOpenModal(false)}
      onOpen={() => setOpenModal(true)}
      open={openModal}
      floated="right"
      trigger={<Button type="button">Preview</Button>}
    >
      <Container basic text style={{ paddingTop: 100, paddingBottom: 100 }}>
        <Header as="h1">
          <Fraunces>{props.previewTitle}</Fraunces>
        </Header>
        <Image src={props.previewImage} />
        <Modal.Description>
          <Commissioner>{props.previewContent}</Commissioner>
        </Modal.Description>
      </Container>
      <Modal.Actions>
        <Button
          content="OK"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpenModal(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default NewPostPreview;
