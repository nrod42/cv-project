import React from "react";

const ContactCard = (props) => {
  const {toggleContactForm, contactInfo, setContactInfo} = props;
  const {firstName, lastName, addr1, addr2, city, addrState, zip, email, phone} = contactInfo

  return (
    <div className="contactCard">
      <div className="contactCardInfo">
        <div>
          <div className="cardSubSection">
            <p className="cardTitle">First Name:</p>
            <p>{firstName}</p>
          </div>
          <div className="cardSubSection">
            <p className="cardTitle">Last Name:</p>
            <p>{lastName}</p>
          </div>
        </div>

        <div className="cardSubSection">
          <p className="cardTitle">Address 1:</p>
          <p>{addr1}</p>
        </div>
        <div className="cardSubSection">
          <p className="cardTitle">Address 2:</p>
          <p>{addr2}</p>
        </div>

        <div>
          <div className="cardSubSection">
            <p className="cardTitle">City:</p>
            <p>{city}</p>
          </div>
          <div className="cardSubSection">
            <p className="cardTitle">State:</p>
            <p>{addrState}</p>
          </div>
          <div className="cardSubSection">
            <p className="cardTitle">Zipcode:</p>
            <p>{zip}</p>
          </div>
        </div>

        <div>
          <p className="cardTitle">Email: </p>
          <p>{email}</p>
        </div>
        <div>
          <p className="cardTitle">Phone:</p>
          <p>{phone}</p>
        </div>
      </div>
      <div className="cardBtns">
        <button onClick={toggleContactForm} type="button">
          <img
            src={window.location.origin + "/img/edit_icon.svg"}
            alt="edit button icon"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
