import React, { useState } from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contact = (props) => {
  const [contactInfo, setContactInfo ] = useState({
    firstName: "",
    lastName: "",
    addr1: "",
    addr2: "",
    city: "",
    addrState: "",
    zip: "",
    email: "",
    phone: "",
  })

  const createCard = () => {
    props.setContactCard(
      <ContactCard
        toggleContactForm={props.toggleContactForm}
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
      />
    );
  }

    return (
      <div className="contactSection">
        <h2>Contact Info</h2>
        {props.contactCard}
        <div
          className={
            props.isContactFormActive
              ? "activeContactForm"
              : "inactiveContactForm"
          }
        >
          <ContactForm
            toggleContactForm={props.toggleContactForm}
            createCard={createCard}
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
          />
        </div>
      </div>
    );
  }

export default Contact;
