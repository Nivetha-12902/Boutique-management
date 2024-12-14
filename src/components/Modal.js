import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import React from "react";

function MyModal(props) {
  const { title, body, show, close} = props;

  return (
    <div>
      <Modal show={show} onHide={close} >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  ); 
}

export default MyModal;

