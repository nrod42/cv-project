import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../../App";
import ContactFormModal from "../modals/ContactFormModal";
import { Button } from "react-bootstrap";
import ContactCard from "../cards/ContactCard";
import "bootstrap/dist/css/bootstrap.min.css";
import uniqid from "uniqid";

const Contact = () => {
  const { contactInfo } = useContext(SetPageInfoContext);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="page">
      <h1>Contact Info</h1>
      {contactInfo.map((contact) => (
        <ContactCard
          key={uniqid()}
          contactInfo={contact}
          showModal={() => setModalShow(true)}
        />
      ))}
      <>
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Add Contact Info
        </Button>
        <ContactFormModal show={modalShow} onHide={() => setModalShow(false)} />
      </>
    </div>
  );
};

export default Contact;
