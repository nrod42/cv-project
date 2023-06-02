import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../AppContext";
import ContactCard from "../cards/ContactCard";
import FormModal from "../FormModal";
import ContactForm from "../forms/ContactForm";
import Button from "react-bootstrap/Button";

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
        + Add Contact Info
      </Button>

      <FormModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        handleClose={handleClose}
        title={"Contact Info"}
        formType={<ContactForm onHide={() => setModalShow(!modalShow)} />}
      />
    </div>
  );
};

export default Contact;
