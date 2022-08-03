import React, { useState } from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contact = (props) => {
  const {
    contactCard,
    setContactCard,
    isContactFormActive,
    toggleContactForm,
  } = props;

  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    addr1: "",
    addr2: "",
    city: "",
    addrState: "",
    zip: "",
    email: "",
    phone: "",
  });

  const createCard = () => {
    setContactCard(
      <ContactCard
        toggleContactForm={toggleContactForm}
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
      />
    );
  };

  return (
    <div className="contactSection">
      <h2>Contact Info</h2>
      {contactCard}
      <div
        className={
          isContactFormActive ? "activeContactForm" : "inactiveContactForm"
        }
      >
        <ContactForm
          toggleContactForm={toggleContactForm}
          createCard={createCard}
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
        />
      </div>
    </div>
  );
};

export default Contact;
