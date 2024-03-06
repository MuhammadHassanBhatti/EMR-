import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const GenericModal = ({
  title = "Generic Modal!",
  text = "HEY ITS THE GENERIC MODAL",
  btn_text = "Submit",
  width = "100%",
  ...style
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            {btn_text}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GenericModal;
