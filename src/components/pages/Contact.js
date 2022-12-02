import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../../App";
import ContactCard from "../cards/ContactCard";
import ContactForm from "../forms/ContactForm";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import "bootstrap/dist/css/bootstrap.min.css";
import uniqid from "uniqid";

const Contact = () => {
  const { contactInfo, setEditing } = useContext(SetPageInfoContext);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(!modalShow);
    setEditing(false);
  };

  return (
    <div className="page">
      <h1>Contact Info</h1>

      <ContactCard
        key={uniqid()}
        contactInfo={contactInfo}
        showModal={() => setModalShow(true)}
      />

      <Button
        variant="primary"
        onClick={handleClose}
        style={
          Object.keys(contactInfo).length !== 0 ? { display: "none" } : null
        }
      >
        Add Contact Info
      </Button>

      <Modal show={modalShow} size="lg" centered>
        <Modal.Header>
          <Modal.Title>Contact</Modal.Title>
          <CloseButton onClick={handleClose}></CloseButton>
        </Modal.Header>
        <Modal.Body>
          <ContactForm onHide={() => setModalShow(!modalShow)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
